<script>
	import Countdown from '../components/Countdown.svelte';
</script>

<section class="hero">
	<div class="hero__gradient-container">
		<div class="hero__content-container">
			<h1>Baby Hill</h1>
			<p class="hero__subtext--gray">will arrive in</p>
			<Countdown />
			<div class="hero__links">
				<a href="https://www.amazon.com/baby-reg/julie-hill-october-2024-louisville/1R9VN3E6H930Y">
					Amazon Registry
				</a>
				<a href="https://www.amazon.com/baby-reg/julie-hill-october-2024-louisville/1R9VN3E6H930Y">
					Target Registry
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero span,
	.hero p {
		font-family: 'Jenna Sue', serif;
		color: #600093;
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
		border-bottom: 2px solid #600093;
	}

	section.hero {
		min-height: fit-content;
		height: 100vh;
		width: 100vw;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: right;
		background-image: url('baby-announcement.jpg');
	}

	.hero__gradient-container {
		display: flex;
		align-items: center;
		height: 100%;
		width: 100%;
		min-height: fit-content;
		background: linear-gradient(
			to right,
			#f7e8ff 50%,
			rgba(247, 232, 255, 50) 55%,
			rgba(196, 196, 196, 0) 75%
		);
	}

	.hero__content-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 52%;
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
			background-image: url('baby-announcement.jpg');
			background-color: #fff;
			background-blend-mode: luminosity;
			background-size: cover;
			background-position: left;
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
			color: #f7e8ff;
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
	}
</style>
