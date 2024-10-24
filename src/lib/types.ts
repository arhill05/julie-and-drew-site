import type { InputValue, PortableText, PortableTextComponents } from '@portabletext/svelte';
import type {
	ArrayOfType,
	BlockSchemaType,
	Image,
	ImageAsset,
	ImageDefinition,
	PortableTextBlock,
	PortableTextObject
} from '@sanity/types';

export type Post = {
	mainImage: string;
	title: string;
	_createdAt: Date;
	publishedAt: Date;
	excerpt: string;
	slug: any;
	body: InputValue;
	images: { name: string; url: string }[];
};
