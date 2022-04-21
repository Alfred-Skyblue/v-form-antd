import { initDesignComponents } from '@design/class/form'
import type { BasicFormItem } from '@common/class/basic-form'
import { initDesignLayoutComponents } from '@design/class/layout'
import type { VFComponent } from '@common/class/component'

export const basicComponents: BasicFormItem[] = initDesignComponents()

export const layoutComponents: VFComponent[] = initDesignLayoutComponents()
