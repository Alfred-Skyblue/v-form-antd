import { BasicFormItem } from '@common/class/basic-form'
import VUploadFile from '@common/components/VUploadFile/index.vue'
import type { UploadProps } from 'ant-design-vue'
import type { IFormItemOptions } from '@common/types/form'
import { shallowRef } from 'vue'

export class UploadFile extends BasicFormItem {
  readonly _tag = shallowRef(VUploadFile)
  readonly type = 'uploadFile'
  readonly icon = 'upload'
  public props: UploadProps = {}
  constructor(options?: IFormItemOptions) {
    super({ label: '附件上传', ...options })
  }
}
