import { CustomComponent, CustomFormItem } from '@common/class/custom'

export const customComponents = [] as CustomFormItem[]

export const setCustomComponents = (components: CustomComponent[]) => {
  if (!components) return
  const componentsList = components.map(item => new CustomFormItem(item))
  customComponents.push(...componentsList)
}
