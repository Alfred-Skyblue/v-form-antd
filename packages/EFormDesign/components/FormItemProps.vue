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
      <a-form-model v-else layout="horizontal">
        <a-form-model-item
          v-for="props of basePropsConfig"
          :key="props.name"
          :label="props.label"
        >
          <component
            v-bind="props.props"
            :is="props.tag"
            v-model="formConfig.currentItem[props.name]"
          ></component>
        </a-form-model-item>

        <a-form-model-item label="操作属性">
          <a-checkbox
            v-for="item of baseHandleProps"
            :key="item.name"
            @change="baseHandleChange($event, item)"
          >
            {{ item.label }}
          </a-checkbox>
        </a-form-model-item>
        <a-form-model-item label="校验规则">
          <RuleProps></RuleProps>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, Ref } from '@vue/composition-api'
import { IFormConfig } from '@pack/typings/EFormComponent'
import {
  baseHandleProps,
  basePropsConfig,
  IBaseHandle
} from '@pack/EFormDesign/config/formItemPropsConfig'
import { IInputEvent } from '@pack/typings/baseType'

import RuleProps from './RuleProps.vue'

export default defineComponent({
  name: 'FormItemProps',
  props: {},
  components: {
    RuleProps
  },
  setup() {
    const formConfig = inject('formConfig') as Ref<IFormConfig>
    /**
     * 由于属性映射的目标可能存在嵌套，所以使用函数处理
     * @param e 事件对象
     * @param props 属性
     */
    const baseHandleChange = (e: IInputEvent, props: IBaseHandle) => {
      const { target, name } = props
      const currentItem = formConfig.value.currentItem
      if (currentItem) {
        // 判断是否有target，如果有，则获取target，没有则绑定到currentItem上
        let source = target ? currentItem[target] : currentItem
        source && (source[name] = e.target.checked)
      }
    }
    return { basePropsConfig, formConfig, baseHandleProps, baseHandleChange }
  }
})
</script>

<style lang="less" scoped>
@import '~@pack/static/styles/variable.less';
.properties-content {
  height: 100%;
  overflow: hidden;
  background: #fff;

  .properties-body {
    overflow: auto;
    height: 100%;
    padding: 8px 16px;
    .hint-box {
      margin-top: 200px;
    }
    .ant-form-item {
      margin-bottom: 0;
      padding: 6px 0;
      border-bottom: 1px solid @border-color;
      /deep/ .ant-form-item-label {
        line-height: 2;
      }
    }
  }
}
</style>
