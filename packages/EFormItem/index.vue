<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/19
 * @Description:
-->
<template>
  <a-form-model-item v-bind="formItemProps">
    <template slot="label" v-if="!record.hiddenLabel">
      <a-tooltip>
        <span>{{ record.label }}</span>
        <span v-if="record.help" slot="title">{{ record.help }}</span>
        <a-icon v-if="record.help" class="ml-5" type="question-circle-o" />
      </a-tooltip>
    </template>

    <slot :name="record.props.slotName">
      <component
        :class="{
          'w-full':
            [
              'number',
              'time',
              'date',
              'dateRange',
              'month',
              'monthRange',
              'select',
              'treeSelect'
            ].includes(record.type) && !record.width
        }"
        class="e-form-item-wrapper"
        :is="componentItem"
        v-bind="cmpProps"
        :style="record.width ? { width: record.width } : {}"
        v-on="record.on"
        @change="$emit('change', record)"
        @click="handleClick(record, $event)"
        v-model="formData[record.field]"
      >
        <span v-if="['button'].includes(record.type)">{{ record.label }}</span>
      </component>
    </slot>
  </a-form-model-item>
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
import { asyncComputed } from '@vueuse/core'
import { isFunction } from 'lodash-es'
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
  setup(props, { emit }) {
    const state = reactive({
      componentMap
    })

    const formItemProps = computed(() => {
      const { data } = props
      const { field, required, rules } = props.record
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
        data.config.layout === 'horizontal' && data.config.labelLayout === 'flex'
          ? { display: 'flex' }
          : {}
      return {
        labelCol,
        wrapperCol,
        style: { ...style },
        prop: field,
        required,
        rules
      }
    })
    const componentItem = computed(() => componentMap[props.record.type])

    const handleClick = (record: IEFormComponent) => {
      if (record.type === 'button' && record.props!.handle) emit(record.props!.handle)
    }
    const cmpProps = asyncComputed(async () => {
      let { options, treeData, ...attrs } = props.record.props!
      return {
        ...attrs,
        options: isFunction(options) ? await options() : options,
        treeData: isFunction(treeData) ? await options() : options
      }
    })
    return { ...toRefs(state), componentItem, formItemProps, handleClick, cmpProps }
  }
})
</script>

<style lang="less" scoped></style>
