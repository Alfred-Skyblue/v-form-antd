import type { Slot } from 'vue'
import type { defineComponent } from 'vue'

export type IAnyObject = Record<string, any>
export type StringAndSlot = string | Slot
export type IAnyEvent = Record<string, (...arg: any[]) => void>
export type IAnyFunction = (...arg: any[]) => any

export type Component = ReturnType<typeof defineComponent>
