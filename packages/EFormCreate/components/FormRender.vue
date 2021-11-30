<template>
  <div>
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
      <EFormItem :data="formConfig" :record="record" />
    </component>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { IEFormComponent, IFormConfig } from '@pack/typings/EFormComponent'

export default defineComponent({
  name: 'FormRender',
  props: {
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
      return props.record?.span ? 'ACol' : 'div'
    })
    return { layoutTag }
  }
})
</script>
