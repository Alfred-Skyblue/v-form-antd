import { inject, Ref } from '@vue/composition-api'
import { IFormConfig } from '@pack/typings/v-form-component'
import { IFormDesignMethods } from '@pack/VFormDesign/index.vue'

export function useFormDesignState() {
  const formConfig = inject('formConfig') as Ref<IFormConfig>
  const formDesignMethods = inject('formDesignMethods') as IFormDesignMethods
  return { formConfig, formDesignMethods }
}
