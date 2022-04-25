import type { BasicFormItem } from '@common/class/basic-form'
import type { Ref } from 'vue'
import type { DesignVForm } from '@design/class/form/form'

export interface IVFormConfig<T = BasicFormItem> {
  formItems: BasicFormItem[]
  currentItem: T
  config: DesignVForm
}

/**
 * formDesign 状态类型
 */
export interface IVFormDesignState<T = BasicFormItem> {
  formConfig: Ref<IVFormConfig<T>>
  /**
   * 选中表单项
   * @param {BasicFormItem} formItem
   */
  handleSelectItem: (item: T) => void
  /**
   * 深拷贝一份数据添加到表单项并设置为当前选中项，然后重新生成 uuid
   * @param {BasicFormItem} formItem
   */
  handlePushItem: (item: T) => void
  handleRemoveItem: (key: string) => void
  handleClear: () => void
  isFixed: Ref<boolean>
}
