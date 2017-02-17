<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div v-if="false" class="container">
      <message-todo></message-todo>
    </div>

    <div class="amap-wrapper">
        <amap-example></amap-example>
    </div>

    <instant-example></instant-example>

    <hr>
    <element-example v-if="false"></element-example>
    <hr>
    <tree-view v-if="false"></tree-view>
  </div>
</template>

<script>
import MessageTodo from './components/MessageTodo'
import ElementExample from './element/element-example'
import TreeView from './treeview/treeview.vue'
import AmapExample from './components/amap-example'
import InstantExample from './components/instant-example'

export default {
  name: 'app',
  data(){
    return {
      title: '',
      zoom: 10,
      center: [116.480983, 40.0958]
    }
  },
  methods:{
    
  },
  components: {
    MessageTodo,
    TreeView,
    ElementExample,
    AmapExample,
    InstantExample
  }
}
</script>

<style>
.amap-wrapper {
  width: 500px;
  height: 500px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app img{
  height: 50px;
}
  .container{
    width: 80%;
    padding: 0 10%;
    text-align: left;
  }
</style>
