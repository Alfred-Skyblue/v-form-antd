import { Slider } from '@common/class/form/slider'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import SliderProps from '@design/components/VFProps/Slider/index.vue'

export class DesignSlider extends Slider {
  public propsCmp: Component = shallowRef(SliderProps)
}
