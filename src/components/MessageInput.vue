<template>
  <div>
    <input v-model="message" @keyup.enter="storeMessage" v-bind:placeholder="defaultMessageInput" />
  </div>
</template>
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
        this.$emit('new-message', this.message);
        // 调用父级制定的方法
        this.inputAction(this.message);
        // 清空输入框中的数据
        this.message = '';
      }
    }

  }
</script>
