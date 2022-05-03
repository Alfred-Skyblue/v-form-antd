import type { FormInstance } from 'ant-design-vue'
import type { Ref } from 'vue'

export const useVForm = (formRef: Ref<FormInstance | undefined>) => {
  const submit = async () => {
    const res = formRef.value?.validate()
    console.log('=>(useVForm.ts:7) formRef.value', formRef.value)
    console.log('=>(useVForm.ts:7) res', res)
    return true
  }

  return { submit }
}
