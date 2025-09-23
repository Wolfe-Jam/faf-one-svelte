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
	let showF1 = $state(false);
	let showA = $state(false);
	let showF2 = $state(false);
	
	onMount(() => {
		// Phase 1: Logo zooms in (1s)
		// Phase 2: Show "f" (0.5s after zoom)
		setTimeout(() => {
			showF1 = true;
		}, 1500);
		
		// Phase 3: Show "a" (0.5s after first f)
		setTimeout(() => {
			showA = true;
		}, 2000);
		
		// Phase 4: Show second "f" (0.5s after a)
		setTimeout(() => {
			showF2 = true;
		}, 2500);
		
		// Phase 5: Hide splash and show content
		setTimeout(() => {
			showSplash = false;
			isLoaded = true;
		}, 4000);
	});
</script>

<svelte:head>
	<title>.faf = The JPEG for AI | FAST, TRUSTED 🧡⚡️</title>
	<script async src="https://js.stripe.com/v3/buy-button.js"></script>
</svelte:head>

{#if showSplash}
<div class="splash-screen">
	<div class="splash-container">
		<div class="splash-content">
			<!-- The smiley/dot -->
			<img src="/orange-smiley.svg" alt="." class="smiley-splash" />
			<!-- Letters appear one by one -->
			<span class="letter" class:show={showF1}>f</span>
			<span class="letter" class:show={showA}>a</span>
			<span class="letter" class:show={showF2}>f</span>
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
		position: relative;
		gap: 0;
	}
	
	/* The smiley that zooms in to become the dot */
	.smiley-splash {
		width: 60px;
		height: 60px;
		filter: drop-shadow(0 0 40px rgba(255, 107, 53, 0.8));
		display: inline-block;
		vertical-align: middle;
		margin-right: -0.1em;
		animation: smileyZoomIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
	}
	
	/* Each letter of "faf" */
	.letter {
		color: var(--faf-white);
		opacity: 0;
		transform: translate(0, 20px);
		transition: all 0.4s ease-out;
		letter-spacing: -0.02em;
		display: inline-block;
		position: relative;
		top: -1.65rem;
		font-size: 8.8rem;
		line-height: 1;
		vertical-align: baseline;
	}
	
	.letter:first-of-type {
		margin-left: 1.25rem;
	}
	
	.letter.show {
		opacity: 1;
		transform: translate(0, 0);
	}
	
	@keyframes smileyZoomIn {
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
	
	/* Mobile adjustments */
	@media (max-width: 768px) {
		.splash-content {
			font-size: 4rem;
		}
		
		.smiley-splash {
			width: 40px;
			height: 40px;
		}
		
		@keyframes smileyZoomIn {
			0% {
				transform: scale(8);
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