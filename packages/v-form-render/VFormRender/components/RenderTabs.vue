<!--
 * @Author: 杨攀腾
 * @Date: 2022-05-03 13:26:38
 * @Description: 渲染tabs
-->
<template>
  <a-tabs v-bind="record.props">
    <a-tab-pane
      v-for="item of record.columns"
      :key="item.value"
      :tab="item.label"
    >
      <div v-for="formItem of item.list" :key="formItem._key">
        <RenderFormItem :record="formItem">
          <template v-for="(slot, name) of $slots" :key="name" #[name]="attrs">
            <slot :name="name" v-bind="attrs"></slot>
          </template>
        </RenderFormItem>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Tabs } from '@common/class/layout/tabs'
import RenderFormItem from '@render/VFormRender/components/RenderFormItem.vue'
import { useSlots } from 'vue'
const slot = useSlots()
console.log('=>(RenderTabs.vue:35) slot', slot)
defineProps({
  record: {
    type: Object as PropType<Tabs>,
    required: true
  }
})
</script>
