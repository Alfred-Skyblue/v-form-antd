import { randomUUID } from '@design/utils/util'
import type { IAnyEvent, IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'

let uid = 1

export abstract class BasicFormItem {
  abstract icon?: string
  abstract _tag?: string
  abstract type: string
  abstract props: IAnyObject
  public label!: string
  public on!: IAnyEvent
  public _key!: string
  public field!: string

  protected constructor(options: IFormItemOptions) {
    this.init(options)
  }
  update() {
    console.log('update')
  }
  // 生成UUID
  private init(options: IFormItemOptions) {
    const { field, label } = options
    label && (this.label = label)
    this.field = field ?? `field${uid++}`
  }
  generateKey() {
    this._key = randomUUID()
  }
}
