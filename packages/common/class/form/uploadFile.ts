import { BasicFormItem } from '@common/class/basic-form'
import VUploadFile from '@common/components/VUploadFile/index.vue'
import type { UploadProps } from 'ant-design-vue'
import type { IFormItemOptions } from '@common/types/form'
import { shallowRef } from 'vue'

export class UploadFile extends BasicFormItem {
  static type = 'uploadFile'
  readonly type = UploadFile.type
  readonly _tag = shallowRef(VUploadFile)
  readonly icon = 'upload'
  public props: UploadProps = {}
  constructor(options?: IFormItemOptions) {
    super({ label: '附件上传', ...options })
  }
}
