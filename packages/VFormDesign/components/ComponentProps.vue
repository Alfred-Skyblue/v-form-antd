<!--
 * @Author: ypt
 * @Date: 2021/11/26
 * @Description: 组件属性控件
-->
<template>
  <div>
    <div class="properties-content">
      <div class="properties-body">
        <!--          <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">-->
        <!--            <slot :name="slot" v-bind="scope" />-->
        <!--          </template>-->

        <AEmpty
          class="hint-box"
          v-if="!formConfig.currentItem['key']"
          description="未选择组件"
        />
        <a-form-model v-if="['grid'].includes(formConfig.currentItem['type'])">
          <a-form-model-item>
            <FormOptions></FormOptions>
          </a-form-model-item>
        </a-form-model>
        <a-form-model v-else-if="!!baseComponentAttrs[formConfig.currentItem['type']]">
          <!--    循环遍历渲染组件属性      -->
          <a-form-model-item
            v-for="item in baseComponentAttrs[formConfig.currentItem['type']]"
            :key="item.name"
            :label="item.label"
          >
            <!--     处理数组属性，placeholder       -->
            <div v-if="item.children">
              <component
                v-for="(child, index) of item.children"
                :key="index"
                :is="child.tag"
                v-model="formConfig.currentItem['props'][item.name][index]"
              ></component>
            </div>
            <!--     如果不是数组，则正常处理属性值       -->
            <component
              v-else
              class="component-prop"
              v-bind="item.props"
              :is="item.tag"
              v-model="formConfig.currentItem['props'][item.name]"
            ></component>
          </a-form-model-item>

          <a-form-model-item label="控制属性">
            <span v-for="item in baseComponentControlAttrs" :key="item.name">
              <a-checkbox
                v-if="showControlAttrs(item.includes)"
                v-model="formConfig.currentItem['props'][item.name]"
              >
                {{ item.label }}
              </a-checkbox>
            </span>
          </a-form-model-item>

          <a-form-model-item label="关联字段">
            <a-select
              mode="multiple"
              v-model="formConfig.currentItem['link']"
              :options="linkOptions"
            ></a-select>
          </a-form-model-item>

          <a-form-model-item
            label="选项"
            v-if="
              [
                'select',
                'checkboxGroup',
                'radioGroup',
                'treeSelect',
                'cascader'
              ].includes(formConfig.currentItem['type'])
            "
          >
            <FormOptions></FormOptions>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from '@vue/composition-api'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import {
  baseComponentControlAttrs,
  baseComponentAttrs
} from '@pack/VFormDesign/config/componentPropsConfig'
import FormOptions from './FormOptions.vue'
import { formItemsForEach, remove } from '@pack/utils'

export default defineComponent({
  name: 'ComponentProps',
  components: {
    FormOptions
  },
  setup() {
    const { formConfig } = useFormDesignState()
    const dateValue = ref('')
    const showControlAttrs = (includes: string[]) => {
      if (!includes) return true
      return includes.includes(formConfig.value.currentItem!.type)
    }

    watch(
      () => formConfig.value.currentItem?.field,
      (newValue, oldValue) => {
        formItemsForEach(formConfig.value.formItems, item => {
          if (item.link) {
            const index = item.link.findIndex(linkItem => linkItem === oldValue)
            index !== -1 && remove(item.link, index)
          }
        })
      }
    )

    const linkOptions = computed(() => {
      return formConfig.value.formItems
        .filter(item => item.key !== formConfig.value.currentItem!.key)
        .map(({ label, field }) => ({ label, value: field }))
    })
    return {
      formConfig,
      baseComponentAttrs,
      baseComponentControlAttrs,
      showControlAttrs,
      dateValue,
      linkOptions
    }
  }
})
</script>

<style lang="less" scoped>
.properties-body {
  .component-prop {
    width: 100%;
  }
}
</style>
