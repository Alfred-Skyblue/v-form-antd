import { ref } from '@vue/composition-api'
import { IAnyObject } from '@pack/typings/baseType'
export interface IToolbarMethods {
  showModal: (jsonData: IAnyObject) => void
}
export function useToolbarMethods<T extends IToolbarMethods>() {
  const jsonModal = ref<null | T>(null)
  const eFormPreview = ref<null | T>(null)
  return { jsonModal, eFormPreview }
}
