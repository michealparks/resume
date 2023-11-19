<script lang='ts'>
	import Title from './Title.svelte'
	import { projects } from './data'
</script>

<section>
	<Title>Selected Projects</Title>
	<ul>
		{#each projects as { link, title, description } (title)}
			<li class='mb-5'>
				<div>
					<a class='link inline-block' target='_tab' href={link}>
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
</style>
