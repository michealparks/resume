<script lang='ts'>
	import { header } from './data'
</script>

<header class='sm:grid sm:rounded-lg p-5 mb-5 text-white bg-dark-green dark:bg-slate-700'>
	<img
		width='200'
		height='200'
		class='block rounded my-4 max-w-xs m-auto'
		src={header.portrait}
		alt="That's Me!"
	/>
	<h1 class='text-2xl my-1'>
		{header.name}, {header.title}
	</h1>
	<p>
		{header.description}
	</p>
</header>

<style>
	@media (min-width: 700px) { 
		header {
			grid-template: auto 1fr / 3fr 10fr;
			column-gap: 30px;
		}
	}

	img {
		grid-row: 1 / span 3;
		box-shadow: -1px 26px 27px -8px rgba(0,0,0,0.51);
	}
</style>
