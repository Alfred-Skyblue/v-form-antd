<!--
 * @Author: 杨攀腾
 * @Date: 2021/12/15
 * @Description: $END$
-->
<template>
  <VueColorpicker v-bind="record.props" v-model="color"></VueColorpicker>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { vModelMixin } from '@pack/mixins/v-model-mixni'
import { IVFormComponent } from '@pack/typings/v-form-component'
import { useVModel } from '@vueuse/core'
import vcolorpicker from 'vcolorpicker'

export default defineComponent({
  name: 'AColorPicker',
  mixins: [vModelMixin],
  components: {
    VueColorpicker: vcolorpicker.colorPicker
  },
  props: {
    record: {
      type: Object as PropType<IVFormComponent>,
      default: () => ({})
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const data = useVModel(props, 'modelValue', emit)
    const color = computed({
      get() {
        return data.value || ''
      },
      set(value: string) {
        data.value = value
      }
    })
    return { color }
  }
})
</script>
