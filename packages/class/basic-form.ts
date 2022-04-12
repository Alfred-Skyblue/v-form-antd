import type { IAnyEvent } from '@/types'

export abstract class BasicFormItem {
  public on!: IAnyEvent
  protected constructor(public label: string, public field: string) {
    this.label = label
    this.field = field
  }
  update() {
    console.log('update')
  }
}
