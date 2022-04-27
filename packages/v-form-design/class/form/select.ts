import { Select } from '@common/class/form/select'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import SelectProps from '@design/components/VFProps/Select/index.vue'

export class DesignSelect extends Select {
  public propsCmp: Component = shallowRef(SelectProps)
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
