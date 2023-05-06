<template>
  <div class="home">
  <p>Heyyyyyy welcome {{ username }}</p>
  </div>
  <router-view/>
</template>
<script>

export default {
  name: 'HomeView',
  computed : {
    username : function(){ return this.$store.getters.StateUser},
  },
  components: {
  }
}
</script>