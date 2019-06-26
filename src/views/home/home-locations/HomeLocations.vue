<template>
	<section class="h-locations">
		<div class="h-locations__inner container">
			<div class="h-locations__description">
				<h2 class="h-locations__hdg">Popular Brands <br>Near You</h2>
				<p class="h-locations__text">
					Try on clothes from your favorite brands. Get started and find stores near you.
				</p>
				<div class="h-locations__actions">
					<button type="button" class="btn btn--primary">
						Order Now
					</button>
				</div>
			</div>
			<div class="h-locations__carousel">
				<flickity ref="flickity" :options="flickityOptions">
					<BrandTout
						v-for="(brand, i) in brands"
						:image="brand.image"
						:key="i"
					/>
				</flickity>
			</div>
		</div>
	</section>
</template>

<script>
import BrandTout from '@/components/brand-tout/BrandTout.vue';
import Flickity from 'vue-flickity';

export default {
	name: 'HomeLocations',
	components: {
		BrandTout,
		Flickity
	},
	data() {
		return {
			brands: [
				{
					image: 'img/nordstrom-logo.png',
				},
				{
					image: 'img/nordstrom-logo.png',
				},
				{
					image: 'img/nordstrom-logo.png',
				}
			],
			flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
				cellAlign: 'left'
			}
		};
	}
};
</script>

<style lang="scss">
@import 'HomeLocations.scss';
</style>
