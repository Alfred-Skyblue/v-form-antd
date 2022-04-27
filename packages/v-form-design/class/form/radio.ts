import { Radio } from '@common/class/form/radio'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import RadioProps from '@design/components/VFProps/Radio/index.vue'

export class DesignRadio extends Radio {
  public propsCmp: Component = shallowRef(RadioProps)
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
