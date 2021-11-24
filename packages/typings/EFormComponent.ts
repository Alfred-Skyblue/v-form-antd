import { IObject } from './baseType'
type RuleChangeType = 'change' | 'blur' | ['change', 'blur']
type LayoutType = 'horizontal' | 'vertical' | 'inline'
type labelLayout = 'flex' | 'grid'
export interface IRules {
  required: boolean
  message: string
  trigger: RuleChangeType
  enum: string
  len: number
  max: number
  min: number
  pattern: RegExp
  transform: (value: any) => any
  type: string
  validator: (rule: any, value: any, callback: () => void) => void
  whitespace: boolean
}

/**
 * 布局属性
 */
interface ICol {
  span: number
  offset: number
  push: number
  pull: number
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

/**
 * 组件属性
 */
export interface IEFormComponent {
  type: string
  label?: string
  icon?: string
  rules?: Array<Partial<IRules>>
  col?: string | Partial<ICol>
  props?: IObject
  options?: IObject
  key?: string
  field?: string
  span?: number
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
    labelCol?: Partial<ICol>
    wrapperCol?: Partial<ICol>
    hideRequiredMark?: boolean
  }
  currentItem?: IEFormComponent
}
