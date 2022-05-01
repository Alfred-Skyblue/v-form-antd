import { Time } from '@common/class/form/time'
import TimePickerProps from '@design/components/VFProps/TimePicker/index.vue'

export class DesignTime extends Time {
  static designType = Time.type
  static designProps = TimePickerProps
}
