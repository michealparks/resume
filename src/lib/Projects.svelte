<script lang='ts'>

import type { Project } from './types'
import Title from './Title.svelte'

export let projects: Project[]

</script>

<section>
	<Title>Selected Projects</Title>
	<ul>
		{#each projects as { link, title, description }, _ (title)}
			<li>
				<div>
					<a class='link' target='_tab' href={link}>
						<h3>{title}</h3>
					</a>
				</div>
				
				{@html description}
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		grid-row: 4 / auto;
		grid-column: 2 / span 1;
	}

	a {
		display: inline-block;
	}

	li {
		margin: 20px 0;
	}
</style>
