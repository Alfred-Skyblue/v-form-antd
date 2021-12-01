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
          <a-collapse :defaultActiveKey="['1', '2']">
            <!--     基础控件start       -->
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
            <!--    基础控件end      -->

            <!--    布局控件start        -->
            <a-collapse-panel
              v-if="layoutComponents.length > 0"
              header="布局控件"
              key="2"
            >
              <CollapseItem
                :list="layoutComponents"
                @addAttrs="handleAddAttrs"
                @handleListPush="handleListPush"
              ></CollapseItem>
            </a-collapse-panel>
            <!--   布局控件end       -->
          </a-collapse>
        </div>
        <div class="node-panel" onselectstart="return false">
          <Toolbar
            @handleOpenJsonModal="handleOpenModal(jsonModal)"
            @handlePreview="handleOpenModal(eFormPreview)"
            @handleClearFormItems="handleClearFormItems"
          ></Toolbar>
          <FormComponentPanel
            :current-item="formConfig.currentItem"
            :data="formConfig"
            @handleSetSelectItem="handleSetSelectItem"
          ></FormComponentPanel>
        </div>
        <div class="right" onselectstart="return false">
          <PropsPanel
            ref="propsPanel"
            :activeKey="formConfig.activeKey"
          ></PropsPanel>
        </div>
      </section>
      <JsonModal ref="jsonModal"></JsonModal>
      <EFormPreview ref="eFormPreview" :formConfig="formConfig" />
    </div>
  </a-config-provider>
</template>
<script lang="ts">
import CollapseItem from './modules/CollapseItem.vue'
import FormComponentPanel from './modules/FormComponentPanel.vue'
import JsonModal from './components/JsonModal.vue'
import EFormPreview from '@pack/EFormPreview/index.vue'
import Toolbar from './modules/Toolbar.vue'
import PropsPanel, { IPropsPanel } from './modules/PropsPanel.vue'

import 'codemirror/mode/javascript/javascript'

import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  provide,
  Ref
} from '@vue/composition-api'

import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import {
  IEFormComponent,
  IFormConfig,
  PropsTabKey
} from '@pack/typings/EFormComponent'
import { generateKey } from '@pack/utils'
import { cloneDeep } from 'lodash-es'
import { baseComponents, layoutComponents } from '@pack/core/formItemConfig'
import { useRefHistory, UseRefHistoryReturn } from '@vueuse/core'
import { IAnyObject } from '@pack/typings/baseType'

export interface IToolbarMethods {
  showModal: (jsonData: IAnyObject) => void
}
interface IState {
  locale: any
  // 公用组件
  baseComponents: IEFormComponent[]
  // 布局组件
  layoutComponents: IEFormComponent[]
  // 属性面板实例
  propsPanel: Ref<null | IPropsPanel>
  // json模态框实例
  jsonModal: Ref<null | IToolbarMethods>
  eFormPreview: Ref<null | IToolbarMethods>
}

