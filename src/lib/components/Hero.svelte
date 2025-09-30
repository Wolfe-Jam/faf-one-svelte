<script>
	import { onMount } from 'svelte';
	import FafLogo from '$lib/components/FafLogo.svelte';
	import ScrollRevealText from '$lib/components/ScrollRevealText.svelte';
	import TypewriterText from '$lib/components/TypewriterText.svelte';
	import DownloadCounter from '$lib/components/DownloadCounter.svelte';
	import HeroStats from '$lib/components/hero/HeroStats.svelte';
	import HeroTestimonials from '$lib/components/hero/HeroTestimonials.svelte';
	import HeroScorePopup from '$lib/components/hero/HeroScorePopup.svelte';
	import HeroQuotes from '$lib/components/hero/HeroQuotes.svelte';
	import HeroPathways from '$lib/components/hero/HeroPathways.svelte';
	import HeroPartners from '$lib/components/hero/HeroPartners.svelte';
	import HeroBadges from '$lib/components/hero/HeroBadges.svelte';
	import '$lib/styles/hero.css';
	
	// Animation control
	let shouldAnimate = $state(true);

	let titleRef = $state(null);
	let subtitleRef = $state(null);
	let ctaRef = $state(null);
	let isVisible = $state(false);
	let codeTyped = $state('');
	let showScorePopup = $state(false);
	let currentScore = $state(94);

	const codeText = 'faf init';
	const scores = [85, 88, 91, 94, 96, 99];

	// Check if animations should run
	function checkAnimationPreference() {
		const ANIMATION_COOLDOWN = 30 * 60 * 1000; // 30 minutes
		const lastAnimated = localStorage.getItem('faf_last_animated');
		const visitCount = parseInt(localStorage.getItem('faf_visit_count') || '0');

		// Always animate for new users or special cases
		if (!lastAnimated || visitCount === 0) {
			return true;
		}

		// Check if enough time has passed
		const timeSinceLastAnimation = Date.now() - parseInt(lastAnimated);
		if (timeSinceLastAnimation > ANIMATION_COOLDOWN) {
			return true;
		}

		// Show animation every 5th visit
		if (visitCount % 5 === 0) {
			return true;
		}

		// Check for campaign/direct link (UTM parameters)
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has('utm_source') || urlParams.has('ref')) {
			return true;
		}

		return false;
	}

	onMount(() => {
		// Update visit count
		const visitCount = parseInt(localStorage.getItem('faf_visit_count') || '0') + 1;
		localStorage.setItem('faf_visit_count', visitCount.toString());

		// Check if we should animate
		shouldAnimate = checkAnimationPreference();

		if (shouldAnimate) {
			localStorage.setItem('faf_last_animated', Date.now().toString());
			setTimeout(() => {
				isVisible = true;
			}, 100);
		} else {
			// Skip animations, show content immediately
			isVisible = true;
			codeTyped = codeText;
		}

		// Type out the code (only if animating)
		if (shouldAnimate) {
			let index = 0;
			const typeInterval = setInterval(() => {
				if (index <= codeText.length) {
					codeTyped = codeText.slice(0, index);
					index++;
				} else {
					clearInterval(typeInterval);
				}
			}, 150);
		}

		// Random score popup every 8-15 seconds
		const showRandomScore = () => {
			const randomScore = scores[Math.floor(Math.random() * scores.length)];
			currentScore = randomScore;
			showScorePopup = true;

			setTimeout(() => {
				showScorePopup = false;
			}, 3000);

			// Schedule next popup
			const nextDelay = 8000 + Math.random() * 7000; // 8-15 seconds
			setTimeout(showRandomScore, nextDelay);
		};

		// Start first popup after 5 seconds
		setTimeout(showRandomScore, 5000);

		return () => clearInterval(typeInterval);
	});
	
	// Removed parallax - keeping it simple
</script>

