<svelte:options immutable />

<script lang='ts'>
	import '../index.css'
	import data from '$lib/data'
	import Header from '$lib/Header.svelte'
	import Contact from '$lib/Contact.svelte'
	import Experience from '$lib/Experience.svelte'
	import Education from '$lib/Education.svelte'
	import Projects from '$lib/Projects.svelte'
	import Interests from '$lib/Interests.svelte'
	import Skills from '$lib/Skills.svelte'
</script>

<Header {...data.header} />

<main>	
	<Contact {...data.contact} />
	<Experience jobs={data.jobs} />
	<Education education={data.education} />
	<Projects projects={data.projects} />
	<Interests interests={data.interests} />
	<Skills skills={data.skills} />
</main>

<style>
	main {
		display: grid;
		grid-template: auto auto auto auto / 2fr 8fr;
		column-gap: 30px;
	}

	@media (max-width: 760px) {
		main {
			display: block;
		}
	}
</style>
