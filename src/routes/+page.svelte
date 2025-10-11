<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import TrustVsHope from '$lib/components/TrustVsHope.svelte';
	import LiveDemo from '$lib/components/LiveDemo.svelte';
	import Journey from '$lib/components/Journey.svelte';
	import AIAutomation from '$lib/components/AIAutomation.svelte';
	import N8nPainPoints from '$lib/components/N8nPainPoints.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Onboarding from '$lib/components/Onboarding.svelte';
	import EmailCapture from '$lib/components/EmailCapture.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FafLogo from '$lib/components/FafLogo.svelte';

	let isLoaded = $state(false);
	let showSplash = $state(true);

	onMount(() => {
		// Check if user has already visited
		const hasVisited = browser && sessionStorage.getItem('faf-visited');

		if (hasVisited) {
			// Skip animation if already visited
			showSplash = false;
			isLoaded = true;
			return;
		}

		// First visit - show animation
		const animationTimeout = setTimeout(() => {
			showSplash = false;
			isLoaded = true;
			if (browser) {
				sessionStorage.setItem('faf-visited', 'true');
			}
		}, 4000);

		// Allow skipping with Escape key or clicking
		const skipAnimation = () => {
			clearTimeout(animationTimeout);
			showSplash = false;
			isLoaded = true;
			if (browser) {
				sessionStorage.setItem('faf-visited', 'true');
			}
		};

		const handleKeydown = (e) => {
			if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
				skipAnimation();
			}
		};

		window.addEventListener('keydown', handleKeydown);

		// Cleanup
		return () => {
			clearTimeout(animationTimeout);
			window.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<svelte:head>
	<title>.faf = Project DNA ✨ for ANY AI | FAST, TRUSTED 🧡⚡️</title>
	<script async src="https://js.stripe.com/v3/buy-button.js"></script>
</svelte:head>

{#if showSplash}
<div class="splash-screen" onclick={() => {
	showSplash = false;
	isLoaded = true;
	if (browser) {
		sessionStorage.setItem('faf-visited', 'true');
		localStorage.setItem('faf-visited', 'true');
	}
}}>
	<div class="splash-container">
		<FafLogo
			size="medium"
			color="white"
			animated={true}
			className="splash-logo"
		/>
		<p class="skip-hint">Press ESC or click to skip</p>
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
	<div id="ai-automation">
		<AIAutomation />
	</div>
	<div id="n8n-pain-points">
		<N8nPainPoints />
	</div>
	<div id="onboarding">
		<Onboarding />
	</div>
	<div id="pricing">
		<Pricing />
	</div>
	<EmailCapture />

	<div class="final-cta">
		<p class="classic-tagline">Stop faffing about with context — use .faf — no excuses left</p>
	</div>

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
		cursor: pointer;
	}

	.splash-container {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	.skip-hint {
		position: absolute;
		bottom: 2rem;
		color: rgba(255, 255, 255, 0.4);
		font-size: 0.875rem;
		animation: fadeIn 1s ease-out 0.5s both;
		font-weight: 500;
		letter-spacing: 0.05em;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
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

	.final-cta {
		text-align: center;
		padding: 2rem 2rem 4rem;
		background: var(--faf-cream);
	}

	.classic-tagline {
		font-family: var(--font-mono);
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--faf-black);
		background: rgba(0, 229, 229, 0.4);
		padding: 0.5rem 1rem;
		margin: 0;
		letter-spacing: -0.02em;
		display: inline-block;
		border-radius: 4px;
		opacity: 0;
		animation: fadeInUp 1s ease-out 4.3s forwards;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.classic-tagline {
			font-size: 1.125rem;
		}
	}
</style>
