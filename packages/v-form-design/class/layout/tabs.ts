import { ITabsColumn, Tabs } from '@common/class/layout/tabs'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import TabsProps from '@design/components/VFProps/Tabs/index.vue'

export class DesignTabs extends Tabs {
  public columns: ITabsColumn[] = [
    {
      value: '1',
      label: 'Tab 1',
      list: []
    },
    {
      value: '2',
      label: 'Tab 2',
      list: []
    }
  ]
  public propsCmp: Component = shallowRef(TabsProps)
}
