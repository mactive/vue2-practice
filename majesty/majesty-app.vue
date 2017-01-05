<template>
  <div name="majesty" class="container">
    <ul class="list-group">
      <li v-for="link in links" class="list-group-item">
        <a :href="link.path">{{link.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      links:[{
        path:'/#/filters',
        name: 'filters'
      },
      {
        path:'/#/props',
        name: 'props'
      }]
    }
  },
  methods:{
    
  },
  components: {
  }
}
</script>
