<!--
 * @Author: ypt
 * @Date: 2021/11/11
 * @Description: 节点操作复制删除控件
-->
<template>
  <div class="copy-delete-box">
    <a class="copy" :class="activeClass" @click.stop="handleCopy">
      <a-icon type="copy" />
    </a>
    <a class="delete" :class="activeClass" @click.stop="handleDelete">
      <a-icon type="delete" />
    </a>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { IVFormComponent } from '@pack/typings/v-form-component'
import { remove } from '@pack/utils'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'

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
    const { formConfig, formDesignMethods } = useFormDesignState()
    const activeClass = computed(() => {
      return props.record.key === props.currentItem.key ? 'active' : 'unactivated'
    })
    /**
     * 删除当前项
     */
    const handleDelete = () => {
      const traverse = (formItems: IVFormComponent[]) => {
        formItems.some((formItem, index) => {
          const { type, key } = formItem
          // 处理栅格和标签页布局
          ;['grid', 'tabs'].includes(type) &&
            formItem.columns?.forEach(item => traverse(item.children))
          if (key === props.currentItem.key) {
            let params: IVFormComponent =
              formItems.length === 1
                ? { type: '' }
                : formItems.length - 1 > index
                ? formItems[index + 1]
                : formItems[index - 1]
            formDesignMethods.handleSetSelectItem(params)
            remove(formItems, index)
            return true
          }
        })
      }
      traverse(formConfig.value!.formItems)
    }

    const handleCopy = () => {
      formDesignMethods.handleCopy()
    }
    return { activeClass, handleDelete, handleCopy }
  }
})
</script>
