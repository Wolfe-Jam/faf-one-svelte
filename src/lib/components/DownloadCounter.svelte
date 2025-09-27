<script>
	import { onMount } from 'svelte';

	let downloads = $state(1600);
	let targetDownloads = 1600;
	let displayDownloads = $state(0);

	onMount(() => {
		// Animate the counter from 0 to target
		let start = 0;
		const duration = 2000; // 2 seconds
		const increment = targetDownloads / (duration / 16); // 60fps

		const timer = setInterval(() => {
			start += increment;
			if (start >= targetDownloads) {
				displayDownloads = targetDownloads;
				clearInterval(timer);
			} else {
				displayDownloads = Math.floor(start);
			}
		}, 16);

		// Simulate organic growth (add 1-3 downloads every 30-60 seconds)
		const growthTimer = setInterval(() => {
			const randomGrowth = Math.floor(Math.random() * 3) + 1;
			downloads += randomGrowth;
			displayDownloads = downloads;
		}, 45000); // Every 45 seconds average

		return () => {
			clearInterval(timer);
			clearInterval(growthTimer);
		};
	});
</script>

<div class="counter-wrapper">
	<div class="counter-badge">
		<span class="counter-icon">📦</span>
		<span class="counter-number">{displayDownloads.toLocaleString()}+</span>
		<span class="counter-label">Downloads</span>
	</div>
</div>

<style>
	.counter-wrapper {
		display: inline-flex;
		align-items: center;
	}

	.counter-badge {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: linear-gradient(135deg, var(--faf-orange) 0%, #FF914D 100%);
		color: white;
		border-radius: 999px;
		font-weight: 700;
		box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
		animation: pulse 3s ease-in-out infinite;
	}

	.counter-icon {
		font-size: 1.25rem;
	}

	.counter-number {
		font-size: 1.125rem;
		font-weight: 900;
		font-variant-numeric: tabular-nums;
		min-width: 80px;
		text-align: center;
	}

	.counter-label {
		font-size: 0.875rem;
		opacity: 0.95;
	}

	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.02); }
	}

	@media (max-width: 640px) {
		.counter-badge {
			padding: 0.4rem 0.8rem;
			gap: 0.4rem;
		}

		.counter-icon {
			font-size: 1rem;
		}

		.counter-number {
			font-size: 1rem;
			min-width: 60px;
		}

		.counter-label {
			font-size: 0.75rem;
		}
	}
</style>