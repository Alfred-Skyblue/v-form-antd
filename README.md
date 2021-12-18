# v-form-antd

[![MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/Alfred-Skyblue/v-form-antd)
[![github](https://img.shields.io/badge/Author-Alfred_Skyblue-blue.svg)](https://github.com/Alfred-Skyblue)
[![CompositionAPI](https://img.shields.io/badge/Composition-API-green.svg)](https://github.com/vuejs/composition-api)

## 使用方法

1. 安装
```shell
yarn add v-form-antd
or
npm install v-form-antd
```

2. 在vue中使用
```javascript
import Vue from 'vue'
import VFormAntd from 'v-form-antd'
import 'v-form-antd/lib/v-form-design.css'

Vue.use(VFormAntd)
```

3. 使用表单设计器
```vue
<template>
  <v-form-design title="v-form-antd-表单设计器"/>
</template>
```

4. 渲染表单
```vue
<template>
  <div>
    <v-form-create
      :formConfig="formConfig"
      :formData="formData"
      v-model="fApi"
    />
    <button @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fApi:{},
      formData:{},
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
```

