import { DatePicker } from '@common/class/form/date-picker'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import DatePickerProps from '@design/components/VFProps/DatePicker/index.vue'

export class DesignDatePicker extends DatePicker {
  public propsCmp: Component = shallowRef(DatePickerProps)
}
