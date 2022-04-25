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
        <a @click="$emit(item.event)">
          <Icon :type="item.icon" />
        </a>
      </a-tooltip>
      <div class="v-h-1/3 v-w-1 v-bg-[#c4c4c4]"></div>
      <a disabled>
        <Icon type="undo" />
      </a>
      <a disabled>
        <Icon type="redo" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Icon from '@design/components/Icon/index.vue'

const toolbarConfig = reactive([
  {
    title: '预览',
    type: 'preview',
    event: 'handlePreview',
    icon: 'preview'
  },
  {
    title: '导入',
    type: 'importJson',
    event: 'handleOpenImportJsonModal',
    icon: 'upload-file'
  },
  {
    title: '生成JSON',
    type: 'exportJson',
    event: 'handleOpenJsonModal',
    icon: 'json'
  },
  {
    title: '生成代码',
    type: 'exportCode',
    event: 'handleOpenCodeModal',
    icon: 'code'
  },
  {
    title: '清空',
    type: 'reset',
    event: 'handleClear',
    icon: 'delete'
  }
])
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
    .iconfont {
      font-size: 18px;
    }
  }
}
</style>
