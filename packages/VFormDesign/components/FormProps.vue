<!--
 * @Author: ypt
 * @Date: 2021/11/23
 * @Description: 右侧属性面板控件
-->
<template>
  <div class="properties-content">
    <a-form-model class="properties-body">
      <!--      <e-upload v-model="fileList"></e-upload>-->
      <a-form-model-item label="表单布局">
        <a-radio-group buttonStyle="solid" v-model="formConfig.config.layout">
          <a-radio-button value="horizontal">水平</a-radio-button>
          <a-radio-button
            value="vertical"
            :disabled="formConfig.config.labelLayout === 'grid'"
          >
            垂直
          </a-radio-button>
          <a-radio-button
            value="inline"
            :disabled="formConfig.config.labelLayout === 'grid'"
          >
            行内
          </a-radio-button>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="标签布局">
        <a-radio-group
          buttonStyle="solid"
          v-model="formConfig.config.labelLayout"
          @change="lableLayoutChange"
        >
          <a-radio-button value="flex">固定</a-radio-button>
          <a-radio-button
            value="grid"
            :disabled="formConfig.config.layout !== 'horizontal'"
          >
            栅格
          </a-radio-button>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item
        label="标签宽度（px）"
        v-show="formConfig.config.labelLayout === 'flex'"
      >
        <a-input-number
          :style="{ width: '100%' }"
          v-model="formConfig.config.labelWidth"
          :min="0"
          :step="1"
        ></a-input-number>
      </a-form-model-item>
      <div v-if="formConfig.config.labelLayout === 'grid'">
        <a-form-model-item label="labelCol">
          <a-slider v-model="formConfig.config.labelCol.span" :max="24" />
        </a-form-model-item>
        <a-form-model-item label="wrapperCol">
          <a-slider v-model="formConfig.config.wrapperCol.span" :max="24" />
        </a-form-model-item>
      </div>
      <a-form-model-item label="表单属性">
        <a-checkbox v-model="formConfig.config.hideRequiredMark">隐藏必选标记</a-checkbox>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import { IInputEvent } from '@pack/typings/base-type'

export default defineComponent({
  name: 'FormProps',
  setup() {
    const { formConfig } = useFormDesignState()
    const lableLayoutChange = (e: IInputEvent) => {
      if (e.target.value === 'grid') {
        formConfig.value.config.layout = 'horizontal'
      }
    }

    return { formConfig, lableLayoutChange }
  }
})
</script>

<style lang="less" scoped>
.properties-content {
  /deep/ .properties-body {
    .ant-checkbox-wrapper {
      margin: 0;
    }
    .ant-form-item {
      width: 100%;
    }
  }
}
</style>
