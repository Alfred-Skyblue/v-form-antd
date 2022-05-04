import type { IVFormConfig } from '@design/types/form-design'
import { customComponentsMap } from '@common/custom'
import { CustomFormItem } from '@common/class/custom'
import { createDesignComponent, IDesignComponentType } from '@design/class'
import { formForEach } from '@common/utils/util'
import type { Ref } from 'vue'
import type { VFormConfig } from '@common/types/form'
import type { BasicFormItem } from '@common/class/basic-form'

/**
 * 初始化表单配置项
 * @param {IVFormConfig} formConfig
 */
export const useFormatForm = (
  formConfig: Ref<IVFormConfig> | Ref<VFormConfig>
) => {
  formForEach(
    formConfig.value.formItems as BasicFormItem[],
    (item, index, ctx) => {
      const { label, type } = item
      let formItem
      let custom
      if ((custom = customComponentsMap[type])) {
        formItem = new CustomFormItem(custom)
      } else {
        formItem = createDesignComponent(type as IDesignComponentType, {
          label
        })
      }
      ctx[index] = Object.assign(formItem, item)
    }
  )
}
