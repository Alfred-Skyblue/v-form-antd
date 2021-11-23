<template>
  <div>
    <div class="y-json-box">
      <codemirror
        style="height: 100%"
        ref="myEditor"
        :value="editorJson"
      ></codemirror>
    </div>
    <div class="copy-btn-box">
      <a-button
        @click="handleCopyJson"
        type="primary"
        class="copy-btn"
        data-clipboard-action="copy"
        :data-clipboard-text="editorJson"
      >
        复制数据
      </a-button>
      <a-button @click="handleExportJson" type="primary">导出代码</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { codemirror } from 'vue-codemirror-lite'
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

export default defineComponent({
  name: 'PreviewCode',
  components: {
    codemirror
  },
  props: {
    fileFormat: {
      type: String,
      default: 'json'
    },
    editorJson: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const state = reactive({
      visible: false
    })

    const exportData = (
      data: string,
      fileName = `file.${props.fileFormat}`
    ) => {
      let content = 'data:text/csv;charset=utf-8,'
      content += data
      const encodedUri = encodeURI(content)
      const actions = document.createElement('a')
      actions.setAttribute('href', encodedUri)
      actions.setAttribute('download', fileName)
      actions.click()
    }

    const handleExportJson = () => {
      exportData(props.editorJson)
    }

    const handleCopyJson = () => {
      console.log('copy')
    }
    return {
      ...toRefs(state),
      exportData,
      handleCopyJson,
      handleExportJson
    }
  }
})
</script>

<style lang="less" scoped>
// modal复制按钮样式
.copy-btn-box {
  padding-top: 8px;
  text-align: center;

  .copy-btn {
    margin-right: 8px;
  }
}
</style>
