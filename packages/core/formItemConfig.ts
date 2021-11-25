/**
 * @name: formItemConfig
 * @author: yangpanteng
 * @date: 2021/11/18 16:25
 * @description：$END$
 */
import { IEFormComponent } from '@pack/typings/EFormComponent'
import { IAnyObject } from '@pack/typings/baseType'
import ACmp from './use_antd'
import { isArray } from 'lodash-es'
export const componentMap: IAnyObject = {
  ...ACmp
}

export function setFormDesignConfig(
  config: IEFormComponent | IEFormComponent[]
) {
  if (isArray(config)) {
    config.forEach(item => {
      componentMap[item.type] = item
    })
  } else {
    componentMap[config.type] = config
  }
}

export const baseComponents: IEFormComponent[] = [
  {
    type: 'input',
    label: '输入框',
    icon: 'icon-input',
    field: '',
    span: 24,
    props: {
      type: 'text'
    }
  }
]
