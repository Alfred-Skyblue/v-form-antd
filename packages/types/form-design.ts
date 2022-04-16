import type { BasicFormItem } from '@/class/render/basic-form'
import type { Ref } from 'vue'
import type { VForm } from '@/class/render/form'

export interface IVFormConfig {
  formItems: BasicFormItem[]
  currentItem: BasicFormItem
  config: VForm
}

/**
 * formDesign 状态类型
 */
export interface IVFormDesignState {
  formConfig: Ref<IVFormConfig>
  handleSelectItem: (item: BasicFormItem) => void
}
