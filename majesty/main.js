import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import TodoMvc from './todomvc/App.vue'
import store from './store'
import CustomFilters from './majesty/custom-filters'
import ComputedProp from './majesty/computed-prop'
import EmitListen from './majesty/emit-listen'
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: TodoMvc },
  { path: '/filters', component: CustomFilters },
  { path: '/props', component: ComputedProp },
  { path: '/emitlisten', component: EmitListen}
]

const router = new VueRouter({
  routes: routes // （缩写）相当于 routes: routes
})

// const store = new Vuex.Store({
//   state: {
//     votes: 10
//   },
//   mutations: {
//     upVote (state) {
//       state.votes++
//     }
//   }
// })

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  store
}).$mount('#app')

// const app = new Vue({
//   el: '#app',
//   store,
//   template: '<TodoMvc/>',
//   components: { TodoMVC }
// })

