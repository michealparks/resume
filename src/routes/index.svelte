<svelte:options immutable />

<script>
	import data from '../data.js'
	import Header from '$lib/Header.svelte'
	import Contact from '$lib/Contact.svelte'
	import Experience from '$lib/Experience.svelte'
	import Education from '$lib/Education.svelte'
	import Projects from '$lib/Projects.svelte'
	import Skills from '$lib/Skills.svelte'
</script>

<Header {...data.header} />
<main>
	<Contact {...data.contact} />
	<Experience jobs={data.jobs} />
	<Education education={data.education} />
	<Projects projects={data.projects} />
	<Skills skills={data.skills} />
</main>

<style>
	:global(body) {
		max-width: 900px;
		padding: 20px;
		margin: 0 auto;
		font-family: 'Noto Sans JP', sans-serif;
		font-size: 14px;
	}

	:global(ul) {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

	:global(h1, h2, h3) {
		font-family: 'Didact Gothic', sans-serif;
	}

	:global(h3, p) {
		margin: 0 0 5px 0;
	}

	:global(h3) {
		font-size: 16px;
	}

	main {
		display: grid;
    grid-template: auto auto auto / 2fr 7fr;
		column-gap: 30px;
	}
</style>
