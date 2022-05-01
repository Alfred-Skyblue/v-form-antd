import { Textarea } from '@common/class/form/textarea'
import TextareaProps from '@design/components/VFProps/Textarea/index.vue'

export class DesignTextarea extends Textarea {
  static designType = Textarea.type
  static designProps = TextareaProps
}
