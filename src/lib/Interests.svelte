<script lang='ts'>

import Title from './Title.svelte'

export let interests: string[]

</script>

<section>
	<Title>Interests</Title>
	<ul>
		{#each interests as interest, _ (interest)}
			<li>
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

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

	li {
		font-size: 12px;
    padding: 0.25rem 0.5rem;
    background-color: var(--bg-shade-1);
    border-radius: 0.5rem;
	}
</style>