import { Select } from '@common/class/form/select'
import SelectProps from '@design/components/VFProps/Select/index.vue'

export class DesignSelect extends Select {
  static designType = Select.type
  static designProps = SelectProps

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
