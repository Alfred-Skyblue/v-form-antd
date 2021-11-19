import Vue from 'vue'
import {
  Input,
  ConfigProvider,
  Collapse,
  Empty,
  FormModel,
  Row,
  Tabs
} from 'ant-design-vue'
import vuedraggable from 'vuedraggable'
;[Input, ConfigProvider, Collapse, Empty, FormModel, Row, Tabs].forEach(
  component => {
    Vue.use(component)
  }
)

export default {
  input: Input
}

Vue.component(vuedraggable.name, vuedraggable)
