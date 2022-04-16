import type { IAnyEvent, IAnyObject } from '@design/types'
import { randomUUID } from '@design/utils/util'

let uid = 1
export abstract class BasicFormItem {
  abstract icon?: string
  abstract tag?: string
  abstract type: string
  abstract props: IAnyObject
  public on!: IAnyEvent
  public key!: string
  public field!: string
  protected constructor(public label: string) {
    this.label = label
    this.init()
  }
  update() {
    console.log('update')
  }
  // 生成UUID
  init(field = `field${uid++}`) {
    this.field = field
    this.generateKey()
  }
  generateKey() {
    this.key = randomUUID()
  }
}
