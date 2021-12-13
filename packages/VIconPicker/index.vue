<!--
 * @author: ypt
 * @date: 2021/11/27
 * @description: 图标选择器
-->
<template>
  <a-popover trigger="click" v-model="visible">
    <div class="icon-content">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#${value}`"></use>
      </svg>
    </div>
    <template slot="title">
      <div class="title-box w-full">
        <a-input-search
          :class="{ 'w-full': !showThemeOptions }"
          class="icon-search"
          v-model="searchValue"
          placeholder="输入英文关键词进行搜索"
          @change="filterIcon"
        />
      </div>
    </template>

    <template slot="content">
      <div class="icon-box">
        <div
          v-for="item in iconArr"
          :key="item.icon_id"
          @click="handleClick(item)"
          class="icon-content"
          :style="{
            background: value === prefix + item.font_class ? '#268961' : ''
          }"
        >
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#${prefix + item.font_class}`"></use>
          </svg>
        </div>
      </div>
    </template>
    <slot name="iconSelect"></slot>
  </a-popover>
</template>

<script lang="ts">
import { defineComponent, watch, reactive, toRefs, computed } from '@vue/composition-api'
import { useVModel } from '@vueuse/core'
import { vModelMixin } from '@pack/mixins/v-model-mixni'

import { IAnyObject } from '@pack/typings/base-type'
import { iconFontConfig, IIconItem } from '@pack/VIconPicker/config'

interface IVIconPickerState {
  searchValue: string
  visible: boolean
  iconArr: IIconItem[]
  prefix: string
}
export default defineComponent({
  name: 'VIconPicker',
  mixins: [vModelMixin],
  props: {
    showThemeOptions: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    },
    //自定义触发方式
    trigger: {
      type: String,
      default: 'click',
      validator: function (value: string) {
        return ['click', 'hover', 'focus'].includes(value)
      }
    }
  },
  setup(props: IAnyObject, { emit }: IAnyObject) {
    const value = useVModel(props, 'modelValue', emit)
    const state = reactive<IVIconPickerState>({
      searchValue: '',
      visible: false,
      prefix: iconFontConfig.iconData.css_prefix_text,
      iconArr: iconFontConfig.iconData.glyphs
    })

    const iconData = computed(() => iconFontConfig.iconData)

    const handleClick = (icon: IIconItem) => {
      emit('change', state.prefix + icon.font_class)
      value.value = state.prefix + icon.font_class
      state.visible = false
    }

    /**
     * 进行搜索过滤
     */
    const filterIcon = () => {
      if (state.searchValue) {
        state.iconArr = iconFontConfig.iconData.glyphs.filter(item =>
          item.name.toLowerCase().includes(state.searchValue.toLowerCase())
        )
      } else {
        state.iconArr = iconFontConfig.iconData.glyphs
      }
    }

    watch(
      () => state.visible,
      () => {
        state.searchValue = ''
        state.iconArr = iconFontConfig.iconData.glyphs
      }
    )

    return {
      value,
      handleClick,
      filterIcon,
      ...toRefs(state),
      iconData
    }
  }
})
</script>

<style lang="less" scoped>
.title-box {
  display: inline-flex;
  align-items: center;
  .icon-search {
    width: 50%;
    margin-left: 8px;
  }
}

.icon-box {
  overflow: auto;
  font-size: 20px;
  width: 380px;
  height: 230px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
}
.icon-content {
  width: 40px;
  height: 40px;
  margin: 5px;
  line-height: 40px;
  cursor: pointer;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 20px;
  &:hover {
    background: #1890ff;
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
