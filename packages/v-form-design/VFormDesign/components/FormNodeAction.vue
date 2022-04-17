<!--
 * @author: 杨攀腾
 * @date: 2022/4/17
 * @description: $END$
-->
<template>
  <div class="copy-delete-box">
    <a class="copy" :class="activeClass" @click.stop="handleCopy(record)">
      <Icon type="copy" />
    </a>
    <a
      class="delete"
      :class="activeClass"
      @click.stop="handleRemoveItem(item => item.key === record.key)"
    >
      <Icon type="delete" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, PropType } from 'vue'
import { BasicFormItem } from '@/common/class/basic-form'
import { IVFormDesignState } from '../../types/form-design'
import Icon from '@design/components/Icon/index.vue'
import { cloneDeep } from 'lodash-es'

const props = defineProps({
  record: {
    type: Object as PropType<BasicFormItem>,
    required: true
  }
})
const { formConfig, handleRemoveItem, handlePushItem } =
  inject<IVFormDesignState>('formDesignState')!

const activeClass = computed(() => {
  return props.record!.key === formConfig.value.currentItem.key
    ? 'active'
    : 'unactivated'
})

const handleCopy = (formItem: BasicFormItem) => {
  handlePushItem(cloneDeep(formItem))
}
</script>

<style lang="less" scoped>
.copy-delete-box {
  .copy,
  .delete {
    @apply v-absolute v-top-0 v-w-30 v-h-30 v-text-center v-text-white
      v-transition-all v-bg-primary;
    line-height: 30px;
    z-index: 989;
    &.unactivated {
      @apply v-pointer-events-none !v-opacity-0;
    }

    &.active {
      opacity: 1 !important;
    }
  }
  > .copy {
    border-radius: 0 0 0 8px;
    right: 30px;
  }

  > .delete {
    right: 0;
  }
}
</style>
