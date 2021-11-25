import { IAnyObject } from './baseType'
import { Col } from 'ant-design-vue'
import { ValidationRule } from 'ant-design-vue/types/form-model/form'
type LayoutType = 'horizontal' | 'vertical' | 'inline'
type labelLayout = 'flex' | 'grid'

/**
 * 校验属性 由于 ant-design-vue 官方提供的接口，只对字符串进行了约束，这里采取排除继承后扩展
 */
interface IValidationRule extends Omit<ValidationRule, 'trigger'> {
  // 校验触发的时机
  trigger?: 'change' | 'blur' | ['change', 'blur']
}

/**
 * 组件属性
 */
export interface IEFormComponent {
  // 组件类型
  type: string
  // 组件label
  label?: string
  // 组件icon
  icon?: string
  // 组件校验规则
  rules?: Partial<IValidationRule>[]
  // 组件布局属性
  col?: Partial<Col>
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
  // 控件栅格数
  span?: number
  // 子控件
  columns?: Array<{ span: number; children: IEFormComponent[] }>
}

/**
 * 表单配置
 */
export interface IFormConfig {
  formItems: IEFormComponent[]
  config: {
    layout?: LayoutType
    labelLayout?: labelLayout
    labelWidth?: number
    labelCol?: Partial<Col>
    wrapperCol?: Partial<Col>
    hideRequiredMark?: boolean
  }
  currentItem?: IEFormComponent
}
