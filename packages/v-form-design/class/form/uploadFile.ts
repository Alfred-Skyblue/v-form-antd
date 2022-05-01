import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import UploadProps from '@design/components/VFProps/Upload/index.vue'
import { UploadFile } from '@common/class/form/uploadFile'

export class DesignUploadFile extends UploadFile {
  public propsCmp: Component = shallowRef(UploadProps)
}
