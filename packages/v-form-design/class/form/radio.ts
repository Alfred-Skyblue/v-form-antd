import { Radio } from '@common/class/form/radio'
import RadioProps from '@design/components/VFProps/Radio/index.vue'

export class DesignRadio extends Radio {
  static designType = Radio.type
  static designProps = RadioProps

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
