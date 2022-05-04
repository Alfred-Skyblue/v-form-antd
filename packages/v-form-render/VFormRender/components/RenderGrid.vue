<!--
 * @author: ypt
 * @date: 2022/4/21
 * @description: 渲染栅格组件
-->
<template>
  <a-row v-bind="record.props">
    <a-col
      v-for="(item, index) of record.columns"
      :key="index"
      :span="item.span"
    >
      <div v-for="formItem of item.list" :key="formItem._key">
        <RenderFormItem :record="formItem">
          <template v-for="(slot, name) of $slots" :key="name" #[name]="attrs">
            <slot :name="name" v-bind="attrs"></slot>
          </template>
        </RenderFormItem>
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { GridComponent } from '@common/class/layout/grid'
import RenderFormItem from '@render/VFormRender/components/RenderFormItem.vue'

const props = defineProps({
  record: {
    type: Object as PropType<GridComponent>,
    required: true
  }
})
</script>
