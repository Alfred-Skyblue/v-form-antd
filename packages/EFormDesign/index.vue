<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/18
 * @Description: 表单设计器
-->
<template>
  <a-config-provider :locale="locale">
    <div class="e-form-design-container">
      <header class="e-form-design-header"></header>
      <section class="content">
        <div class="left">
          <a-collapse>
            <a-collapse-panel
              v-if="baseComponents.length > 0"
              header="基础控件"
              key="1"
            >
              <CollapseItem
                :list="baseComponents"
                @addAttrs="handleAddAttrs"
                @handleListPush="handleListPush"
              ></CollapseItem>
            </a-collapse-panel>
          </a-collapse>
        </div>
        <div class="node-panel">
          <Toolbar @handleOpenJsonModal="handleOpenJsonModal"></Toolbar>
          <FormComponentPanel
            :current-item="currentItem"
            :data="data"
            @handleSetSelectItem="handleSetSelectItem"
          ></FormComponentPanel>
        </div>
        <div class="right"><PropsPanel ref="propsPanel"></PropsPanel></div>
      </section>
      <JsonModal ref="jsonModal"></JsonModal>
    </div>
  </a-config-provider>
</template>
<script lang="ts">
import CollapseItem from './modules/CollapseItem.vue'
import FormComponentPanel from './modules/FormComponentPanel.vue'
import JsonModal from './components/JsonModal.vue'

import Toolbar from './modules/Toolbar.vue'
import PropsPanel, { IPropsPanel } from './modules/PropsPanel.vue'

import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  provide,
  Ref
} from '@vue/composition-api'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { IEFormComponent, IFormConfig } from '@pack/typings/EFormComponent'
import { generateKey } from '@pack/utils'
import { cloneDeep } from 'lodash-es'
import { baseComponents } from '@pack/core/formItemConfig'
import { IJsonModalMethods } from '@pack/EFormDesign/components/JsonModal.vue'

interface IState {
  data: IFormConfig
  currentItem: IEFormComponent
  locale: any
  baseComponents: IEFormComponent[]
  propsPanel: Ref<null | IPropsPanel>
  jsonModal: Ref<null | IJsonModalMethods>
}

export interface IFormDesignMethods {
  handleSetSelectItem(item: IEFormComponent): void
  handleListPush(item: IEFormComponent): void
  handleCopy(item?: IEFormComponent, isCopy?: boolean): void
  handleAddAttrs(formItems: IEFormComponent[], index: number): void
  handleColAdd(
    event: { newIndex: string },
    formItems: IEFormComponent[],
    isCopy?: boolean
  ): void
}

export default defineComponent({
  name: 'EFormDesign',
  components: {
    CollapseItem,
    FormComponentPanel,
    PropsPanel,
    Toolbar,
    JsonModal
  },
  setup() {
    // 子组件实例
    const propsPanel = ref<null | IPropsPanel>(null)
    const jsonModal = ref<null | IJsonModalMethods>(null)

    const state = reactive<IState>({
      locale: zhCN, // 国际化
      baseComponents, // 基础控件列表
      currentItem: { type: '' }, // 当前选中的控件
      data: {
        formItems: [],
        config: { labelLayout: 'flex', labelCol: {}, wrapperCol: {} }
      },
      propsPanel,
      jsonModal
    })
    /**
     * 选中表单项
     * @param record 当前选中的表单项
     */
    const handleSetSelectItem = (record: IEFormComponent) => {
      state.currentItem = record
      state.propsPanel?.changeTab(record.key ? 2 : 1)
    }

    /**
     * 添加属性
     * @param formItems
     * @param index
     */
    const handleAddAttrs = (formItems: IEFormComponent[], index: number) => {
      const item = formItems[index]
      generateKey(item)
    }

    /**
     * 单击控件时添加到面板中
     * @param item {IEFormComponent} 当前点击的组件
     */
    const handleListPush = (item: IEFormComponent) => {
      const formItem = cloneDeep(item)
      generateKey(formItem)
      if (!state.currentItem.key) {
        state.data.formItems.push(formItem)
        handleSetSelectItem(formItem)
        return
      }
      handleCopy(formItem, false)
    }

    const handleCopy = (
      item: IEFormComponent = state.currentItem,
      isCopy = true
    ) => {
      /**
       * 遍历当表单项配置，如果是复制，则复制一份表单项，如果不是复制，则直接添加到表单项中
       * @param formItems
       */
      const traverse = (formItems: IEFormComponent[]) => {
        // 使用some遍历，找到目标后停止遍历
        formItems.some((formItem: IEFormComponent, index: number) => {
          if (formItem.key === state.currentItem.key) {
            // 判断是不是复制
            isCopy
              ? formItems.splice(index + 1, 0, cloneDeep(formItem))
              : formItems.splice(index + 1, 0, item)
            const event = {
              newIndex: index + 1
            }
            // 添加到表单项中
            handleColAdd(event, formItems, isCopy)
            return true
          }
        })
      }
      traverse(state.data.formItems)
    }

    const handleColAdd = (
      { newIndex }: any,
      formItems: IEFormComponent[],
      isCopy = false
    ) => {
      const item = formItems[newIndex]
      isCopy && generateKey(item)
      handleSetSelectItem(item)
    }
    const handleOpenJsonModal = () => {
      state.jsonModal?.showModal(state.data)
    }
    provide<IFormConfig>('formConfig', state.data)
    provide<IFormDesignMethods>('formDesignMethods', {
      handleColAdd,
      handleCopy,
      handleListPush,
      handleSetSelectItem,
      handleAddAttrs
    })

    return {
      ...toRefs(state),
      handleSetSelectItem,
      handleAddAttrs,
      handleListPush,
      handleCopy,
      handleOpenJsonModal
    }
  }
})
</script>
