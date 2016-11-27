<template>
  <div>
    <label for="">请输入:</label>
    <input v-model="message"
           @keyup.enter="storeMessage"
           v-bind:placeholder="defaultMessageInput"
    />
    <message-mark v-on:switch-action="handleSwitchAction"></message-mark>
    <br>
  </div>
</template>
<!--message{-->
  <!--text: "消息文本",-->
  <!--status: "消息状态"-->
<!--}-->
<script>
  import MessageMark from './MessageMark'

  export default{
    name: 'message-input',
    props:["defaultMessageInput","inputAction"],
    data() {
      return {
        message: ''
      }
    },
    watch: {
      message: function(val, oldVal){
        console.log(val);
        this.$emit('realtime-message', val);
      }
    },
    methods: {
      storeMessage: function () {
        // 向上触发事件和参数  custom event
        this.$emit('new-message', {text:this.message, completed: false});
        // 调用父级制定的方法
        this.inputAction({text:this.message, completed: false});
        // 清空输入框中的数据
        this.message = '';
      },
      handleSwitchAction: function(){
        console.log('MessageInput-handleSwitchAction', arguments);
        this.$emit('switch-action', arguments[0],arguments[1]);
      },
    },
    components: {
      MessageMark
    }
  }
</script>
