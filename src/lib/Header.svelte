<svelte:options immutable />

<script lang="ts">
	export let portrait: string
	export let name: string
	export let title: string
	export let description: string
</script>

<header>
	<img src={portrait} alt="That's Me!" />
	<h1>{name}, {title}</h1>
	<p>{description}</p>
</header>

<style lang="scss">
	header {
		--salmon:#ea8c80;

		display: grid;
		grid-template: auto 1fr / 1fr 10fr;
		background: var(--salmon);
		color: white;
		padding: 20px;
		margin: 0 0 20px 0;
		column-gap: 30px;
		border-radius: 4px;

		@media (max-width: 760px) {
			display: block;
		}
	}

	img {
		width: 200px;
		height: 200px;
		border-radius: 4px;
		grid-row: 1 / span 3;
		box-shadow: -1px 26px 27px -8px rgba(0,0,0,0.51);
	}

	h1 {
		font-size: 26px;
		margin: 5px 0;
	}

	p {
		margin: 0;
	}
</style>