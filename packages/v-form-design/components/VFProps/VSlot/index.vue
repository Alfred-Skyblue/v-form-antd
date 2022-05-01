<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 插槽属性配置
-->
<template>
  <VFormBuilder :form-data="currentItem.props" :form-items="formItems">
    <template #label>
      <a-input v-model:value="currentItem.label" />
    </template>
    <template #field>
      <a-input v-model:value="currentItem.field" />
    </template>
    <template #slotName>
      <a-input v-model:value="currentItem.slotName" />
    </template>
  </VFormBuilder>
  <VFormSize></VFormSize>
  <LinkItem></LinkItem>
</template>

<script lang="ts" setup>
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import { reactive } from 'vue'
import LinkItem from '@design/components/VFProps/components/LinkItem/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'
import type { DesignVSlot } from '@design/class/high-level/slot'

const { currentItem } = useFormDesign<DesignVSlot>()
const formItems = reactive([
  {
    label: '标签',
    field: 'label',
    tag: 'AInput',
    placeholder: '请输入数据字段'
  },
  {
    label: '数据字段',
    field: 'field',
    tag: 'AInput',
    placeholder: '请输入数据字段'
  },
  {
    label: '插槽名',
    field: 'slotName',
    tag: 'AInput',
    placeholder: '请输入插槽名'
  }
])
</script>
