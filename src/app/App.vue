<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import axios from 'axios';
import Home from '../views/home/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
	created() {
		axios.get('http://localhost:3000/')
  		.then(response => {
      	console.log(response);
    	})
    	.catch(e => {
      	console.log(e);
    	})
	}
}
</script>

<style lang="scss">
@import 'App.scss';
</style>
