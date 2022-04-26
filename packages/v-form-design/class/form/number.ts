import { VNumber } from '@common/class/form/number'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import NumberProps from '@design/components/VFProps/Number/index.vue'

export class DesignVNumber extends VNumber {
  public propsCmp: Component = shallowRef(NumberProps)
}
