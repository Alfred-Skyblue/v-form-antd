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
    <!--    <a-form-item label="标签">-->
    <!--      <a-input-->
    <!--        v-model:value="formConfig.currentItem.label"-->
    <!--        placeholder="请输入标签"-->
    <!--      />-->
    <!--    </a-form-item>-->
    <checkbox-props :list="actionProps"></checkbox-props>
  </div>
</template>

<script lang="ts" setup>
import { inject, reactive } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'
import type { DesignInput } from '@design/class/form/input'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'

const { formConfig } =
  inject<IVFormDesignState<DesignInput>>('formDesignState')!

const actionProps = reactive([
  {
    label: '禁用',
    value: 'disabled'
  }
])
</script>
