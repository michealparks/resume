<svelte:options immutable />

<script lang='ts'>
	import Title from './Title.svelte'
	export let email: string
	export let phone: string
	export let location: string
	export let website: string
	export let github: string
	export let linkedin: string
</script>

<section>
	<Title>Contact</Title>
	<div>
		<span class='icon-envelope' />
		<a href={`mailto:${email}`}>{email}</a>
	</div>

	<div>
		<span class='icon-phone' />
		<a href={`tel:${phone}`}>{phone}</a>
	</div>

	<div>
		<span class='icon-location' />
		<p>{location}</p>
	</div>

	<div>
		<span class='icon-website' />
		<a target='_tab' href={`https://${website}`}>{website}</a>
	</div>
	
	<div>
		<span class='icon-github' />
		<a target='_tab' href={`https://${github}`}>{github}</a>
	</div>

	<div>
		<span class='icon-linkedin' />
		<a target='_tab' href={`https://${linkedin}`}>{linkedin}</a>
	</div>
</section>

<style>
	section {
		grid-row: 1 / auto;
		grid-column: 1 / span 1;
	}

	div {
		display: flex;
		margin: 8px 0;
	}

	span {
		margin-right: 5px;
		display: flex;
		align-items: center;
	}

	a, p {
		font-size: 13px;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	p {
		margin: 0;
	}
</style>