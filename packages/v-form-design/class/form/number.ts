import { VNumber } from '@common/class/form/number'
import NumberProps from '@design/components/VFProps/Number/index.vue'

export class DesignVNumber extends VNumber {
  static designType = VNumber.type
  static designProps = NumberProps
}
