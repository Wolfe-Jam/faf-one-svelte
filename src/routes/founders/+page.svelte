<script>
	import { onMount } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';

	let spotsRemaining = $state(73); // 100 - 27 early adopters
	let countdown = $state('');
	
	onMount(() => {
		// Update countdown
		const interval = setInterval(() => {
			const launch = new Date('2025-01-01T00:00:00Z');
			const now = new Date();
			const diff = launch - now;
			
			if (diff > 0) {
				const days = Math.floor(diff / (1000 * 60 * 60 * 24));
				const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				countdown = `${days}d ${hours}h until public launch`;
			} else {
				countdown = 'Founders pricing ending soon!';
			}
		}, 1000);
		
		return () => clearInterval(interval);
	});
	
	function joinFounders() {
		window.location.href = '/#pricing';
	}
</script>

<svelte:head>
	<title>Join the Movement - Get Dot.FAFfed</title>
	<meta name="description" content="Are you dot.faffed? Join the movement. Context-first, championship thinking, AI|Human balance. Race to win with AI.">
	<script async src="https://js.stripe.com/v3/buy-button.js"></script>
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<div class="founders-hero">
	<div class="container">
		<div class="hero-badge">🏆 JOIN THE MOVEMENT 🏆</div>
		<h1>Are You Dot.FAFfed?</h1>
		<p class="hero-subtitle">
			<span class="highlight">Context-First</span> 🧡 <span class="highlight">Championship Thinking</span> 🏆 <span class="highlight">AI|Human Balance</span> 🥵
		</p>
		<div class="racing-banner">
			<span class="race-text">🏎️ RACE TO WIN WITH AI ⚡ NO FAFFING ABOUT 🏁</span>
		</div>
	</div>
</div>

<section class="community-section">
	<div class="container">
		<h2>🤝 The Context-First Community</h2>
		<div class="community-intro">
			<p class="community-statement">"Once you're dot.faffed, you help others get dot.faffed"</p>
			<p>No matter if you use CLI, MCP, Chrome Extension, or all three. Beginner or expert. Everyone shares tips, tricks, and victories.</p>
		</div>

		<div class="community-grid">
			<div class="community-card">
				<div class="community-icon">🏆</div>
				<h3>CLI Champions</h3>
				<p>Share automation scripts, workflows, and command-line magic. From <code>faf init</code> to advanced scoring.</p>
			</div>

			<div class="community-card">
				<div class="community-icon">🤖</div>
				<h3>MCP Masters</h3>
				<p>30+ tools expertise. Help others configure Claude, share server setups, troubleshoot together.</p>
			</div>

			<div class="community-card">
				<div class="community-icon">🌐</div>
				<h3>Web Warriors</h3>
				<p>fafdev.tools, AI|HUMAN Balance, Chrome Extension tips. Master the web-based context game.</p>
			</div>

			<div class="community-card full-width">
				<div class="community-icon">🏆</div>
				<h3>Everyone Wins Together</h3>
				<p><strong>No gatekeeping. No "RTFM". No judgment.</strong><br/>
				Whether you're dot.faffing your first project or your 500th, the community has your back.<br/>
				We all race to win with AI - and we help each other cross the finish line.</p>
			</div>
		</div>
	</div>
</section>

<section class="founders-benefits">
	<div class="container">
		<h2>🏎️ What You Actually Get</h2>
		<div class="benefits-grid">
			<div class="benefit-card">
				<div class="benefit-icon">🤝</div>
				<h3>Community Access</h3>
				<p>Join dot.faffers sharing tips across CLI, MCP, and Extension</p>
			</div>

			<div class="benefit-card">
				<div class="benefit-icon">⚡</div>
				<h3>Priority Everything</h3>
				<p>Support, features, updates - you're first in line, always</p>
			</div>

			<div class="benefit-card">
				<div class="benefit-icon">🏆</div>
				<h3>Recognition</h3>
				<p>Founder badge ($9) or LEGEND status ($100) - earned, not bought</p>
			</div>
		</div>
	</div>
</section>

