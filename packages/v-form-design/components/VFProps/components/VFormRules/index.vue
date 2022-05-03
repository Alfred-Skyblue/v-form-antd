<!--
 * @author: ypt
 * @date: 2022/5/3
 * @description: 校验规则
-->
<template>
  <div class="v-flex v-items-center">
    <a-checkbox class="v-w-1/2" v-model:checked="currentItem.required">
      必填
    </a-checkbox>
    <a-input
      placeholder="请输入必选校验文案"
      v-model:value="currentItem.message"
    ></a-input>
  </div>
  <div class="v-my-8">
    <a class="v-ml-auto" @click="handleAddRule">
      <Icon type="plus" />
      <span class="v-align-middle v-ml-4">添加正则</span>
    </a>
  </div>
  <div class="v-space-y-6">
    <div
      v-for="(rule, index) of currentItem.rules"
      :key="index"
      class="rule-props-item v-space-y-6"
    >
      <div class="v-flex v-items-center">
        <span class="v-w-1/4 v-align-middle">正则：</span>
        <a-input
          class="v-align-middle"
          v-model:value="rule.pattern"
          placeholder="请输入正则"
        />
      </div>
      <div class="v-flex v-items-center">
        <span class="v-w-1/4 v-align-middle">文案：</span>
        <a-input v-model:value="rule.message" placeholder="请输入校验文案" />
      </div>
      <a
        class="close v-w-20 v-h-20 v-absolute v-rounded-full v-text-center"
        @click="handleDeleteRule(index)"
      >
        <Icon type="delete"></Icon>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import Icon from '@design/components/Icon/index.vue'
import { remove } from 'lodash-es'

export default defineComponent({
  name: 'VFormRules',
  components: { Icon },
  setup() {
    const { currentItem } = useFormDesign()

    const handleAddRule = () => {
      if (!currentItem.value.rules) currentItem.value.rules = []
      currentItem.value.rules.push({
        pattern: '',
        message: ''
      })
    }
    const handleDeleteRule = (index: number) => {
      remove(currentItem.value.rules!, (rule, i) => i === index)
      if (currentItem.value.rules?.length === 0)
        currentItem.value.rules = undefined
    }
    return {
      currentItem,
      handleAddRule,
      handleDeleteRule
    }
  }
})
</script>

<style lang="less" scoped>
.rule-props-item {
  position: relative;
  background-color: #f0eded;
  padding: 8px 6px;
  border-radius: 5px;
  .close {
    line-height: 18px;
    top: -10px;
    right: -10px;
    color: #ccc;
    background-color: #a3a0a0;
    z-index: 999;
    &:hover {
      background-color: rgba(255, 0, 0, 0.41);
    }
  }
}
</style>
