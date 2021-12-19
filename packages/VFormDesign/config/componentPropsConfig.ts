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
      'monthRange',
      'time',
      'cascader',
      'treeSelect'
    ]
  },
  {
    name: 'showSearch',
    label: '可搜索',
    includes: ['select', 'treeSelect', 'cascader']
  },
  {
    name: 'showTime',
    label: '显示时间',
    includes: ['date', 'dateRange', 'month', 'monthRange']
  },
  {
    name: 'range',
    label: '双向滑动',
    includes: ['slider']
  },
  {
    name: 'allowHalf',
    label: '允许半选',
    includes: ['rate']
  },
  {
    name: 'multiple',
    label: '多选',
    includes: ['treeSelect', 'upload']
  },
  {
    name: 'treeDefaultExpandAll',
    label: '展开所有',
    includes: ['treeSelect']
  },

  {
    name: 'treeCheckable',
    label: '可勾选',
    includes: ['treeSelect']
  },
  {
    name: 'directory',
    label: '文件夹',
    includes: ['upload']
  },
  {
    name: 'withCredentials',
    label: '携带cookie',
    includes: ['upload']
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
      label: '选择模式（默认单选）',
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
  monthRange: [
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
  time: [
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
  slider: [
    {
      name: 'defaultValue',
      label: '默认值',
      tag: 'AInputNumber',
      props: {
        placeholder: '请输入默认值'
      }
    },
    {
      name: 'min',
      label: '最小值',
      tag: 'AInputNumber',
      props: {
        placeholder: '请输入最小值'
      }
    },
    {
      name: 'max',
      label: '最大值',
      tag: 'AInputNumber',
      props: {
        placeholder: '请输入最大值'
      }
    },
    {
      name: 'step',
      label: '步长',
      tag: 'AInputNumber',
      props: {
        placeholder: '请输入步长'
      }
    }
  ],
  rate: [
    {
      name: 'defaultValue',
      label: '默认值',
      tag: 'AInputNumber',
      props: {
        placeholder: '请输入默认值'
      }
    },
    {
      name: 'character',
      label: '自定义字符',
      tag: 'AInput',
      props: {
        placeholder: '请输入自定义字符'
      }
    },
    {
      name: 'count',
      label: 'start 总数',
      tag: 'AInputNumber',
      props: {
        placeholder: '请输入自定义字符'
      }
    }
  ],
  switch: [
    {
      name: 'checkedChildren',
      label: '选中时的内容',
      tag: 'AInput',
      props: {
        placeholder: '选中时的内容'
      }
    },
    {
      name: 'unCheckedChildren',
      label: '非选中时的内容',
      tag: 'AInput',
      props: {
        placeholder: '非选中时的内容'
      }
    },
    {
      name: 'size',
      label: '尺寸',
      tag: 'RadioButtonGroup',
      props: {
        options: [
          {
            label: '默认',
            value: 'default'
          },
          {
            label: '小',
            value: 'small'
          }
        ]
      }
    }
  ],
  treeSelect: [
    {
      name: 'placeholder',
      label: '占位符',
      tag: 'AInputNumber',
      props: {
        placeholder: '请输入占位符'
      }
    }
  ],
  cascader: [
    {
      name: 'placeholder',
      label: '占位符',
      tag: 'AInputNumber',
      props: {
        placeholder: '请输入占位符'
      }
    },
    {
      name: 'expandTrigger',
      label: '次级展开方式(默认click)',
      tag: 'RadioButtonGroup',
      props: {
        options: [
          {
            label: 'click',
            value: 'click'
          },
          {
            label: 'hover',
            value: 'hover'
          }
        ]
      }
    },
    {
      name: 'size',
      label: '尺寸',
      tag: 'RadioButtonGroup',
      props: {
        options: [
          {
            label: '默认',
            value: 'default'
          },
          {
            label: '大',
            value: 'large'
          },
          {
            label: '小',
            value: 'small'
          }
        ]
      }
    }
  ],
  button: [
    {
      name: 'type',
      label: '类型',
      tag: 'ARadioGroup',
      props: {
        options: [
          {
            label: 'default',
            value: 'default'
          },
          {
            label: 'primary',
            value: 'primary'
          },
          {
            label: 'danger',
            value: 'danger'
          },
          {
            label: 'dashed',
            value: 'dashed'
          }
        ]
      }
    },
    {
      name: 'size',
      label: '尺寸',
      tag: 'RadioButtonGroup',
      props: {
        options: [
          {
            label: '默认',
            value: 'default'
          },
          {
            label: '大',
            value: 'large'
          },
          {
            label: '小',
            value: 'small'
          }
        ]
      }
    },
    {
      name: 'handle',
      label: '操作',
      tag: 'RadioButtonGroup',
      props: {
        options: [
          {
            label: '提交',
            value: 'submit'
          },
          {
            label: '重置',
            value: 'reset'
          }
        ]
      }
    }
  ],
  upload: [
    {
      name: 'action',
      label: '上传地址',
      tag: 'AInput'
    },
    {
      name: 'name',
      label: '附件参数名（name）',
      tag: 'AInput'
    }
  ],
  colorPicker: [
    {
      name: 'defaultValue',
      label: '默认值',
      tag: 'AColorPicker'
    }
  ],
  slot: [
    {
      name: 'slotName',
      label: '插槽名称',
      tag: 'AInput'
    }
  ]
}
