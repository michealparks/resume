<script lang='ts'>

import Title from './Title.svelte'
import { education } from './data'

</script>

<section>
	<Title>Education</Title>
	<ul>
		{#each education as { institution, duration, concentration }, _ (institution)}
			<li class='mb-5'>
				<h3 class='text-sm font-semibold text-slate-600 dark:text-slate-300'>{institution}</h3>
				<p>{duration}</p>
				<p>{concentration}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		grid-row: 2 / auto;
		grid-column: 1 / span 1;
	}
</style>
