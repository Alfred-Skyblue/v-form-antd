<!--
 * @Author: 杨攀腾
 * @Date: 2022-04-30 14:56:49
 * @Description: VFormUpload 上传组件
-->

<template>
  <a-upload
    v-model:file-list="uploadFileList"
    list-type="picture-card"
    @preview="handlePreview"
    @remove="handleRemove"
    v-bind="formItem && formItem.props"
    v-on="listeners"
  >
    <div v-if="showUpload">
      <PlusOutlined class="push-outlined"></PlusOutlined>
      <div class="v-mt-8">{{ formItem?.label || '图片上传' }}</div>
    </div>
  </a-upload>
</template>
<script lang="ts">
import { computed, defineComponent, nextTick, PropType, ref, toRefs } from 'vue'
import type { UploadProps } from 'ant-design-vue'
import type { IAnyObject } from '@common/types'
import { PlusOutlined } from '@ant-design/icons-vue'
import { v3ImgPreviewFn } from 'v3-img-preview'
import { useVModel } from '@vueuse/core'
import type { BasicFormItem } from '@common/class/basic-form'
import type {
  UploadChangeParam,
  UploadFile
} from 'ant-design-vue/lib/upload/interface'
import { isFunction, omit } from 'lodash-es'
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
  props: {
    formItem: {
      type: Object as PropType<BasicFormItem>,
      required: true
    },
    value: {
      type: Array as PropType<UploadProps['fileList']>,
      default: () => []
    },
    showUpload: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const { formItem } = toRefs(props)
    const fileList = useVModel(props, 'value', emit)
    const uploadFileList = ref([...fileList.value!])

    const onEvents = computed(() => formItem.value?.on ?? {})
    const listeners = computed(() =>
      omit(onEvents, ['change', 'remove', 'preview'])
    )

    const handlePreview = async (file: IAnyObject) => {
      await onEvents.value?.preview?.(file)
      if (!file.url && !file.preview) {
        file.preview = (await getBase64(file.originFileObj)) as string
      }
      const url = file.url || file.preview
      v3ImgPreviewFn(url)
    }

    const updateFileList = () => {
      nextTick(() => {
        fileList.value = uploadFileList.value?.filter(
          file => file.status === 'done'
        )
      })
    }

    const uploadChange = (info: UploadChangeParam) => {
      onEvents.value?.change?.(info)

      const { file } = info
      if (file.status === 'done' && file.response?.code === 0) {
        updateFileList()
      }
    }

    const handleRemove = async (file: UploadFile) => {
      let remove = formItem.value?.props?.remove
      remove = isFunction(remove) ? remove : () => Promise.resolve(true)
      const res = await remove(file)
      if (res === false) return res
      nextTick(updateFileList)
      return res
    }
    return {
      fileList,
      uploadFileList,
      handlePreview,
      handleRemove,
      uploadChange,
      listeners
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
