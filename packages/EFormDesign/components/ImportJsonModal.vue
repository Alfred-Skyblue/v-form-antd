<!--
 * @Author: 杨攀腾
 * @Date: 2021/12/7
 * @Description: 导入JSON模板
-->
<template>
  <a-modal
    title="JSON数据"
    :visible="visible"
    @ok="handleImportJson"
    @cancel="handleCancel"
    cancelText="关闭"
    :destroyOnClose="true"
    wrapClassName="y-code-modal"
    style="top: 20px"
    width="850px"
  >
    <p class="hint-box">导入格式如下:</p>
    <div class="y-json-box">
      <codemirror style="height: 100%" ref="myEditor" v-model="json"></codemirror>
    </div>
    <a-upload
      action="/abc"
      :beforeUpload="beforeUpload"
      :showUploadList="false"
      accept="application/json"
    >
      <a-button type="primary">导入json文件</a-button>
    </a-upload>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { message } from 'ant-design-vue'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import { codemirror } from 'vue-codemirror-lite'
import { IFormConfig } from '@pack/typings/EFormComponent'
import { formItemsForEach, generateKey } from '@pack/utils'

export default defineComponent({
  name: 'ImportJsonModal',
  components: {
    codemirror
  },
  setup() {
    const state = reactive({
      visible: false,
      json: `{
  "formItems": [
    {
      "type": "input",
      "label": "输入框",
      "field": "input_2",
      "span": 24,
      "props": {
        "type": "text"
      }
    }
  ],
  "config": {
    "layout": "horizontal",
    "labelLayout": "flex",
    "labelWidth": 100,
    "labelCol": {},
    "wrapperCol": {}
  }
}`,
      jsonData: {
        formItems: {},
        config: {}
      },
      handleSetSelectItem: null
    })
    const { formDesignMethods } = useFormDesignState()
    const handleCancel = () => {
      state.visible = false
    }
    const showModal = () => {
      state.visible = true
    }
    const handleImportJson = () => {
      // 导入JSON
      try {
        const editorJsonData = JSON.parse(state.json) as IFormConfig
        formItemsForEach(editorJsonData.formItems, formItem => {
          generateKey(formItem)
        })
        formDesignMethods.setFormConfig({
          ...editorJsonData,
          activeKey: 1,
          currentItem: { type: '' }
        })
        handleCancel()
        // 导入之后，需要清除已选择key
        // this.handleSetSelectItem({ key: '' })
        // formDesignMethods.handleSetSelectItem({ type: '' })
        message.success('导入成功')
      } catch (error) {
        console.error(error)
        message.error('导入失败，数据格式不对')
      }
    }
    const beforeUpload = (e: File) => {
      // 通过json文件导入
      const reader = new FileReader()
      reader.readAsText(e)
      reader.onload = function () {
        state.json = this.result as string
        handleImportJson()
      }
      return false
    }

    return {
      handleImportJson,
      beforeUpload,
      handleCancel,
      showModal,
      ...toRefs(state)
    }
  }
})
</script>
