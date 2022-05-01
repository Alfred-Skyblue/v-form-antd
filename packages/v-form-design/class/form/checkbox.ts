import { Checkbox } from '@common/class/form/checkbox'
import CheckboxGroupProps from '@design/components/VFProps/CheckboxGroup/index.vue'

export class DesignCheckbox extends Checkbox {
  static designType = Checkbox.type
  static designProps = CheckboxGroupProps

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