<section class="founders-story">
	<div class="container">
		<div class="story-content">
			<h2>Why We're Different</h2>

			<div class="truth-bombs">
				<div class="truth-item">
					<h4>❌ No VC Funding</h4>
					<p>We're not burning investor money. We built this ourselves over thousands of hours. User-funded means we answer to you, not a board.</p>
				</div>

				<div class="truth-item">
					<h4>❌ No Marketing BS</h4>
					<p>Every stat is real. 3,077 downloads (CLI 🏆 1,942 vs MCP 🤖 1,125+), 9.3/10 AI rating, 20min → 3min. No fluff.</p>
				</div>

				<div class="truth-item">
					<h4>❌ No Hidden Costs</h4>
					<p>The software is free. Forever. Paying is optional. We're transparent about everything because trust is our foundation.</p>
				</div>

				<div class="truth-item">
					<h4>☑️ Just Great Software</h4>
					<p>40 years of format expertise. From .iff on Commodore Amiga to .faf for AI. This is what we do. This is all we do.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="founders-stats">
	<div class="container">
		<h2>Real Numbers, Real Impact</h2>
		<div class="stats-grid">
			<div class="stat-card">
				<div class="stat-number">20min → 3min</div>
				<div class="stat-label">Context Loading</div>
			</div>
			<div class="stat-card">
				<div class="stat-number">6.7x</div>
				<div class="stat-label">Faster Than Manual</div>
			</div>
			<div class="stat-card">
				<div class="stat-number">10,000+</div>
				<div class="stat-label">Projects Tested</div>
			</div>
			<div class="stat-card">
				<div class="stat-number">9.3/10</div>
				<div class="stat-label">AI Rating</div>
			</div>
			<div class="stat-card">
				<div class="stat-number">&lt;50ms</div>
				<div class="stat-label">Processing Time</div>
			</div>
			<div class="stat-card">
				<div class="stat-number">154+</div>
				<div class="stat-label">Formats Validated</div>
			</div>
		</div>
		<p class="stats-note">
			* Every number is real, tested, and verified. NO BS.
		</p>
	</div>
</section>

<section class="founders-testimonials">
	<div class="container">
		<h2>Voices from the Community</h2>
		<div class="testimonials-grid">
			<div class="testimonial">
				<p>"Personally I love the tool (and started it) but I think the analogy with a jpg is weak and more likely to be a bit confusing for people as I'd say it's more well known for compression and images and risks some confusion."</p>
				<div class="testimonial-author">- Community Contributor</div>
			</div>

			<div class="testimonial">
				<p>"that was fast.. heck yeah now i have a 95% and i'm back to good grades!"</p>
				<div class="testimonial-author">- First-Time User (went from 52% to 95%)</div>
			</div>

			<div class="testimonial">
				<p>"🔗 Bi-Sync Engine... Files synchronized! Perfect harmony achieved! 💎 Technical Credit 💎 +1 +4 points... I got sent this 🏆 icon (proving what user had done!)"</p>
				<div class="testimonial-author">- Power User (bi-sync master)</div>
			</div>
		</div>
	</div>
</section>

<section class="founders-cta">
	<div class="container">
		<div class="cta-box">
			<div class="urgency-badge">
				GENUINE WIN/WIN - VERY LIMITED - WHEN IT'S GONE IT'S GONE
			</div>
			
			<h2>Choose Your Path</h2>
			<p class="cta-subtitle">
				Only {spotsRemaining} spots remaining • {countdown}
			</p>

			<div class="pricing-comparison">
				<div class="price-box">
					<div class="price-label">FOUNDER</div>
					<div class="price-value">$9/month</div>
					<div class="price-save">LIMITED WIN/WIN 🧡</div>
				</div>
				<div class="price-box featured">
					<div class="price-label">LEGENDS ONLY</div>
					<div class="price-value">$100/year 🏆</div>
					<div class="price-save">Includes badge + priority</div>
				</div>
			</div>

			<div class="stripe-buttons-row">
				<div class="stripe-button-wrapper">
					<div class="button-label">FOUNDER</div>
					{@html `<stripe-buy-button
						buy-button-id="buy_btn_1SAisLRt8WbJblnRQzarT8jS"
						publishable-key="pk_live_51RsYPuRt8WbJblnRhd7gwvTqkNie5A5GhGotKYbdYj6R18PtKzDpObayQdpUQ7sjSMt4b0381Je2yyphYot6ELYR00D50NnmJt"
					></stripe-buy-button>`}
				</div>
				<div class="stripe-button-wrapper">
					<div class="button-label">LEGENDS 🏆</div>
					{@html `<stripe-buy-button
						buy-button-id="buy_btn_1SAMYLRt8WbJblnRL4SoZiDY"
						publishable-key="pk_live_51RsYPuRt8WbJblnRhd7gwvTqkNie5A5GhGotKYbdYj6R18PtKzDpObayQdpUQ7sjSMt4b0381Je2yyphYot6ELYR00D50NnmJt"
					></stripe-buy-button>`}
				</div>
			</div>
			
			<p class="guarantee">
				☑️ 30-day money-back guarantee • ☑️ Cancel anytime • ☑️ Instant access
			</p>
		</div>
	</div>