<section class="hero">
	<div class="container">
		<div class="hero-content" class:visible={isVisible} class:no-animate={!shouldAnimate}>
			<!-- Main Title - MASSIVE -->
			<div bind:this={titleRef} class="title-wrapper">
				<div class="main-logo">
					<FafLogo size="large" color="black" showDefinition={true} />
				</div>
				<div class="subtitle">
					Professional AI-Context Management
				</div>
				<div class="features-tagline">
					<span class="feature-item">⚡ Lightning Fast</span>
					<span class="separator">•</span>
					<span class="feature-item">🔄 Eternal-Sync™</span>
					<span class="separator">•</span>
					<span class="feature-item">🛡️ Disaster Recovery</span>
					<span class="separator">•</span>
					<span class="feature-item">🔒 Bank-Grade Secure</span>
				</div>
			</div>
			
			<!-- Tagline - BOLD -->
			<div bind:this={subtitleRef} class="tagline">
				<span class="tagline-underline">Project DNA ✨ for ANY AI</span>
			</div>
			
			<!-- Quotes Section -->
			<HeroQuotes {isVisible} />
			
			
			<!-- Badges Section -->
			<HeroBadges />
			
			<!-- Live NPM Stats with Animated Counter -->
			<div class="live-npm-stats">
				<DownloadCounter />
			</div>

			<!-- Verified Testing Stats -->
			<div class="testing-stats">
				<h3 class="testing-title">Verified Testing Results</h3>
				<HeroStats />
			</div>
			
			<!-- AI Testimonials from Testing -->
			<HeroTestimonials />
			
			<!-- Pathways and Terminal -->
			<HeroPathways {codeTyped} {codeText} />
			
			<!-- CTAs -->
			<div bind:this={ctaRef} class="cta-wrapper">
				<a href="https://fafdev.tools" class="btn btn-cyan btn-large">
					<span class="btn-icon">🧡⚡️</span>
					WEB - Fafdev.tools
				</a>
				<a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener noreferrer" class="btn btn-orange btn-large">
					<span class="btn-icon">🤖</span>
					MCP Registry
				</a>
				<a href="https://fafcli.dev" class="btn btn-dark btn-large">
					<span class="btn-icon">📺</span>
					Try CLI
				</a>
			</div>
			
			<!-- Partners -->
			<HeroPartners />
		</div>
	</div>

	<!-- Score Popup -->
	<HeroScorePopup show={showScorePopup} score={currentScore} />
</section>

