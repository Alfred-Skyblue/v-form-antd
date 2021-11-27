import { IBaseFormAttrs } from './formItemPropsConfig'

interface IBaseComponentProps {
  [key: string]: IBaseFormAttrs[]
}

export const baseComponentControlAttrs: Omit<IBaseFormAttrs, 'tag'>[] = [
  {
    name: 'disabled',
    label: '禁用'
  },
  {
    name: 'allowClear',
    label: '可清除',
    includes: [
      'input',
      'select',
      'textarea',
      'number',
      'date',
      'dateRange',
      'month',
      'monthRange'
    ]
  },
  {
    name: 'showSearch',
    label: '可搜索',
    includes: ['select']
  },
  {
    name: 'showTime',
    label: '显示时间',
    includes: ['date', 'dateRange', 'month', 'monthRange']
  }
]

export const baseComponentAttrs: IBaseComponentProps = {
  input: [
    {
      name: 'type',
      label: '类型',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入类型'
      }
    },
    {
      name: 'placeholder',
      label: '占位符',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入占位符'
      }
    },
    {
      name: 'defaultValue',
      label: '默认值',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入默认值'
      }
    },
    {
      name: 'prefix',
      label: '前缀',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入前缀'
      }
    },
    {
      name: 'suffix',
      label: '后缀',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入后缀'
      }
    },
    {
      name: 'addonBefore',
      label: '前置标签',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入前置标签'
      }
    },
    {
      name: 'addonAfter',
      label: '后置标签',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入后置标签'
      }
    },
    {
      name: 'maxLength',
      label: '最大长度',
      tag: 'AInputNumber',
      props: {
        type: 'text',
        placeholder: '请输入最大长度'
      }
    }
  ],
  number: [
    {
      name: 'placeholder',
      label: '占位符',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入占位符'
      }
    },
    {
      name: 'defaultValue',
      label: '默认值',
      tag: 'AInputNumber',
      props: {
        type: 'text',
        placeholder: '请输入默认值'
      }
    },
    {
      name: 'min',
      label: '最小值',
      tag: 'AInputNumber',
      props: {
        type: 'text',
        placeholder: '请输入最小值'
      }
    },
    {
      name: 'max',
      label: '最大值',
      tag: 'AInputNumber',
      props: {
        type: 'text',
        placeholder: '请输入最大值'
      }
    },
    {
      name: 'step',
      label: '步长',
      tag: 'AInputNumber',
      props: {
        type: 'text',
        placeholder: '请输入步长'
      }
    }
  ],
  textarea: [
    {
      name: 'placeholder',
      label: '占位符',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入占位符'
      }
    },
    {
      name: 'defaultValue',
      label: '默认值',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入默认值'
      }
    }
  ],
  select: [
    {
      name: 'defaultValue',
      label: '默认值',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入默认值'
      }
    },
    {
      name: 'placeholder',
      label: '占位符',
      tag: 'AInput',
      props: {
        type: 'text',
        placeholder: '请输入占位符'
      }
    },
    {
      name: 'mode',
      label: '选择模式',
      tag: 'RadioButtonGroup',
      props: {
        options: [
          { label: '单选', value: 'default' },
          { label: '多选', value: 'multiple' },
          { label: '标签', value: 'tags' },
          { label: '组合', value: 'combobox' }
        ]
      }
    }
  ],
  checkboxGroup: [],
  radioGroup: [
    {
      name: 'defaultValue',
      label: '默认值',
      tag: 'AInput',
      props: {
        placeholder: '请输入默认值'
      }
    }
  ],
  date: [
    {
      name: 'placeholder',
      label: '占位符',
      tag: 'AInput',
      props: {
        placeholder: '请输入占位符'
      }
    },
    {
      name: 'format',
      label: '展示格式（format）',
      tag: 'AInput',
      props: {
        placeholder: 'YYYY-MM-DD'
      }
    },
    {
      name: 'valueFormat',
      label: '绑定值格式（valueFormat）',
      tag: 'AInput',
      props: {
        placeholder: 'YYYY-MM-DD'
      }
    }
  ],

  dateRange: [
    {
      name: 'placeholder',
      label: '占位符',
      children: [
        {
          tag: 'AInput'
        },
        {
          tag: 'AInput'
        }
      ]
    },
    {
      name: 'format',
      label: '展示格式（format）',
      tag: 'AInput',
      props: {
        placeholder: 'YYYY-MM-DD HH:mm:ss'
      }
    },
    {
      name: 'valueFormat',
      label: '绑定值格式（valueFormat）',
      tag: 'AInput',
      props: {
        placeholder: 'YYYY-MM-DD'
      }
    }
  ],
  month: [
    {
      name: 'placeholder',
      label: '占位符',
      tag: 'AInput',
      props: {
        placeholder: '请输入占位符'
      }
    },
    {
      name: 'format',
      label: '展示格式（format）',
      tag: 'AInput',
      props: {
        placeholder: 'YYYY-MM'
      }
    },
    {
      name: 'valueFormat',
      label: '绑定值格式（valueFormat）',
      tag: 'AInput',
      props: {
        placeholder: 'YYYY-MM'
      }
    }
  ],
  time: [
    {
      name: 'placeholder',
      label: '占位符',
      tag: 'AInput',
      props: {
        placeholder: '请输入占位符'
      }
    }
  ]
}
