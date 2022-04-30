<!--
 * @author: ypt
 * @date: 2022/4/11
 * @description: 表单设计器首页
-->
<template>
  <div class="v-form-design light-theme v-h-screen v-bg-body v-select-none">
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
      <template #config>
        <ConfigAside></ConfigAside>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, computed } from 'vue'
import Layout from '../Layout/index.vue'
import Header from '@design/VFormDesign/modules/Header.vue'
import LeftAside from '@design/VFormDesign/modules/LeftAside.vue'
import MainContainer from '@design/VFormDesign/modules/MainContainer.vue'
import type { IVFormConfig, IVFormDesignState } from '@design/types/form-design'
import { DesignVForm } from '@design/class/form/form'
import { cloneDeep, remove } from 'lodash-es'
import Toolbar from '@design/VFormDesign/modules/Toolbar.vue'
import { formForEach } from '@common/utils/util'
import ConfigAside from '@design/VFormDesign/modules/ConfigAside.vue'
import type { BasicFormItem } from '@common/class/basic-form'
import { msg } from '@common/utils/log'

export default defineComponent({
  name: 'VFormDesign',
  components: {
    ConfigAside,
    Toolbar,
    MainContainer,
    LeftAside,
    Header,
    Layout
  },
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
        if (!formItem) msg('formItem is null')
        formConfig.value.currentItem = formItem
      }
    /**
     * 深拷贝一份数据添加到表单项并设置为当前选中项，然后重新生成 uuid
     * @param {BasicFormItem} formItem
     */
    const handlePushItem: IVFormDesignState['handlePushItem'] = formItem => {
      const newFormItem = cloneDeep(formItem)
      newFormItem.generateKey()
      formConfig.value.formItems.push(newFormItem)
      handleSelectItem(newFormItem)
    }

    /**
     * 删除表单项同时选中上一个表单项，若没有上一个表单项则选中最后一个表单项
     * @param {string} key
     */
    const handleRemoveItem: IVFormDesignState['handleRemoveItem'] = key => {
      try {
        formForEach(formConfig.value.formItems, (item, array, index) => {
          if (item?._key === key) {
            remove(array, item)
            const curItem =
              array[index] ||
              formConfig.value.formItems.at(-1) ||
              ({} as BasicFormItem)
            handleSelectItem(curItem)
          }
        })
      } catch (e) {
        msg(e as Error)
      }
    }

    const handleClear: IVFormDesignState['handleClear'] = () => {
      formConfig.value.formItems = []
      formConfig.value.currentItem = {} as IVFormConfig['currentItem']
    }
    const isFixed = computed(
      () => formConfig.value.config.labelLayout === 'fixed'
    )
    provide('formDesignState', {
      formConfig,
      handleSelectItem,
      handlePushItem,
      handleRemoveItem,
      handleClear,
      isFixed
    })

    return {
      handleSelectItem,
      handlePushItem,
      handleRemoveItem,
      handleClear,
      formConfig
    }
  }
})
</script>
