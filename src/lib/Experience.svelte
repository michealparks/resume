<script lang='ts'>
	import Title from './Title.svelte'
	import { jobs } from './data'
</script>

<section>
	<Title>Work Experience</Title>
	<ul>
		{#each jobs as { title, company, duration, description } (title)}
			<li class='mb-5'>
				<h3 class='font-semibold text-slate-600 dark:text-slate-300'>
					{title}, {company}
				</h3>
				<p>{duration}</p>
				{@html description}
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		grid-row: 1 / span 3;
		grid-column: 2 / span 1;
	}
</style>
