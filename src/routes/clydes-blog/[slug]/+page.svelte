<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import { type Post } from '$lib/types';
	import { createClient } from '@sanity/client';
	import type { PageServerLoad } from './$types';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.post}
		<pre>
			{JSON.stringify(data.post)};
			{data.post.title}
    </pre>
	{:else}
		Hello!
		<!-- <Welcome /> -->
	{/if}
</section>
