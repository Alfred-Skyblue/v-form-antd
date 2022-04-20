<!--
 * @author: 杨攀腾
 * @date: 2022/4/11
 * @description: 表单设计器首页
-->
<template>
  <div class="v-form-design light-theme v-h-screen v-bg-body">
    <Layout>
      <template #header>
        <Header></Header>
      </template>
      <template #default>
        <toolbar @handleClear="handleClear"></toolbar>
        <MainContainer></MainContainer>
      </template>
      <template #cmp-list>
        <LeftAside></LeftAside>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, ref, provide } from 'vue'
import Layout from '../Layout/index.vue'
import Header from '@design/VFormDesign/modules/Header.vue'
import LeftAside from '@design/VFormDesign/modules/LeftAside.vue'
import MainContainer from '@design/VFormDesign/modules/MainContainer.vue'
import type { IVFormConfig, IVFormDesignState } from '@design/types/form-design'
import { DesignVForm } from '@design/class/form'
import { cloneDeep, remove } from 'lodash-es'
import Toolbar from '@design/VFormDesign/modules/Toolbar.vue'

export default defineComponent({
  name: 'VFormDesign',
  components: { Toolbar, MainContainer, LeftAside, Header, Layout },
  setup() {
    const formConfig = ref<IVFormConfig>({
      formItems: [],
      currentItem: {} as IVFormConfig['currentItem'],
      config: new DesignVForm()
    })
    /**
     * 选中表单项
     * @param {BasicFormItem} formItem
     */
    const handleSelectItem: IVFormDesignState['handleSelectItem'] =
      formItem => {
        formConfig.value.currentItem = formItem
      }
    /**
     * 深拷贝一份数据添加到表单项并设置为当前选中项，然后重新生成 uuid
     * @param {BasicFormItem} formItem
     */
    const handlePushItem: IVFormDesignState['handlePushItem'] = formItem => {
      formItem.generateKey()
      const newFormItem = cloneDeep(formItem)
      formConfig.value.formItems.push(newFormItem)
      handleSelectItem(newFormItem)
    }

    const handleRemoveItem: IVFormDesignState['handleRemoveItem'] =
      callback => {
        remove(formConfig.value.formItems, callback)
      }

    const handleClear: IVFormDesignState['handleClear'] = () => {
      formConfig.value.formItems = []
    }
    provide('formDesignState', {
      formConfig,
      handleSelectItem,
      handlePushItem,
      handleRemoveItem,
      handleClear
    })
    const state = reactive({})
    return {
      ...toRefs(state),
      handleSelectItem,
      handlePushItem,
      handleRemoveItem,
      handleClear,
      formConfig
    }
  }
})
</script>
