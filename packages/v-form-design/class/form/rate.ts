import { Rate } from '@common/class/form/rate'
import RateProps from '@design/components/VFProps/Rate/index.vue'

export class DesignRate extends Rate {
  static designType = Rate.type
  static designProps = RateProps
}
