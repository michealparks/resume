<script lang='ts'>
	import Title from './Title.svelte'
	import { contact } from './data'
</script>

<section>
	<Title>Contact</Title>
	<div>
		<span class='icon-envelope' />
		<a href={`mailto:${contact.email}`}>{contact.email}</a>
	</div>

	<div>
		<span class='icon-phone' />
		<a href={`tel:${contact.phone}`}>{contact.phone}</a>
	</div>

	<div>
		<span class='icon-location' />
		<p class='m-0'>{contact.location}</p>
	</div>

	<div>
		<span class='icon-website' />
		<a target='_tab' href={`https://${contact.website}`}>{contact.website}</a>
	</div>
	
	<div>
		<span class='icon-github' />
		<a target='_tab' href={`https://${contact.github}`}>{contact.github}</a>
	</div>

	<div>
		<span class='icon-linkedin' />
		<a target='_tab' href={`https://${contact.linkedin}`}>{contact.linkedin}</a>
	</div>
</section>

<style>
	section {
		grid-row: 1 / auto;
		grid-column: 1 / span 1;
	}

	div {
		display: flex;
		padding: 8px 0;
	}

	@media (min-width: 700px) {
		div {
			padding: 4px 0;
		}
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
</style>