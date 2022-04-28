import { Rate } from '@common/class/form/rate'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import RateProps from '@design/components/VFProps/Rate/index.vue'

export class DesignRate extends Rate {
  public propsCmp: Component = shallowRef(RateProps)
}
