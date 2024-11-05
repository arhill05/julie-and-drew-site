<script>
	import Countdown from '../components/Countdown.svelte';
</script>

<section class="hero">
	<div class="hero__content-container">
		<h1>Clyde Hill</h1>
		<p class="hero__subtext--gray">was born</p>
		<Countdown />
		<p class="hero__subtext--gray">ago</p>
		<div class="hero__links">
			<a href="/clydes-blog"> Clyde's Blog </a>
		</div>
	</div>
	<div class="hero__image">
		<img src="/clyde-announcement.jpg" />
	</div>
</section>

<style>
	:root {
		--cypress-vine-green: rgba(94, 101, 82, 0.88);
		--cypress-vine-green-light: rgba(176, 190, 151, 0.75);
		--original-white: rgba(240, 229, 211, 0.9);
	}
	.hero span,
	.hero p {
		font-family: 'Jenna Sue', serif;
		color: var(--cypress-vine-green);
	}

	.hero h1,
	.hero h2,
	.hero h3 {
		margin: 0;
	}

	body {
		margin: 0;
	}

	h2 {
		font-size: 72px;
	}

	.hero__links a {
		font-size: 48px;
		display: block;
		margin: 16px 0;
		border-bottom: 2px solid var(--cypress-vine-green);
	}

	section.hero {
		min-height: fit-content;
		height: 100vh;
		/* width: 100%; */
		background-color: var(--original-white);
		display: grid;
		grid-template-columns: 1fr 2fr;
		padding: 0 64px;
		/* background: linear-gradient(to left, var(--original-white) 55%, var(--cypress-vine-green)); */
		/* background-size: contain;
		background-repeat: no-repeat;
		background-position: right; */
		/* background-position-x: calc(100% + 10vw); */
		/* background-blend-mode: multiply; */
		/* mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0)); */
		/* background-image: url('/baby-announcement.jpg'); */
		/* background-image: url('/clyde-announcement.jpg'); */
	}
	.hero__image {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero__image img {
		width: 85%;
		/* border: 3px solid var(--cypress-vine-green); */
		box-shadow: 8px 8px 0px var(--cypress-vine-green);
	}
	.hero__gradient-container {
		display: flex;
		align-items: center;
		height: 100%;
		width: 100%;
		min-height: fit-content;
		/* background: linear-gradient(
			to left,
			transparent 50%,
			var(--cypress-vine-green-light) 55%, var(--original-white) 100%
		); */
	}

	.hero__content-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: fit-content;
		padding: 16px 0;
	}

	.hero h1 {
		font-size: 136px;
	}

	p.hero__subtext--gray {
		margin: 0;
		font-size: 72px;
		color: #b2b2b2;
	}

	.hero__date {
		font-size: 64px;
		margin-top: 0;
	}

	.countdown {
		text-align: center;
		margin-top: 32px;
	}

	.countdown__emphasis {
		font-size: 96px;
	}

	.countdown__normal {
		font-size: 72px;
	}

	.hero__links {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 3vh;
		min-height: fit-content;
	}

	.link--active {
		color: var(--cypress-vine-green-light);
		border-bottom: 3px solid var(--cypress-vine-green-light);
		font-weight: bold;
	}

	h1,
	h2,
	h3,
	h4,
	a {
		font-family: 'Jenna Sue', sans-serif;
		color: var(--cypress-vine-green);
	}

	a {
		font-size: 36px;
		border-bottom: 1px solid var(--cypress-vine-green);
		width: fit-content;
		text-decoration: none;
	}

	a:hover {
		cursor: pointer;
		color: var(--cypress-vine-green-light);
		border-bottom: 2px solid var(--cypress-vine-green-light);
	}

	.svelte-body {
		background: linear-gradient(
			to bottom right,
			var(--cypress-vine-green-light) 55%,
			var(--cypress-vine-green)
		);
	}

	@media screen and (max-width: 1100px) {
		@font-face {
			font-family: 'Jenna Sue';
			src:
				url('../fonts/JennaSue.ttf') format('truetype'),
				url('../fonts/JennaSue.woff2') format('woff2'),
				url('../fonts/JennaSue.woff') format('woff');
			font-weight: normal;
			font-style: normal;
		}
		section.hero {
			background-image: url('/clyde-announcement-2.jpg');
			background-color: #fff;
			background-blend-mode: luminosity;
			background-size: cover;
			background-position: center;
			display: flex;
		}

		.hero h1 {
			font-size: 64px;
		}

		.hero__gradient-container {
			display: flex;
			background: transparent;
			justify-content: center;
			padding: 0;
			height: unset;
		}

		.hero__content-container {
			text-align: center;
			padding: 24px 0;
			width: 100%;
		}

		.hero__image {
			display: none;
		}

		.countdown {
			margin-top: 32px;
		}

		.hero h1,
		.hero h2,
		.hero h3,
		.hero h4,
		.hero a,
		.hero span,
		.hero p,
		.hero__subtext--gray {
			font-family: 'Jenna Sue', cursive;
			color: var(--original-white);
			text-shadow: 2px 2px rgba(0, 0, 0, 0.35);
			line-height: 1;
		}

		.countdown__emphasis {
			font-size: 5vmax;
		}

		.countdown__normal {
			font-size: 4.5vmax;
		}

		.hero h1 {
			font-size: 8vmax;
		}

		p.hero__subtext--gray {
			font-size: 4.5vmax;
		}

		.hero__date {
			font-size: 4.25vmax;
		}

		.hero__links a {
			border-bottom: 1px solid var(--original-white);
		}
	}
</style>
