import Vue from 'vue'
import VueRouter from 'vue-router'
import MajestyApp from './majesty-app'
import CustomFilters from './majesty/custom-filters'
import ComputedProp from './majesty/computed-prop'
import EmitListen from './majesty/emit-listen'
Vue.use(VueRouter)

// new Vue({
//   el: '#app',
//   template: '<MajestyApp/>',
//   components: { MajestyApp }
// })

const routes = [
  { path: '/', component: MajestyApp },
  { path: '/filters', component: CustomFilters },
  { path: '/props', component: ComputedProp },
  { path: '/emitlisten', component: EmitListen}
]

const router = new VueRouter({
  routes: routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

