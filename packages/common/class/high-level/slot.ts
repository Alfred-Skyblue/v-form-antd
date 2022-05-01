import { BasicFormItem } from '@common/class/basic-form'
import { defineComponent, h, shallowRef } from 'vue'
import type { IFormItemOptions } from '@common/types/form'

export class VSlot extends BasicFormItem {
  static type = 'vSlot'
  public type = VSlot.type
  public icon = 'slot'
  public slotName = '插槽名'
  public props = {}
  readonly _tag = shallowRef(
    defineComponent({
      render: () => h('div', '占位符')
    })
  )
  constructor(options?: IFormItemOptions) {
    super({ label: '插槽', ...options })
  }
}
