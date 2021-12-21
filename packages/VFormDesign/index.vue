<!--
 * @Author: ypt
 * @Date: 2021/11/18
 * @Description: 表单设计器
-->
<template>
  <a-config-provider :locale="locale">
    <div class="v-form-design-container">
      <header class="v-form-design-header">{{ title }}</header>
      <section class="content">
        <div class="left">
          <a-collapse :defaultActiveKey="['1', '2', '3']">
            <!--     基础控件start       -->
            <a-collapse-panel v-if="baseComponents.length > 0" header="基础控件" key="1">
              <CollapseItem
                :list="baseComponents"
                @addAttrs="handleAddAttrs"
                @handleListPush="handleListPush"
              ></CollapseItem>
            </a-collapse-panel>
            <!--    基础控件end      -->

            <!--     自定义控件start       -->
            <a-collapse-panel
              v-if="customComponents.length > 0"
              header="自定义控件"
              key="2"
            >
              <CollapseItem
                :list="customComponents"
                @addAttrs="handleAddAttrs"
                @handleListPush="handleListPush"
              ></CollapseItem>
            </a-collapse-panel>
            <!--    自定义控件end      -->

            <!--    布局控件start        -->
            <a-collapse-panel
              v-if="layoutComponents.length > 0"
              header="布局控件"
              key="3"
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
            @handleOpenImportJsonModal="handleOpenModal(importJsonModal)"
            @handlePreview="handleOpenModal(eFormPreview)"
            @handleOpenCodeModal="handleOpenModal(codeModal)"
            @handleClearFormItems="handleClearFormItems"
          ></Toolbar>
          <FormComponentPanel
            :current-item="formConfig.currentItem"
            :data="formConfig"
            @handleSetSelectItem="handleSetSelectItem"
          ></FormComponentPanel>
        </div>
        <div class="right" onselectstart="return false">
          <PropsPanel ref="propsPanel" :activeKey="formConfig.activeKey">
            <template v-for="item of formConfig.formItems" :slot="`${item.type}Props`">
              <slot
                :name="`${item.type}Props`"
                v-bind="{ formItem: item, props: item.props }"
              ></slot>
            </template>
          </PropsPanel>
        </div>
      </section>
      <JsonModal ref="jsonModal"></JsonModal>
      <CodeModal ref="codeModal"></CodeModal>
      <ImportJsonModal ref="importJsonModal"></ImportJsonModal>
      <VFormPreview ref="eFormPreview" :formConfig="formConfig" />
    </div>
  </a-config-provider>
</template>
<script lang="ts">
import CollapseItem from './modules/CollapseItem.vue'
import FormComponentPanel from './modules/FormComponentPanel.vue'
import JsonModal from './components/JsonModal.vue'
import VFormPreview from '@pack/VFormPreview/index.vue'
import Toolbar from './modules/Toolbar.vue'
import PropsPanel, { IPropsPanel } from './modules/PropsPanel.vue'
import ImportJsonModal from '@pack/VFormDesign/components/ImportJsonModal.vue'
import CodeModal from '@pack/VFormDesign/components/CodeModal.vue'

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
import { IVFormComponent, IFormConfig, PropsTabKey } from '@pack/typings/v-form-component'
import { formItemsForEach, generateKey } from '@pack/utils'
import { cloneDeep } from 'lodash-es'
import {
  baseComponents,
  customComponents,
  layoutComponents
} from '@pack/core/formItemConfig'
import { useRefHistory, UseRefHistoryReturn } from '@vueuse/core'
import { IAnyObject } from '@pack/typings/base-type'
import { globalConfigState } from '@pack/VFormDesign/config/formItemPropsConfig'

export interface IToolbarMethods {
  showModal: (jsonData: IAnyObject) => void
}
interface IState {
  // 语言
  locale: any
  // 公用组件
  baseComponents: IVFormComponent[]
  // 自定义组件
  customComponents: IVFormComponent[]
  // 布局组件
  layoutComponents: IVFormComponent[]
  // 属性面板实例
  propsPanel: Ref<null | IPropsPanel>
  // json模态框实例
  jsonModal: Ref<null | IToolbarMethods>
  // 导入json数据模态框
  importJsonModal: Ref<null | IToolbarMethods>
  // 代码预览模态框
  codeModal: Ref<null | IToolbarMethods>
  // 预览模态框
  eFormPreview: Ref<null | IToolbarMethods>
}

