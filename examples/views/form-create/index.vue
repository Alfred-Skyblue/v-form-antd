<template>
  <div>
    <v-form-create :formConfig="formConfig" :formData="formData" v-model="fApi" />
    <button @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  name: 'GFormCreate',
  data() {
    return {
      fApi: {},
      formData: {},
      formConfig: {
        formItems: [
          {
            type: 'input',
            label: '姓名',
            field: 'name',
            span: 12,
            props: {
              type: 'text'
            }
          },
          {
            type: 'number',
            label: '年龄',
            field: 'age',
            span: 12,
            props: {}
          }
        ],
        config: {
          layout: 'horizontal',
          labelLayout: 'flex',
          labelWidth: 100,
          labelCol: {},
          wrapperCol: {}
        }
      }
    }
  },
  methods: {
    async submit() {
      const data = await this.fApi.submit()
      console.log(data)
    }
  }
}
</script>

<style scoped></style>
