<script>
	import QualityIndicator from './QualityIndicator.svelte';

	let {
		title = '',
		timeline = '',
		cost = '',
		successRate = '',
		riskLevel = '',
		context = 50,
		variant = 'current' // 'current' or 'optimal'
	} = $props();

	const isOptimal = $derived(variant === 'optimal');
</script>

<div class="comparison-card" class:optimal={isOptimal} class:current={!isOptimal}>
	<h3>{title}</h3>
	<div class="stat-row">
		<span class="label">Timeline:</span>
		<span class="value" class:good={isOptimal}>{timeline}</span>
	</div>
	<div class="stat-row">
		<span class="label">Cost:</span>
		<span class="value" class:good={isOptimal}>{cost}</span>
	</div>
	<div class="stat-row">
		<span class="label">Success Rate:</span>
		<span class="value" class:good={isOptimal}>{successRate}</span>
	</div>
	<div class="stat-row">
		<span class="label">Risk Level:</span>
		<span class="value" class:good={isOptimal}>{riskLevel}</span>
	</div>
	<QualityIndicator {context} />
</div>

<style>
	.comparison-card {
		flex: 1;
		padding: 1.5rem;
		background: white;
		border-radius: 8px;
		border: 2px solid #e0e0e0;
	}

	.comparison-card.optimal {
		border-color: var(--faf-orange);
		box-shadow: 0 0 20px rgba(255, 107, 53, 0.1);
	}

	h3 {
		margin: 0 0 1rem 0;
		color: var(--faf-black);
		font-size: 1.125rem;
	}

	.stat-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.75rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid #f0f0f0;
	}

	.stat-row:last-of-type {
		border-bottom: none;
	}

	.label {
		color: #666;
		font-weight: 600;
	}

	.value {
		font-weight: 700;
		font-family: var(--font-mono);
		color: #999;
	}

	.value.good {
		color: var(--faf-black);
		font-weight: 900;
	}
</style>