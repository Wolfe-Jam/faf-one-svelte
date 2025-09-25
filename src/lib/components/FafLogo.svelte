<script>
	import { onMount } from 'svelte';
	
	// Props with defaults
	let {
		size = 'medium',
		color = 'white',
		animated = false,
		animationStyle = 'fade', // 'fade' or 'scroll'
		animationDelay = 1500,
		showLettersDelay = 500,
		dotColor = 'orange',
		className = '',
		dotOnly = false,
		showDefinition = false
	} = $props();
	
	// Size presets
	const sizes = {
		tiny: { dot: 20, font: 2.5, gap: 0.4, lift: -0.4 },
		small: { dot: 30, font: 4, gap: 0.6, lift: -0.6 },
		medium: { dot: 60, font: 8.8, gap: 1.25, lift: -1.65 },
		large: { dot: 80, font: 12, gap: 1.5, lift: -2 },
		huge: { dot: 100, font: 16, gap: 2, lift: -2.5 }
	};
	
	// Color presets
	const colors = {
		white: 'var(--faf-white)',
		black: 'var(--faf-black)',
		orange: 'var(--faf-orange)',
		cyan: 'var(--faf-cyan)',
		cream: 'var(--faf-cream)'
	};
	
	const dotColors = {
		orange: 'var(--faf-orange)',
		cyan: 'var(--faf-cyan)',
		white: 'var(--faf-white)',
		black: 'var(--faf-black)'
	};
	
	// Get size config
	const sizeConfig = typeof size === 'string' ? sizes[size] : size;
	const textColor = colors[color] || color;
	const dotColorValue = dotColors[dotColor] || dotColor;
	
	// Animation states
	let dotVisible = $state(!animated);
	let showF1 = $state(!animated);
	let showA = $state(!animated);
	let showF2 = $state(!animated);
	
	onMount(() => {
		if (animated) {
			// Dot appears immediately with zoom
			dotVisible = true;
			
			// Letters appear sequentially
			setTimeout(() => showF1 = true, animationDelay);
			setTimeout(() => showA = true, animationDelay + showLettersDelay);
			setTimeout(() => showF2 = true, animationDelay + showLettersDelay * 2);
		}
	});
</script>

<div class="faf-logo {className}" style="--dot-size: {sizeConfig.dot}px; --font-size: {sizeConfig.font}rem; --gap: {sizeConfig.gap}rem; --lift: {sizeConfig.lift}rem; --text-color: {textColor}; --dot-color: {dotColorValue};">
	<div class="logo-wrapper">
		<span class="logo-content">
			<!-- The smiley/dot -->
			<img
				src="/orange-smiley.svg"
				alt="."
				class="smiley-dot"
				class:animated={animated}
				class:visible={dotVisible}
				style="color: {dotColorValue}; fill: {dotColorValue};"
			/>

			{#if !dotOnly}
				<!-- Letters appear one by one -->
				<span class="letter letter-{animationStyle}" class:show={showF1}>f</span>
				<span class="letter letter-{animationStyle}" class:show={showA}>a</span>
				<span class="letter letter-{animationStyle}" class:show={showF2}>f</span>
			{/if}
		</span>
		{#if showDefinition}
			<div class="definition">Foundational AI-context Format</div>
		{/if}
	</div>
</div>

<style>
	.faf-logo {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 900;
		position: relative;
	}

	.logo-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo-content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0;
		position: relative;
	}

	.definition {
		width: auto;
		white-space: nowrap;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-color);
		opacity: 0.85;
		margin-top: -2rem;
		margin-left: calc(var(--dot-size) + var(--gap));
		line-height: 1;
		text-align: left;
		font-family: 'Roboto Condensed', sans-serif;
	}
	
	/* The smiley dot */
	.smiley-dot {
		width: var(--dot-size);
		height: var(--dot-size);
		filter: drop-shadow(0 0 20px color-mix(in srgb, var(--dot-color) 50%, transparent));
		display: inline-block;
		vertical-align: middle;
		margin-right: calc(var(--gap) * -0.1);
	}
	
	.smiley-dot.animated {
		opacity: 0;
		transform: scale(10);
	}
	
	.smiley-dot.animated.visible {
		animation: dotZoomIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
	}
	
	/* Each letter */
	.letter {
		color: var(--text-color);
		font-size: var(--font-size);
		line-height: 1;
		vertical-align: baseline;
		letter-spacing: -0.02em;
		display: inline-block;
		position: relative;
		top: var(--lift);
	}
	
	.letter:first-of-type {
		margin-left: var(--gap);
	}
	
	/* Animation states */
	.smiley-dot.animated:not(.visible) {
		opacity: 0;
		transform: scale(10);
	}
	
	.letter:not(.show) {
		opacity: 0;
		transform: translateY(20px);
	}
	
	.letter {
		transition: all 0.4s ease-out;
	}
	
	.letter.show {
		opacity: 1;
		transform: translateY(0);
	}
	
	@keyframes dotZoomIn {
		0% {
			transform: scale(10);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
	
</style>