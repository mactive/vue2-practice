<template>
  <div id="app">
    <img src="./assets/logo.png">
    <message-todo></message-todo>
  </div>
</template>

<script>
import MessageTodo from './components/MessageTodo'

export default {
  name: 'app',
  data(){
    return {
      title: ''
    }

  },
  components: {
    MessageTodo
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
</style>
