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
  abstract props: IAnyObject
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
    this.field = `${this.field}_${uid++}`
    this.span = globalConfig.span
    super.generateKey()
  }
  // 生成UUID
  init(options: IFormItemOptions) {
    const { field, label } = options
    label && (this.label = label)
    this.field = field ?? `field${uid++}`
  }
}
