<template>
  <div id="app" class="container">
    <custom-filters></custom-filters>
  </div>
</template>

<script>
import CustomFilters from './majesty/custom-filters'

export default {
  name: 'app',
  data(){
    return {
      title: '',
    }
  },
  methods:{
    
  },
  components: {
    CustomFilters
  }
}
</script>
