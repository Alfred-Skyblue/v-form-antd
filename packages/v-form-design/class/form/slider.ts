import { Slider } from '@common/class/form/slider'
import SliderProps from '@design/components/VFProps/Slider/index.vue'

export class DesignSlider extends Slider {
  static designType = Slider.type
  static designProps = SliderProps
}
