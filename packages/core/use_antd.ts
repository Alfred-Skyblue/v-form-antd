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
  Checkbox,
  Select,
  DatePicker,
  TimePicker,
  Rate,
  Upload,
  TreeSelect,
  Cascader,
  Switch
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
  Select
].forEach(component => {
  Vue.use(component)
})

export default {
  input: Input,
  number: InputNumber,
  textarea: 'ATextarea',
  select: Select,
  checkbox: Checkbox,
  radio: Radio,
  date: DatePicker,
  time: TimePicker,
  slider: Slider,
  rate: Rate,
  upload: Upload,
  treeSelect: TreeSelect,
  cascader: Cascader,
  switch: Switch
}

Vue.component(vuedraggable.name, vuedraggable)
