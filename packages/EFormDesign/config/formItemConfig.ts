/**
 * @name: formItemConfig
 * @author: yangpanteng
 * @date: 2021/11/18 16:25
 * @description：$END$
 */

import { IEFormComponent } from '../../typings/EFormComponent'

export const baseComponents: IEFormComponent[] = [
  {
    type: 'input',
    label: '输入框',
    icon: 'icon-input',
    rules: [
      {
        required: false,
        message: '必填项',
        trigger: 'change'
      }
    ],
    col: {
      span: 0
    },
    props: {
      type: 'text'
    },
    options: {}
  }
]
