<script lang='ts'>

import type { Education } from './types'
import Title from './Title.svelte'

export let education: Education[]

</script>

<section>
	<Title>Education</Title>
	<ul>
		{#each education as { institution, duration, concentration }, _ (institution)}
			<li>
				<h3>{institution}</h3>
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

	h3 {
		font-size: 14px;
	}
</style>
