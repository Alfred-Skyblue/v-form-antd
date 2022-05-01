import { BasicFormItem } from '@common/class/basic-form'
import type { UploadProps } from 'ant-design-vue'
import type { IFormItemOptions } from '@common/types/form'
import { shallowRef } from 'vue'
import VUploadImg from '@common/components/VUploadImg/index.vue'

export class UploadImg extends BasicFormItem {
  static type = 'uploadImg'
  readonly type = UploadImg.type
  readonly _tag = shallowRef(VUploadImg)
  readonly icon = 'upload-img'
  public props: UploadProps = {}
  constructor(options?: IFormItemOptions) {
    super({ label: '图片上传', ...options })
  }
}
