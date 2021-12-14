<!--
 * @Author: ypt
 * @Date: 2021/11/19
 * @Description: 拖拽节点控件
-->
<template>
  <div
    class="drag-move-box"
    @click.stop="handleSelectItem"
    :class="{ active: record.key === formConfig.currentItem.key }"
  >
    <div class="form-item-box">
      <VFormItem :formConfig="formConfig" :record="record" />
    </div>
    <div class="show-key-box">
      {{ record.label + (record.field ? '/' + record.field : '') }}
    </div>
    <FormNodeOperate :record="record" :currentItem="formConfig.currentItem" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, PropType } from '@vue/composition-api'
import { IVFormComponent } from '@pack/typings/v-form-component'
import FormNodeOperate from './FormNodeOperate.vue'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'

export default defineComponent({
  name: 'FormNode',
  components: {
    FormNodeOperate
  },
  props: {
    record: {
      type: Object as PropType<IVFormComponent>,
      required: true
    }
  },
  setup(props) {
    const { formConfig, formDesignMethods } = useFormDesignState()
    const state = reactive({})
    // 获取 formDesignMethods
    const handleSelectItem = () => {
      // 调用 formDesignMethods
      formDesignMethods.handleSetSelectItem(props.record)
    }
    return {
      ...toRefs(state),
      handleSelectItem,
      formConfig
    }
  }
})
</script>
