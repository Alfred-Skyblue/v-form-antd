import type { IAnyEvent, IAnyObject } from '@common/types'

export interface IAForm extends IAnyObject {
  layout: 'horizontal' | 'vertical' | 'inline'
  colon?: boolean
  noStyle?: boolean
  hideRequiredMark?: boolean
  labelAlign?: 'left' | 'right'
  labelWidth?: number | string
  labelCol?: any
  wrapperCol?: any
  labelWrap?: boolean
  model?: IAnyObject
  scrollToFirstError?: any
  validateOnRuleChange?: boolean
  on?: IAnyEvent
}

export class VForm implements IAForm {
  public layout: 'horizontal' | 'vertical' | 'inline' = 'horizontal'
  labelLayout: 'fixed' | 'grid' = 'fixed'
  labelWidth?: number = 100
  public hideRequiredMark = undefined
  public labelAlign = undefined
  public labelCol?: IAnyObject
  public wrapperCol?: IAnyObject
  public labelWrap = undefined
  public model = undefined
  public scrollToFirstError = undefined
  public validateOnRuleChange = undefined
  public on?: IAnyEvent
}
