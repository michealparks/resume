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

<style>
	header {
		background: var(--header-bg);
		color: white;
		padding: 20px;
		margin: 0 0 20px 0;
		
	}

	@media (min-width: 700px) { 
		header {
			border-radius: 4px;
			display: grid;
			grid-template: auto 1fr / 1fr 10fr;
			column-gap: 30px;
		}
	}

	img {
		display: block;
		width: 200px;
		height: 200px;
		border-radius: 4px;
		grid-row: 1 / span 3;
		margin: 1rem auto;
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
