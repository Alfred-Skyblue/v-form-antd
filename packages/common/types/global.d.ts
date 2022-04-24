interface InputEvent extends InputEventInit {
  target: EventTarget & { value: string }
}
