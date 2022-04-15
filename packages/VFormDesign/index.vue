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
        <main-container></main-container>
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
import Header from '@/VFormDesign/modules/Header.vue'
import LeftAside from '@/VFormDesign/modules/LeftAside.vue'
import MainContainer from '@/VFormDesign/modules/MainContainer.vue'

export default defineComponent({
  name: 'VFormDesign',
  components: { MainContainer, LeftAside, Header, Layout },
  setup() {
    const formConfig = ref({
      formItems: []
    })
    provide('formConfig', formConfig)
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style scoped></style>
