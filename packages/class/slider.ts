import { BasicFormItem } from '@/class/basic-form'
import type { VNode } from 'vue'
import type { IAnyFunction } from '@/types'
import type { IAnyObject } from '@/types'

interface ISlider extends IAnyObject {
  /**
   * get focus when component mounted
   * @default false
   * @type boolean
   */
  autoFocus: boolean

  /**
   * If true, the slider will not be interactable.
   * @default false
   * @type boolean
   */
  disabled: boolean

  /**
   * Whether the thumb can drag over tick only.
   * @default false
   * @type boolean
   */
  dots: boolean

  /**
   * Make effect when marks not null，true means containment and false means coordinative
   * @default true
   * @type boolean
   */
  included: boolean

  mark: any
  /**
   * Tick mark of Slider, type of key must be number, and must in closed interval [min, max] ，each mark can declare its own style.
   * @default { number: string|VNode } | { number: { style: object, label: string|VNode } } | { number: () => VNode }
   * @type object
   */
  marks: {
    [key: number]:
      | string
      | VNode
      | { style: object; label: string | VNode }
      | IAnyFunction
  }

  /**
   * The maximum value the slider can slide to
   * @default 100
   * @type number
   */
  max: number

  /**
   * The minimum value the slider can slide to.
   * @default 0
   * @type number
   */
  min: number

  /**
   * dual thumb mode
   * @default false
   * @type boolean
   */
  range: boolean

  reverse: boolean
  /**
   * The granularity the slider can step through values.
   * Must greater than 0, and be divided by (max - min) . When marks no null, step can be null.
   * @default 1
   * @type number | null
   */
  step: number | null

  /**
   * Slider will pass its value to tipFormatter, and display its value in Tooltip, and hide Tooltip when return value is null.
   * @default IDENTITY
   * @type Function | null
   */
  tipFormatter: IAnyFunction | null

  tooltipPlacement: string
  /**
   * The value of slider. When range is false, use number, otherwise, use [number, number]
   * @type number | number[]
   */
  value: number | number[]

  /**
   * If true, the slider will be vertical.
   * @default false
   * @type boolean
   */
  vertical: boolean

  /**
   * If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering.
   * @default false
   * @type boolean
   */
  tooltipVisible: boolean
}
export class Slider extends BasicFormItem {
  readonly tag = 'ASlider'
  readonly type = 'slider'
  readonly icon = 'slider'
  public props: Partial<ISlider> = {
    autoFocus: undefined,
    disabled: undefined,
    dots: undefined,
    included: undefined,
    mark: undefined,
    marks: undefined,
    max: undefined,
    min: undefined,
    range: undefined,
    reverse: undefined,
    step: undefined,
    tipFormatter: undefined,
    tooltipPlacement: undefined,
    value: undefined,
    vertical: undefined,
    tooltipVisible: undefined
  }
  constructor(label = '滑动输入') {
    super(label)
  }
}
