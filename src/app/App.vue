<template>
	<div id="app">
		<Header />
		<main class="main">
			<Home />
		</main>
		<Footer />
	</div>
</template>

<script>
// import axios from 'axios';
import Home from '../views/home/Home.vue';
import Footer from '@/components/layout/footer/Footer.vue';
import Header from '@/components/layout/header/Header.vue';

export default {
	name: 'app',
	components: {
		Home,
		Footer,
		Header
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
