import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return () => (
      <div class={'h-500'}>
        <v-form-design />
      </div>
    )
  }
})
