<!--
 * @Author: 杨攀腾
 * @Date: 2022-05-02 20:30:33
 * @Description: 吐槽一下命名太难了
-->
<template>
  <div>
    <a-form-item v-bind="formItemProps">
      <template #label v-if="!record._isLayout">
        <div class="v-form-label-box">
          {{ record.label }}
        </div>
      </template>
      <component
        :is="record._tag"
        v-model:value="formData[record.field]"
        v-bind="record.props"
        v-on="record.on || {}"
      ></component>
    </a-form-item>
  </div>
</template>

<script lang="ts" setup>
import type { BasicFormItem } from '@common/class/basic-form'
import type { PropType } from 'vue'
import { computed, inject } from 'vue'

const props = defineProps({
  record: {
    type: Object as PropType<Partial<BasicFormItem>>,
    required: true
  }
})
const formData = inject('formData', {})

const formItemProps = computed(() => {
  const { record } = props
  return {
    rules: [
      { required: record.required, message: `${record.label}不能为空` },
      ...(record.rules ? record.rules : [])
    ],
    name: record.field
  }
})
</script>
