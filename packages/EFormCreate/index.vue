<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/29
 * @Description: 根据json生成表单
-->
<template>
  <div>
    <a-form-model class="e-form-model">
      <FormRender
        v-for="(record, index) of formConfig.formItems"
        :key="index"
        :record="record"
        :formConfig="formConfig"
      ></FormRender>
    </a-form-model>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  toRefs
} from '@vue/composition-api'
import FormRender from './components/FormRender.vue'
import { IFormConfig } from '@pack/typings/EFormComponent'

export default defineComponent({
  name: 'EFormCreate',
  components: {
    FormRender
  },
  props: {
    formConfig: {
      type: Object as PropType<IFormConfig>,
      default: 0
    }
  },
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style lang="less" scoped>
.e-form-model {
  overflow: hidden;
}
</style>
