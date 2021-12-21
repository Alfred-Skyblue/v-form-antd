/**
 * @name: formItemConfig
 * @author: ypt
 * @date: 2021/11/18 16:25
 * @description：表单配置
 */
import { IVFormComponent } from '@pack/typings/v-form-component'
import { IAnyObject } from '@pack/typings/base-type'
import ACmp from '../components'
import { isArray } from 'lodash-es'

export const componentMap: IAnyObject = {
  ...ACmp
}

/**
 * 设置自定义表单
 * @param {IVFormComponent | IVFormComponent[]} config
 */
export function setFormDesignComponents(config: IVFormComponent | IVFormComponent[]) {
  if (isArray(config)) {
    config.forEach(item => {
      const { component, ...rest } = item
      componentMap[item.type] = component
      customComponents.push(Object.assign({ props: {} }, rest))
    })
  } else {
    const { component, ...rest } = config
    componentMap[config.type] = component
    customComponents.push(Object.assign({ props: {} }, rest))
  }
}

export const customComponents: IVFormComponent[] = []

export const baseComponents: IVFormComponent[] = [
  {
    type: 'input',
    label: '输入框',
    icon: 'icon-input',
    field: '',
    span: 24,
    props: {
      type: 'text'
    }
  },
  {
    type: 'number',
    label: '数字输入框',
    icon: 'icon-number',
    field: '',
    span: 24,
    props: {}
  },
  {
    type: 'textarea',
    label: '文本域',
    icon: 'icon-textarea',
    field: '',
    span: 24,
    props: {}
  },
  {
    type: 'select',
    label: '下拉选择',
    icon: 'icon-select',
    field: '',
    span: 24,
    props: {
      options: [
        {
          label: '选项1',
          value: '1'
        },
        {
          label: '选项2',
          value: '2'
        }
      ]
    }
  },
  {
    type: 'checkboxGroup',
    label: '复选框',
    icon: 'icon-checkbox',
    field: '',
    span: 24,
    props: {
      options: [
        {
          label: '选项1',
          value: '1'
        },
        {
          label: '选项2',
          value: '2'
        }
      ]
    }
  },
  {
    type: 'radioGroup',
    label: '单选框',
    icon: 'icon-radio',
    field: '',
    span: 24,
    props: {
      options: [
        {
          label: '选项1',
          value: '1'
        },
        {
          label: '选项2',
          value: '2'
        }
      ]
    }
  },
  {
    type: 'date',
    label: '日期选择',
    icon: 'icon-date-picker',
    field: '',
    span: 24,
    props: {}
  },
  {
    type: 'dateRange',
    label: '日期范围',
    icon: 'icon-date-range',
    field: '',
    span: 24,
    props: {
      placeholder: ['开始日期', '结束日期']
    }
  },
  {
    type: 'month',
    label: '月份选择',
    icon: 'icon-month',
    field: '',
    span: 24,
    props: {
      placeholder: '请选择月份'
    }
  },
  {
    type: 'monthRange',
    label: '月份范围',
    icon: 'icon-month-range',
    field: '',
    span: 24,
    props: {
      format: 'YYYY-MM',
      valueFormat: 'YYYY-MM',
      placeholder: ['开始月份', '结束月份']
    }
  },
  {
    type: 'time',
    label: '时间选择',
    icon: 'icon-time-picker',
    field: '',
    span: 24,
    props: {}
  },
  {
    type: 'slider',
    label: '滑动输入条',
    icon: 'icon-slider',
    field: '',
    span: 24,
    props: {}
  },
  {
    type: 'rate',
    label: '评分',
    icon: 'icon-rate',
    field: '',
    span: 24,
    props: {}
  },
  {
    type: 'switch',
    label: '开关',
    icon: 'icon-switch',
    field: '',
    span: 24,
    props: {}
  },
  {
    type: 'treeSelect',
    label: '树形选择',
    icon: 'icon-tree-select',
    field: '',
    span: 24,
    props: {
      treeData: [
        {
          label: '选项1',
          value: '1',
          children: [
            {
              label: '选项三',
              value: '1-1'
            }
          ]
        },
        {
          label: '选项2',
          value: '2'
        }
      ]
    }
  },
  {
    type: 'upload',
    label: '上传',
    icon: 'icon-upload',
    field: '',
    span: 24,
    props: {}
  },
  {
    type: 'cascader',
    label: '级联选择',
    icon: 'icon-cascader',
    field: '',
    span: 24,
    props: {
      options: [
        {
          label: '选项1',
          value: '1',
          children: [
            {
              label: '选项三',
              value: '1-1'
            }
          ]
        },
        {
          label: '选项2',
          value: '2'
        }
      ]
    }
  },
  {
    type: 'button',
    label: '按钮',
    icon: 'icon-button',
    field: '',
    span: 24,
    hiddenLabel: true,
    props: {}
  },
  {
    type: 'colorPicker',
    label: '颜色选择器',
    icon: 'icon-picker-color',
    field: '',
    span: 24,
    props: {
      defaultValue: '',
      value: ''
    }
  },
  {
    type: 'slot',
    label: '插槽',
    icon: 'icon-slot',
    field: '',
    span: 24,
    props: {
      slotName: 'slotName'
    }
  }
]

export const layoutComponents: IVFormComponent[] = [
  {
    type: 'grid',
    label: '栅格布局',
    icon: 'icon-grid',
    props: {},
    columns: [
      {
        span: 12,
        children: []
      },
      {
        span: 12,
        children: []
      }
    ],
    span: 24,
    options: {
      gutter: 0
    }
  }
]
