import { createClient } from '@sanity/client';
import type { PageServerLoad } from './$types';
import client from '$lib/sanityClient';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	return {
		posts: await client.fetch('*[_type == "post"]')
	};
};
