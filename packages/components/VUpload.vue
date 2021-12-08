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
    :remove="handleRemove"
  >
    <a-button>
      <a-icon type="upload"></a-icon>
      <span>附件上传</span>
    </a-button>
  </a-upload>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, set } from '@vue/composition-api'
import { vModelMixin } from '@pack/mixins/v-model-mixni'
import { toReactive, useVModel } from '@vueuse/core'
import { message } from 'ant-design-vue'
import { Upload, UploadFile } from 'ant-design-vue/types/upload'
import { isFunction } from 'lodash-es'
import { randomUUID } from '@pack/utils'
// import { randomUUID } from '@pack/utils'

interface VUpload extends Partial<Upload> {
  valueFormat: 'JSON' | 'Array'
}

export default defineComponent({
  name: 'VUpload',
  mixins: [vModelMixin],
  props: {
    props: {
      type: Object as PropType<VUpload>,
      default() {
        return {
          valueFormat: 'Array'
        }
      }
    },
    str: String,
    modelValue: [String, Array]
  },
  setup(props: any, { emit }: any) {
    const data = useVModel(props, 'modelValue', emit)
    const attrs = toReactive<VUpload>(props.props)

    // 格式化附件值
    const fileList = ref<Array<UploadFile>>(
      attrs.valueFormat === 'JSON' ? JSON.parse(props.modelValue) : props.modelValue
    )

    // attrs.valueFormat = '改变了'
    // 设置value值
    const setFileList = async () => {
      data.value = fileList.value
        .map(file => {
          const res = file.response
          return {
            name: file.name,
            status: file.status,
            uid: file.uid,
            url: file.url || '',
            thumbUrl: file.thumbUrl,
            ...(!!res && {
              uid: res?.id || randomUUID(),
              url: res.url || '',
              thumbUrl: res.thumbUrl || ''
            })
          }
        })
        .filter(file => file.status !== 'error')
      return true
    }

    const handleRemove = async (file: UploadFile) => {
      if (isFunction(attrs.remove)) {
        const removeFlag = await attrs.remove(file)
        return removeFlag && setFileList()
      }
      return setFileList()
    }
    const handleChange = (info: { file: UploadFile; fileList: UploadFile[] }) => {
      const { file } = info
      fileList.value = info.fileList
      if (file.status === 'done') {
        const { response } = file
        const index = fileList.value.findIndex(item => item.uid === file.uid)
        set(fileList.value, index, {
          ...fileList.value[index],
          ...(response.data || response)
        })
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
    return { fileList, handleChange, handleRemove }
  }
})
</script>
