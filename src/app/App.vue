<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import  Home from '../views/home/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="scss">
@import 'App.scss';
</style>
