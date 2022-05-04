import { BasicFormItem } from '@common/class/basic-form'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'

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
      console.error('lack use CustomComponent required attrsConfig')
    }
    if (!component) {
      console.error('lack use CustomComponent required component')
    }
    if (!type) {
      console.error('lack use CustomComponent required type')
    }
    this._tag = shallowRef(component)
    this.type = type
    this.attrsConfig = shallowRef(attrsConfig)
  }
}

// 缺少
