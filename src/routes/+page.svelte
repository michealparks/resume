<script lang='ts'>
	import '../index.css'
	import Header from '$lib/Header.svelte'
	import Contact from '$lib/Contact.svelte'
	import Experience from '$lib/Experience.svelte'
	import Education from '$lib/Education.svelte'
	import Projects from '$lib/Projects.svelte'
	import Interests from '$lib/Interests.svelte'
	import Skills from '$lib/Skills.svelte'
</script>

<Header />

<main class='px-5 pb-5 sm:px-0 sm:grid text-gray-600 dark:text-gray-400'>	
	<Contact />
	<Experience />
	<Education />
	<Projects />
	<Interests />
	<Skills />
</main>

<style>
	main {
		grid-template: auto auto auto auto / 2fr 8fr;
		column-gap: 30px;
	}
</style>
