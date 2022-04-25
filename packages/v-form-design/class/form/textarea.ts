import { Textarea } from '@common/class/form/textarea'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import TextareaProps from '@design/components/VFProps/Textarea/index.vue'

export class DesignTextarea extends Textarea {
  public propsCmp: Component = shallowRef(TextareaProps)
}
