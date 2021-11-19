type RuleChangeType = 'change' | 'blur' | ['change', 'blur']

export type IEFormCmpOrList = IEFormComponent | IEFormComponent[]
export interface IRules {
  required?: boolean
  message?: string
  trigger?: RuleChangeType
  enum?: string
  len?: number
  max?: number
  min?: number
  pattern?: RegExp
  transform?: (value: any) => any
  type?: string
  validator?: (rule: any, value: any, callback: () => void) => void
  whitespace?: boolean
}

export interface IObject {
  [key: string]: any
}

interface ICol {
  span?: number
  offset?: number
  push?: number
  pull?: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

export interface IEFormComponent {
  type: string
  label: string
  icon: string
  rules: IRules[]
  col: string | ICol
  props: IObject
  options: IObject
  key?: string
  field?: string
}

export interface IFormConfig {
  formItems: IEFormComponent[]
  config: IObject
}
