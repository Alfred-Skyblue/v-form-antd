<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/18
 * @Description: 表单设计器
-->
<template>
  <a-config-provider :locale="locale">
    <div class="e-form-design-container">
      <header class="e-form-design-header">{{ data.config.title }}</header>
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
  provide
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
  propsPanel: null | IPropsPanel
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
      currentItem: {},
      data: { formItems: [], config: {} },
      // TODO 待解决
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
    const addAttrs = (list: IEFormComponent[], index: number) => {
      generateKey(list[index])
    }

    const handleListPush = (item: IEFormComponent) => {
      if (!state.currentItem.key) {
        generateKey(item)
        const formItem = cloneDeep(item)
        state.data.formItems.push(formItem)
      }
    }
    return {
      ...toRefs(state),
      handleSetSelectItem,
      addAttrs,
      handleListPush
    }
  }
})
</script>
