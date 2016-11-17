<template>
    <div>
        <div><span>MessageDashboard:</span> 兄弟节点</div>
    </div>
</template>
<style>
</style>
<script>
export default{
  name: 'message-dashboard',
  data(){
    return{
      msg:'hello vue'
    }
  },
  methods: {
    handleMessage: function(msg){
      console.log(msg);
    }
  },
  mounted: function() {
    this.$on('emitMessage', function (msg) {
      console.log('messageDashboard', msg)
    })
  }
}
</script>
