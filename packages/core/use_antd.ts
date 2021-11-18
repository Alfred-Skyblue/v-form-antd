import Vue from 'vue'
import {
  Input,
  ConfigProvider,
  Collapse,
  Empty,
  FormModel,
  Row
} from 'ant-design-vue'
import vuedraggable from 'vuedraggable'
;[Input, ConfigProvider, Collapse, Empty, FormModel, Row].forEach(component => {
  Vue.use(component)
})

Vue.component(vuedraggable.name, vuedraggable)
