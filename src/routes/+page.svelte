<script>
	import { onMount } from 'svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import TrustVsHope from '$lib/components/TrustVsHope.svelte';
	import LiveDemo from '$lib/components/LiveDemo.svelte';
	import Journey from '$lib/components/Journey.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Onboarding from '$lib/components/Onboarding.svelte';
	import EmailCapture from '$lib/components/EmailCapture.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	let isLoaded = $state(false);
	let showSplash = $state(true);
	let splashPhase = $state('zoom-in'); // 'zoom-in', 'display', 'zoom-out'
	
	onMount(() => {
		// Phase 1: Star Wars zoom in from huge (1.5s)
		// Phase 2: Display at normal size (2-3s as requested)
		setTimeout(() => {
			splashPhase = 'display';
		}, 1500);
		
		// Phase 3: Zoom out to dot (1s)
		setTimeout(() => {
			splashPhase = 'zoom-out';
		}, 4000);
		
		// Phase 4: Hide splash and show content
		setTimeout(() => {
			showSplash = false;
			isLoaded = true;
		}, 5000);
	});
</script>

<svelte:head>
	<title>.faf = The JPEG for AI | FAST, TRUSTED 🧡⚡️</title>
	<script async src="https://js.stripe.com/v3/buy-button.js"></script>
</svelte:head>

{#if showSplash}
<div class="splash-screen" data-phase={splashPhase}>
	<div class="splash-container">
		<!-- The smiley that becomes the dot -->
		<div class="splash-content">
			<img src="/orange-smiley.svg" alt="." class="smiley-splash" />
			<span class="faf-text">faf</span>
		</div>
	</div>
</div>
{/if}

<Navigation />

<main class:loaded={isLoaded} class:hidden={showSplash}>
	<div id="hero">
		<Hero />
	</div>
	<div id="features">
		<TrustVsHope />
	</div>
	<div id="demo">
		<LiveDemo />
	</div>
	<div id="journey">
		<Journey />
	</div>
	<div id="onboarding">
		<Onboarding />
	</div>
	<div id="pricing">
		<Pricing />
	</div>
	<EmailCapture />
	<Footer />
</main>

<style>
	.splash-screen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		overflow: hidden;
	}
	
	.splash-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.splash-content {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 8rem;
		font-weight: 900;
		color: var(--faf-dark);
		position: relative;
	}
	
	/* The smiley that becomes the dot */
	.smiley-splash {
		width: 100px;
		height: 100px;
		filter: drop-shadow(0 0 40px rgba(255, 107, 53, 0.8));
		transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
		display: inline-block;
		vertical-align: middle;
	}
	
	/* The "faf" text */
	.faf-text {
		opacity: 0;
		margin-left: -0.1em;
		letter-spacing: -0.02em;
	}
	
	/* Phase 1: Smiley starts HUGE */
	[data-phase="zoom-in"] .smiley-splash {
		transform: scale(8);
		opacity: 1;
		animation: smileyZoomIn 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
	}
	
	[data-phase="zoom-in"] .faf-text {
		opacity: 0;
	}
	
	/* Phase 2: Display as dot with "faf" */
	[data-phase="display"] .smiley-splash {
		transform: scale(1);
		opacity: 1;
	}
	
	[data-phase="display"] .faf-text {
		animation: fadeIn 0.5s ease-out forwards;
	}
	
	/* Phase 3: Everything fades out */
	[data-phase="zoom-out"] .splash-content {
		animation: fadeOut 1s ease-out forwards;
	}
	
	@keyframes smileyZoomIn {
		0% {
			transform: scale(8);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
	
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	
	@keyframes fadeOut {
		0% {
			opacity: 1;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(0.8);
		}
	}
	
	/* Mobile adjustments */
	@media (max-width: 768px) {
		.splash-content {
			font-size: 5rem;
		}
		
		.smiley-splash {
			width: 60px;
			height: 60px;
		}
		
		[data-phase="zoom-in"] .smiley-splash {
			transform: scale(5);
		}
		
		@keyframes smileyZoomIn {
			0% {
				transform: scale(5);
			}
			100% {
				transform: scale(1);
			}
		}
	}
	
	main {
		opacity: 0;
		transition: opacity 0.6s ease-out;
	}
	
	main.loaded {
		opacity: 1;
	}
	
	main.hidden {
		display: none;
	}
	
	/* Add scroll padding for anchor links */
	[id] {
		scroll-margin-top: 80px; /* Extra space when scrolling to sections */
	}
</style>