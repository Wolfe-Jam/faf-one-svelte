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
		// Phase 1: Zoom in animation (1s)
		// Phase 2: Display at normal size (1.5s)
		setTimeout(() => {
			splashPhase = 'display';
		}, 1000);
		
		// Phase 3: Zoom out to dot (0.5s)
		setTimeout(() => {
			splashPhase = 'zoom-out';
		}, 2500);
		
		// Phase 4: Hide splash and show content
		setTimeout(() => {
			showSplash = false;
			isLoaded = true;
		}, 3000);
	});
</script>

<svelte:head>
	<title>.faf = The JPEG for AI | FAST, TRUSTED 🧡⚡️</title>
	<script async src="https://js.stripe.com/v3/buy-button.js"></script>
</svelte:head>

{#if showSplash}
<div class="splash-screen" data-phase={splashPhase}>
	<div class="splash-image-wrapper">
		<img src="/faf-jpeg-for-ai.png" alt=".faf - The JPEG for AI" class="splash-image" />
		<div class="dot"></div>
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
	
	.splash-image-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.splash-image {
		position: absolute;
		width: 600px;
		height: 600px;
		object-fit: contain;
		opacity: 1;
		transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	/* Phase 1: Zoom in from huge */
	[data-phase="zoom-in"] .splash-image {
		transform: scale(3);
		opacity: 0;
		animation: zoomIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
	}
	
	/* Phase 2: Display at normal size */
	[data-phase="display"] .splash-image {
		transform: scale(1);
		opacity: 1;
		filter: drop-shadow(0 0 40px rgba(255, 107, 53, 0.5));
	}
	
	/* Phase 3: Zoom out to dot */
	[data-phase="zoom-out"] .splash-image {
		animation: zoomToDot 0.5s cubic-bezier(0.4, 0, 1, 1) forwards;
	}
	
	/* The dot (period) that appears at the end */
	.dot {
		position: absolute;
		width: 12px;
		height: 12px;
		background: #FF6B35;
		border-radius: 50%;
		opacity: 0;
		transform: scale(0);
		box-shadow: 0 0 20px rgba(255, 107, 53, 0.8);
	}
	
	[data-phase="zoom-out"] .dot {
		animation: appearDot 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
		animation-delay: 0.3s;
	}
	
	@keyframes zoomIn {
		0% {
			transform: scale(3);
			opacity: 0;
			filter: blur(10px);
		}
		50% {
			opacity: 0.8;
			filter: blur(2px);
		}
		100% {
			transform: scale(1);
			opacity: 1;
			filter: blur(0) drop-shadow(0 0 40px rgba(255, 107, 53, 0.5));
		}
	}
	
	@keyframes zoomToDot {
		0% {
			transform: scale(1);
			opacity: 1;
			filter: drop-shadow(0 0 40px rgba(255, 107, 53, 0.5));
		}
		100% {
			transform: scale(0);
			opacity: 0;
			filter: none;
		}
	}
	
	@keyframes appearDot {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			transform: scale(1.5);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
	
	/* Mobile adjustments */
	@media (max-width: 768px) {
		.splash-image {
			width: 300px;
			height: 300px;
		}
		
		[data-phase="zoom-in"] .splash-image {
			transform: scale(2);
		}
		
		@keyframes zoomIn {
			0% {
				transform: scale(2);
				opacity: 0;
				filter: blur(10px);
			}
			100% {
				transform: scale(1);
				opacity: 1;
				filter: blur(0) drop-shadow(0 0 30px rgba(255, 107, 53, 0.5));
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