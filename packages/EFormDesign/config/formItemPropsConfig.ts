import { IAnyObject } from '@pack/typings/baseType'

export interface IBaseFormAttrs {
  name?: string // 字段名
  label?: string // 字段标签
  tag?: string // 属性控件
  props?: IAnyObject // 传递给控件的属性
  exclude?: string[] // 需要排除的控件
  includes?: string[] // 符合条件的组件
  children?: IBaseFormAttrs[]
}

export interface IBaseFormItemControlAttrs extends IBaseFormAttrs {
  target?: 'props' | 'options' // 绑定到对象下的某个目标key中
}

export const baseFormItemProps: IBaseFormAttrs[] = [
  {
    name: 'label',
    label: '标签',
    tag: 'AInput',
    props: {
      type: 'text',
      placeholder: '请输入标签'
    },
    exclude: ['grid']
  },
  {
    name: 'field',
    label: '数据字段',
    tag: 'AInput',
    props: {
      type: 'text',
      placeholder: '请输入数据字段'
    },
    exclude: ['grid']
  },
  {
    name: 'span',
    label: '栅格数',
    tag: 'ASlider',
    props: {
      max: 24,
      min: 0,
      marks: { 12: '' }
    }
  },
  {
    name: 'width',
    label: '宽度',
    tag: 'AInput',
    props: {
      placeholder: '请输入数据字段'
    },
    exclude: ['grid']
  },
  {
    name: 'help',
    label: '提示信息',
    tag: 'AInput',
    props: {
      placeholder: '请输入提示信息'
    }
  }
]

export const baseFormItemControlAttrs: IBaseFormItemControlAttrs[] = [
  {
    name: 'hidden',
    label: '隐藏',
    exclude: ['alert']
  }
]
