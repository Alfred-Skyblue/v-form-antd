import { IAnyObject } from './base-type'
import { ValidationRule } from 'ant-design-vue/types/form-model/form'
import { ComponentOptions } from 'vue/types/options'
import { IVFormMethods } from '@pack/hooks/useVFormMethods'
type LayoutType = 'horizontal' | 'vertical' | 'inline'
type labelLayout = 'flex' | 'grid'
export type PropsTabKey = 1 | 2 | 3
type ColSpanType = number | string
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
  // 联动属性变化的回调
  update?: (value: any, formItem: IVFormComponent, fApi: IVFormMethods) => void
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
    labelCol?: Partial<IACol>
    wrapperCol?: Partial<IACol>
    hideRequiredMark?: boolean
    disabled?: boolean
  }
  // 当前选中项
  currentItem?: IVFormComponent
  activeKey?: PropsTabKey
}

export interface AForm {
  /**
   * Hide required mark of all form items
   * @default false
   * @type boolean
   */
  hideRequiredMark: boolean

  /**
   * The layout of label. You can set span offset to something like {span: 3, offset: 12} or sm: {span: 3, offset: 12} same as with <Col>
   * @type IACol
   */
  labelCol: IACol

  /**
   * Define form layout
   * @default 'horizontal'
   * @type string
   */
  layout: 'horizontal' | 'inline' | 'vertical'

  /**
   * The layout for input controls, same as labelCol
   * @type IACol
   */
  wrapperCol: IACol

  /**
   * change default props colon value of Form.Item (only effective when prop layout is horizontal)
   * @type boolean
   * @default true
   */
  colon: boolean

  /**
   * text align of label of all items
   * @type 'left' | 'right'
   * @default 'left'
   */
  labelAlign: 'left' | 'right'

  /**
   * data of form component
   * @type object
   */
  model: IAnyObject

  /**
   * validation rules of form
   * @type object
   */
  rules: IAnyObject

  /**
   * Default validate message. And its format is similar with newMessages's returned value
   * @type any
   */
  validateMessages?: any

  /**
   * whether to trigger validation when the rules prop is changed
   * @type Boolean
   * @default true
   */
  validateOnRuleChange: boolean

  /**
   * validate the whole form. Takes a callback as a param. After validation,
   * the callback will be executed with two params: a boolean indicating if the validation has passed,
   * and an object containing all fields that fail the validation. Returns a promise if callback is omitted
   * @type Function
   */
  validate: (
    callback?: (boolean: boolean, object: IAnyObject) => void
  ) => void | Promise<any>

  /**
   * validate one or several form items
   * @type Function
   */
  validateField: (
    props: string[] | string,
    callback: (errorMessage: string) => void
  ) => void

  /**
   * reset all the fields and remove validation result
   */
  resetFields: () => void

  /**
   * clear validation message for certain fields.
   * The parameter is prop name or an array of prop names of the form items whose validation messages will be removed.
   * When omitted, all fields' validation messages will be cleared
   * @type string[] | string
   */
  clearValidate: (props: string[] | string) => void
}

interface IACol {
  /**
   * raster number of cells to occupy, 0 corresponds to display: none
   * @default none (0)
   * @type ColSpanType
   */
  span: ColSpanType

  /**
   * raster order, used in flex layout mode
   * @default 0
   * @type ColSpanType
   */
  order: ColSpanType

  /**
   * the layout fill of flex
   * @default none
   * @type ColSpanType
   */
  flex: ColSpanType

  /**
   * the number of cells to offset Col from the left
   * @default 0
   * @type ColSpanType
   */
  offset: ColSpanType

  /**
   * the number of cells that raster is moved to the right
   * @default 0
   * @type ColSpanType
   */
  push: ColSpanType

  /**
   * the number of cells that raster is moved to the left
   * @default 0
   * @type ColSpanType
   */
  pull: ColSpanType

  /**
   * <576px and also default setting, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xs: { span: ColSpanType; offset: ColSpanType } | ColSpanType

  /**
   * ≥576px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  sm: { span: ColSpanType; offset: ColSpanType } | ColSpanType

  /**
   * ≥768px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  md: { span: ColSpanType; offset: ColSpanType } | ColSpanType

  /**
   * ≥992px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  lg: { span: ColSpanType; offset: ColSpanType } | ColSpanType

  /**
   * ≥1200px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xl: { span: ColSpanType; offset: ColSpanType } | ColSpanType

  /**
   * ≥1600px, could be a span value or an object containing above props
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xxl: { span: ColSpanType; offset: ColSpanType } | ColSpanType
}
