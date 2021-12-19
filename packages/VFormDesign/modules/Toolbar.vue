<!--
 * @Author: ypt
 * @Date: 2021/11/23
 * @Description: 工具栏
-->
<template>
  <div class="operating-area">
    <!-- 头部操作按钮区域 start -->
    <!-- 操作左侧区域 start -->
    <div class="left-btn-box">
      <a-tooltip v-for="item in toolbarsConfigs" :title="item.title" :key="item.icon">
        <a @click="$emit(item.event)" class="toolbar-text">
          <a-icon :type="item.icon" />
        </a>
      </a-tooltip>
      <a-divider type="vertical" />
      <a-tooltip title="撤销">
        <a :class="{ disabled: !canUndo }" :disabled="!canUndo" @click="undo">
          <a-icon type="undo" />
        </a>
      </a-tooltip>
      <a-tooltip title="重做">
        <a :class="{ disabled: !canRedo }" :disabled="!canRedo" @click="redo">
          <a-icon type="redo" />
        </a>
      </a-tooltip>
    </div>
  </div>
  <!-- 操作区域 start -->
</template>
<script lang="ts">
import { defineComponent, inject, reactive, toRefs } from '@vue/composition-api'
import { UseRefHistoryReturn } from '@vueuse/core'
import { IFormConfig } from '@pack/typings/v-form-component'

interface IToolbarsConfig {
  type: string
  title: string
  icon: string
  event: string
}

export default defineComponent({
  name: 'operatingArea',
  setup() {
    const state = reactive<{
      toolbarsConfigs: IToolbarsConfig[]
    }>({
      toolbarsConfigs: [
        {
          title: '预览',
          type: 'preview',
          event: 'handlePreview',
          icon: 'chrome'
        },
        {
          title: '导入',
          type: 'importJson',
          event: 'handleOpenImportJsonModal',
          icon: 'upload'
        },
        {
          title: '生成JSON',
          type: 'exportJson',
          event: 'handleOpenJsonModal',
          icon: 'credit-card'
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
          event: 'handleClearFormItems',
          icon: 'delete'
        }
      ]
    })
    const historyRef = inject('historyReturn') as UseRefHistoryReturn<
      IFormConfig,
      IFormConfig
    >

    const { undo, redo, canUndo, canRedo } = historyRef
    return { ...toRefs(state), undo, redo, canUndo, canRedo }
  }
})
</script>

<style lang="less" scoped>
//noinspection CssUnknownTarget
@import '../../../styles/variable.less';
.operating-area {
  border-bottom: 2px solid @border-color;
  font-size: 16px;
  text-align: left;
  height: @operating-area-height;
  line-height: @operating-area-height;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-content: center;

  a {
    color: #666;
    margin: 0 5px;
    &.disabled,
    &.disabled:hover {
      color: #ccc;
    }
    &:hover {
      color: @primary-color;
    }
    > span {
      font-size: 14px;
      padding-left: 2px;
    }
  }
}
</style>
