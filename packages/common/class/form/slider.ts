import { BasicFormItem } from '../basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'
import type { SliderProps } from 'ant-design-vue'

export class Slider extends BasicFormItem {
  readonly _tag = 'ASlider'
  readonly type = 'slider'
  readonly icon = 'slider'
  public props: Partial<SliderProps & IAnyObject> = {
    autoFocus: undefined,
    disabled: undefined,
    dots: undefined,
    included: undefined,
    mark: undefined,
    marks: undefined,
    max: undefined,
    min: undefined,
    reverse: undefined,
    step: undefined,
    tipFormatter: undefined,
    tooltipPlacement: undefined,
    value: undefined,
    vertical: undefined,
    tooltipVisible: undefined
  }

  constructor(options?: IFormItemOptions) {
    super({ label: '滑动输入', ...options })
  }
}
