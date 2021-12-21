<!--
 * @Author: 杨攀腾
 * @Date: 2021/12/21
 * @Description:
-->
<template>
  <div>
    <v-form-create
      :formData="formData"
      v-model="fApi"
      :formConfig="formConfig"
    ></v-form-create>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      formData: {},
      fApi: {},
      formConfig: {
        formItems: [
          {
            type: 'number',
            label: '数字输入框',
            field: 'number_1',
            span: 24,
            props: {}
          },
          {
            type: 'input',
            label: '输入框',
            field: 'input_2',
            span: 24,
            props: {
              type: 'text'
            },
            on: {
              change() {
                console.log(this.formData)
              }
            }
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
  components: {},
  methods: {}
}
</script>

<style scoped></style>
