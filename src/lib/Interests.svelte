<script lang='ts'>
	import Title from './Title.svelte'
	import { interests } from './data'
</script>

<section>
	<Title>Interests</Title>
	<ul class='flex flex-wrap gap-1 text-xs'>
		{#each interests as interest (interest)}
			<li class='px-2 py-1 rounded bg-interest dark:bg-slate-700 dark:text-slate-300'>
				{interest}
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		grid-row: 3 / auto;
		grid-column: 1 / span 1;
	}
</style>