export interface IFormDesignMethods {
  // 设置当前选中的控件
  handleSetSelectItem(item: IVFormComponent): void
  // 添加控件到formConfig.formItems中
  handleListPush(item: IVFormComponent): void
  // 复制控件
  handleCopy(item?: IVFormComponent, isCopy?: boolean): void
  // 添加控件属性
  handleAddAttrs(formItems: IVFormComponent[], index: number): void
  setFormConfig(config: IFormConfig): void
  // 添加到表单中之前触发
  handleBeforeColAdd(
    event: { newIndex: string },
    formItems: IVFormComponent[],
    isCopy?: boolean
  ): void
}

export default defineComponent({
  name: 'VFormDesign',
  props: {
    title: {
      type: String,
      default: 'v-form-antd表单设计器'
    }
  },
  components: {
    CodeModal,
    ImportJsonModal,
    CollapseItem,
    FormComponentPanel,
    PropsPanel,
    Toolbar,
    JsonModal,
    VFormPreview
  },
  setup() {
    // 子组件实例
    const propsPanel = ref<null | IPropsPanel>(null)
    const jsonModal = ref<null | IToolbarMethods>(null)
    const importJsonModal = ref<null | IToolbarMethods>(null)
    const eFormPreview = ref<null | IToolbarMethods>(null)
    const codeModal = ref<null | IToolbarMethods>(null)
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
      customComponents,
      propsPanel,
      jsonModal,
      eFormPreview,
      importJsonModal,
      codeModal
    })
    const setFormConfig = (config: IFormConfig) => {
      formConfig.value = config
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

    /**
     * 选中表单项
     * @param record 当前选中的表单项
     */
    const handleSetSelectItem = (record: IVFormComponent) => {
      formConfig.value.currentItem = record
      handleChangePropsTabs(
        record.key
          ? formConfig.value.activeKey! === 1
            ? 2
            : formConfig.value.activeKey!
          : 1
      )
    }

    const setGlobalConfigState = (formItem: IVFormComponent) => {
      formItem.span = globalConfigState.span
    }

    /**
     * 添加属性
     * @param formItems
     * @param index
     */
    const handleAddAttrs = (formItems: IVFormComponent[], index: number) => {
      const item = formItems[index]
      setGlobalConfigState(item)
      generateKey(item)
    }

    /**
     * 单击控件时添加到面板中
     * @param item {IVFormComponent} 当前点击的组件
     */
    const handleListPush = (item: IVFormComponent) => {
      const formItem = cloneDeep(item)
      setGlobalConfigState(formItem)
      generateKey(formItem)
      if (!formConfig.value.currentItem?.key) {
        formConfig.value.formItems.push(formItem)
        handleSetSelectItem(formItem)
        return
      }
      handleCopy(formItem, false)
    }

    /**
     * 复制表单项，如果表单项为栅格布局，则遍历所有自表单项重新生成key
     * @param {IVFormComponent} formItem
     * @return {IVFormComponent}
     */
    const copyFormItem = (formItem: IVFormComponent) => {
      const newFormItem = cloneDeep(formItem)
      if (newFormItem.type === 'grid') {
        formItemsForEach([formItem], item => {
          generateKey(item)
        })
      }
      return newFormItem
    }
    /**
     * 复制或者添加表单，isCopy为true时则复制表单
     * @param item {IVFormComponent} 当前点击的组件
     * @param isCopy {boolean} 是否复制
     */
    const handleCopy = (
      item: IVFormComponent = formConfig.value.currentItem as IVFormComponent,
      isCopy = true
    ) => {
      const key = formConfig.value.currentItem?.key
      /**
       * 遍历当表单项配置，如果是复制，则复制一份表单项，如果不是复制，则直接添加到表单项中
       * @param formItems
       */
      const traverse = (formItems: IVFormComponent[]) => {
        // 使用some遍历，找到目标后停止遍历
        formItems.some((formItem: IVFormComponent, index: number) => {
          if (formItem.key === key) {
            // 判断是不是复制
            isCopy
              ? formItems.splice(index, 0, copyFormItem(formItem))
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
     * @param formItems {IVFormComponent[]} 表单项列表
     * @param isCopy {boolean} 是否复制
     */
    const handleBeforeColAdd = (
      { newIndex }: any,
      formItems: IVFormComponent[],
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
      const config = cloneDeep(formConfig.value)
      Modal?.showModal(config)
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
      handleAddAttrs,
      setFormConfig
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
