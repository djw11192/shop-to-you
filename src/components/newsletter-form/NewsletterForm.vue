<template>
	<div class="newsletter-form">
		<header class="newsletter-form__header">
			<h3 class="newsletter-form__title">
				{{ title }}
			</h3>
		</header>
		<form class="newsletter-form__form">
			<div class="form-item">
				<div class="input-placeholder">
					<input type="email" class="input" placeholder="email address" />
					<button type="button" class="btn-icon newsletter-form__arrow">
						<i class="icon">
							<IconArrowRight />
						</i>
					</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import IconArrowRight from '@/components/icon/IconArrowRight.vue';

export default {
	name: 'NewsletterForm',
	components: {
		IconArrowRight
	},
	props: {
		title: String
	}
};

</script>

<style lang="scss">
@import 'NewsletterForm.scss';
</style>
