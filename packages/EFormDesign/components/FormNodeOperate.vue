<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/11
 * @Description:
-->
<template>
  <div>
    <a class="copy" :class="activeClass" @click.stop="handleCopy">
      <a-icon type="copy" />
    </a>
    <a class="delete" :class="activeClass" @click.stop="handleDelete">
      <a-icon type="delete" />
    </a>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from '@vue/composition-api'
import { IEFormComponent, IFormConfig } from '@pack/typings/EFormComponent'
import { IFormDesignMethods } from '@pack/EFormDesign/index.vue'

export default defineComponent({
  name: 'FormNodeOperate',
  props: {
    record: {
      type: Object,
      default: () => ({})
    },
    currentItem: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const activeClass = computed(() => {
      return props.record.key === props.currentItem.key
        ? 'active'
        : 'unactivated'
    })
    const formConfig = inject<IFormConfig>('formConfig')
    const formDesignMethods = inject<IFormDesignMethods>('formDesignMethods')
    /**
     * 删除当前项
     */
    const handleDelete = () => {
      const traverse = (formItems: IEFormComponent[]) => {
        formItems.some((formItem, index) => {
          // 处理栅格和标签页布局
          if (['grid', 'tabs'].includes(formItem.type)) {
            formItem.columns!.forEach(item => {
              traverse(item.children)
            })
          }
          /**
           * 对比formItem和currentItem的key，不同则保留控件，相同时则删除控件
           */
          if (formItem.key !== props.currentItem.key) {
            return false
          } else {
            let params: IEFormComponent =
              formItems.length === 1
                ? { type: '' }
                : formItems.length - 1 > index
                ? formItems[index + 1]
                : formItems[index - 1]
            formDesignMethods!.handleSetSelectItem(params)
            formItems.splice(index, 1)
            return true
          }
        })
      }
      traverse(formConfig!.formItems)
    }

    const handleCopy = () => {
      formDesignMethods?.handleCopy()
    }
    return { activeClass, handleDelete, handleCopy }
  }
})
</script>
