import { DatePicker } from '@common/class/form/date-picker'
import DatePickerProps from '@design/components/VFProps/DatePicker/index.vue'

export class DesignDatePicker extends DatePicker {
  static designType = DatePicker.type
  static designProps = DatePickerProps
}
