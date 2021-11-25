<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/25
 * @Description: $END$
-->
<template>
  <div class="rule-props-content">
    <a-form-model>
      <div
        v-for="(item, index) of currentItem['rules']"
        :key="index"
        class="rule-props-item"
      >
        <a-icon
          type="close"
          class="rule-props-item-close"
          @click="removeRule(index)"
        />
        <a-form-model-item
          label="正则"
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 16 }"
        >
          <a-input v-model="item.pattern" placeholder="请输入正则表达式" />
        </a-form-model-item>
        <a-form-model-item
          label="文案"
          :labelCol="{ span: 6 }"
          :wrapperCol="{ span: 16 }"
        >
          <a-input v-model="item.message" placeholder="请输入提示文案" />
        </a-form-model-item>
      </div>
    </a-form-model>
    <a @click="addRules">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-plus"></use>
      </svg>
      添加正则
    </a>
  </div>
</template>
<script lang="ts">
import { set, del, defineComponent } from '@vue/composition-api'
import { IEFormComponent } from '@pack/typings/EFormComponent'
import { remove } from '@pack/utils'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import { isArray } from 'lodash-es'

export default defineComponent({
  name: 'RuleProps',
  setup() {
    // 获取祖先组件的状态
    const { formConfig } = useFormDesignState()
    // 抽离 currentItem
    const currentItem = formConfig.value.currentItem as IEFormComponent
    /**
     * 添加正则校验，判断当前组件的rules是不是数组，如果不是数组，使用set方法重置成数组，然后添加正则校验
     */
    const addRules = () => {
      if (!isArray(currentItem.rules)) set(currentItem, 'rules', [])
      currentItem.rules?.push({ pattern: '', message: '' })
    }
    /**
     * 删除正则校验，当正则规则为0时，删除rules属性
     * @param index {number} 需要删除的规则下标
     */
    const removeRule = (index: number) => {
      remove(currentItem.rules as Array<any>, index)
      if (currentItem.rules?.length === 0) del(currentItem, 'rules')
    }

    return { addRules, removeRule, currentItem }
  }
})
</script>

<style lang="less" scoped>
.rule-props-content {
  /deep/ .ant-form-item {
    margin-bottom: 0;
  }
  .rule-props-item {
    position: relative;
    background-color: #f0eded;
    padding: 3px 2px;
    border-radius: 5px;
    margin-bottom: 5px;
    &-close {
      position: absolute;
      top: -5px;
      right: -5px;
      color: #ccc;
      cursor: pointer;
      border-radius: 7px;
      background-color: #a3a0a0;
      z-index: 999;
      &:hover {
        color: #00c;
      }
    }
  }
}
</style>
