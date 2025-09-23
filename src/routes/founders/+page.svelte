<script>
	import { onMount } from 'svelte';
	
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
	<title>Founders Circle - .faf Format</title>
	<meta name="description" content="Join the .faf Founders Circle - lock in $100/year forever (91% off regular pricing)">
	<script async src="https://js.stripe.com/v3/buy-button.js"></script>
</svelte:head>

<div class="founders-hero">
	<div class="container">
		<div class="hero-badge">🏆 FOUNDERS CIRCLE</div>
		<h1>Be Part of History</h1>
		<p class="hero-subtitle">
			Lock in <span class="highlight">$100/year forever</span> while others pay $100/month
		</p>
		<div class="spots-counter">
			<div class="spots-number">{spotsRemaining}</div>
			<div class="spots-label">Spots Remaining</div>
		</div>
	</div>
</div>

<section class="founders-benefits">
	<div class="container">
		<h2>🧡 Founders Benefits</h2>
		<div class="benefits-grid">
			<div class="benefit-card">
				<div class="benefit-icon">💰</div>
				<h3>91% OFF Forever</h3>
				<p>$100/year locked in for life<br/>Never pay the regular $100/month</p>
			</div>
			
			<div class="benefit-card">
				<div class="benefit-icon">🔒</div>
				<h3>Price Protection</h3>
				<p>Your rate never increases<br/>Guaranteed forever pricing</p>
			</div>
			
			<div class="benefit-card">
				<div class="benefit-icon">⚡</div>
				<h3>Priority Support</h3>
				<p>Direct access to the team<br/>Fastest response times</p>
			</div>
			
			<div class="benefit-card">
				<div class="benefit-icon">🎯</div>
				<h3>Early Access</h3>
				<p>First to get new features<br/>Beta access to everything</p>
			</div>
			
			<div class="benefit-card">
				<div class="benefit-icon">🏅</div>
				<h3>Founders Badge</h3>
				<p>Recognition in our community<br/>Special Founders status</p>
			</div>
			
			<div class="benefit-card">
				<div class="benefit-icon">🗳️</div>
				<h3>Feature Voting</h3>
				<p>Shape the product roadmap<br/>Your voice matters most</p>
			</div>
		</div>
	</div>
</section>

<section class="founders-story">
	<div class="container">
		<div class="story-content">
			<h2>The .faf Story</h2>
			<p class="story-lead">
				From .iff on the Commodore Amiga to .faf - The JPEG for AI™
			</p>
			
			<div class="timeline">
				<div class="timeline-item">
					<div class="timeline-year">1985</div>
					<div class="timeline-content">
						<h4>The Beginning</h4>
						<p>Started with .iff format on Commodore Amiga - learning how formats shape technology</p>
					</div>
				</div>
				
				<div class="timeline-item">
					<div class="timeline-year">1990s</div>
					<div class="timeline-content">
						<h4>Carpet Industry</h4>
						<p>Developed complex color and simulation formats for industrial applications</p>
					</div>
				</div>
				
				<div class="timeline-item">
					<div class="timeline-year">2020s</div>
					<div class="timeline-content">
						<h4>AI Revolution</h4>
						<p>Recognized the context problem - AI needs a standard format like images got JPEG</p>
					</div>
				</div>
				
				<div class="timeline-item">
					<div class="timeline-year">2024</div>
					<div class="timeline-content">
						<h4>.faf Launch</h4>
						<p>MCP approved by Anthropic, Chrome Extension live, 10,000+ projects tested</p>
					</div>
				</div>
			</div>
			
			<p class="story-conclusion">
				<strong>This isn't just another tool.</strong> This is THE format standard for AI - 
				built on 40 years of format expertise and thousands of hours of development.
			</p>
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
		<h2>Early Adopters</h2>
		<div class="testimonials-grid">
			<div class="testimonial">
				<p>"Finally, someone solved the context problem properly. This is what we've been waiting for."</p>
				<div class="testimonial-author">- Senior Developer, Fortune 500</div>
			</div>
			
			<div class="testimonial">
				<p>"The 20 minutes to 3 minutes isn't marketing - it's literally what happens. Game changer."</p>
				<div class="testimonial-author">- AI Team Lead, Startup</div>
			</div>
			
			<div class="testimonial">
				<p>"MCP approved, Chrome Extension ready, everything just works. This is championship stuff."</p>
				<div class="testimonial-author">- Technical Architect</div>
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
			
			<h2>Lock In Your Founders Rate Now</h2>
			<p class="cta-subtitle">
				Only {spotsRemaining} spots remaining • {countdown}
			</p>
			
			<div class="pricing-comparison">
				<div class="price-box">
					<div class="price-label">Regular Price</div>
					<div class="price-value strike">$100/month</div>
				</div>
				<div class="price-box featured">
					<div class="price-label">Founders Price</div>
					<div class="price-value">$100/year</div>
					<div class="price-save">Save $1,100/year</div>
				</div>
			</div>
			
			<div class="stripe-button-container">
				{@html `<stripe-buy-button
					buy-button-id="buy_btn_1SAMYLRt8WbJblnRL4SoZiDY"
					publishable-key="pk_live_51RsYPuRt8WbJblnRhd7gwvTqkNie5A5GhGotKYbdYj6R18PtKzDpObayQdpUQ7sjSMt4b0381Je2yyphYot6ELYR00D50NnmJt"
				></stripe-buy-button>`}
			</div>
			
			<p class="guarantee">
				☑️ 30-day money-back guarantee • ☑️ Cancel anytime • ☑️ Instant access
			</p>
		</div>
	</div>
</section>

<style>
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
	
	.spots-counter {
		display: inline-block;
		background: white;
		color: var(--faf-black);
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.2);
	}
	
	.spots-number {
		font-size: 3rem;
		font-weight: 900;
		color: var(--faf-orange);
		line-height: 1;
		margin-bottom: 0.5rem;
	}
	
	.spots-label {
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 700;
		font-size: 0.875rem;
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
	
	.price-value.strike {
		text-decoration: line-through;
		opacity: 0.5;
	}
	
	.price-save {
		font-size: 0.875rem;
		font-weight: 600;
	}
	
	.stripe-button-container {
		margin: 2rem 0;
		display: flex;
		justify-content: center;
	}
	
	.guarantee {
		font-size: 0.875rem;
		color: #666;
		margin-top: 2rem;
	}
	
	@media (max-width: 968px) {
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