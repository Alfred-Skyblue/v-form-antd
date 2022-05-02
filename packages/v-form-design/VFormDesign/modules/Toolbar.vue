<!--
 * @author: ypt
 * @date: 2022/4/16
 * @description: 工具栏
-->
<template>
  <div class="toolbar-box v-h-45 v-flex v-items-center v-px-20">
    <div class="left-buttons v-flex v-gap-10 v-h-full v-items-center">
      <a-tooltip
        v-for="item in toolbarConfig"
        :title="item.title"
        :key="item.icon"
      >
        <a @click="item.event">
          <Icon :type="item.icon" />
        </a>
      </a-tooltip>
      <div class="v-h-1/3 v-w-1 v-bg-[#c4c4c4]"></div>
      <a :class="{ disabled: !canUndo }" @click="undo">
        <Icon type="undo" />
      </a>
      <a :class="{ disabled: !canRedo }" @click="redo">
        <Icon type="redo" />
      </a>
    </div>
    <JsonPreview ref="jsonPreview"></JsonPreview>
    <ImportJson ref="importJson"></ImportJson>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Icon from '@design/components/Icon/index.vue'
import JsonPreview from '@design/VFormDesign/components/JsonPreview.vue'
import type { IJsonPreview } from '@design/VFormDesign/components/JsonPreview.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import ImportJson from '@design/VFormDesign/components/ImportJson.vue'
import type { IImportJson } from '@design/VFormDesign/components/ImportJson.vue'
import { useDebouncedRefHistory } from '@vueuse/core'
import { cloneDeep } from 'lodash-es'
import { findFormItem } from '@common/utils/util'

const jsonPreview = ref<IJsonPreview | null>(null)
const importJson = ref<IImportJson | null>(null)

const { handleClear, formConfig } = useFormDesign()
const toolbarConfig = reactive([
  {
    title: '预览',
    type: 'preview',
    event: () => {
      console.log('preview')
    },
    icon: 'preview'
  },
  {
    title: '导入',
    type: 'importJson',
    event: () => {
      importJson.value?.handlePreview()
    },
    icon: 'upload-file'
  },
  {
    title: '生成JSON',
    type: 'exportJson',
    icon: 'json',
    event: () => {
      jsonPreview.value?.handlePreview()
    }
  },
  {
    title: '清空',
    type: 'reset',
    event: handleClear,
    icon: 'delete'
  }
])

const { undo, redo, canUndo, canRedo } = useDebouncedRefHistory(formConfig, {
  capacity: 20,
  debounce: 1000,
  dump: cloneDeep,
  deep: true,
  parse(val) {
    const { formItems, currentItem } = val
    // region 重新定义 currentItem 的指向
    const newCur = findFormItem(
      formItems,
      item => item._key === currentItem._key
    )
    if (newCur) val.currentItem = newCur
    // endregion
    return val
  }
})
</script>

<style lang="less" scoped>
.toolbar-box {
  height: var(--toolbar-height);
  border-bottom: 2px solid #ccc;
  a {
    color: #666;
    &:hover {
      @apply v-text-primary;
    }
    &.disabled,
    &.disabled:hover {
      color: #ccc;
      cursor: not-allowed;
    }
    .iconfont {
      font-size: 18px;
    }
  }
}
</style>
