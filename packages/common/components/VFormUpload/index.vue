<!--
 * @Author: 杨攀腾
 * @Date: 2022-04-30 14:56:49
 * @Description: VFormUpload 上传组件
-->

<template>
  <div class="clearfix">
    <a-upload
      v-model:file-list="fileList"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      @preview="handlePreview"
    >
      <div v-if="fileList.length < 8">
        <PlusOutlined class="push-outlined"></PlusOutlined>
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { UploadProps } from 'ant-design-vue'
import type { IAnyObject } from '@common/types'
import { PlusOutlined } from '@ant-design/icons-vue'
function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

export default defineComponent({
  name: 'VFormUpload',
  components: { PlusOutlined },
  setup() {
    const previewVisible = ref(false)
    const previewImage = ref('')
    const previewTitle = ref('')

    const fileList = ref<UploadProps['fileList']>([
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      },
      {
        uid: '-2',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      },
      {
        uid: '-3',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      },
      {
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      },
      {
        uid: '-xxx',
        percent: 50,
        name: 'image.png',
        status: 'uploading',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      },
      {
        uid: '-5',
        name: 'image.png',
        status: 'error'
      }
    ])

    const handleCancel = () => {
      previewVisible.value = false
      previewTitle.value = ''
    }
    const handlePreview = async (file: IAnyObject) => {
      if (!file.url && !file.preview) {
        file.preview = (await getBase64(file.originFileObj)) as string
      }
      previewImage.value = file.url || file.preview
      previewVisible.value = true
      previewTitle.value =
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    }

    return {
      previewVisible,
      previewImage,
      fileList,
      handleCancel,
      handlePreview,
      previewTitle
    }
  }
})
</script>
<style lang="less" scoped>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.push-outlined {
  font-size: 28px;
  color: #666 !important;
}
</style>
