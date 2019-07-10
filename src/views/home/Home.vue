<template>
	<div class="home">
		<HomeHero />
		<HomeTouts />
		<HomeLocations />
	</div>
</template>

<script>
import HomeHero from './home-hero/HomeHero.vue';
import HomeTouts from './home-touts/HomeTouts.vue';
import HomeLocations from './home-locations/HomeLocations.vue';

export default {
	components: {
		HomeHero,
		HomeTouts,
		HomeLocations
	},
	created() {
		console.log('test');
	}
};
</script>

<style lang="scss">
@import 'Home.scss';
</style>
