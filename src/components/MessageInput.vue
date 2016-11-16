<template>
  <div>
    <input v-model="message"
           @keyup.enter="storeMessage"
           v-bind:placeholder="defaultMessageInput"
    />
  </div>
</template>
<!--message{-->
  <!--text: "消息文本",-->
  <!--status: "消息状态"-->
<!--}-->
<script>
  export default{
    name: 'message-input',
    props:["defaultMessageInput","inputAction"],
    data() {
      return {
        message: ''
      }
    },
    methods: {
      storeMessage: function () {
        console.log(this.defaultMessageInput);
        // 向上触发事件和参数  custom event
        this.$emit('new-message', {text:this.message, completed: false});
        // 调用父级制定的方法
        this.inputAction({text:this.message, completed: false});
        // 清空输入框中的数据
        this.message = '';
      }
    }

  }
</script>
