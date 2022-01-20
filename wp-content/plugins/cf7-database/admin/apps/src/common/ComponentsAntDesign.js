import Vue from "vue";

import {
  Layout,
  Icon,
  Select,
  Switch,
  DatePicker,
  Radio,
  Pagination,
  Input,
  Button,
  Table,
  Modal,
  Popconfirm,
  List,
  Spin,
  LocaleProvider,
  message,
  Tooltip
} from "ant-design-vue";

export default () => {
  Vue.use(Layout);
  Vue.use(Icon);
  Vue.use(Select);
  Vue.use(Switch);
  Vue.use(DatePicker);
  Vue.use(Radio);
  Vue.use(Pagination);
  Vue.use(Input);
  Vue.use(Button);
  Vue.use(Table);
  Vue.use(Modal);
  Vue.use(Popconfirm);
  Vue.use(List);
  Vue.use(Spin);
  Vue.use(LocaleProvider);
  Vue.use(Tooltip);
  Vue.prototype.$message = message;
  message.config({
    top: '50px',
  });
  
};

