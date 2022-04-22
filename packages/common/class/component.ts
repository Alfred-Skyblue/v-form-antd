import { randomUUID } from '@common/utils/util'
import type { IAnyEvent } from '@common/types'

export abstract class VFComponent {
  abstract icon?: string
  abstract _tag?: string
  abstract type: string
  public _key!: string
  public label!: string
  public on!: IAnyEvent
  public field!: string
  protected constructor() {
    this.generateKey()
  }
  generateKey() {
    this._key = randomUUID()
  }
}
