declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'clipboard' {
  export default clipboard
}

interface zhCN {
  [key: string]: any
}
declare module 'ant-design-vue/lib/locale-provider/zh_CN' {
  const zh_CN: zhCN
  export default zh_CN
}

declare module 'vue-codemirror-lite' {
  import { VueProxy } from '@vue/composition-api'
  export const codemirror: VueProxy<any, any>
  export default { codemirror }
}
