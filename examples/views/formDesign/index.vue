<template>
  <div>
    <VFormDesign>
      <template slot="customCmpProps" slot-scope="{ formItem }">
        <a-form-model-item label="自定义属性">
          <a-input v-model="formItem.type"></a-input>
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
