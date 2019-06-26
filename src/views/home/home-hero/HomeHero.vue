<template>
	<div class="h-hero container container--full">
		<div class="h-hero__img-wrap ir is-loading">
			<img data-src="img/home-hero-1.jpg" class="lazyload h-hero-img" />
		</div>
		<header class="h-hero__header container">
			<h1 class="h-hero__hdg-lrg">
				Try Before You Buy
			</h1>
			<h3 class="h-hero__hdg-sm">
				The fast, easy way to try on clothes in the comfort of your home.
			</h3>
			<div class="h-hero__actions">
				<button type="button" class="btn btn--primary">
					Get Started
				</button>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	name: 'HomeHero'
};
</script>

<style lang="scss">
@import 'HomeHero.scss';
</style>
