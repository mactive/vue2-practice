<template>
  <div class="col-xs-4">
    <p>{{selfVote}}-{{$store.state.votes}}</p>
    <button class="btn btn-large btn-primary" @click="vote">{{name}}</button>
  </div>
</template>

<script>
  export default {
    name: 'emit-food',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selfVote: 0
      }
    },
    created() {

    },
    methods: {
      vote : function(){
        this.selfVote += 1;
        this.$emit('up-vote', event.target.textContent);
      },
      reset: function() {
        this.selfVote = 0;
      }
    }
  }
</script>