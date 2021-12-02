<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/26
 * @Description: 附件上传组件
-->
<template>
  <a-upload
    v-bind="props"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :fileList="fileList"
    @change="handleChange"
  >
    <a-button>
      <a-icon type="upload"></a-icon>
      <span>附件上传</span>
    </a-button>
  </a-upload>
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
  name: 'EUpload',
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
    // 我昨天想着，你一个人，

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
    return { fileList, handleChange }
  }
})
</script>
