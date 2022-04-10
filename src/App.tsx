import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return () => (
      <div>
        <v-form-design />
      </div>
    )
  }
})
