<!--
 * @Author: 杨攀腾
 * @Date: 2021/12/7
 * @Description: $END$
-->
<template>
  <a-modal
    title="代码"
    :footer="null"
    :visible="visible"
    @cancel="visible = false"
    wrapClassName="y-code-modal"
    style="top: 20px"
    width="850px"
    :destroyOnClose="true"
  >
    <PreviewCode :editorJson="editorVueJson" fileFormat="vue" />
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from '@vue/composition-api'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import { cloneDeep } from 'lodash-es'
import { formItemsForEach } from '@pack/utils'
import PreviewCode from '@pack/EFormDesign/components/PreviewCode.vue'

const codeVueFront = `<template>
  <div>
    <e-form-create
      :value="jsonData"
      ref="KFB"
      @submit="handleSubmit"
    />
    <button @click="getData">提交</button>
  </div>
</template>
<script>

export default {
  name: 'Demo',
  data () {
    return {
      jsonData: `
/* eslint-disable */
let codeVueLast = `
    }
  },
  methods: {
    handleSubmit(p) {
       // 通过表单提交按钮触发，获取promise对象
       p().then(res => {
         // 获取数据成功
         alert(JSON.stringify(res))
       })
         .catch(err => {
           console.log(err, '校验失败')
         })
     },
     getData() {
       // 通过函数获取数据
       this.$refs.KFB.getData().then(res => {
         // 获取数据成功
         alert(JSON.stringify(res))
       })
         .catch(err => {
           console.log(err, '校验失败')
         })
     }
  }
}
<\/script>`
//
export default defineComponent({
  name: 'CodeModal',
  components: { PreviewCode },
  setup() {
    const state = reactive({
      visible: false,
      editorVueJson: {}
    })
    const { formConfig } = useFormDesignState()

    const showModal = () => {
      state.visible = true
    }

    watch(
      () => state.visible,
      newVal => {
        if (newVal) {
          const jsonData = cloneDeep(formConfig.value)
          formItemsForEach(jsonData.formItems, formItem => {
            delete formItem.icon
            delete formItem.key
          })
          delete jsonData.currentItem
          delete jsonData.activeKey
          state.editorVueJson =
            codeVueFront + JSON.stringify(jsonData, null, '\t') + codeVueLast
        }
      }
    )
    return { ...toRefs(state), showModal }
  }
})
</script>
