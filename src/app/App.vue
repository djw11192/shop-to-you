<template>
  <div id="app">
    <Home />
		<Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Home from '../views/home/Home.vue'
import Footer from '@/components/layout/footer/Footer.vue';

export default {
  name: 'app',
  components: {
    Home,
		Footer
  },
	created() {
		// axios.get('http://localhost:3000/')
  	// 	.then(response => {
    //   	console.log(response);
    // 	})
    // 	.catch(e => {
    //   	console.log(e);
    // 	})
	}
}
</script>

<style lang="scss">
@import 'App.scss';
</style>
