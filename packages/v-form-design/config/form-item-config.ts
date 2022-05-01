import { initDesignComponents } from '@design/class/form'
import type { BasicFormItem } from '@common/class/basic-form'
import { initDesignLayoutComponents } from '@design/class/layout'
import { initDesignHighLevelComponents } from '@design/class/high-level'

export const basicComponents: BasicFormItem[] = initDesignComponents()

export const layoutComponents: BasicFormItem[] = initDesignLayoutComponents()
export const highLevelComponents: BasicFormItem[] =
  initDesignHighLevelComponents()
