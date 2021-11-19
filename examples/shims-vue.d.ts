declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface zhCN {
  [key: string]: any
}

declare module 'ant-design-vue/lib/locale-provider/zh_CN' {
  const zh_CN: zhCN
  export default zh_CN
}
