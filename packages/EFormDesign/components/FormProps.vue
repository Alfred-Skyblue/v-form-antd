<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/23
 * @Description: 右侧属性面板控件
-->
<template>
  <div class="form-props-content">
    <a-form-model class="properties-body">
      <a-form-model-item label="表单布局">
        <a-radio-group buttonStyle="solid" v-model="formConfig.config.layout">
          <a-radio-button value="horizontal">水平</a-radio-button>
          <a-radio-button value="vertical">垂直</a-radio-button>
          <a-radio-button value="inline">行内</a-radio-button>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="标签布局">
        <a-radio-group
          buttonStyle="solid"
          v-model="formConfig.config.labelLayout"
        >
          <a-radio-button value="flex">固定</a-radio-button>
          <a-radio-button value="grid">栅格</a-radio-button>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item
        label="标签宽度（px）"
        v-show="formConfig.config.labelLayout === 'flex'"
      >
        <a-input-number
          v-model="formConfig.config.labelWidth"
          :min="0"
          :step="1"
        ></a-input-number>
      </a-form-model-item>
      <div v-if="formConfig.config.labelLayout === 'grid'">
        <a-form-model-item label="labelCol">
          <a-slider v-model="formConfig.config.labelCol.span" :max="24" />
        </a-form-model-item>
        <a-form-model-item label="wrapperCol">
          <a-slider v-model="formConfig.config.wrapperCol.span" :max="24" />
        </a-form-model-item>
      </div>
      <a-form-model-item label="表单属性">
        <a-checkbox v-model="formConfig.config.hideRequiredMark">
          隐藏必选标记
        </a-checkbox>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, Ref } from '@vue/composition-api'
import { IFormConfig } from '@pack/typings/EFormComponent'

export default defineComponent({
  name: 'FormProps',
  setup() {
    const formConfig = inject('formConfig') as Ref<IFormConfig>
    return { formConfig }
  }
})
</script>

<style lang="less" scoped>
@import '~@pack/static/styles/variable.less';
.form-props-content {
  height: 100%;
  overflow: hidden;
  background: #fff;

  .properties-body {
    overflow: auto;
    height: 100%;
    padding: 8px 16px;
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
</style>
