import { BasicFormItem } from '@common/class/basic-form'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import { msg } from '@common/utils/log'

export interface CustomComponent {
  label: string
  type: string
  component: string | Component
  attrsConfig: string | Component
}

export class CustomFormItem extends BasicFormItem {
  public _isCustom = true
  public _tag: string | Component
  public icon!: string
  public type!: string
  public attrsConfig!: string
  public props = {}
  constructor(options: CustomComponent) {
    const { label, component, attrsConfig, type } = options
    super({ label })
    if (!attrsConfig) {
      msg('lack use CustomComponent required attrsConfig')
    }
    if (!component) {
      msg('lack use CustomComponent required component')
    }
    if (!type) {
      msg('lack use CustomComponent required type')
    }
    this._tag = shallowRef(component)
    this.type = type
    this.attrsConfig = shallowRef(attrsConfig)
  }
}

// 缺少
