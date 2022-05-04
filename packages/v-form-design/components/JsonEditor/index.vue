<template>
  <section>
    <div class="v-h-500 v-overflow-auto json-container">
      <pre
        ref="jsonEditor"
        v-html="formattedJSON"
        contenteditable="true"
        placeholder="请输入"
        @blur="updateJSON"
      ></pre>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { IAnyObject } from '@common/types'
import { message } from 'ant-design-vue'
// 设置json样式
function syntaxHighlight(json: IAnyObject | string): string {
  if (typeof json !== 'string') {
    json = JSON.stringify(
      json,
      (key, value) => {
        if (
          ['_key', '_isLayout', 'currentItem', '_tag', 'icon'].includes(key)
        ) {
          return undefined
        }
        return value
      },
      2
    )
  }
  json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>')
  return json.replace(
    /("(\\u[a-zA-Z\d]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    function (match) {
      let cls = 'number'
      if (/^"/.test(match)) {
        cls = /:$/.test(match) ? 'key' : 'string'
      } else if (/true|false/.test(match)) {
        cls = 'boolean'
      } else if (/null/.test(match)) {
        cls = 'null'
      }
      return '<span class="' + cls + '">' + match + '</span>'
    }
  )
}

export interface IJsonEditor {
  getValue: () => string
}
export default defineComponent({
  name: 'JsonEditor',
  emits: ['change'],
  props: {
    code: {
      type: [Object, Array],
      default: () => ({
        defaultTab: '基础信息',
        tabList: [
          {
            label: '基础信息',
            show: true
          },
          {
            label: '职业规划',
            age: 30
          },
          {
            label: '相关要件'
          }
        ],
        defaultTab1: '基础信息',
        tabList2: [
          {
            label: '基础信息',
            show: true
          },
          {
            label: '职业规划',
            age: 30
          },
          {
            label: '相关要件'
          }
        ]
      })
    }
  },
  setup(props, { emit }) {
    const jsonEditor = ref<HTMLElement | null>(null)
    const formattedJSON = ref(syntaxHighlight(props.code))

    const updateJSON = (e: IAnyObject) => {
      let jsonObj: IAnyObject = {}
      try {
        JSON.parse((e.target as IAnyObject).innerText)
        jsonObj = (e.target as IAnyObject).innerText
      } catch (e) {
        message.error('请输入正确的JSON格式')
        return false
      }
      formattedJSON.value = syntaxHighlight(jsonObj)
      emit('change', jsonObj)
    }

    const getValue = () => {
      if (!jsonEditor.value) return
      try {
        JSON.parse(jsonEditor.value!.innerText)
      } catch (e) {
        message.error('请输入正确的JSON格式')
        return false
      }
      return jsonEditor.value!.innerText
    }
    return { formattedJSON, updateJSON, jsonEditor, getValue }
  }
})
</script>
<style lang="less" scoped>
section {
  padding: 10px;
  .json-container {
    outline: 1px solid #ccc;
    :deep(pre) {
      min-height: 460px;
      padding: 4px;
      outline: 0;
      /* :empty 选择器匹配没有子元素且没有文本节点的元素。 */
      &:empty::before {
        content: attr(placeholder);
        color: #999;
      }

      .string {
        color: green;
      }

      .number {
        color: darkorange;
      }

      .boolean {
        color: blue;
      }

      .null {
        color: magenta;
      }

      .key {
        color: red;
      }
    }
  }
}
</style>
