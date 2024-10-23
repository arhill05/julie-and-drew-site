import { createClient } from '@sanity/client';
import type { PageLoad } from './$types';

const client = createClient({
	projectId: 'p51bfwnc',
	dataset: 'blog-posts',
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: '2023-05-03' // use current date (YYYY-MM-DD) to target the latest API version
	// token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export const load: PageLoad = async ({ params }) => {
	return {
		post: await client.fetch(`*[slug == ${params.slug}]`)
	};
};
