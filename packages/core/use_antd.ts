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
  Upload,
  Switch,
  Space,
  Popover,
  Cascader,
  Rate,
  TimePicker,
  TreeSelect,
  message
} from 'ant-design-vue'
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
  Select,
  Upload,
  Space,
  DatePicker,
  Popover,
  Switch,
  Cascader,
  Rate,
  TimePicker,
  TreeSelect
].forEach(component => {
  Vue.use(component)
})

Vue.prototype.$message = message
