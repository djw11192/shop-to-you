<template>
	<div class="h-touts container">
		<Tout
			v-for="(tout, i) in touts"
			:heading="tout.heading"
			:subheading="tout.subheading"
			:icon="tout.icon"
			:key="i"
		/>
	</div>
</template>

<script>
import Tout from '@/components/tout/Tout.vue';

export default {
	name: 'HomeTouts',
	components: {
		Tout,
	},
	data() {
		return {
			touts: [
				{
					heading: 'Fast Delivery',
					subheading: 'Your favorite brands delivered to your door from a personal stylist',
					icon: 'IconDelivery'
				},
				{
					heading: 'In-Store Experience',
					subheading: 'compare sizes and styles to see what works best for you',
					icon: 'IconClothes'
				},
				{
					heading: 'Pay After Shopping',
					subheading: 'No payments are made until you decide which items you like',
					icon: 'IconCustomerClothes'
				}
			]
		};
	}
};
</script>

<style lang="scss">
@import 'HomeTouts.scss';
</style>
