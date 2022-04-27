import { Checkbox } from '@common/class/form/checkbox'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import CheckboxGroupProps from '@design/components/VFProps/CheckboxGroup/index.vue'

export class DesignCheckbox extends Checkbox {
  public propsCmp: Component = shallowRef(CheckboxGroupProps)
  constructor() {
    super()
    this.props.options = [
      {
        label: '选项1',
        value: 'value1'
      },
      {
        label: '选项2',
        value: 'value2'
      }
    ]
  }
}
