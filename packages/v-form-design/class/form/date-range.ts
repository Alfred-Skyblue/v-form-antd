import { DateRange } from '@common/class/form/date-range'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import DatePickerProps from '@design/components/VFProps/DatePicker/index.vue'

export class DesignDateRange extends DateRange {
  public propsCmp: Component = shallowRef(DatePickerProps)
}
