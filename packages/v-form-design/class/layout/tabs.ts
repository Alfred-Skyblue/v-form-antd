import { ITabsColumn, Tabs } from '@common/class/layout/tabs'
import TabsProps from '@design/components/VFProps/Tabs/index.vue'

export class DesignTabs extends Tabs {
  static designType = Tabs.type
  static designProps = TabsProps

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
}
