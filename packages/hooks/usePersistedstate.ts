import { watch, Ref } from '@vue/composition-api'
import { IFormConfig } from '@pack/typings/v-form-component'

/**
 * 持久化表单设计器配置
 * @param {Ref<IFormConfig>} config
 */
export function usePersistedstate(config: Ref<IFormConfig>) {
  const storageConfig = localStorage.getItem('$VFormDesignConfig')
  if (storageConfig) {
    config.value = JSON.parse(storageConfig)
  }
  watch(
    config.value,
    () => {
      console.log('456')
      localStorage.setItem('$VFormDesignConfig', JSON.stringify(config.value))
    },
    { deep: true }
  )
}
