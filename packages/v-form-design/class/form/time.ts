import { Time } from '@common/class/form/time'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import TimePickerProps from '@design/components/VFProps/TimePicker/index.vue'

export class DesignTime extends Time {
  public propsCmp: Component = shallowRef(TimePickerProps)
}
