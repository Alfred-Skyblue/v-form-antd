<template>
  <div>
    <div class="v-json-box">
      <codemirror style="height: 100%" ref="myEditor" :value="editorJson"></codemirror>
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
import Clipboard from 'clipboard'
import message from '@pack/utils/message'
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

    const exportData = (data: string, fileName = `file.${props.fileFormat}`) => {
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
      // 复制数据
      const clipboard = new Clipboard('.copy-btn')
      clipboard.on('success', () => {
        message.success('复制成功')
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        message.error('复制失败')
        clipboard.destroy()
      })
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
