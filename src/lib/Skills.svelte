<svelte:options immutable />

<script>
  import Title from './Title.svelte'
  export let skills
</script>

<section>
  <Title>Skillz</Title>
  <ul>
    {#each skills as { name, mastery }, i (i)}
      <li>
        <div class='progress' style='width: {(mastery / 100000) * 100}%' />
        {name}
        <small>{mastery.toLocaleString('en-US')}%</small>
      </li>
    {/each}
  </ul>
</section>

<style>
  section {
    --gray: #546E7A;
    --salmon: #FFCCBC;

    grid-row: 3 / auto;
    grid-column: 1 / span 1;
  }

  li {
    position: relative;
    overflow: hidden;
    margin: 5px 0;
    padding: 5px 10px;
    border: 1px solid var(--gray);
    border-radius: 4px;
    font-size: 12px;
  }

  small {
    position: absolute;
    right: 5px;
  }

  .progress {
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    background: var(--salmon);
    z-index: -1;
  }
</style>