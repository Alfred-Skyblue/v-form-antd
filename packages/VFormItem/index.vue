<!--
 * @Author: ypt
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

    <slot
      v-if="record.props.slotName"
      :name="record.props.slotName"
      v-bind="record"
    ></slot>
    <component
      v-else
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
      class="v-form-item-wrapper"
      :is="componentItem"
      v-bind="{ ...cmpProps, ...asyncProps }"
      :record="record"
      :style="record.width ? { width: record.width } : {}"
      v-on="record.on"
      @change="$emit('change', record, $event)"
      @click="handleClick(record, $event)"
      v-model="formData[record.field]"
    >
      <span v-if="['button'].includes(record.type)">{{ record.label }}</span>
    </component>
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
import { IVFormComponent, IFormConfig } from '@pack/typings/v-form-component'
import { asyncComputed } from '@vueuse/core'
import { handleAsyncOptions, strToReg } from '@pack/utils'
import { omit } from 'lodash-es'
export default defineComponent({
  name: 'VFormItem',
  props: {
    formData: {
      type: Object,
      default: () => ({})
    },
    record: {
      type: Object as PropType<IVFormComponent>,
      required: true
    },
    formConfig: {
      type: Object as PropType<IFormConfig>,
      required: true
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      componentMap,
      defaultValue: '123'
    })

    const formItemProps = computed(() => {
      const { formConfig } = props
      let { field, required, rules, labelCol, wrapperCol } = props.record
      //<editor-fold desc="布局属性">
      labelCol = labelCol
        ? labelCol
        : formConfig.config.layout === 'horizontal'
        ? formConfig.config.labelLayout === 'flex'
          ? { style: `width:${formConfig.config.labelWidth}px` }
          : formConfig.config.labelCol
        : {}

      wrapperCol = wrapperCol
        ? wrapperCol
        : formConfig.config.layout === 'horizontal'
        ? formConfig.config.labelLayout === 'flex'
          ? { style: 'width:auto;flex:1' }
          : formConfig.config.wrapperCol
        : {}

      const style =
        formConfig.config.layout === 'horizontal' &&
        formConfig.config.labelLayout === 'flex'
          ? { display: 'flex' }
          : {}
      //</editor-fold>
      /**
       * 将字符串正则格式化成正则表达式
       */
      rules = strToReg(rules ?? [])
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

    const handleClick = (record: IVFormComponent) => {
      if (record.type === 'button' && record.props!.handle) emit(record.props!.handle)
    }
    /**
     * 处理异步属性，异步属性会导致一些属性渲染错误，如defaultValue异步加载会导致渲染不出来，故而此处只处理options，treeData，同步属性在cmpProps中处理
     */
    const asyncProps = asyncComputed(async () => {
      let { options, treeData } = props.record.props ?? {}
      if (options) options = await handleAsyncOptions(options)
      if (treeData) treeData = await handleAsyncOptions(treeData)
      return {
        options,
        treeData
      }
    })
    /**
     * 处理同步属性
     */
    const cmpProps = computed(() => {
      let { disabled, ...attrs } = omit(props.record.props, ['options', 'treeData']) ?? {}
      disabled = props.formConfig.config.disabled || disabled
      return { ...attrs, disabled }
    })
    return {
      ...toRefs(state),
      componentItem,
      formItemProps,
      handleClick,
      asyncProps,
      cmpProps
    }
  }
})
</script>

<style lang="less" scoped></style>
