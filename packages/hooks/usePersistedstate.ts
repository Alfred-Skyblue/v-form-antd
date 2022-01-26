import { watch, onMounted, Ref } from '@vue/composition-api'
import { IFormConfig } from '@pack/typings/v-form-component'

/**
 * 持久化表单设计器配置
 * @param {Ref<IFormConfig>} config
 */
export function usePersistedstate(config: Ref<IFormConfig>) {
  watch(config.value, value => {
    localStorage.setItem('$VFormDesignConfig', JSON.stringify(value))
  })

  onMounted(() => {
    const storageConfig = localStorage.getItem('$VFormDesignConfig')
    if (storageConfig) {
      config.value = JSON.parse(storageConfig)
    }
  })
}
