import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

/**
 * try export default
 */
// import defalutExport, {value_a, value_b} from './lib/check'
//
// defalutExport("haha");
// console.log(value_a);
// console.log(value_b);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});