<template>
	<article class="tout">
		<i class="icon tout__icon">
			<component :is="icon" />
		</i>
		<h3 class="tout__hdg">{{ heading }}</h3>
		<p class="tout__text">
			{{ subheading }}
		</p>
	</article>
</template>

<script>
import IconDelivery from '@/components/icon/IconDelivery.vue';
import IconClothes from '@/components/icon/IconClothes.vue';
import IconCustomerClothes from '@/components/icon/IconCustomerClothes.vue';

export default {
	name: 'Tout',
	components: {
		IconDelivery,
		IconClothes,
		IconCustomerClothes
	},
	props: {
		heading: String,
		subheading: String,
		icon: String
	}
}
</script>

<style lang="scss">
@import 'Tout.scss';
</style>
