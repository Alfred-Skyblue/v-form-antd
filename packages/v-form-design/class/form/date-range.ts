import { DateRange } from '@common/class/form/date-range'
import DatePickerProps from '@design/components/VFProps/DatePicker/index.vue'

export class DesignDateRange extends DateRange {
  static designType = DateRange.type
  static designProps = DatePickerProps
}
