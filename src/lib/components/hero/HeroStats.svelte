<script>
	// Simple stats grid component - no props needed
</script>

<div class="stats-container">
	<div class="stats-grid">
		<div class="stat-item">
			<span class="stat-number">10,000+</span>
			<span class="stat-label">Projects Tested</span>
		</div>
		<div class="stat-item">
			<span class="stat-number">9.3/10</span>
			<span class="stat-label">AI Average Rating</span>
		</div>
		<div class="stat-item">
			<span class="stat-number">154+</span>
			<span class="stat-label">Formats Validated</span>
		</div>
		<div class="stat-item">
			<span class="stat-number">&lt;50ms</span>
			<span class="stat-label">Processing Time</span>
		</div>
	</div>
</div>

<style>
	.stats-container {
		width: 100%;
		padding: 2rem 0;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem;
		background: white;
		border-radius: 20px;
		border: 2px solid #FF6B35;
		box-shadow: 0 10px 40px rgba(255, 107, 53, 0.1);
	}

	.stat-item {
		text-align: center;
		padding: 1rem;
	}

	.stat-number {
		display: block;
		font-size: 2.5rem;
		font-weight: 900;
		color: #FF6B35;
		margin-bottom: 0.5rem;
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
		letter-spacing: -0.02em;
	}

	.stat-label {
		display: block;
		font-size: 0.9rem;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
			padding: 1.5rem;
		}

		.stat-number {
			font-size: 2rem;
		}

		.stat-label {
			font-size: 0.75rem;
		}
	}

	@media (max-width: 480px) {
		.stats-grid {
			grid-template-columns: 1fr;
		}
	}
</style>