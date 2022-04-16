import type { BasicFormItem } from '@common/class/basic-form'
import type { Ref } from 'vue'
import type { DesignVForm } from '@design/class/form'

export interface IVFormConfig {
  formItems: BasicFormItem[]
  currentItem: BasicFormItem
  config: DesignVForm
}

/**
 * formDesign 状态类型
 */
export interface IVFormDesignState {
  formConfig: Ref<IVFormConfig>
  handleSelectItem: (item: BasicFormItem) => void
}
