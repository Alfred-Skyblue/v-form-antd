<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/11
 * @Description: 节点操作复制删除控件
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
import {
  computed,
  defineComponent,
  inject,
  Ref,
  watch
} from '@vue/composition-api'
import { IEFormComponent, IFormConfig } from '@pack/typings/EFormComponent'
import { IFormDesignMethods } from '@pack/EFormDesign/index.vue'
import { remove } from '@pack/utils'

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
    const formConfig = inject('formConfig') as Ref<IFormConfig>
    const formDesignMethods = inject<IFormDesignMethods>('formDesignMethods')
    watch(formConfig, (newValue, oldValue) => {
      console.log('-> newValue, oldValue', newValue, oldValue)
    })
    /**
     * 删除当前项
     */
    const handleDelete = () => {
      const traverse = (formItems: IEFormComponent[]) => {
        formItems.some((formItem, index) => {
          const { type, key } = formItem
          // 处理栅格和标签页布局
          ;['grid', 'tabs'].includes(type) &&
            formItem.columns!.forEach(item => traverse(item.children))
          if (key === props.currentItem.key) {
            let params: IEFormComponent =
              formItems.length === 1
                ? { type: '' }
                : formItems.length - 1 > index
                ? formItems[index + 1]
                : formItems[index - 1]
            formDesignMethods!.handleSetSelectItem(params)
            remove(formItems, index)
            return true
          }
        })
      }
      traverse(formConfig.value!.formItems)
    }

    const handleCopy = () => {
      formDesignMethods?.handleCopy()
    }
    return { activeClass, handleDelete, handleCopy }
  }
})
</script>
