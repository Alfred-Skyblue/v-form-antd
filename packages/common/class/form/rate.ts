import { BasicFormItem } from '../basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'
import type { RateProps } from 'ant-design-vue'

export class Rate extends BasicFormItem {
  readonly _tag = 'ARate'
  readonly type = 'rate'
  readonly icon = 'rate'
  public props: Partial<RateProps & IAnyObject> = {}
  constructor(options?: IFormItemOptions) {
    super({ label: '评分', ...options })
  }
}
