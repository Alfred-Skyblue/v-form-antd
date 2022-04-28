import { TreeSelect } from '@common/class/form/tree-select'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import TreeSelectProps from '@design/components/VFProps/TreeSelect/index.vue'

export class DesignTreeSelect extends TreeSelect {
  public propsCmp: Component = shallowRef(TreeSelectProps)
  constructor() {
    super()
    this.props.treeData = [
      {
        label: '选项1',
        value: 'value1',
        children: [
          { label: '1-1', value: '1-1' },
          { label: '1-2', value: '1-2' }
        ]
      },
      {
        label: '选项2',
        value: 'value2',
        children: [{ label: '2-1', value: '2-1' }]
      }
    ]
  }
}
