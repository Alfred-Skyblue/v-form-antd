import { BasicFormItem } from '@common/class/basic-form'
import { defineComponent, h, shallowRef } from 'vue'
import { Divider as ADivider } from 'ant-design-vue'
import type { IFormItemOptions } from '@common/types/form'
interface IDivider {
  props: {
    title?: string
    dashed?: boolean
    orientation?: 'left' | 'right' | 'center'
    orientationMargin?: number | string
    plain?: boolean
    type?: 'horizontal' | 'vertical'
  }
}
// Non-function value encountered for default slot. Prefer function slots for better performance
export class Divider extends BasicFormItem implements IDivider {
  static type = 'divider'
  public type = Divider.type
  public icon = 'divider'
  public label = '分割线'
  public _isLayout = true
  _tag = shallowRef(
    defineComponent({
      props: {
        title: {
          type: String,
          default: ''
        }
      },
      setup:
        (props, { attrs }) =>
        () =>
          h(ADivider, { ...attrs }, { default: () => props?.title })
    })
  )

  public props = {
    title: 'title'
  }
  constructor(options?: IFormItemOptions) {
    super({ ...options })
  }
  getLabel() {
    console.log(this)
    return this.label
  }
}
