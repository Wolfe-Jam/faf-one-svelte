<script>
	let { show = false, score = 94 } = $props();
</script>

{#if show}
	<div class="score-popup">
		<div class="score-content">
			<span class="score-label">AI Score</span>
			<span class="score-value">{score}%</span>
		</div>
	</div>
{/if}

<style>
	.score-popup {
		position: fixed;
		top: 100px;
		right: 30px;
		z-index: 1000;
		animation: slideIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	.score-content {
		background: linear-gradient(135deg, #FF6B35, #ff8c5e);
		color: white;
		padding: 1rem 1.5rem;
		border-radius: 50px;
		box-shadow: 0 10px 40px rgba(255, 107, 53, 0.3);
		display: flex;
		align-items: center;
		gap: 1rem;
		font-weight: 700;
		transform-origin: right center;
		animation: pulse 2s ease-in-out infinite;
	}

	.score-label {
		font-size: 0.9rem;
		opacity: 0.9;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.score-value {
		font-size: 1.8rem;
		font-weight: 900;
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateX(50px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes pulse {
		0%, 100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	@media (max-width: 768px) {
		.score-popup {
			top: auto;
			bottom: 30px;
			right: 20px;
		}

		.score-content {
			padding: 0.75rem 1.25rem;
		}

		.score-value {
			font-size: 1.5rem;
		}
	}
</style>