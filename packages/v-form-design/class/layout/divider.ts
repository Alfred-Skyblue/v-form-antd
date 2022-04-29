import { Divider } from '@common/class/layout/divider'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import DividerProps from '@design/components/VFProps/Divider/index.vue'

export class DesignDivider extends Divider {
  public propsCmp: Component = shallowRef(DividerProps)
}
