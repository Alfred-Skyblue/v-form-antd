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
    label: '可清除'
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
  ]
}
