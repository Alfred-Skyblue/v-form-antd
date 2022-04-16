import type { IAnyEvent, IAnyObject } from '@design/types'

export interface IAForm extends IAnyObject {
  layout: 'horizontal' | 'vertical' | 'inline'
  colon?: boolean
  hideRequiredMark?: boolean
  labelAlign?: 'left' | 'right'
  labelWidth?: string
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
  public hideRequiredMark = undefined
  public labelAlign = undefined
  public labelCol = { span: 4 }
  public wrapperCol = { span: 18 }
  public labelWrap = undefined
  public model = undefined
  public scrollToFirstError = undefined
  public validateOnRuleChange = undefined
  public on?: IAnyEvent
}
