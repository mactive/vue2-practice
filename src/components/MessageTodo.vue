<template>
    <div>
        <message v-on:new-message="handleMessage"></message>
        <ul>
            <li v-for="msg in messages">{{msg}}</li>
        </ul>
    </div>
</template>
<style>
    body{
        background-color:#ffffff;
    }

</style>
<script>
    import Message from './Message'

    export default{
        name: 'message-todo',
        data(){
          return {
              messages: []
            }

          },
          methods: {
            handleMessage: function(message){
              this.messages.push(message)
            }
          },
        components:{
            Message,
        }
    }

</script>
