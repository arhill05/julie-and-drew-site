<script lang="ts">
	import { DefaultBlock, DefaultList, DefaultListItem, PortableText } from '@portabletext/svelte';
	import type { PageData } from './$types';
	import SignUpForm from '../../components/SignUpForm.svelte';

	export let data: PageData;
</script>

<section>
	<section class="sign-up">
		<SignUpForm />
	</section>
	<main class="post">
		<div class="post-card">
			{#if data.post}
				<div class="post-back-to-list">
					<a href="/clydes-blog">Back to list</a>
				</div>
				<div class="post-header">
					<h1>{data.post.title}</h1>
					<h3>{new Intl.DateTimeFormat('en-US').format(data.post.publishedAt)}</h3>
				</div>
				<div class="post-content">
					<PortableText
						value={data.post.body}
						components={{ block: DefaultBlock, list: DefaultList, listItem: DefaultListItem }}
					/>
				</div>
				{#if data.post.images && data.post.images.length}
					<div class="post-images">
						<h3>Pics</h3>
						{#each data.post.images as image}
							<a href={image.url}>
								<img src={image.url} alt={image.name} />
							</a>
						{/each}
					</div>
				{/if}
			{:else}
				<p>We couldn't load this post for some reason :(</p>
			{/if}
		</div>
	</main>
</section>

<style>
	.post {
		max-width: 800px;
		margin: 0 auto;
	}

	.post-back-to-list a {
		color: var(--black);
		font-family: 'Roboto', sans-serif;
		font-size: 1em;
	}
	.post img {
		width: 100%;
		box-shadow: var(--default-card-box-shadow);
		margin-bottom: 12px;
	}

	.post-card {
		background-color: var(--original-white);
		padding: 16px 24px;
		margin: 16px;
		box-shadow: var(--default-card-box-shadow);
	}

	.post-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.post-header h1,
	.post-header h3 {
		margin: 16px 0;
	}
	h1 {
		font-size: 5em;
	}

	h2 {
		font-size: 4em;
	}

	h3 {
		font-size: 3em;
	}

	@media screen and (max-width: 1100px) {
		.post-header {
			display: block;
		}
	}
</style>
