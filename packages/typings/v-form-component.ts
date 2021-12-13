import { IAnyObject } from './base-type'
import { Col } from 'ant-design-vue'
import { ValidationRule } from 'ant-design-vue/types/form-model/form'
import { ComponentOptions } from 'vue/types/options'
type LayoutType = 'horizontal' | 'vertical' | 'inline'
type labelLayout = 'flex' | 'grid'
export type PropsTabKey = 1 | 2 | 3
/**
 * 校验属性 由于 ant-design-vue 官方提供的接口，只对字符串进行了约束，这里采取省略trigger继承后扩展
 */

export interface IValidationRule extends Omit<ValidationRule, 'trigger' | 'pattern'> {
  // 校验触发的时机
  trigger?: 'change' | 'blur' | ['change', 'blur']
  pattern?: RegExp | string
}

/**
 * 组件属性
 */
export interface IVFormComponent {
  // 组件类型
  type: string
  // 组件label
  label?: string
  // 自定义组件控件实例
  component?: ComponentOptions<any>
  // 组件icon
  icon?: string
  // 组件校验规则
  rules?: Partial<IValidationRule>[]
  // 组件布局属性
  col?: Partial<Col>
  // 是否隐藏
  hidden?: boolean
  // 隐藏label
  hiddenLabel?: boolean
  // 组件宽度
  width?: string
  // 是否必选
  required?: boolean
  // 必选提示
  message?: string
  // 提示信息
  help?: string
  // 传给给组件的属性，默认会吧所有的props都传递给控件
  props?: IAnyObject
  // 监听组件事件对象，以v-on方式传递给控件
  on?: IAnyObject<(...any: []) => void>
  // 组件选项
  options?: IAnyObject
  // 唯一标识
  key?: string
  // 对应的字段
  field?: string
  // 联动字段
  link?: string[]
  update?: (...arg: any[]) => void
  // 控件栅格数
  span?: number | string
  // 标签布局
  labelCol?: IAnyObject
  // 组件布局
  wrapperCol?: IAnyObject
  // 子控件
  columns?: Array<{ span: number; children: IVFormComponent[] }>
}

/**
 * 表单配置
 */
export interface IFormConfig {
  // 表单项配置列表
  formItems: IVFormComponent[]
  // 表单配置
  config: {
    layout?: LayoutType
    labelLayout?: labelLayout
    labelWidth?: number
    labelCol?: Partial<Col>
    wrapperCol?: Partial<Col>
    hideRequiredMark?: boolean
    disabled?: boolean
  }
  // 当前选中项
  currentItem?: IVFormComponent
  activeKey?: PropsTabKey
}
