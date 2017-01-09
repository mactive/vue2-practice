<template>
  <div class="container text-center">
    <p style="font-size: 140px;">{{votes}}</p>
    <button class="btn btn-danger" @click="reset">Reset votes</button>
    <hr>
    <div class="row">
      <emit-food v-on:up-vote="upVote" name="apple"></emit-food>
      <emit-food v-on:up-vote="upVote" name="banana"></emit-food>
      <emit-food v-on:up-vote="upVote" name="pear"></emit-food>
    </div>
    <h3>Vote Logs</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="log in logs">{{log}}</li>
    </ul>
</div>
</template>

<script>
  import EmitFood from './emit-food'
  export default {
    name: 'emit-listen',
    data() {
      return {
        votes: 1,
        logs: []
      }
    },
    created() {
      this.$on('upppp-vote', () => {
        this.votes += 1;
      })
    },
    methods: {
      upVote: function (foodName) {
        this.$emit('upppp-vote');
        this.logs.push(foodName + ' get a vote!')
      },
      reset: function() {
        this.votes = 0;
        this.logs = [];
      }
    },
    components: {
      EmitFood
    }
  }
</script>