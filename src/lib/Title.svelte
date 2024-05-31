<script lang='ts'>
  import type { Snippet } from "svelte";

	let { children }: { children: Snippet } = $props()
</script>

<h2 class='my-2.5'>
	{@render children()}
</h2>

<div class='h-1 w-full mb-2.5 bg-divider'></div>
