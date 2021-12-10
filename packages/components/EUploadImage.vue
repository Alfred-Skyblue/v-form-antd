<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/26
 * @Description: 图片上传组件
-->
<template>
  <div class="clearfix">
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 8">
        <a-icon type="plus" />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { vModelMixin } from '@pack/mixins/v-model-mixni'
import { useVModel } from '@vueuse/core'
import { message } from 'ant-design-vue'
import { UploadFile } from 'ant-design-vue/types/upload'
import { isUndefined } from 'lodash-es'
import { randomUUID } from '@pack/utils'

export default defineComponent({
  name: 'VUpload',
  mixins: [vModelMixin],
  props: {
    props: {
      type: Object,
      default() {
        return {
          valueFormat: 'JSON'
        }
      }
    },
    modelValue: [String, Array]
  },
  setup(props: any, { emit }: any) {
    const data = useVModel(props, 'modelValue', emit)
    const fileList = ref<Array<UploadFile>>(
      props.props.valueFormat === 'JSON' ? JSON.parse(props.modelValue) : props.modelValue
    )
    const previewVisible = ref(false)
    const previewImage = ref<string | undefined>('')
    // 设置value值
    const setFileList = () => {
      data.value = fileList.value
        .map(file => {
          if (!isUndefined(file.response)) {
            const res = file.response
            return {
              type: 'file',
              name: file.name,
              status: file.status,
              uid: res.data.fileId || randomUUID(),
              url: res.data.url || ''
            }
          } else {
            return {
              type: 'file',
              name: file.name,
              status: file.status,
              uid: file.uid,
              url: file.url || ''
            }
          }
        })
        .filter(file => file.status !== 'error')
    }

    const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
      const { file } = info
      fileList.value = info.fileList

      if (file.status === 'done') {
        const { response } = file
        // 上传完成
        if (response.code === 0) {
          setFileList()
        } else {
          const errorFile = fileList.value.find(item => item.uid === file.uid)
          if (errorFile) {
            errorFile.status = 'error'
            errorFile.response = response.msg || '附件上传失败'
          }
          message.error(response.msg || '附件上传失败')
        }
      } else if (file.status === 'error') {
        // 上传失败
        message.error('附件上传失败')
      }
    }
    const handleCancel = () => {
      previewVisible.value = false
    }
    function getBase64(file: any) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    }
    const handlePreview = async (file: UploadFile) => {
      if (!file.url && !file.preview) {
        file.preview = (await getBase64(file.originFileObj)) as string
      }
      previewImage.value = file.url || file.preview
      previewVisible.value = true
    }
    return {
      fileList,
      handleChange,
      handlePreview,
      handleCancel,
      previewVisible,
      previewImage
    }
  }
})
</script>
