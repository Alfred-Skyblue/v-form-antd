<!--
 * @Author: ypt
 * @Date: 2021/11/26
 * @Description: 附件上传组件
-->
<template>
  <a-upload
    v-bind="record.props"
    v-on="record.on"
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
import { defineComponent, PropType, ref } from '@vue/composition-api'
import { vModelMixin } from '@pack/mixins/v-model-mixni'
import { toReactive, useVModel } from '@vueuse/core'
import message from '@pack/utils/message'
import { Upload, UploadFile } from 'ant-design-vue/types/upload'
import { isFunction } from 'lodash-es'
import { randomUUID } from '@pack/utils'
import { IVFormComponent } from '@pack/typings/v-form-component'

interface VUpload extends Partial<Upload> {
  valueFormat: 'JSON' | 'Array'
}

export default defineComponent({
  name: 'VUpload',
  mixins: [vModelMixin],
  props: {
    record: {
      type: Object as PropType<IVFormComponent>
    },
    modelValue: {
      type: [String, Array],
      default: () => []
    }
  },
  setup(props: any, { emit }: any) {
    const data = useVModel(props, 'modelValue', emit)
    const attrs = toReactive<VUpload>(props.record?.props)
    // 格式化附件值
    const fileList = ref<Array<UploadFile>>(
      attrs.valueFormat === 'JSON' ? JSON.parse(props.modelValue) : props.modelValue
    )

    // 设置value值
    const setFileList = async () => {
      // 使用定时器设置，异步操作时需要
      const timer = setTimeout(() => {
        // 合并属性，过滤掉上传失败的文件
        data.value = fileList.value
          .map(file => {
            const res = file?.response?.data
            return {
              name: file.name,
              status: file.status,
              uid: file.uid,
              url: file.url || '',
              thumbUrl: file.thumbUrl,
              ...(!!res && {
                uid: res?.uid || res?.id || randomUUID(),
                url: res?.url || '',
                thumbUrl: res?.thumbUrl || ''
              })
            }
          })
          .filter(file => file.status !== 'error')
        clearTimeout(timer)
      })
      return true
    }

    const handleRemove = async (file: UploadFile) => {
      // 如果传递了remove参数，则调用remove执行删除操作，如果未传递，则执行默认删除操作
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
        const currentFile = fileList.value.find(item => item.uid === file.uid)
        if (response.code === 0) {
          // const {
          //   data: { name, ...reset }
          // } = response
          // console.log('-> name', name)
          // set(fileList.value, index, { ...currentFile, ...reset })
          setFileList()
        } else {
          if (currentFile) {
            currentFile.status = 'error'
            currentFile.response = response.msg || '附件上传失败'
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
