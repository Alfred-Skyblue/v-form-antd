import { computed, inject, reactive, toRefs } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'
import type { BasicFormItem } from '@common/class/basic-form'

/**
 * 使用表单设计器当前状态
 * @returns {{...IVFormDesignState,currentItem:BasicFormItem}}
 */
export const useFormDesign = <T extends BasicFormItem = BasicFormItem>() => {
  const formDesignState = reactive(
    inject<IVFormDesignState<T>>('formDesignState')!
  )
  const currentItem = computed<T>(() => formDesignState.formConfig.currentItem)
  return { currentItem, ...toRefs(formDesignState) }
}
