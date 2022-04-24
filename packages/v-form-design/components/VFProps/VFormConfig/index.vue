<!--
 * @author: 杨攀腾
 * @date: 2022/4/23
 * @description: 主表单属性配置
-->
<template>
  <div class="form-props">
    <VFormBuilder
      :form-data="formConfig.config"
      :form-items="formItems"
    ></VFormBuilder>
    <a-form-item v-if="isFixed" label="标签宽度(px)">
      <a-input-number v-model:value="formConfig.config.labelWidth" />
    </a-form-item>
    <div v-else>
      <a-form-item label="labelCol">
        <a-slider :max="24" v-model:value="formConfig.config.labelCol.span" />
      </a-form-item>
      <a-form-item label="wrapperCol">
        <a-slider :max="24" v-model:value="formConfig.config.wrapperCol.span" />
      </a-form-item>
    </div>
    <a-form-item label="标签对齐方式">
      <a-radio-group
        v-model:value="formConfig.config.labelAlign"
        option-type="button"
        :options="[
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' }
        ]"
      />
    </a-form-item>
    <a-form-item label="其他属性">
      <a-checkbox v-model:checked="formConfig.config.labelWrap">
        标签换行
      </a-checkbox>
      <a-checkbox v-model:value="formConfig.config.hideRequiredMark">
        隐藏必选标记
      </a-checkbox>
      <a-checkbox v-model:value="formConfig.config.colon">显示冒号</a-checkbox>
    </a-form-item>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, inject, ref } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'
import type { IFormBuilderOptions } from '@design/components/VFormBuilder/index.vue'
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
export default defineComponent({
  name: 'VFormConfig',
  components: { VFormBuilder },
  setup() {
    const state = reactive({
      layoutOptions: [
        { label: '水平', value: 'horizontal' },
        { label: '垂直', value: 'vertical' },
        { label: '行内', value: 'inline' }
      ],
      labelLayoutOptions: [
        { label: '固定', value: 'fixed' },
        { label: '栅格', value: 'grid' }
      ]
    })
    const { formConfig, isFixed } =
      inject<IVFormDesignState>('formDesignState')!

    const changeLabelLayout = (e: InputEvent) => {
      const value = e.target.value
      if (value === 'grid') {
        formConfig.value.config.labelCol = { span: 6 }
        formConfig.value.config.wrapperCol = { span: 16 }
        formConfig.value.config.labelWidth = undefined
      } else {
        formConfig.value.config.labelCol = undefined
        formConfig.value.config.wrapperCol = undefined
        formConfig.value.config.labelWidth = 100
      }
    }
    const formItems = ref<IFormBuilderOptions[]>([
      {
        label: '表单名称（name）',
        tag: 'AInput',
        field: 'name'
      },
      {
        label: '表单布局',
        tag: 'ARadioGroup',
        field: 'layout',
        props: {
          optionType: 'button',
          options: state.layoutOptions
        }
      },
      {
        label: '标签布局',
        tag: 'ARadioGroup',
        field: 'labelLayout',
        props: {
          optionType: 'button',
          options: state.labelLayoutOptions
        },
        on: {
          change: changeLabelLayout
        }
      }
    ])
    return {
      ...toRefs(state),
      formConfig,
      isFixed,
      changeLabelLayout,
      formItems
    }
  }
})
</script>

<style lang="less" scoped>
.form-props {
  :deep(.ant-form-item) {
    display: block;
    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
      margin-left: 0;
    }
  }
}
</style>
