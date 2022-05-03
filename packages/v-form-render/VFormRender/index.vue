<!--
 * @author: ypt
 * @date: 2022/5/2
 * @description: 表单渲染器
-->
<template>
  <a-form
    ref="formRef"
    :model="newFormData"
    v-bind="formProps"
    v-on="formProps.on ?? {}"
  >
    <a-row>
      <RenderFormItem :form-config="formConfig">
        <template v-for="(slot, name) of $slots" :key="name" #[name]="attrs">
          <slot :name="name" v-bind="attrs"></slot>
        </template>
      </RenderFormItem>
    </a-row>
  </a-form>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeMount,
  PropType,
  provide,
  ref,
  toRefs
} from 'vue'
import type { BasicFormItem } from '@common/class/basic-form'
import RenderFormItem from '@render/VFormRender/components/RenderFormItem.vue'
import { formForEach } from '@common/utils/util'
import { createDesignComponent, IDesignComponentType } from '@design/class'
import type { VFormConfig } from '@common/types/form'
import type { IAnyObject } from '@common/types'
import { useVModels } from '@vueuse/core'
import type { FormInstance } from 'ant-design-vue'
import { useVForm } from '@render/VFormRender/hooks/useVForm'

export default defineComponent({
  name: 'VFormRender',
  components: { RenderFormItem },
  props: {
    formData: {
      type: Object as PropType<IAnyObject>,
      default: () => ({})
    },
    formConfig: {
      type: Object as PropType<VFormConfig>,
      required: true
    }
  },
  setup(props, { emit }) {
    const { formConfig } = toRefs(props)
    const { formData: newFormData } = useVModels(props, emit)

    const formRef = ref<FormInstance>()

    const { submit } = useVForm(formRef)
    provide('formData', newFormData)

    const init = () => {
      formForEach(
        formConfig.value.formItems as BasicFormItem[],
        (item, index, ctx) => {
          const { label, type } = item
          const formItem = createDesignComponent(type as IDesignComponentType, {
            label
          })
          ctx[index] = Object.assign(formItem, item)
          console.log('=>(index.vue:54) ctx[index]', ctx[index].update)
        }
      )
    }

    onBeforeMount(() => {
      init()
    })

    const formProps = computed(() => {
      let { labelLayout, labelCol, labelWidth } = formConfig.value.config
      if (labelLayout === 'fixed') {
        labelCol = { style: { width: `${labelWidth}px` } }
      }
      return {
        ...formConfig.value.config,
        labelCol
      }
    })
    return { formProps, submit, formRef, newFormData }
  }
})
</script>
