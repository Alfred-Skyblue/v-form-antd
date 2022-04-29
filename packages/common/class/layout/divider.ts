import { BasicFormItem } from '@common/class/basic-form'
import type { IAnyObject } from '@common/types'
import { defineComponent, h, shallowRef } from 'vue'
import { Divider as ADivider } from 'ant-design-vue'
console.log('-> ADivider', ADivider)
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
  public type = 'divider'
  public icon = 'divider'
  public label = '分割线'
  public props = {
    title: 'title'
  }
  constructor(options: IAnyObject) {
    super(options)
  }
  getLabel() {
    console.log(this)
    return this.label
  }
}
