<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/19
 * @Description:
-->
<template>
  <div>
    <a-form-model-item v-bind="formItemProps">
      <template slot="label">
        <a-tooltip>
          <span>{{ record.label }}</span>
          <span v-if="record.help" slot="title">{{ record.help }}</span>
          <a-icon v-if="record.help" class="ml-5" type="question-circle-o" />
        </a-tooltip>
      </template>

      <slot :name="record.props.slotName">
        <component
          :class="{
            'w-full': [
              'number',
              'time',
              'date',
              'dateRange',
              'month',
              'monthRange',
              'select',
              'treeSelect'
            ].includes(record.type)
          }"
          class="e-form-item-wrapper"
          :is="componentItem"
          v-bind="record.props"
          v-on="record.on"
          @change="handleChange"
          v-model="formData[record.field]"
        ></component>
      </slot>
    </a-form-model-item>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  PropType
} from '@vue/composition-api'
import { componentMap } from '@pack/core/formItemConfig'
import { IEFormComponent, IFormConfig } from '@pack/typings/EFormComponent'
export default defineComponent({
  name: 'EFormItem',
  props: {
    formData: {
      type: Object,
      default: () => ({})
    },
    record: {
      type: Object as PropType<IEFormComponent>,
      required: true
    },
    data: {
      type: Object as PropType<IFormConfig>,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      componentMap
    })

    const formItemProps = computed(() => {
      const { data } = props
      const { field, required } = props.record
      const labelCol =
        data.config.layout === 'horizontal'
          ? data.config.labelLayout === 'flex'
            ? { style: `width:${data.config.labelWidth}px` }
            : data.config.labelCol
          : {}

      const wrapperCol =
        data.config.layout === 'horizontal'
          ? data.config.labelLayout === 'flex'
            ? { style: 'width:auto;flex:1' }
            : data.config.wrapperCol
          : {}

      const style =
        data.config.layout === 'horizontal' &&
        data.config.labelLayout === 'flex'
          ? { display: 'flex' }
          : {}
      return { labelCol, wrapperCol, style, prop: field, required }
    })
    const componentItem = computed(() => componentMap[props.record.type])
    const handleChange = (e: any, record: any) => {
      console.log('-> e,record', e, record)
    }
    return { ...toRefs(state), componentItem, formItemProps, handleChange }
  }
})
</script>

<style></style>