</section>

<Footer />

<style>
	.back-nav {
		padding: 1rem 2rem;
		background: var(--faf-white);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--faf-dark);
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.back-button:hover {
		background: var(--faf-cream);
		color: var(--faf-orange);
		transform: translateX(-2px);
	}

	.founders-hero {
		background: linear-gradient(135deg, var(--faf-black) 0%, #1a1a1a 100%);
		color: white;
		padding: 6rem 0;
		text-align: center;
		border-bottom: 3px solid var(--faf-orange);
	}
	
	.hero-badge {
		display: inline-block;
		background: var(--faf-orange);
		color: white;
		padding: 0.5rem 1.5rem;
		border-radius: 20px;
		font-weight: 700;
		font-size: 0.875rem;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
	}
	
	.founders-hero h1 {
		font-size: 3.5rem;
		font-weight: 900;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, white 0%, var(--faf-orange) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	
	.hero-subtitle {
		font-size: 1.5rem;
		margin-bottom: 3rem;
		color: #ccc;
	}
	
	.highlight {
		color: var(--faf-orange);
		font-weight: 700;
	}
	
	.racing-banner {
		margin-top: 2rem;
		padding: 1rem 2rem;
		background: var(--faf-orange);
		border-radius: 12px;
		display: inline-block;
		animation: pulse 2s ease-in-out infinite;
	}

	.race-text {
		font-weight: 900;
		font-size: 1.125rem;
		color: white;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.02); }
	}
	
	.founders-benefits {
		padding: 4rem 0;
		background: #f8f8f8;
	}
	
	.founders-benefits h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: var(--faf-black);
	}
	
	.community-section {
		padding: 4rem 0;
		background: linear-gradient(135deg, #f8f8f8 0%, white 100%);
	}

	.community-intro {
		max-width: 800px;
		margin: 0 auto 3rem;
		text-align: center;
	}

	.community-statement {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--faf-orange);
		margin-bottom: 1rem;
		font-style: italic;
	}

	.community-intro p:last-child {
		font-size: 1.125rem;
		color: #444;
		line-height: 1.6;
	}

	.community-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.community-card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		border: 2px solid var(--faf-orange);
		transition: all 0.3s ease;
	}

	.community-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
	}

	.community-card.full-width {
		grid-column: 1 / -1;
		background: var(--faf-black);
		color: white;
		border-color: var(--faf-orange);
	}

	.community-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.community-card h3 {
		font-size: 1.25rem;
		margin-bottom: 0.75rem;
		color: var(--faf-black);
		font-weight: 700;
	}

	.community-card.full-width h3 {
		color: var(--faf-orange);
	}

	.community-card p {
		color: #555;
		line-height: 1.5;
	}

	.community-card.full-width p {
		color: #ccc;
	}

	.community-card code {
		background: var(--faf-cream);
		color: var(--faf-orange);
		padding: 0.2em 0.4em;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	.benefits-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}
	
	.benefit-card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		border: 2px solid transparent;
		transition: all 0.3s ease;
	}
	
	.benefit-card:hover {
		border-color: var(--faf-orange);
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0,0,0,0.1);
	}
	
	.benefit-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}
	
	.benefit-card h3 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
	}
	
	.benefit-card p {
		color: #666;
		font-size: 0.925rem;
		line-height: 1.5;
	}
	
	.founders-story {
		padding: 4rem 0;
		background: white;
	}
	
	.story-content {
		max-width: 800px;
		margin: 0 auto;
	}
	
	.founders-story h2 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
		text-align: center;
	}
	
	.story-lead {
		font-size: 1.25rem;
		color: #666;
		text-align: center;
		margin-bottom: 3rem;
		font-weight: 600;
	}
	
	.timeline {
		position: relative;
		padding: 2rem 0;
		margin-bottom: 2rem;
	}
	
	.timeline::before {
		content: '';
		position: absolute;
		left: 100px;
		top: 0;
		bottom: 0;
		width: 3px;
		background: var(--faf-orange);
	}
	
	.timeline-item {
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: 2rem;
		margin-bottom: 2rem;
		position: relative;
	}
	
	.timeline-year {
		font-weight: 900;
		color: var(--faf-orange);
		font-size: 1.125rem;
		text-align: right;
	}
	
	.timeline-content {
		padding-left: 2rem;
		border-left: 3px solid #f0f0f0;
	}
	
	.timeline-content h4 {
		margin: 0 0 0.5rem 0;
		color: var(--faf-black);
	}
	
	.timeline-content p {
		margin: 0;
		color: #666;
	}
	
	.story-conclusion {
		font-size: 1.125rem;
		text-align: center;
		padding: 2rem;
		background: #f8f8f8;
		border-radius: 8px;
		margin-top: 2rem;
	}
	
	.founders-stats {
		padding: 4rem 0;
		background: var(--faf-black);
		color: white;
	}
	
	.founders-stats h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
	}
	
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 2rem;
	}
	
	.stat-card {
		text-align: center;
		padding: 2rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 12px;
		border: 2px solid var(--faf-orange);
	}
	
	.stat-number {
		font-size: 2rem;
		font-weight: 900;
		color: var(--faf-orange);
		margin-bottom: 0.5rem;
		font-family: var(--font-mono);
	}
	
	.stat-label {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.8;
	}
	
	.stats-note {
		text-align: center;
		font-style: italic;
		opacity: 0.7;
		font-size: 0.875rem;
	}
	
	.founders-testimonials {
		padding: 4rem 0;
		background: #f8f8f8;
	}
	
	.founders-testimonials h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: var(--faf-black);
	}
	
	.testimonials-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}
	
	.testimonial {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		border-left: 4px solid var(--faf-orange);
	}
	
	.testimonial p {
		font-size: 1.125rem;
		line-height: 1.6;
		margin-bottom: 1rem;
		color: var(--faf-black);
		font-style: italic;
	}
	
	.testimonial-author {
		font-size: 0.875rem;
		color: #666;
		font-weight: 600;
	}
	
	.founders-cta {
		padding: 6rem 0;
		background: linear-gradient(135deg, #fff5f0 0%, white 100%);
	}
	
	.cta-box {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}
	
	.urgency-badge {
		display: inline-block;
		background: var(--faf-green);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-weight: 700;
		margin-bottom: 2rem;
		font-size: 0.875rem;
		letter-spacing: 0.02em;
	}
	
	.founders-cta h2 {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}
	
	.cta-subtitle {
		font-size: 1.25rem;
		color: #666;
		margin-bottom: 3rem;
	}
	
	.pricing-comparison {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin-bottom: 3rem;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.price-box {
		padding: 2rem;
		background: white;
		border: 2px solid #e0e0e0;
		border-radius: 12px;
	}
	
	.price-box.featured {
		border-color: var(--faf-orange);
		background: var(--faf-orange);
		color: white;
		transform: scale(1.1);
	}
	
	.price-label {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	
	.price-value {
		font-size: 2rem;
		font-weight: 900;
		margin-bottom: 0.5rem;
	}
	
	.price-save {
		font-size: 0.875rem;
		font-weight: 600;
	}
	
	.stripe-buttons-row {
		margin: 2rem auto;
		display: flex;
		justify-content: center;
		gap: 2rem;
		max-width: 600px;
	}

	.stripe-button-wrapper {
		flex: 1;
	}

	.button-label {
		text-align: center;
		font-weight: 900;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.guarantee {
		font-size: 0.875rem;
		color: #666;
		margin-top: 2rem;
	}
	
	@media (max-width: 968px) {
		.community-grid,
		.benefits-grid,
		.stats-grid,
		.testimonials-grid {
			grid-template-columns: 1fr;
		}
		
		.timeline::before {
			left: 20px;
		}
		
		.timeline-item {
			grid-template-columns: auto 1fr;
		}
		
		.timeline-year {
			text-align: left;
			padding-left: 50px;
		}
	}
	
	@media (max-width: 600px) {
		.founders-hero h1 {
			font-size: 2.5rem;
		}
		
		.pricing-comparison {
			grid-template-columns: 1fr;
		}
		
		.price-box.featured {
			transform: none;
		}
	}
</style>