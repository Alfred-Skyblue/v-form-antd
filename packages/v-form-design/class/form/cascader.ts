import { Cascader } from '@common/class/form/cascader'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import CascaderProps from '@design/components/VFProps/Cascader/index.vue'

export class DesignCascader extends Cascader {
  public propsCmp: Component = shallowRef(CascaderProps)
}
