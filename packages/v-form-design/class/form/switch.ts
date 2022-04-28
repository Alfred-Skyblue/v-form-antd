import { Switch } from '@common/class/form/switch'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import RateProps from '@design/components/VFProps/Rate/index.vue'

export class DesignSwitch extends Switch {
  public propsCmp: Component = shallowRef(RateProps)
}
