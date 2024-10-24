import { createClient } from '@sanity/client';
import type { PageServerLoad } from './$types';
import client from '$lib/sanityClient';
import type { Post } from '$lib/types';
import type { BlockDefinition, BlockSchemaType } from '@sanity/types';
import type { BlockComponentProps } from '@portabletext/svelte';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const posts = await client.fetch<Post[]>(`*[_type == "post"]{
			title, publishedAt, body, 'excerpt': coalesce(body[0].children[0].text, ""), slug
	}`);

	const results = posts.map((post) => {
		const slicedExcerpt = post.excerpt.substring(0, 75) + "..."
		return { ...post, excerpt: slicedExcerpt };
	});

	return {
		posts: results
	};
};
