<template>
  <div>
    <div class="dashboard">
      <h4>最后一条: {{latestMessage}} </h4>
      <h4>发布时间: {{latestTimeFormat}}</h4>
      <h4>距离现在: {{timePassed}}</h4>
    </div>
    <message-dashboard ></message-dashboard>
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
  import MessageDashboard from "./MessageDashboard"
  import moment from 'moment'

  export default{
    name: 'message-todo',
    data(){
      return {
        messages: [],
        latestTime: "",
        timePassed: 'none',
        defaultMessageInput: "type something"
      }
    },
    computed:{
      latestMessage: function(){
        var last = {};
        if(this.messages.length == 0){
          last = {text: ""};
        }else{
          last = this.messages[this.messages.length - 1];
        }
        return last.text;
      },
      latestTimeFormat: function(){
        if(this.latestTime === ''){
          return ''
        }else{
          return moment(this.latestTime).format("YYYY-MM-DD HH:mm:ss");
        }
      }
    },
    mounted: function() {
      var self = this;

      setInterval(function() {
        var diffSecond = moment().diff(moment(self.latestTime))/1000;
        self.$data.timePassed = Math.floor(diffSecond) + '秒';
      }, 1000);
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
        // do something else
        this.latestTime = new Date();
      },
      /**
       * toggleMessage
       */
      toggleMessage: function(message,event){
        console.log(message);
        message.completed = ! message.completed;
      }
    },
    components: {
      MessageInput,MessageDashboard
    }
  }
</script>
