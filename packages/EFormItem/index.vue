<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/19
 * @Description:
-->
<template>
  <div>
    <a-form-model-item v-bind="formItemProps">
      <component
        class="component-box"
        :is="componentItem"
        v-bind="record.props"
        v-on="record.on"
      ></component>
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
      const { label } = props.record
      const { data } = props
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
      return { label, labelCol, wrapperCol, style }
    })
    const componentItem = computed(() => componentMap[props.record.type])
    return { ...toRefs(state), componentItem, formItemProps }
  }
})
</script>

<style lang="less" scoped>
.component-box {
  width: 100%;
}
</style>
