<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/24
 * @Description: $END$
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
      </a-form-model>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, Ref } from '@vue/composition-api'
import { IFormConfig } from '@pack/typings/EFormComponent'
import { basePropsConfig } from '@pack/EFormDesign/config/formItemPropsConfig'

export default defineComponent({
  name: 'FormItemProps',
  props: {},
  setup() {
    const formConfig = inject('formConfig') as Ref<IFormConfig>

    return { basePropsConfig, formConfig }
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

      .ant-form-item-label {
        line-height: 2;
      }
    }
  }
}
</style>
