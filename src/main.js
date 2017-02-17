import Vue from 'vue'
import App from './App'

/**
 * 部分引入elementUI
 */
// import { Checkbox, CheckboxGroup, Button } from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(Checkbox)
// Vue.use(CheckboxGroup)
// Vue.use(Button)

import VueInstant from 'vue-instant'
import 'vue-instant/dist/vue-instant.css'
Vue.use(VueInstant)

import AMap from 'vue-amap'
Vue.use(AMap)

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: '3f3868abdb36336114bde5ab6eecdb68',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
