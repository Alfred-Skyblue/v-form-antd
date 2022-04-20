import { BasicFormItem } from './basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'

interface IRate extends IAnyObject {
  /**
   * whether to allow clear when click again
   * @default true
   * @type boolean
   */
  allowClear: boolean

  /**
   * whether to allow semi selection
   * @default false
   * @type boolean
   */
  allowHalf: boolean

  /**
   * get focus when component mounted
   * @default false
   * @type boolean
   */
  autoFocus: boolean

  /**
   * custom character of rate
   * @default <Icon type="star" />
   * @type any (String or slot="character")
   */
  character: any

  /**
   * star count
   * @default 5
   * @type number
   */
  count: number

  /**
   * read only, unable to interact
   * @default false
   * @type boolean
   */
  disabled: boolean

  /**
   * current value
   * @type number
   */
  value: number

  tooltips: Array<string>
}
export class Rate extends BasicFormItem {
  readonly _tag = 'ARate'
  readonly type = 'rate'
  readonly icon = 'rate'
  public props: Partial<IRate> = {
    allowClear: undefined,
    allowHalf: undefined,
    autoFocus: undefined,
    character: undefined,
    count: undefined,
    defaultValue: undefined,
    disabled: undefined,
    value: undefined,
    tooltips: undefined
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '评分', ...options })
  }
}
