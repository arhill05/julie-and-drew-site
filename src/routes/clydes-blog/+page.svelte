<script lang="ts">
	import Card from '../../components/Card.svelte';
	import SignUpForm from '../../components/SignUpForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="intro">
	<h1>Clyde's Blog</h1>
</section>
<section class="sign-up">
	<SignUpForm />
</section>
<section class="blog-posts">
	{#if data.posts?.length}
		{#each data.posts as post}
			<!-- <Card {post} /> -->
			<a href={`/clydes-blog/${post.slug.current}`}>
				<div class="card">
					<div class="post-header">
						<h2>{post.title}</h2>
						<div class="post-published-at">
							{new Intl.DateTimeFormat('en-US').format(post.publishedAt)}
						</div>
					</div>
					<div class="post-excerpt">{post.excerpt}</div>
				</div>
			</a>
		{/each}
	{:else}
		We couldn't find any posts :(
	{/if}
</section>

<style>
	.blog-posts {
		max-width: 700px;
		margin: 0 auto;
	}

	.intro .card {
		background-color: var(--cypress-vine-green);
		color: var(--original-white);
		box-shadow: none;
	}

	.intro .card h1 {
		color: var(--original-white);
	}

	.intro {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.intro h1 {
		color: var(--original-white);
	}

	.card {
		background-color: var(--original-white);
		padding: 16px 24px;
		margin: 16px;
		/* border-radius: 8px; */
		box-shadow: 8px 8px 0px var(--cypress-vine-green);
		/* box-shadow: 4px 2px 2px rgba(0, 0, 0, 0.12); */
		display: flex;
		justify-content: space-between;
	}

	.post-header {
		flex: 1;
	}
	.post-excerpt {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.post-header h2 {
		margin: 8px 0;
	}

	.post-published-at {
		font-weight: 800;
	}

	.blog-posts a {
		font-family: 'Roboto', sans-serif;
		color: var(--black);
	}

	@media screen and (max-width: 1100px) {
		.card {
			flex-direction: column;
		}

		.post-header {
			margin-bottom: 24px;
		}
	}
</style>