export interface IFormDesignMethods {
  // 设置当前选中的控件
  handleSetSelectItem(item: IEFormComponent): void
  // 添加控件到formConfig.formItems中
  handleListPush(item: IEFormComponent): void
  // 复制控件
  handleCopy(item?: IEFormComponent, isCopy?: boolean): void
  // 添加控件属性
  handleAddAttrs(formItems: IEFormComponent[], index: number): void
  // 添加到表单中之前触发
  handleBeforeColAdd(
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
    JsonModal,
    EFormPreview
  },
  setup() {
    // 子组件实例
    const propsPanel = ref<null | IPropsPanel>(null)
    const jsonModal = ref<null | IToolbarMethods>(null)
    const eFormPreview = ref<null | IToolbarMethods>(null)
    // endregion
    const formConfig = ref<IFormConfig>({
      // 表单配置
      formItems: [],
      config: {
        layout: 'horizontal',
        labelLayout: 'flex',
        labelWidth: 100,
        labelCol: {},
        wrapperCol: {}
      },
      currentItem: {
        type: '',
        props: {}
      },
      activeKey: 1
    })
    const state = reactive<IState>({
      locale: zhCN, // 国际化
      baseComponents, // 基础控件列表
      layoutComponents, // 布局组件列表
      propsPanel,
      jsonModal,
      eFormPreview
    })
    /**
     * 选中表单项
     * @param record 当前选中的表单项
     */
    const handleSetSelectItem = (record: IEFormComponent) => {
      formConfig.value.currentItem = record
      handleChangePropsTabs(
        record.key
          ? formConfig.value.activeKey === 1
            ? 2
            : formConfig.value.activeKey
          : 1
      )
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
      if (!formConfig.value.currentItem?.key) {
        formConfig.value.formItems.push(formItem)
        handleSetSelectItem(formItem)
        return
      }
      handleCopy(formItem, false)
    }

    /**
     * 复制或者添加表单，isCopy为true时则复制表单
     * @param item {IEFormComponent} 当前点击的组件
     * @param isCopy {boolean} 是否复制
     */
    const handleCopy = (
      item: IEFormComponent = formConfig.value.currentItem as IEFormComponent,
      isCopy = true
    ) => {
      const key = formConfig.value.currentItem?.key
      /**
       * 遍历当表单项配置，如果是复制，则复制一份表单项，如果不是复制，则直接添加到表单项中
       * @param formItems
       */
      const traverse = (formItems: IEFormComponent[]) => {
        // 使用some遍历，找到目标后停止遍历
        formItems.some((formItem: IEFormComponent, index: number) => {
          if (formItem.key === key) {
            // 判断是不是复制
            isCopy
              ? formItems.splice(index + 1, 0, cloneDeep(formItem))
              : formItems.splice(index + 1, 0, item)
            const event = {
              newIndex: index + 1
            }
            // 添加到表单项中
            handleBeforeColAdd(event, formItems, isCopy)
            return true
          }
          if (['grid', 'tabs'].includes(formItem.type)) {
            // 栅格布局
            formItem.columns?.forEach(item => {
              traverse(item.children)
            })
          }
        })
      }
      traverse(formConfig.value.formItems)
    }

    /**
     * 添加到表单中
     * @param newIndex {object} 事件对象
     * @param formItems {IEFormComponent[]} 表单项列表
     * @param isCopy {boolean} 是否复制
     */
    const handleBeforeColAdd = (
      { newIndex }: any,
      formItems: IEFormComponent[],
      isCopy = false
    ) => {
      const item = formItems[newIndex]
      isCopy && generateKey(item)
      handleSetSelectItem(item)
    }

    /**
     * 打开模态框
     * @param Modal {IToolbarMethods}
     */
    const handleOpenModal = (Modal: IToolbarMethods) => {
      Modal?.showModal(formConfig.value)
    }
    /**
     * 切换属性面板
     * @param key
     */
    const handleChangePropsTabs = (key: PropsTabKey) => {
      formConfig.value.activeKey = key
    }
    /**
     * 清空表单项列表
     */
    const handleClearFormItems = () => {
      formConfig.value.formItems = []
      handleSetSelectItem({ type: '' })
    }

    // 获取历史记录，用于撤销和重构
    const historyReturn = useRefHistory(formConfig, {
      deep: true,
      parse: (val: IFormConfig) => {
        // 使用lodash.cloneDeep重新拷贝数据，把currentItem指向选中项
        const formConfig = cloneDeep(val)
        const { currentItem, formItems } = formConfig
        // 从formItems中查找选中项
        const item = formItems.find(item => item.key === currentItem?.key)
        // 如果有，则赋值给当前项，如果没有，则切换属性面板
        if (item) {
          formConfig.currentItem = item
        }
        return formConfig
      }
    })

    // region 注入给子组件的属性
    // provide('currentItem', formConfig.value.currentItem)

    // 把表单配置项注入到子组件中，子组件可通过inject获取，获取到的数据为响应式
    provide<Ref<IFormConfig>>('formConfig', formConfig)

    // 注入历史记录
    provide<UseRefHistoryReturn<any, any>>('historyReturn', historyReturn)

    // 把祖先组件的方法项注入到子组件中，子组件可通过inject获取
    provide<IFormDesignMethods>('formDesignMethods', {
      handleBeforeColAdd,
      handleCopy,
      handleListPush,
      handleSetSelectItem,
      handleAddAttrs
    })
    // endregion

    return {
      ...toRefs(state),
      handleSetSelectItem,
      handleAddAttrs,
      handleListPush,
      handleCopy,
      handleOpenModal,
      formConfig,
      handleClearFormItems
    }
  }
})
</script>
