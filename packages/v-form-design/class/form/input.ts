import { Input } from '@common/class/input'
import InputProps from '@design/components/VFProps/Input/index.vue'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
export class DesignInput extends Input {
  public propsCmp: Component = shallowRef(InputProps)
}
