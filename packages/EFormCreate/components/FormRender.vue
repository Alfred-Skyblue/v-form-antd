<template>
  <span v-if="!record.hidden" class="e-form-render-item">
    <a-row v-if="['grid'].includes(record.type)" class="grid-row">
      <a-col
        class="grid-col"
        v-for="(colItem, index) in record.columns"
        :key="index"
        :span="colItem.span"
      >
        <FormRender
          v-for="(item, k) in colItem.children"
          :key="k"
          :record="item"
          :formConfig="formConfig"
        />
      </a-col>
    </a-row>
    <component v-else :is="layoutTag" :span="record.span">
      <EFormItem
        :data="formConfig"
        :record="record"
        :formData="formData"
        @change="$emit('change', $event)"
        @submit="$emit('submit', $event)"
        @reset="$emit('reset', $event)"
      >
        <template :slot="record.props.slotName">
          <slot :name="record.props.slotName"></slot>
        </template>
      </EFormItem>
    </component>
  </span>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { IEFormComponent, IFormConfig } from '@pack/typings/EFormComponent'
import EFormItem from '@pack/EFormItem'

export default defineComponent({
  name: 'FormRender',
  components: {
    EFormItem
  },
  props: {
    formData: {
      type: Object,
      default: () => ({})
    },
    record: {
      type: Object as PropType<IEFormComponent>,
      default: 0
    },
    formConfig: {
      type: Object as PropType<IFormConfig>,
      default: () => []
    }
  },
  setup(props) {
    const layoutTag = computed(() => {
      return props.record?.span && props.formConfig?.config.layout === 'horizontal'
        ? 'ACol'
        : 'span'
    })
    return { layoutTag }
  }
})
</script>

<style>
.e-form-render-item {
  overflow: hidden;
}
</style>
