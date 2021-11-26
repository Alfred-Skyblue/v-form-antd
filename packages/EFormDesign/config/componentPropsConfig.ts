import { IBaseFormProps } from './formItemPropsConfig'

interface IBaseComponentProps {
  [key: string]: IBaseFormProps[]
}
export const baseComponentProps: IBaseComponentProps = {
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
  ]
}
