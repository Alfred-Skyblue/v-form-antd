import { IAnyObject } from '@pack/typings/baseType'

interface IBasePropsConfig {
  name: string // 字段名
  label: string // 字段标签
  tag?: string // 属性控件
  props?: IAnyObject // 传递给控件的属性
  exclude?: string[] // 需要排除的控件
}

export interface IBaseHandle extends IBasePropsConfig {
  target?: 'props' | 'options' // 绑定到对象下的某个目标key中
}

export const basePropsConfig: IBasePropsConfig[] = [
  {
    name: 'label',
    label: '标签',
    tag: 'AInput',
    props: {
      type: 'text',
      placeholder: '请输入标签'
    }
  },
  {
    name: 'field',
    label: '数据字段',
    tag: 'AInput',
    props: {
      type: 'text',
      placeholder: '请输入数据字段'
    }
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
    }
  }
]

export const baseHandleProps: IBaseHandle[] = [
  {
    name: 'hidden',
    label: '隐藏',
    exclude: ['alert']
  },
  {
    name: 'disabled',
    label: '禁用',
    target: 'props'
  }
]
