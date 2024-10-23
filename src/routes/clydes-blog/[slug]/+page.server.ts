import type { PageLoad } from './$types';
import type { Post } from '$lib/types';
import client from '$lib/sanityClient';
import { urlFor } from '$lib/urlFor';

export const load: PageLoad = async ({ params }) => {
	console.log(params);
	const query = `*[_type=="post" && slug.current=="${params.slug}"][0]{title, body, images}`;
	const post = await client.fetch<Post>(query);
	const response = {
		post: {
			...post,
			images: post.images.map((image) => {
				return {
					name: 'test',
					url: urlFor(image).quality(50).url()
				};
			})
		}
	};

	console.log(response);
	console.log(response.post.images);
	// console.log(response.post.body);
	return response;
};
