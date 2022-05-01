import { UploadImg } from '@common/class/form/uploadImg'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import UploadProps from '@design/components/VFProps/Upload/index.vue'

export class DesignUploadImg extends UploadImg {
  public propsCmp: Component = shallowRef(UploadProps)
}
