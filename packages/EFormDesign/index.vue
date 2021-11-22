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
                @addAttrs="addAttrs"
                @handleListPush="handleListPush"
              ></CollapseItem>
            </a-collapse-panel>
          </a-collapse>
        </div>
        <div class="node-panel">
          <FormComponentPanel
            :current-item="currentItem"
            :data="data"
            @handleSetSelectItem="handleSetSelectItem"
          ></FormComponentPanel>
        </div>
        <div class="right"><PropsPanel ref="propsPanel"></PropsPanel></div>
      </section>
    </div>
  </a-config-provider>
</template>
<script lang="ts">
import CollapseItem from './modules/CollapseItem.vue'
import FormComponentPanel from './modules/FormComponentPanel.vue'
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

interface IState {
  data: IFormConfig
  currentItem: IEFormComponent
  locale: any
  baseComponents: IEFormComponent[]
  propsPanel: Ref<null | IPropsPanel>
}
export default defineComponent({
  name: 'EFormDesign',
  components: {
    CollapseItem,
    FormComponentPanel,
    PropsPanel
  },
  setup() {
    // 子组件实例
    const propsPanel = ref<null | IPropsPanel>(null)

    const state = reactive<IState>({
      locale: zhCN,
      baseComponents,
      currentItem: { type: '' },
      data: { formItems: [], config: {} },
      propsPanel
    })
    provide('formConfig', state.data)
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
     * @param list
     * @param index
     */
    const addAttrs = (list: IEFormComponent[], index: number) => {
      const item = list[index]
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
      handleCopy(formItem)
    }

    const handleCopy = (item: IEFormComponent) => {
      const traverse = (formItems: IEFormComponent[]) => {
        formItems.some((formItem: IEFormComponent, index: number) => {
          if (formItem.key === state.currentItem.key) {
            formItems.splice(index + 1, 0, item)
            const event = {
              newIndex: index + 1
            }
            handleColAdd(event, formItems)
            return true
          }
        })
      }
      traverse(state.data.formItems)
    }

    const handleColAdd = ({ newIndex }: any, formItems: IEFormComponent[]) => {
      const item = formItems[newIndex]
      const key = generateKey()
      console.log('-> key', key)
      handleSetSelectItem(item)
    }
    return {
      ...toRefs(state),
      handleSetSelectItem,
      addAttrs,
      handleListPush,
      handleCopy
    }
  }
})
</script>
