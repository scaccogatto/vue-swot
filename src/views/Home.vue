<template>
  <div class="home">
    <router-link
      v-for="(route, index) of prettyRoutes"
      :key="index"
      :to="{ name: route.name }">{{ route.name }}</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    routes: {
      get () {
        return this.$router.options.routes
      }
    },
    prettyRoutes: {
      get () {
        return this.routes.filter(r => r.name !== 'home')
      }
    }
  }
}
</script>

<style>
.home a {
  display: block;
  margin: 1rem;
}
</style>
