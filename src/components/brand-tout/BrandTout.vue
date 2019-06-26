<template>
	<article class="brand-tout">
		<div class="brand-tout__ir ir is-loading">
			<img :data-src="image" class="lazyload brand-tout__img" />
		</div>
	</article>
</template>

<script>
export default {
	name: 'BrandTout',
	props: {
		image: String
	}
};
</script>

<style lang="scss" scoped>
@import 'BrandTout.scss';
</style>
