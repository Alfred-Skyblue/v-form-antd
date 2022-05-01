import { Cascader } from '@common/class/form/cascader'
import CascaderProps from '@design/components/VFProps/Cascader/index.vue'

export class DesignCascader extends Cascader {
  static designType = Cascader.type
  static designProps = CascaderProps
  constructor() {
    super()
    this.props.options = [
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
