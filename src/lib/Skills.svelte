<script lang='ts'>

import Title from './Title.svelte'
import { skills } from './data'

</script>

<section>
	<Title>Skillz</Title>
	<ul class='text-xs'>
		{#each skills as { name, mastery } (name)}
			<li class='
				relative flex justify-between items-center overflow-hidden
				my-1.5 py-1.5 px-1.5 rounded border border-accent dark:border-slate-600 dark:text-gray-300
			'>
				<div
					class='absolute top-0 left-0 h-full -z-[1] progress bg-accent dark:bg-slate-600'
					style='width: {(mastery / 100000) * 100}%'
				/>
				{name}
				<small>{mastery.toLocaleString('en-US')}%</small>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		grid-row: 4 / auto;
		grid-column: 1 / span 1;
	}
</style>