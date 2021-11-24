import Vue from 'vue'
import {
  Input,
  ConfigProvider,
  Collapse,
  Empty,
  FormModel,
  Row,
  Tabs,
  Button,
  Icon,
  Radio,
  InputNumber,
  Slider,
  Tooltip,
  Divider,
  Modal,
  Col
} from 'ant-design-vue'
import vuedraggable from 'vuedraggable'
;[
  Input,
  ConfigProvider,
  Collapse,
  Empty,
  FormModel,
  Row,
  Tabs,
  Button,
  Icon,
  Radio,
  InputNumber,
  Slider,
  Icon,
  Tooltip,
  Divider,
  Modal,
  Row,
  Col,
  Slider,
  Empty
].forEach(component => {
  Vue.use(component)
})

export default {
  input: Input
}

Vue.component(vuedraggable.name, vuedraggable)
