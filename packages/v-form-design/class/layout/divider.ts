import { Divider } from '@common/class/layout/divider'
import DividerProps from '@design/components/VFProps/Divider/index.vue'

export class DesignDivider extends Divider {
  static designType = Divider.type
  static designProps = DividerProps
}
