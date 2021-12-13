<!--
 * @author: ypt
 * @date: 2021/11/27
 * @description: 图标选择器
-->
<template>
  <a-popover trigger="click" v-model="visible">
    <div class="icon-content">
      <a-icon v-if="value" :type="value" :theme="theme"></a-icon>
    </div>
    <template slot="title">
      <div class="title-box w-full">
        <radio-button-group
          v-if="showThemeOptions"
          class="icon-options"
          v-model="theme"
          :options="iconOptions"
          @change="themeChange"
        ></radio-button-group>
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
          :key="item"
          @click="handleClick(item)"
          class="icon-content"
          :style="{ background: value === item ? '#268961' : '' }"
        >
          <a-icon :type="item" :theme="theme"></a-icon>
        </div>
      </div>
    </template>
    <slot name="iconSelect"></slot>
  </a-popover>
</template>

<script lang="ts">
import { defineComponent, watch, reactive, toRefs } from '@vue/composition-api'
import { useVModel } from '@vueuse/core'
import { vModelMixin } from '@pack/mixins/v-model-mixni'
import iconConfig from '@pack/core/iconConfig'
import { IAnyObject, IInputEvent } from '@pack/typings/base-type'
type themeType = 'filled' | 'outlined' | 'twoTone'

interface IVIconPickerState {
  searchValue: string
  visible: boolean
  iconArr: string[]
  theme: themeType
  iconOptions: {
    label: string
    value: string
  }[]
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
      iconArr: iconConfig['outlined'],
      theme: 'outlined',
      iconOptions: [
        {
          label: '线框',
          value: 'outlined'
        },
        {
          label: '实底',
          value: 'filled'
        },
        {
          label: '双色',
          value: 'twoTone'
        }
      ]
    })
    const handleClick = (icon: string) => {
      emit('change', icon, state.theme)
      value.value = icon
      state.visible = false
    }

    /**
     * 进行搜索过滤
     */
    const filterIcon = () => {
      if (state.searchValue) {
        state.iconArr = state.iconArr.filter(item =>
          item.toLowerCase().includes(state.searchValue.toLowerCase())
        )
      } else {
        state.iconArr = iconConfig[state.theme]
      }
    }
    const themeChange = (e: IInputEvent) => {
      state.iconArr = iconConfig[e.target.value as themeType]
    }
    watch(
      () => state.visible,
      () => {
        state.searchValue = ''
        // state.iconArr = iconConfig['outlined']
        // state.theme = 'outlined'
      }
    )

    return {
      value,
      themeChange,
      handleClick,
      filterIcon,
      iconConfig,
      ...toRefs(state)
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
</style>
