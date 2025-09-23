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
	<div class="splash-image-wrapper">
		<img src="/faf-jpeg-for-ai.png" alt=".faf - The JPEG for AI" class="splash-image" />
		<img src="/orange-smiley.svg" alt="." class="smiley-splash" />
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
	
	/* Phase 1: Zoom in from huge (Star Wars style - starts filling screen) */
	[data-phase="zoom-in"] .splash-image {
		transform: scale(10);
		opacity: 1;
		animation: zoomIn 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
	}
	
	/* Phase 2: Display at normal size */
	[data-phase="display"] .splash-image {
		transform: scale(1);
		opacity: 1;
		filter: drop-shadow(0 0 40px rgba(255, 107, 53, 0.5));
	}
	
	/* Phase 3: Zoom out to dot */
	[data-phase="zoom-out"] .splash-image {
		animation: zoomToDot 1s cubic-bezier(0.4, 0, 0.6, 1) forwards;
	}
	
	/* The smiley that becomes the dot */
	.smiley-splash {
		position: absolute;
		width: 60px;
		height: 60px;
		opacity: 0;
		transform: scale(0);
		filter: drop-shadow(0 0 30px rgba(255, 107, 53, 0.9));
		transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
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
	
	[data-phase="zoom-out"] .smiley-splash {
		animation: appearSmiley 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
		animation-delay: 0.3s;
	}
	
	[data-phase="zoom-out"] .dot {
		animation: appearDot 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
		animation-delay: 0.6s;
		display: none; /* Hide regular dot when smiley is shown */
	}
	
	@keyframes zoomIn {
		0% {
			transform: scale(10);
			opacity: 1;
			filter: blur(0);
		}
		30% {
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 1;
			filter: drop-shadow(0 0 40px rgba(255, 107, 53, 0.5));
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
	
	@keyframes appearSmiley {
		0% {
			transform: scale(0) rotate(0deg);
			opacity: 0;
		}
		50% {
			transform: scale(2) rotate(180deg);
			opacity: 1;
		}
		100% {
			transform: scale(1) rotate(360deg);
			opacity: 1;
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
			transform: scale(5);
		}
		
		@keyframes zoomIn {
			0% {
				transform: scale(5);
				opacity: 1;
				filter: blur(0);
			}
			100% {
				transform: scale(1);
				opacity: 1;
				filter: drop-shadow(0 0 30px rgba(255, 107, 53, 0.5));
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