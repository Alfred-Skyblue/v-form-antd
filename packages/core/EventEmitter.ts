type Callback = (...args: any[]) => void

/**
 * 发布订阅模式
 */
class EventEmitter {
  public listeners!: { [type: string]: Array<Callback> }
  constructor() {
    this.listeners = {}
  }

  /**
   * 事件监听
   * @param type {String} 事件名称
   * @param callback {Callback} 回调函数
   */
  on(type: string, callback: Callback) {
    if (!this.listeners[type]) {
      this.listeners[type] = []
    }
    this.listeners[type].push(callback)
  }
  /**
   * 取消监听
   * @param type {String} 事件名称
   * @param callback {Callback | undefined} 回调函数
   */
  off(type: string, callback?: Callback | undefined) {
    if (!this.listeners[type]) {
      return
    }
    if (callback) {
      const index = this.listeners[type].indexOf(callback)
      index > -1 && this.listeners[type].splice(index, 1)
      return
    }
    this.listeners[type] = []
  }

  /**
   * 发布事件
   * @param type {String} 事件名称
   * @param args {Array<any>} 回调函数
   */
  emit(type: string, ...args: Array<any>) {
    if (!this.listeners[type]) {
      return
    }
    this.listeners[type].forEach(callback => callback(...args))
  }
}
const $eventBus = new EventEmitter()
export default $eventBus