<style>
	.hero {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		position: relative;
		background: var(--faf-cream);
		padding: 2rem 0 4rem 0;
		min-height: 100vh;
	}
	
	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		position: relative;
	}
	
	.hero-content {
		text-align: center;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease-out;
	}
	
	.hero-content.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	.title-wrapper {
		margin-bottom: 1rem;
		animation: slideInUp 0.7s ease-out 0.1s backwards;
	}
	
	.main-logo {
		display: flex;
		justify-content: center;
		margin-bottom: 0.5rem;
	}
	
	.subtitle {
		font-size: 1.25rem;
		font-family: 'Roboto Condensed', sans-serif;
		color: var(--faf-gray);
		letter-spacing: 0.05em;
		margin-top: 4.5rem;
		margin-bottom: 2rem;
	}
	
	
	.tagline {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--faf-dark);
		margin: 6rem 0 4rem;
		animation: slideInUp 0.7s ease-out 0.2s backwards;
	}
	
	.tagline-underline {
		text-decoration: underline;
		text-decoration-thickness: 3px;
		text-underline-offset: 4px;
		text-decoration-color: var(--faf-black);
	}
	
	.claude-quote {
		font-family: 'Roboto Mono', monospace;
		font-size: 1.25rem;
		font-style: italic;
		color: var(--faf-gray);
		margin: 2rem 0;
		padding: 1.5rem;
		border-left: 4px solid var(--faf-orange);
		background: rgba(0, 243, 255, 0.05);
		animation: slideInUp 0.7s ease-out 0.3s backwards;
	}
	
	.emoji {
		display: inline-block;
		animation: pulse 2s ease-in-out infinite;
	}
	
	.authority-statement {
		font-family: 'Roboto Mono', monospace;
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--faf-gray);
		text-align: center;
		line-height: 1.8;
		margin: 0.75rem 0 2rem 0;
		animation: slideInUp 0.7s ease-out 0.35s backwards;
	}
	
	.authority-statement div:nth-child(2) {
		margin-top: 1.5rem;
	}
	
	.core-message {
		margin: 3rem 0;
		animation: slideInUp 0.7s ease-out 0.4s backwards;
	}
	
	.core-message h2 {
		font-size: 2rem;
		font-weight: 800;
		color: var(--faf-dark);
		text-align: center;
		letter-spacing: -0.01em;
		margin-bottom: 2rem;
	}
	
	.transformation-visual {
		display: flex;
		justify-content: center;
		margin: 3rem 0;
	}
	
	.jpeg-for-ai-img {
		width: 100%;
		max-width: 900px;
		height: auto;
		border-radius: 12px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}
	
	.jpeg-for-ai-img:hover {
		transform: scale(1.02);
		box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
	}
	
	.classic-tagline {
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--faf-black);
		text-align: center;
		margin-top: 3rem;
		font-style: italic;
		letter-spacing: -0.02em;
		position: relative;
		padding: 0 1rem;
	}
	
	.classic-tagline::before,
	.classic-tagline::after {
		content: "—";
		color: var(--faf-orange);
		margin: 0 0.5rem;
		font-weight: 400;
	}
	
	/* Text blocks with scroll reveal */
	/* Text block and quote styles moved to HeroQuotes.svelte */
	
	
	/* Badge styles moved to HeroBadges.svelte */

	/* Official badge styles moved to HeroBadges.svelte */

	.live-npm-stats {
		display: flex;
		justify-content: center;
		margin: 2rem 0;
		animation: slideInUp 0.7s ease-out 0.35s backwards;
	}

	.npm-badge {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 2rem;
		background: linear-gradient(135deg, #FF6B35 0%, #FF914D 100%);
		color: white;
		border-radius: 999px;
		font-weight: 700;
		box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
		animation: pulse 2s ease-in-out infinite;
	}

	.npm-icon {
		font-size: 2rem;
	}

	.npm-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.npm-number {
		font-size: 1.75rem;
		font-weight: 900;
		line-height: 1;
	}

	.npm-label {
		font-size: 0.875rem;
		opacity: 0.95;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.testing-stats {
		margin: 3rem -2rem;
		padding: 3rem 2rem;
		background: linear-gradient(135deg, 
			#4a4a4a 0%, 
			#2c3e50 20%, 
			#0a0a0a 50%, 
			#2c3e50 80%, 
			#4a4a4a 100%
		);
		border-radius: 20px;
		box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
		animation: slideInUp 0.7s ease-out 0.35s backwards;
		position: relative;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.05);
	}
	
	.testing-stats::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, var(--faf-orange) 0%, var(--faf-cyan-dark) 50%, var(--faf-green) 100%);
	}
	
	.testing-stats::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%);
		animation: steelSheen 3s ease-in-out infinite;
		pointer-events: none;
	}
	
	@keyframes steelSheen {
		0% { left: -100%; }
		100% { left: 100%; }
	}
	
	.testing-title {
		text-align: center;
		font-size: 1.25rem;
		color: var(--faf-white);
		margin-bottom: 2rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.15em;
	}
	
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		justify-items: center;
	}
	
	.stat-item {
		text-align: center;
		background: var(--faf-white);
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
		transition: transform 0.3s ease;
		width: 100%;
	}
	
	.stat-item:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
	}
	
	.stat-number {
		display: block;
		font-size: 2.5rem;
		font-weight: 900;
		line-height: 1;
		margin-bottom: 0.5rem;
	}
	
	/* Different color for each stat */
	.stat-item:nth-child(1) .stat-number {
		color: var(--faf-black);
	}
	
	.stat-item:nth-child(2) .stat-number {
		color: var(--faf-cyan-dark);
	}
	
	.stat-item:nth-child(3) .stat-number {
		color: #00C851; /* Green */
	}
	
	.stat-item:nth-child(4) .stat-number {
		color: var(--faf-orange);
	}
	
	.stat-label {
		display: block;
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
	}
	
	.ai-testimonials {
		margin: 2rem 0 3rem;
		animation: slideInUp 0.7s ease-out 0.4s backwards;
	}
	
	.testimonials-title {
		text-align: center;
		font-size: 1.25rem;
		color: var(--faf-gray-dark);
		margin-bottom: 1.5rem;
		font-weight: 600;
	}
	
	.testimonial-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		max-width: 900px;
		margin: 0 auto;
	}
	
	.testimonial-item {
		background: #FFFFFF;
		border: 2px solid var(--faf-gray-light);
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	}
	
	.testimonial-item:hover {
		border-color: var(--faf-orange);
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(255, 107, 53, 0.1);
	}
	
	.testimonial-quote {
		font-size: 1rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 1rem;
		line-height: 1.4;
	}
	
	.testimonial-author {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	
	.author-name {
		font-weight: 600;
		color: var(--faf-orange);
		font-size: 0.875rem;
	}
	
	.author-rating {
		font-size: 0.75rem;
		color: var(--faf-gray-dark);
		font-style: italic;
	}
	
	/* Brand-specific colors for AI testimonials */
	.claude-item .author-name {
		color: var(--faf-orange);
	}
	
	.openai-item .author-name {
		color: #0066CC; /* Standard blue */
	}
	
	.gemini-item .author-name {
		color: var(--faf-cyan-dark); /* Using our great cyan #00d4d4 */
	}
	
	/* Pathways and terminal styles moved to HeroPathways.svelte */
	
	.cta-wrapper {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin: 3rem 0;
		animation: slideInUp 0.7s ease-out 0.5s backwards;
	}
	
	.btn-large {
		padding: 1rem 2rem;
		font-size: 1.125rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		text-decoration: none;
		font-weight: 600;
		min-width: 200px;
		flex: 1;
		max-width: 250px;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	}
	
	.btn-icon {
		font-size: 1.25rem;
	}
	
	/* Trust signal styles moved to HeroPartners.svelte */
	
	
	/* Animations are now in hero.css */

	/* Disable animations when not needed */
	.no-animate * {
		animation-duration: 0s !important;
		animation-delay: 0s !important;
		transition-duration: 0s !important;
	}
	
	@media (max-width: 768px) {
		/* Badge media queries moved to HeroBadges.svelte */
		
		.testing-stats {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
		
		.jpeg-for-ai-img {
			max-width: 100%;
		}
		
		.transformation-visual {
			margin: 2rem 0;
		}
		
		.testimonial-grid {
			grid-template-columns: 1fr;
		}
		
		.stats-grid {
			flex-direction: column;
			gap: 1.5rem;
		}
		
		.stat-number {
			font-size: 2rem;
		}
		
		.pathways-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		
		.pathway.featured {
			transform: none;
		}
		
		.cta-wrapper {
			flex-direction: column;
			align-items: center;
		}
		
		.btn-large {
			width: 100%;
			max-width: 300px;
		}
	}
</style>