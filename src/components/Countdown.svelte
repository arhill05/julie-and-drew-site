<script lang="ts">
	const date = new Date('2024-10-23T00:00:00-04:00').getTime();
	const isPlural = (number: number) => {
		return number !== 1;
	};

	let days: number, hours: number, minutes: number, seconds: number;

	const calcTime = () => {
		const now = new Date().getTime();

		const distance = date - now;
		days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
		hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
		seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));
	};

	calcTime();

	const interval = setInterval(calcTime, 1000);
</script>

<p class="countdown">
	<span class="countdown__emphasis">{days}</span>
	<span class="countdown__normal">
		{' '}
		{`${isPlural(days) ? 'days' : 'day'}`},{' '}
	</span>
	<span class="countdown__emphasis">{hours}</span>
	<span class="countdown__normal">
		{' '}
		{`${isPlural(hours) ? 'hours' : 'hour'}`},{' '}
	</span>
	<span class="countdown__emphasis">{minutes}</span>
	<span class="countdown__normal">
		{' '}
		{`${isPlural(minutes) ? 'minutes' : 'minute'}`}, and{' '}
	</span>
	<span class="countdown__emphasis">{seconds}</span>
	<span class="countdown__normal">
		{' '}
		{`${isPlural(seconds) ? 'seconds' : 'second'}`}{' '}
	</span>
</p>

<style>
	.countdown {
		font-family: 'Jenna Sue', serif;
		text-align: center;
		margin-top: 32px;
		color: var(--cypress-vine-green);
		text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.35);
	}

	.countdown__emphasis {
		font-size: 96px;
	}

	.countdown__normal {
		font-size: 72px;
	}

	@media screen and (max-width: 1100px) {
		.countdown {
			margin-top: 32px;
			color: var(--original-white);
		}

		.countdown__emphasis {
			font-size: 5vmax;
		}

		.countdown__normal {
			font-size: 4.5vmax;
		}
	}
</style>
