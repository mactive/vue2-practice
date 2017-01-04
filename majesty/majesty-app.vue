<template>
  <div id="app" class="container">
    <computed-prop></computed-prop>
  </div>
</template>

<script>
import CustomFilters from './majesty/custom-filters'
import ComputedProp from './majesty/computed-prop'

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
    CustomFilters,
    ComputedProp
  }
}
</script>
