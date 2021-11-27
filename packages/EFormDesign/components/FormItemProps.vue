<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/24
 * @Description: 表单项属性
-->
<template>
  <div class="properties-content">
    <div class="properties-body">
      <AEmpty
        class="hint-box"
        v-if="!formConfig.currentItem['key']"
        description="未选择控件"
      />
      <a-form-model v-else>
        <div v-for="props of baseFormItemProps" :key="props.name">
          <a-form-model-item
            :label="props.label"
            v-if="showProps(props.exclude)"
          >
            <component
              class="component-props"
              v-bind="props.props"
              :is="props.tag"
              v-model="formConfig.currentItem[props.name]"
            ></component>
          </a-form-model-item>
        </div>

        <a-form-model-item label="控制属性">
          <a-checkbox
            v-for="item of baseFormItemControlAttrs"
            :key="item.name"
            @change="handleControlChange($event, item)"
          >
            {{ item.label }}
          </a-checkbox>
        </a-form-model-item>
        <a-form-model-item
          v-if="!['grid'].includes(formConfig.currentItem.type)"
          label="校验规则"
          :class="{ 'form-rule-props': !!formConfig.currentItem.rules }"
        >
          <RuleProps></RuleProps>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import {
  baseFormItemControlAttrs,
  baseFormItemProps,
  IBaseFormItemControlAttrs
} from '@pack/EFormDesign/config/formItemPropsConfig'
import { IInputEvent } from '@pack/typings/baseType'

import RuleProps from './RuleProps.vue'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import { isArray } from 'lodash-es'

export default defineComponent({
  name: 'FormItemProps',
  props: {},
  components: {
    RuleProps
  },
  setup() {
    const { formConfig } = useFormDesignState()
    /**
     * 由于属性映射的目标可能存在嵌套，所以使用函数处理
     * @param e 事件对象
     * @param props 属性
     */
    const handleControlChange = (
      e: IInputEvent,
      props: IBaseFormItemControlAttrs
    ) => {
      const { target, name } = props
      const currentItem = formConfig.value.currentItem
      if (currentItem) {
        // 判断是否有target，如果有，则获取target，没有则绑定到currentItem上
        let source = target ? currentItem[target] : currentItem
        source && (source[name!] = e.target.checked)
      }
    }
    const showProps = (exclude: string[]) => {
      return isArray(exclude)
        ? !exclude.includes(formConfig.value.currentItem!.type)
        : true
    }
    return {
      baseFormItemProps,
      formConfig,
      baseFormItemControlAttrs,
      handleControlChange,
      showProps
    }
  }
})
</script>

<style lang="less" scoped>
.properties-body {
  /deep/ .ant-form-item {
    .ant-slider-with-marks {
      margin-bottom: 14px;
    }
  }
}
</style>
