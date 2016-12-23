<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="container">
      <message-todo></message-todo>
    </div>

    <hr>
    <element-example></element-example>
    <hr>
    <tree-view></tree-view>
  </div>
</template>

<script>
import MessageTodo from './components/MessageTodo'
import ElementExample from './element/element-example'
import TreeView from './treeview/treeview.vue'

export default {
  name: 'app',
  data(){
    return {
      title: '',
    }
  },
  methods:{
    
  },
  components: {
    MessageTodo,
    TreeView,
    ElementExample
  }
}
</script>

<style>
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
    width: 50%;
    padding: 0 25%;
    text-align: left;
  }
</style>
