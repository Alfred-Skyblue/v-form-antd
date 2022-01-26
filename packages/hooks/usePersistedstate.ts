import { watch, Ref, ref } from '@vue/composition-api'
import { IFormConfig } from '@pack/typings/v-form-component'
export const count = ref(0)

/**
 * 持久化表单设计器配置
 * @param {Ref<IFormConfig>} config
 */
export function usePersistedstate(config: Ref<IFormConfig>) {
  const storageConfig = localStorage.getItem('$VFormDesignConfig')
  if (storageConfig) {
    const configObj: IFormConfig = JSON.parse(storageConfig)
    count.value = configObj.formItems.length
    config.value = configObj
  }
  watch(
    config.value,
    () => {
      localStorage.setItem('$VFormDesignConfig', JSON.stringify(config.value))
    },
    { deep: true }
  )
}
