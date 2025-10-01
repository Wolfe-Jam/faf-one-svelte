<script>
	let {
		label = '',
		helpText = '',
		value = $bindable(50),
		min = 0,
		max = 100,
		step = 1,
		displayValue = '',
		color = 'black'
	} = $props();

	const colorMap = {
		black: '#1a1a1a',
		orange: 'var(--faf-orange)',
		gray: '#e0e0e0'
	};

	const sliderColor = $derived(colorMap[color] || color);
</script>

<div class="input-group">
	<label for={label}>
		{label}
		{#if helpText}
			<span class="help">{helpText}</span>
		{/if}
	</label>
	<input
		type="range"
		id={label}
		bind:value
		{min}
		{max}
		{step}
		style="--slider-color: {sliderColor}"
	/>
	{#if displayValue}
		<div class="value">{displayValue}</div>
	{/if}
</div>

<style>
	.input-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: var(--faf-black);
	}

	.help {
		display: block;
		font-size: 0.875rem;
		color: #666;
		font-weight: 400;
		margin-top: 0.25rem;
	}

	input[type="range"] {
		-webkit-appearance: none;
		appearance: none;
		width: 100%;
		height: 8px;
		background: var(--slider-color, #e0e0e0);
		border-radius: 5px;
		outline: none;
		margin: 1rem 0;
	}

	input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 20px;
		background: white;
		border: 3px solid var(--slider-color, var(--faf-black));
		cursor: pointer;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	}

	input[type="range"]::-moz-range-thumb {
		width: 20px;
		height: 20px;
		background: white;
		border: 3px solid var(--slider-color, var(--faf-black));
		cursor: pointer;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	}

	.value {
		text-align: right;
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--faf-black);
		font-family: var(--font-mono);
	}
</style>