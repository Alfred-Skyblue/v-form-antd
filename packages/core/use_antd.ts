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
  Col,
  Checkbox
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
  Empty,
  Checkbox,
  Radio
].forEach(component => {
  Vue.use(component)
})

export default {
  input: Input,
  number: InputNumber
}

Vue.component(vuedraggable.name, vuedraggable)
