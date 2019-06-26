<template>
	<div class="home">
		<HomeHero />
		<HomeTouts />
	</div>
</template>

<script>
import HomeHero from './home-hero/HomeHero.vue';
import HomeTouts from './home-touts/HomeTouts.vue';

export default {
	components: {
		HomeHero,
		HomeTouts
	}
};
</script>

<style lang="scss">
@import 'Home.scss';
</style>
