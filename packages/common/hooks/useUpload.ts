import { nextTick, ref } from 'vue'
import { useVModel } from '@vueuse/core'
import type {
  UploadChangeParam,
  UploadFile
} from 'ant-design-vue/lib/upload/interface'
import { isFunction } from 'lodash-es'
import type { UploadProps } from 'ant-design-vue'
import { message } from 'ant-design-vue'
import type { IAnyObject } from '@common/types'

interface IUploadProps {
  value: UploadProps['fileList']
}

export const useUpload = (
  props: IUploadProps,
  emit: (name: string, ...args: any[]) => void,
  attrs: IAnyObject
) => {
  const fileList = useVModel(props, 'value', emit)
  const uploadFileList = ref([...fileList.value!])

  /**
   * 更新附件列表
   */
  const updateFileList = () => {
    nextTick(() => {
      fileList.value = uploadFileList.value?.filter(
        file => file.status === 'done'
      )
    })
  }
  /**
   * 上传文件改变时的状态
   * @param {UploadChangeParam} info
   */
  const uploadChange = (info: UploadChangeParam) => {
    attrs?.onChange?.(info)
    const { file } = info
    const { status, response } = file ?? {}
    if (status === 'done' && response?.code === 0) {
      updateFileList()
    } else if (file.status === 'error') {
      message.error(response?.msg || '附件上传失败')
    }
  }
  /**
   * 点击文件链接或预览图标时的回调
   * @param {UploadFile} file
   * @returns {Promise<any>}
   */
  const handleRemove = async (file: UploadFile) => {
    let remove = attrs?.onRemove
    remove = isFunction(remove) ? remove : () => Promise.resolve(true)
    const res = await remove(file)
    if (res === false) return res
    nextTick(updateFileList)
    return res
  }

  return {
    fileList,
    uploadFileList,
    updateFileList,
    uploadChange,
    handleRemove
  }
}
