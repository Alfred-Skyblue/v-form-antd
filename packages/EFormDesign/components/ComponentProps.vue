<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/26
 * @Description: 组件属性控件
-->
<template>
  <div>
    <div class="properties-content">
      <div class="properties-body">
        <!--          <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">-->
        <!--            <slot :name="slot" v-bind="scope" />-->
        <!--          </template>-->
        <AEmpty
          class="hint-box"
          v-if="!formConfig.currentItem['key']"
          description="未选择组件"
        />
        <a-form-model
          v-else-if="!!baseComponentAttrs[formConfig.currentItem.type]"
        >
          <a-form-model-item
            v-for="item in baseComponentAttrs[formConfig.currentItem.type]"
            :key="item.name"
            :label="item.label"
          >
            <component
              class="component-prop"
              v-bind="item.props"
              :is="item.tag"
              v-model="formConfig.currentItem['props'][item.name]"
            ></component>
          </a-form-model-item>

          <a-form-model-item label="控制属性">
            <a-checkbox
              v-for="item in baseComponentControlAttrs"
              :key="item.name"
              v-model="formConfig.currentItem['props'][item.name]"
            >
              {{ item.label }}
            </a-checkbox>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import {
  baseComponentControlAttrs,
  baseComponentAttrs
} from '@pack/EFormDesign/config/componentPropsConfig'

export default defineComponent({
  name: 'ComponentProps',
  setup() {
    const { formConfig } = useFormDesignState()

    return {
      formConfig,
      baseComponentAttrs,
      baseComponentControlAttrs
    }
  }
})
</script>

<style lang="less" scoped>
.properties-body {
  .component-prop {
    width: 100%;
  }
}
</style>
