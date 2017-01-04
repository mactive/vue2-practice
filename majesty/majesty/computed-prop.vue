<template>
  <div>
    <h1>Lets hear some stories!</h1>
    <h3>Alex's stories</h3>
    <ul class="list-group">
      <li v-for="story in storiesBy('Alex')" class="list-group-item">
        {{story.writer}} said "{{story.plot}}"
      </li>
    </ul>
    <h3>John's stories</h3>
    <ul class="list-group">
      <li v-for="story in storiesBy('John')" class="list-group-item">
        {{story.writer}} said "{{story.plot}}"
      </li>
    </ul>
    <div class="form-group">
      <label for="query">What are you looking for?</label>
      <input v-model="query" class="form-control" />
    </div>
    <h3>Search result:</h3>
    <div>
      <ul class="list-group">
        <li v-for="story in search" class="list-group-item">
          {{story.writer}} said "{{story.plot}}"
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'computed-props',
    data() {
      return {
        stories: [
          {
            plot: "I crashed my car today!",
            writer: "Alex",
            upvotes: 28
          },
          {
            plot: "Yesterday, someone stole my bag!",
            writer: "John",
            upvotes: 8
          },
          {
            plot: "Someone ate my chocolate...",
            writer: "John",
            upvotes: 51
          },
          {
            plot: "I ate someone's chocolate!",
            writer: "Alex",
            upvotes: 74
          },
        ],
        query: ''
      }
    },
    methods: {
      storiesBy: function (writer) {
        return this.stories.filter((story) => {
          return story.writer === writer
        })
      }
    },
    computed: {
      search: function () {
        let query = this.query
        return this.stories.filter((story) => {
          return story.plot.includes(query)
        })
      }
    }
  }
</script>