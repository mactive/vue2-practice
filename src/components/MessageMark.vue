<template>
    <button @click="switchAction">
      目前<span v-if="messagesStatus">完成</span>
      <span v-else>未完成</span>
    </button>
</template>

<script>
  export default{
    name: 'message-mark',
    props:["defaultMessageInput","inputAction"],
    data() {
      return {
        messagesStatus: false
      }
    },
    methods: {
      switchAction: function () {
        // 向上触发事件和参数  custom event
//        console.log('switchAction',arguments);
        this.$emit('switch-action', 'status',this.messagesStatus);
        this.messagesStatus = !this.messagesStatus;
      }
    }
  }
</script>