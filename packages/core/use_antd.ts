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
import RadioButtonGroup from '@pack/components/RadioButtonGroup.vue'
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
  input: Input
}

Vue.component(vuedraggable.name, vuedraggable)
