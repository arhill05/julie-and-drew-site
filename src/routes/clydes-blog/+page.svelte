<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '../../components/Card.svelte';
	import { type Post } from '$lib/types';
	import { createClient } from '@sanity/client';
	import type { PageServerLoad } from './$types';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.posts?.length}
		{#each data.posts as post}
			<Card {post} />
		{/each}
	{:else}
		Hello!
		<!-- <Welcome /> -->
	{/if}
</section>
