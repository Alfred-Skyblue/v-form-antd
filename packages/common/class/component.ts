import { randomUUID } from '@common/utils/util'

export abstract class VFComponent {
  abstract icon?: string
  abstract _tag?: string
  abstract type: string
  public _key!: string
  protected constructor() {
    this.generateKey()
  }
  generateKey() {
    this._key = randomUUID()
  }
}
