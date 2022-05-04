import { CustomComponent, CustomFormItem } from '@common/class/custom'

export const customComponents = [] as CustomFormItem[]
export const customComponentsMap = {} as { [key: string]: CustomComponent }

export const setCustomComponents = (components: CustomComponent[]) => {
  if (!components) return
  const componentsList = components.map(item => {
    const { type } = item
    customComponentsMap[type] = item
    return new CustomFormItem(item)
  })
  customComponents.push(...componentsList)
}
