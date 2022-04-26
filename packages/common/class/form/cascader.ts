import { BasicFormItem } from '../basic-form'
import type { IAnyFunction, IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'

interface ICascader extends IAnyObject {
  /**
   * whether allow clear
   * @default true
   * @type boolean
   */
  allowClear: boolean

  /**
   * get focus when components mounted
   * @default false
   * @type boolean
   */
  autoFocus: boolean

  /**
   * change value on each selection if set to true.
   * @default false
   * @type boolean
   */
  changeOnSelect: boolean

  /**
   * initial selected value
   * @type Array<string | number>
   */
  defaultValue: Array<string | number>

  /**
   * Whether disabled select
   * @default false
   * @type boolean
   */
  disabled: boolean

  /**
   * class function of displaying selected options, you can use slot="displayRender" and slot-scope="{labels, selectedOptions}"
   * @default labels => labels.join(' / ')
   * @type Function
   */
  displayRender: any

  dropdownClassName: string

  dropdownStyle: Partial<CSSStyleDeclaration>

  expandIcon: any
  /**
   * expand current item when click or hover, one of 'click' 'hover'
   * @default 'click'
   * @type string
   */
  expandTrigger: 'click' | 'hover'

  /**
   * custom field name for label and value and children
   * @default { label: 'label', value: 'value', children: 'children' }
   * @type { value: string; label: string; children?: string; }
   */
  fieldNames: {
    value: string
    label: string
    children?: string
  }

  /**
   * Parent Node which the selector should be rendered to. Default to body.
   * When position issues happen, try to modify it into scrollable content and position it relative.
   * @default () => document.body
   * @type Function
   */
  getPopupContainer: (triggerNode: any) => HTMLElement

  /**
   * To load option lazily, and it cannot work with showSearch
   * @type Function
   */
  loadData: IAnyFunction

  maxTagCount: any

  maxTagPlaceholder: any

  multiple: boolean
  /**
   * Specify content to show when no result matches.
   * @default 'Not Found'
   * @type string
   */
  notFoundContent: any

  open: boolean
  options: any[]

  /**
   * input placeholder
   * @default 'Please select'
   * @type string
   */
  placeholder: string

  /**
   * additional className of popup overlay
   * @type string
   */
  popupClassName: string

  searchValue: string

  showSearch: boolean | IAnyObject

  /**
   * additional style of popup overlay
   * @type object
   */
  popupStyle: object

  /**
   * use preset popup align config from builtinPlacements：bottomLeft bottomRight topLeft topRight
   * @default 'bottomLeft'
   * @type string
   */
  popupPlacement: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'

  /**
   * set visible of cascader popup
   * @type boolean
   */
  popupVisible: boolean

  /**
   * input size, one of large default small
   * @default 'default'
   * @type string
   */
  size: 'large' | 'default' | 'small'

  /**
   * The custom suffix icon
   * @type 	String | VNode | slot
   */
  suffixIcon: any
  tagRender: any

  /**
   * selected value
   * @type Array<string | number>
   */
  value: Array<string | number>
}
export class Cascader extends BasicFormItem {
  readonly _tag = 'ACascader'
  readonly type = 'cascader'
  readonly icon = 'cascader'
  public props: Partial<ICascader> = {
    allowClear: undefined,
    autoFocus: undefined,
    changeOnSelect: undefined,
    defaultValue: undefined,
    disabled: undefined,
    displayRender: undefined,
    dropdownClassName: undefined,
    dropdownStyle: undefined,
    expandIcon: undefined,
    expandTrigger: undefined,
    fieldNames: undefined,
    loadData: undefined,
    maxTagCount: undefined,
    maxTagPlaceholder: undefined,
    multiple: undefined,
    notFoundContent: undefined,
    open: undefined,
    placeholder: undefined,
    popupClassName: undefined,
    searchValue: undefined,
    showSearch: undefined,
    popupStyle: undefined,
    popupPlacement: undefined,
    popupVisible: undefined,
    size: undefined,
    suffixIcon: undefined,
    tagRender: undefined,
    value: undefined,
    options: [
      {
        label: '选项1',
        value: 'value1',
        children: [
          { label: '1-1', value: '1-1' },
          { label: '1-2', value: '1-2' }
        ]
      },
      {
        label: '选项2',
        value: 'value2',
        children: [{ label: '2-1', value: '2-1' }]
      }
    ]
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '级联选择', ...options })
  }
}
