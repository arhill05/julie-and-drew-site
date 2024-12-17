<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	// console.log(data);
</script>

<!-- MailerLite Universal -->
<svelte:head>
	<!-- MailerLite Universal -->
	<script>
		(function (w, d, e, u, f, l, n) {
			(w[f] =
				w[f] ||
				function () {
					(w[f].q = w[f].q || []).push(arguments);
				}),
				(l = d.createElement(e)),
				(l.async = 1),
				(l.src = u),
				(n = d.getElementsByTagName(e)[0]),
				n.parentNode.insertBefore(l, n);
		})(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
		ml('account', '1236357');
	</script>
	<!-- End MailerLite Universal -->
</svelte:head>

<div class="clydes-blog">
	<slot></slot>
</div>

<style>
	:root {
		--cypress-vine-green: rgba(94, 101, 82, 0.88);
		--original-white: rgba(240, 229, 211, 0.9);
		--default-card-box-shadow: 8px 8px 0px var(--cypress-vine-green);
	}
	.clydes-blog {
		background: var(--cypress-vine-green);
		min-height: 100vh;
		padding: 16px 0;
	}

	:global(h1, h2, h3, h4, a) {
		font-family: 'Jenna Sue', sans-serif;
		color: var(--cypress-vine-green);
	}

	:global(a) {
		font-size: initial;
		border-bottom: initial;
		width: initial;
		text-decoration: initial;
	}

	:global(a:hover) {
		cursor: pointer;
		color: initial;
		border-bottom: initial;
	}

	:global(h1) {
		font-size: 5em;
	}

	:global(h2) {
		font-size: 4em;
	}

	:global(h3) {
		font-size: 3em;
	}
</style>
