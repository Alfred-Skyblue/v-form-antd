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
import { defineComponent, PropType, ref } from '@vue/composition-api'
import { vModelMixin } from '@pack/mixins/v-model-mixni'
import { toReactive, useVModel } from '@vueuse/core'
import { message } from 'ant-design-vue'
import { Upload, UploadFile } from 'ant-design-vue/types/upload'
import { isFunction } from 'lodash-es'
import { randomUUID } from '@pack/utils'
interface EUpload extends Partial<Upload> {
  valueFormat: 'JSON' | 'Array'
  replaceFields: { [key in keyof UploadFile]: string }
}

export default defineComponent({
  name: 'EUpload',
  mixins: [vModelMixin],
  props: {
    props: {
      type: Object as PropType<EUpload>,
      default() {
        return {
          valueFormat: 'JSON',
          replaceFields: {
            name: 'name',
            status: 'status',
            uid: 'uid',
            url: 'url',
            type: 'file',
            thumbUrl: 'thumbUrl',
            size: 'size'
          }
        }
      }
    },
    str: String,
    modelValue: [String, Array]
  },
  setup(props: any, { emit }: any) {
    const data = useVModel(props, 'modelValue', emit)
    const attrs = toReactive<EUpload>(props.props)
    // TODO 附件上传数据格式化
    const formatFileList: () => Array<UploadFile> = () => {
      const { replaceFields } = attrs
      const list = [{ name: 'file' }]
      return list.map((item: { [key: string]: any }) => {
        return Object.keys(replaceFields).reduce((total, key) => {
          console.log('-> total', total)
          total[key] = item[replaceFields[key]]
          return total
        }, {})
        // return {
        //   name: item[name],
        //   status: item[status!],
        //   uid: item[uid],
        //   url: item[url!],
        //   type: item[type],
        //   size: item[size]
        // }
      })
    }
    const fileList = ref<Array<UploadFile>>(formatFileList())

    // attrs.valueFormat = '改变了'
    // 设置value值
    const setFileList = async () => {
      const {
        replaceFields: { name, status, uid, url }
      } = attrs

      data.value = fileList.value
        .map(file => {
          const res = file.response
          return {
            [name]: file.name,
            [status]: file.status,
            [uid]: file.uid,
            [url]: file.url || '',
            ...(!!res && {
              [uid]: res.data.fileId || randomUUID(),
              [url]: res.data.url || ''
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
