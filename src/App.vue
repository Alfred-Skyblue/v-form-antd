<template>
  <a-config-provider :locale="zhCN">
    <div><v-form-design /></div>
    <!--    <VUploadFile-->
    <!--      :value="fileList"-->
    <!--      @remove="handleRemove"-->
    <!--      listType="picture"-->
    <!--    ></VUploadFile>-->
  </a-config-provider>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
// import VUploadFile from '@common/components/VUploadFile/index.vue'
// import type { UploadProps } from 'ant-design-vue'
// const fileList = ref<UploadProps['fileList']>([
//   {
//     uid: '-1',
//     name: 'image.png',
//     status: 'done',
//     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
//   }
// ])
//
// const handleRemove = (file: any) => {
//   console.log('=>(App.vue:23) file', file)
// }
</script>
