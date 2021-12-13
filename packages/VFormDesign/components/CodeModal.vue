<!--
 * @Author: ypt
 * @Date: 2021/12/7
 * @Description: 渲染代码
-->
<template>
  <a-modal
    title="代码"
    :footer="null"
    :visible="visible"
    @cancel="visible = false"
    wrapClassName="v-code-modal"
    style="top: 20px"
    width="850px"
    :destroyOnClose="true"
  >
    <PreviewCode :editorJson="editorVueJson" fileFormat="vue" />
  </a-modal>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from '@vue/composition-api'
import { formatRules, removeAttrs } from '@pack/utils'
import PreviewCode from '@pack/VFormDesign/components/PreviewCode.vue'
import { IFormConfig } from '@pack/typings/v-form-component'

const codeVueFront = `<template>
  <div>
    <v-form-create
      :formConfig="formConfig"
      :formData="formData"
      v-model="fApi"
    />
    <a-button @click="submit">提交</a-button>
  </div>
</template>
<script>

export default {
  name: 'Demo',
  data () {
    return {
      fApi:{},
      formData:{},
      formConfig: `
/* eslint-disable */
let codeVueLast = `
    }
  },
  methods: {
    async submit() {
      const data = await this.fApi.submit()
      console.log(data)
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
      jsonData: {} as IFormConfig
    })

    const showModal = (formConfig: IFormConfig) => {
      formatRules(formConfig.formItems)
      state.visible = true
      state.jsonData = formConfig
    }

    const editorVueJson = computed(() => {
      return (
        codeVueFront +
        JSON.stringify(removeAttrs(state.jsonData), null, '\t') +
        codeVueLast
      )
    })

    return { ...toRefs(state), editorVueJson, showModal }
  }
})
</script>
