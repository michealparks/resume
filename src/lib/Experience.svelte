<svelte:options immutable />

<script>
  import Title from './Title.svelte'
  export let jobs = []
</script>

<section>
  <Title>Work Experience</Title>
  <ul>
    {#each jobs as { title, company, duration, description }, i (i)}
      <li>
        <h3>{title}, {company}</h3>
        <p>{duration}</p>
        {@html description}
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    grid-row: 1 / span 2;
    grid-column: 2 / span 1;
  }

  li {
    margin: 20px 0;
  }
</style>
