<script>
	export let title
</script>

<section>
	<h2>{title}</h2>
	<div class="divider" />
	<slot />
</section>

<style>
	section {
		--turquoise: #80DEEA;
	}

	.divider {
		height: 5px;
		width: 100%;
		background: var(--turquoise);
		margin-bottom: 10px;
	}

	h2 {
		margin: 10px 0;
	}
</style>
