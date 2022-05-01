import { UploadImg } from '@common/class/form/uploadImg'
import UploadProps from '@design/components/VFProps/Upload/index.vue'

export class DesignUploadImg extends UploadImg {
  static designType = UploadImg.type
  static designProps = UploadProps
}
