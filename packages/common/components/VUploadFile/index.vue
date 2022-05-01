<!--
 * @Author: 杨攀腾
 * @Date: 2022-04-30 21:13:35
 * @Description: 附件上传
-->
<template>
  <a-upload
    v-model:file-list="uploadFileList"
    @remove="handleRemove"
    @change="uploadChange"
    v-bind="bindAttrs"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      {{ text }}
    </a-button>
  </a-upload>
</template>
<script lang="ts">
import type { UploadProps } from 'ant-design-vue'
import { UploadOutlined } from '@ant-design/icons-vue'
import { computed, defineComponent, PropType } from 'vue'
import { useUpload } from '@common/hooks/useUpload'
import { omit } from 'lodash-es'

export default defineComponent({
  name: 'VUploadFile',
  components: {
    UploadOutlined
  },
  inheritAttrs: false,
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
      default: '上传附件'
    }
  },
  setup(props, { emit, attrs }) {
    const { handleRemove, uploadFileList, uploadChange } = useUpload(
      props,
      emit,
      attrs
    )
    const bindAttrs = computed(() => omit(attrs, ['onChange', 'onRemove']))
    return {
      uploadFileList,
      uploadChange,
      handleRemove,
      bindAttrs
    }
  }
})
</script>
