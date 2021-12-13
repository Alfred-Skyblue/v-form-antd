<!--
 * @Author: ypt
 * @Date: 2021/11/24
 * @Description: 表单项属性
-->
<template>
  <div class="properties-content">
    <div class="properties-body">
      <AEmpty
        class="hint-box"
        v-if="!formConfig.currentItem['key']"
        description="未选择控件"
      />
      <a-form-model v-else>
        <div v-for="props of baseFormItemProps" :key="props.name">
          <a-form-model-item :label="props.label" v-if="showProps(props.exclude)">
            <component
              v-on="props.on"
              class="component-props"
              v-bind="props.props"
              :is="props.tag"
              v-model="formConfig.currentItem[props.name]"
            ></component>
          </a-form-model-item>
        </div>

        <a-form-model-item label="控制属性">
          <a-checkbox
            v-for="item of baseFormItemControlAttrs"
            :key="item.name"
            v-model="formConfig.currentItem[item.name]"
          >
            {{ item.label }}
          </a-checkbox>
        </a-form-model-item>
        <a-form-model-item label="是否必选">
          <a-switch v-model="formConfig.currentItem['required']"></a-switch>
          <a-input
            v-if="formConfig.currentItem['required']"
            v-model="formConfig.currentItem['message']"
            placeholder="请输入必选提示"
          ></a-input>
        </a-form-model-item>
        <a-form-model-item
          v-if="!['grid'].includes(formConfig.currentItem['type'])"
          label="校验规则"
          :class="{ 'form-rule-props': !!formConfig.currentItem['rules'] }"
        >
          <RuleProps></RuleProps>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import {
  baseFormItemControlAttrs,
  baseFormItemProps
} from '@pack/VFormDesign/config/formItemPropsConfig'

import RuleProps from './RuleProps.vue'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import { isArray } from 'lodash-es'

export default defineComponent({
  name: 'FormItemProps',
  props: {},
  components: {
    RuleProps
  },
  setup() {
    const { formConfig } = useFormDesignState()
    const showProps = (exclude: string[]) => {
      return isArray(exclude)
        ? !exclude.includes(formConfig.value.currentItem!.type)
        : true
    }
    return {
      baseFormItemProps,
      formConfig,
      baseFormItemControlAttrs,
      showProps
    }
  }
})
</script>

<style lang="less" scoped>
.properties-body {
  /deep/ .ant-form-item {
    .ant-slider-with-marks {
      margin-bottom: 14px;
    }
  }
}
</style>
