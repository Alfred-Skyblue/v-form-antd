import UploadProps from '@design/components/VFProps/Upload/index.vue'
import { UploadFile } from '@common/class/form/uploadFile'

export class DesignUploadFile extends UploadFile {
  static designType = UploadFile.type
  static designProps = UploadProps
}
