<template>
  <div>
    <h4>{{latestMessage}}</h4>
    <message-input
        v-on:new-message="handleMessage"
        v-bind:defaultMessageInput="defaultMessageInput"
        v-bind:inputAction="actionDispatch"
    >
    </message-input>
    <ul>
      <li v-for="msg in messages">{{msg}}</li>
    </ul>
  </div>
</template>

<style>
  body {
    background-color: #ffffff;
  }
</style>

<script>
  import MessageInput from './MessageInput'

  export default{
    name: 'message-todo',
    data(){
      return {
        messages: [],
        latestMessage: "",
        defaultMessageInput: "type something"
      }
    },
    methods: {
      /**
       * 父组件接受子组件调用
       * @param message
       */
      handleMessage: function (message) {
        this.messages.push(message)
      },
      actionDispatch: function (message){
        this.latestMessage = "latest:"+message;
      }
    },
    components: {
      MessageInput,
    }
  }
</script>
