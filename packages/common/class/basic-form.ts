import type { Component, IAnyEvent, IAnyObject } from '@common/types'
import { VFComponent } from '@common/class/component'
import type { IFormItemOptions } from '@common/types/form'

export const globalConfig = {
  span: 24
}
let uid = 1

export abstract class BasicFormItem extends VFComponent {
  abstract icon?: string
  abstract _tag?: string | Component
  abstract type: string
  public props!: IAnyObject
  public _isLayout!: boolean
  public hidden!: boolean
  public label!: string
  public on!: IAnyEvent
  public field!: string
  public span!: number
  constructor(options: IFormItemOptions) {
    super()
    this.init(options)
  }
  update() {
    console.log('update')
  }

  generateKey() {
    this.initSpan()
    super.generateKey()
    this.init()
  }
  // 生成UUID
  init(options?: IFormItemOptions) {
    const { field, label } = options ?? {}
    label && (this.label = label)
    if (!this._isLayout) this.field = field ?? `field${uid++}`
  }
  initSpan() {
    this.span = globalConfig.span
  }
}
