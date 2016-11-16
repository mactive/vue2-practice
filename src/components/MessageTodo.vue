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
      <li v-for="msg in messages"
          @click="toggleMessage(msg,$event)"
          class="message-item"
          :class="{ completed: msg.completed }">
        {{msg.text}}</li>
    </ul>
  </div>
</template>

<style>
  body {
    background-color: #ffffff;
  }
  .completed{
    text-decoration: line-through;
  }
  .message-item{
    cursor: pointer;
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
        this.latestMessage = "latest:"+message.text;
      },
      /**
       * toggleMessage
       */
      toggleMessage: function(message,event){
        console.log(message,event);
        message.completed = ! message.completed;
      }
    },
    components: {
      MessageInput,
    }
  }
</script>
