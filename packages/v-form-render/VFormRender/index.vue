<!--
 * @author: ypt
 * @date: 2022/5/2
 * @description: 表单渲染器
-->
<template>
  <a-form v-bind="formConfig.config">
    <a-row>
      <a-col
        v-for="formItem of formConfig.formItems"
        :key="formItem._key"
        :span="formItem.span ?? 24"
      >
        <RenderFormItem
          :record="formItem"
          :form-config="formConfig"
        ></RenderFormItem>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, PropType } from 'vue'
import type { BasicFormItem } from '@common/class/basic-form'
import type { VForm } from '@common/class/form/form'
import RenderFormItem from '@render/VFormRender/components/RenderFormItem.vue'
import { formForEach } from '@common/utils/util'
import { createDesignComponent, IDesignComponentType } from '@design/class'

export interface IFormConfig {
  formItems: Partial<BasicFormItem>[]
  config: Partial<VForm>
}
export default defineComponent({
  name: 'VFormRender',
  components: { RenderFormItem },
  props: {
    formConfig: {
      type: Object as PropType<IFormConfig>,
      required: true
    }
  },
  setup(props) {
    const init = () => {
      formForEach(
        props.formConfig.formItems as BasicFormItem[],
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
    return {}
  }
})
</script>
