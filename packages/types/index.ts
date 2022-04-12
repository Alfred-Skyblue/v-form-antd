import type { Slot } from 'vue'

export type IAnyObject = Record<string, any>

export type StringAndSlot = string | Slot

export type IAnyEvent = Record<string, (...arg: any[]) => void>
