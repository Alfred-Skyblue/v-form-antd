<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/18
 * @Description:
-->
<template>
  <a-config-provider :locale="locale">
    <div class="e-form-design-container">
      <header></header>
      <section class="content">
        <div class="left">
          <a-collapse>
            <a-collapse-panel
              v-if="baseComponents.length > 0"
              header="基础控件"
              key="1"
            >
              <CollapseItem :list="baseComponents"></CollapseItem>
            </a-collapse-panel>
          </a-collapse>
        </div>
        <div class="node-panel">
          <FormComponentPanel :data="data"></FormComponentPanel>
        </div>
        <div class="right">右侧属性区域</div>
      </section>
    </div>
  </a-config-provider>
</template>
<script lang="ts">
import CollapseItem from './components/CollapseItem.vue'
import FormComponentPanel from './components/FormComponentPanel.vue'

import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { baseComponents } from './config/formItemConfig'

export default defineComponent({
  name: 'EFormDesign',
  components: {
    CollapseItem,
    FormComponentPanel
  },
  setup() {
    const state = reactive({
      locale: zhCN,
      baseComponents,
      data: { formItems: [], config: {} }
    })

    return { ...toRefs(state) }
  }
})
</script>
