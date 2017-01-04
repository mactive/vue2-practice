<template>
  <div>
    <h1>Real identities of Super Heroes!</h1>
    <ul class="list-group">
      <li v-for="hero in heroes" class="list-group-item">
        {{hero | snitch}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'custom-filters',
    data() {
      return {
        heroes: [
          { firstname: 'Bruce', lastname: 'Wayne', isObvioulsy: 'Batman' },
          { firstname: 'Clark', lastname: 'Kent', isObvioulsy: 'Superman' },
          { firstname: 'Jay', lastname: 'Garrick', isObvioulsy: 'Flash' },
          { firstname: 'Peter', lastname: 'Parker', isObvioulsy: 'Spider-Man' }
        ]
      }
    },
    /**
     *  filters in components
     */
    filters:{
      snitch: (heroes) => {
        return heroes.isObvioulsy + ' is ' + heroes.firstname + ' ' + heroes.lastname + ' in real life!'
      }
    }
  }
</script>