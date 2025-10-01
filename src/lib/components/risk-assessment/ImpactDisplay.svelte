<script>
	let { multiplier = 1, delayDays = 0 } = $props();

	const isDelayed = $derived(delayDays > 0);
	const speedText = $derived(multiplier > 1 ? `${multiplier}x slower` : `${multiplier}x speed`);
	const delayText = $derived(isDelayed ? `${delayDays} days late` : 'ON TIME!');
</script>

<div class="impact-display" class:delayed={isDelayed} class:on-time={!isDelayed}>
	<div class="multiplier">{speedText}</div>
	<div class="delay">{delayText}</div>
</div>

<style>
	.impact-display {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		border-radius: 8px;
		margin: 1rem 0;
		color: white;
		transition: background 0.3s ease;
	}

	.impact-display.delayed {
		background: linear-gradient(135deg, #ff4444 0%, #cc0000 100%);
	}

	.impact-display.on-time {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
	}

	.multiplier {
		font-size: 1.75rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.delay {
		font-size: 1.25rem;
		font-weight: 700;
		opacity: 0.95;
	}
</style>