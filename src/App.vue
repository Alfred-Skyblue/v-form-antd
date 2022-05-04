<template>
  <a-config-provider :locale="zhCN">
    <div><v-form-design /></div>
    <!--    <VFormRender class="!v-p-20" :form-config="formConfig">-->
    <!--      <template #username="{ formItem }">-->
    <!--        <a-input v-model:value="formData[formItem.field]"></a-input>-->
    <!--      </template>-->
    <!--    </VFormRender>-->
    <!--    <Codemirror></Codemirror>-->
  </a-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import VFormDesign from '@design/VFormDesign/index.vue'
import { ref } from 'vue'
import type { VFormConfig } from '@common/types/form'
const formData = {}
const formConfig = ref<VFormConfig>({
  formItems: [
    {
      span: 24,
      field: 'field41',
      props: {},
      label: '文本域',
      type: 'textarea'
    },
    {
      span: 24,
      field: 'field42',
      props: {
        options: [
          {
            label: '选项1',
            value: 'value1',
            children: [
              {
                label: '1-1',
                value: '1-1'
              },
              {
                label: '1-2',
                value: '1-2'
              }
            ]
          },
          {
            label: '选项2',
            value: 'value2',
            children: [
              {
                label: '2-1',
                value: '2-1'
              }
            ]
          }
        ]
      },
      label: '级联选择',
      type: 'cascader'
    }
  ],
  config: {
    layout: 'horizontal',
    labelLayout: 'fixed',
    labelWidth: 100
  }
})
</script>
