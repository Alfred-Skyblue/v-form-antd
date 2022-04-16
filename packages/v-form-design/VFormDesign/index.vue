<!--
 * @author: 杨攀腾
 * @date: 2022/4/11
 * @description: $END$
-->
<template>
  <div class="v-form-design light-theme v-h-screen v-bg-body">
    <Layout>
      <template #header>
        <Header></Header>
      </template>
      <template #default>
        <toolbar></toolbar>
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
import type { IVFormConfig } from '@design/types/form-design'
import type { BasicFormItem } from '@common/class/basic-form'
import { DesignVForm } from '@design/class/form'
import { cloneDeep } from 'lodash-es'
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
    const handleSelectItem = (formItem: BasicFormItem) => {
      formConfig.value.currentItem = formItem
    }
    /**
     * 深拷贝一份数据添加到表单项并设置为当前选中项，然后重新生成 uuid
     * @param {BasicFormItem} formItem
     */
    const handlePushItem = (formItem: BasicFormItem) => {
      const newFormItem = cloneDeep(formItem)
      formConfig.value.formItems.push(newFormItem)
      handleSelectItem(newFormItem)
      formItem.generateKey()
    }
    provide('formDesignState', { formConfig, handleSelectItem, handlePushItem })
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style scoped></style>
