import type { BasicFormItem } from '@/class/basic-form'
import type { Ref } from 'vue'

export interface IVFormConfig {
  formItems: BasicFormItem[]
  currentItem: BasicFormItem
}

/**
 * formDesign 状态类型
 */
export interface IVFormDesignState {
  formConfig: Ref<IVFormConfig>
  handleSelectItem: (item: BasicFormItem) => void
}
