<script lang="ts">
	import { DefaultBlock, PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	{#if data.post}
		<!-- {JSON.stringify(data.post)};
		{data.post.title} -->
		<PortableText value={data.post.body} components={{ block: DefaultBlock }} />
		{#each data.post.images as image}
			<img src={image.url} alt={image.name} />
		{/each}
	{:else}
		Hello!
		<!-- <Welcome /> -->
	{/if}
</section>
