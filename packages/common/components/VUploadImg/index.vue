<!--
 * @Author: 杨攀腾
 * @Date: 2022-04-30 14:56:49
 * @Description: VUploadImg 图片上传
-->

<template>
  <a-upload
    v-model:file-list="uploadFileList"
    list-type="picture-card"
    @preview="handlePreview"
    @remove="handleRemove"
    @change="uploadChange"
    v-bind="bindAttrs"
  >
    <div v-if="showUpload">
      <PlusOutlined class="push-outlined"></PlusOutlined>
      <div class="v-mt-8">{{ text }}</div>
    </div>
  </a-upload>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import type { UploadProps } from 'ant-design-vue'
import type { IAnyObject } from '@common/types'
import { PlusOutlined } from '@ant-design/icons-vue'
import { v3ImgPreviewFn } from 'v3-img-preview'

import { omit } from 'lodash-es'
import { useUpload } from '@common/hooks/useUpload'
function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export default defineComponent({
  name: 'VUploadImg',
  components: { PlusOutlined },
  props: {
    value: {
      type: Array as PropType<UploadProps['fileList']>,
      default: () => []
    },
    showUpload: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: '图片上传'
    }
  },
  setup(props, { emit, attrs }) {
    const { handleRemove, uploadFileList, uploadChange } = useUpload(
      props,
      emit,
      attrs
    )
    const bindAttrs = computed(() =>
      omit(attrs, ['onChange', 'onRemove', 'onPreview'])
    )

    const handlePreview = async (file: IAnyObject) => {
      await (attrs as IAnyObject)?.onPreview?.(file)
      if (!file.url && !file.preview) {
        file.preview = (await getBase64(file.originFileObj)) as string
      }
      const url = file.url || file.preview
      v3ImgPreviewFn(url)
    }

    return {
      uploadFileList,
      handlePreview,
      handleRemove,
      uploadChange,
      bindAttrs
    }
  }
})
</script>
<style lang="less" scoped>
.push-outlined {
  font-size: 28px;
  color: #666 !important;
}
</style>
