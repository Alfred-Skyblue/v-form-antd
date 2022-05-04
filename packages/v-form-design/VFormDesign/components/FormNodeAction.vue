<!--
 * @author: ypt
 * @date: 2022/4/17
 * @description: 表单复制删除组件
-->
<template>
  <div class="copy-delete-box" :class="{ layout: isLayout }">
    <a class="copy" :class="activeClass" @click.stop="handleCopy(record)">
      <Icon type="copy" />
    </a>
    <a
      class="delete"
      :class="activeClass"
      @click.stop="handleRemoveItem(record._key)"
    >
      <Icon type="delete" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, PropType, shallowRef } from 'vue'
import type { BasicFormItem } from '@common/class/basic-form'
import type { IVFormDesignState } from '../../types/form-design'
import Icon from '@design/components/Icon/index.vue'
import { cloneDeep } from 'lodash-es'
import { formForEach } from '@common/utils/util'
import type { IAnyObject } from '@common/types'

const props = defineProps({
  record: {
    type: Object as PropType<BasicFormItem>,
    required: true
  }
})
const { formConfig, handleRemoveItem, handlePushItem } =
  inject<IVFormDesignState>('formDesignState')!

const activeClass = computed(() => {
  return props.record!._key === formConfig.value.currentItem._key
    ? 'active'
    : 'unactivated'
})

const handleCopy = (formItem: BasicFormItem) => {
  const newItem = cloneDeep(formItem)
  formForEach([newItem], item => {
    item.generateKey()
    if (item._tag !== 'string') item._tag = shallowRef(item._tag)
    if ((item as IAnyObject).attrConfig !== 'string') {
      ;(item as IAnyObject).attrConfig = shallowRef(
        (item as IAnyObject).attrConfig
      )
    }
  })

  handlePushItem(newItem)
}

const isLayout = computed(() => {
  return props.record!._isLayout && props.record.type !== 'divider'
})
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
.layout {
  .copy,
  .delete {
    @apply v-bg-layout;
  }
}
</style>
