<template>
  <div>
    <div class="dashboard">
      <h5>实时: {{realtimeMessage}}</h5>
      <h4>最后一条: {{latestMessage}} </h4>
      <h4>发布时间: {{latestTimeFormat}}</h4>
      <h4>距离现在: {{timePassed}}</h4>
    </div>
    <message-dashboard v-on:emitMessage="newMessage"></message-dashboard>

    <!--message-input-->
    <message-input
        v-on:new-message="handleMessage"
        v-on:switch-action="handleSwitchAction"
        v-on:realtime-message="realtimeAction"
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
  .dashboard{
    width: 500px;
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
        defaultMessageInput: "type something",
        realtimeMessage: "",
        checkList: ['选中且禁用','复选框 A']
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
       * https://vuejs.org/v2/guide/components.html#Using-v-on-with-Custom-Events
       * @param message
       */
      handleMessage: function (message) {
        this.messages.push(message)
        this.newMessage(message);
      },
      actionDispatch: function (message){
        // do something else
        this.latestTime = new Date();
      },
      newMessage : function(msg){
        console.log("todo com newMessage",msg.text);
        this.$emit('newMessage', msg.text);
      },
      /**
       * toggleMessage
       */
      toggleMessage: function(message,event){
        console.log(message);
        message.completed = ! message.completed;
      },
      handleSwitchAction: function(){
        console.log('MessageTodo-handleSwitchAction', arguments);
      },
      realtimeAction: function(realtime){
        this.realtimeMessage = realtime;
      }
    },
    components: {
      MessageInput, MessageDashboard
    }
  }
</script>
