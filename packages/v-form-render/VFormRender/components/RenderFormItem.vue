<!--
 * @Author: 杨攀腾
 * @Date: 2022-05-02 20:30:42
 * @Description: 渲染表单项  =======>  当你看到一大堆 template slot 时，会感到很懵逼吧？
-->

<template>
  <a-col
    v-if="formConfig"
    v-for="formItem of formConfig?.formItems"
    :key="formItem._key"
    :span="formItem.span ?? 24"
  >
    <template v-if="!formItem.hidden">
      <div v-if="!!formItem.slotName">
        <slot
          :name="formItem.slotName"
          v-bind="{ formItem: { ...formItem } }"
        ></slot>
      </div>
      <RenderFormItem :record="formItem">
        <template v-for="(slot, name) of $slots" :key="name" #[name]="attrs">
          <slot :name="name" v-bind="attrs"></slot>
        </template>
      </RenderFormItem>
    </template>
  </a-col>
  <div v-else-if="!record.hidden">
    <RenderGrid v-if="getComponentType('grid')" :record="gridRecord">
      <template v-for="(slot, name) of $slots" :key="name" #[name]="attrs">
        <slot :name="name" v-bind="attrs"></slot>
      </template>
    </RenderGrid>
    <RenderTabs
      v-else-if="getComponentType('tabs')"
      :record="tabsRecord"
      :form-config="formConfig"
    >
      <template v-for="(slot, name) of $slots" :key="name" #[name]="attrs">
        <slot :name="name" v-bind="attrs"></slot>
      </template>
    </RenderTabs>
    <div v-else-if="!!record.slotName">
      <slot :name="record.slotName" v-bind="{ formItem: { ...record } }"></slot>
    </div>
    <GFormItem v-else :record="record"></GFormItem>
  </div>
</template>

<script lang="ts" setup>
import { BasicFormItem } from '@common/class/basic-form'
import type { PropType } from 'vue'
import { computed } from 'vue'
import type { GridComponent } from '@common/class/layout/grid'
import RenderGrid from './RenderGrid.vue'
import GFormItem from './GFormItem.vue'
import type { VFormConfig } from '@common/types/form'
import RenderTabs from '@render/VFormRender/components/RenderTabs.vue'
import type { Tabs } from '@common/class/layout/tabs'

const props = defineProps({
  record: {
    type: Object as PropType<Partial<BasicFormItem>>,
    default: () => ({})
  },
  formConfig: {
    type: [Object, Boolean] as PropType<VFormConfig>,
    default: false
  }
})

const gridRecord = computed(() => props.record as GridComponent)

const tabsRecord = computed(() => props.record as Tabs)

const getComponentType = (type: string) => {
  return props.record instanceof BasicFormItem && props.record?.type === type
}
</script>
