<template>
	<footer class="footer">
		<NewsletterForm
			title="Sign up for our newsletter and get free delivery!"
		/>
	</footer>
</template>

<script>
import NewsletterForm from '@/components/newsletter-form/NewsletterForm.vue';

export default {
	name: 'Footer',
	components: {
		NewsletterForm,
	}
}
</script>

<style lang="scss">
@import 'Footer.scss';
</style>
