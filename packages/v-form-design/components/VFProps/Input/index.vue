<!--
 * @author: 杨攀腾
 * @date: 2022/4/23
 * @description: 输入框属性
-->
<template>
  <div>
    <a-form-item label="标签">
      <a-input
        v-model:value="formConfig.currentItem.label"
        placeholder="请输入标签"
      />
    </a-form-item>

    <a-form-item label="占位符">
      <a-input
        v-model:value="formConfig.currentItem.props.placeholder"
        placeholder="请输入占位符"
      />
    </a-form-item>
    <a-form-item label="默认值">
      <a-input
        v-model:value="formConfig.currentItem.props.defaultValue"
        placeholder="请输入默认值"
      />
    </a-form-item>
    <a-form-item label="前置标签">
      <a-input
        v-model:value="formConfig.currentItem.props.addonBefore"
        placeholder="请输入前置标签"
      />
    </a-form-item>

    <a-form-item label="后置标签">
      <a-input
        v-model:value="formConfig.currentItem.props.addonAfter"
        placeholder="请输入后置标签"
      />
    </a-form-item>

    <a-form-item label="最大长度">
      <a-input-number
        v-model:value="formConfig.currentItem.props.maxlength"
        placeholder="请输入最大长度"
      />
    </a-form-item>
    <a-form-item label="前缀">
      <a-input
        v-model:value="formConfig.currentItem.props.prefix"
        placeholder="请输入前缀"
      />
    </a-form-item>
    <a-form-item label="后缀">
      <a-input
        v-model:value="formConfig.currentItem.props.suffix"
        placeholder="请输入后缀"
      />
    </a-form-item>
    <VFormSize></VFormSize>
    <CheckboxProps :list="actionProps"></CheckboxProps>
  </div>
</template>

<script lang="ts" setup>
import { inject, reactive } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'
import type { DesignInput } from '@design/class/form/input'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'

const { formConfig } =
  inject<IVFormDesignState<DesignInput>>('formDesignState')!

const actionProps = reactive([
  {
    label: '禁用',
    value: 'disabled'
  },
  {
    label: '可清除',
    value: 'allowClear'
  },
  {
    label: '边框',
    value: 'bordered'
  },
  {
    label: '字符数',
    value: 'showCount'
  }
])
</script>
