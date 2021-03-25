<svelte:options immutable />

<script>
  export let portrait
  export let name
  export let title
  export let description
</script>

<header>
  <img src={portrait} alt="That's Me!" />
  <h1>{name}, {title}</h1>
  <p>{description}</p>
</header>

<style>
  header {
    --salmon:#ea8c80;

    display: grid;
    grid-template: auto 1fr / 1fr 10fr;
    background: var(--salmon);
    color: white;
    padding: 20px;
    margin: 0 0 20px 0;
    column-gap: 30px;
    border-radius: 4px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 4px;
    grid-row: 1 / span 3;
    box-shadow: -1px 26px 27px -8px rgba(0,0,0,0.51);
  }

  h1 {
    font-size: 26px;
    margin: 5px 0;
  }

  p {
    margin: 0;
  }
</style>