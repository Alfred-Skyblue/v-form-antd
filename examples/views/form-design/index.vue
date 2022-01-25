<!--
 * @Author: 杨攀腾
 * @Date: 2022-01-25 16:52:11
 * @Description: 表单设计器
-->
<template>
  <div>
    <VFormDesign>
      <template slot="customCmpProps" slot-scope="{ props }">
        <a-form-model-item label="自定义属性">
          <a-input v-model="props.placeholder"></a-input>
        </a-form-model-item>
      </template>
    </VFormDesign>
  </div>
</template>

<script>
export default {
  name: 'formDesign',
  components: {}
}
</script>
