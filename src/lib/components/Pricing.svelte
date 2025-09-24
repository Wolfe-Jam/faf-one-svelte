<script>
	import { onMount } from 'svelte';
	
	let isVisible = $state(false);
	let sectionRef = $state(null);
	let timeLeft = $state({ hours: 47, minutes: 59, seconds: 59 });
	
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						isVisible = true;
					}
				});
			},
			{ threshold: 0.2 }
		);
		
		if (sectionRef) {
			observer.observe(sectionRef);
		}
		
		// Countdown timer
		const interval = setInterval(() => {
			if (timeLeft.seconds > 0) {
				timeLeft.seconds--;
			} else if (timeLeft.minutes > 0) {
				timeLeft.minutes--;
				timeLeft.seconds = 59;
			} else if (timeLeft.hours > 0) {
				timeLeft.hours--;
				timeLeft.minutes = 59;
				timeLeft.seconds = 59;
			}
		}, 1000);
		
		return () => {
			if (sectionRef) {
				observer.unobserve(sectionRef);
			}
			clearInterval(interval);
		};
	});
</script>

<section bind:this={sectionRef} class="pricing">
	<div class="container">
		<div class="content" class:visible={isVisible}>
			<div class="early-bird-banner">
				<span class="banner-icon">🔥</span>
				<span class="banner-text">Founders Pricing - Lock in Forever!</span>
				<div class="countdown">
					<span class="time">{String(timeLeft.hours).padStart(2, '0')}</span>:
					<span class="time">{String(timeLeft.minutes).padStart(2, '0')}</span>:
					<span class="time">{String(timeLeft.seconds).padStart(2, '0')}</span>
				</div>
			</div>
			
			<h2 class="section-title">Simple, Honest Pricing</h2>
			<p class="section-subtitle">
				Join now and lock in these prices forever. No surprises.
			</p>
			
			<div class="pricing-wrapper">
				<div class="pricing-grid-two">
					<!-- Pro Plan -->
					<div class="pricing-card featured">
						<div class="popular-badge">LIMITED TIME</div>
						<div class="card-header">
							<h3 class="plan-name">PRO</h3>
							<div class="price">
								<div style="display: flex; align-items: baseline; justify-content: center; gap: 0.25rem; text-decoration: line-through; opacity: 0.6;">
									<span class="currency">$</span>
									<span class="amount">100</span>
									<span style="font-size: 1.25rem; margin-left: 0.25rem;">/month</span>
								</div>
								<div style="font-size: 2rem; margin-top: 0.5rem; color: var(--faf-orange); font-weight: 900;">
									FOUNDERS: $100/year
								</div>
								<div style="font-size: 0.9rem; margin-top: 0.25rem; color: var(--faf-gray-dark);">
									(That's only $8.33/month!)
								</div>
							</div>
							<p class="plan-description">
								91% OFF - Founders Deal<br>
								<strong>GENUINE WIN/WIN</strong><br>
								<span style="color: var(--faf-orange); font-weight: 700;">VERY LIMITED - WHEN IT'S GONE IT'S GONE</span>
							</p>
						</div>
						<ul class="features">
							<li>✅ Full .faf toolkit</li>
							<li>✅ Unlimited projects</li>
							<li>✅ Context-Mirroring™</li>
							<li>✅ Eternal-Sync™ ACTIVE</li>
							<li>✅ Priority support</li>
							<li>✅ Direct creator access</li>
							<li>✅ All integrations</li>
							<li>✅ White-glove onboarding</li>
							<li>✅ 99.9% uptime SLA</li>
							<li>✅ All future updates</li>
						</ul>
						<div class="button-group">
							<div style="display: flex; flex-direction: column; gap: 1.5rem; width: 100%;">
								<!-- $20/month Black Button -->
								<div style="width: 100%;">
									<div class="stripe-button-wrapper" style="width: 100%;">
										{@html `<stripe-buy-button
											buy-button-id="buy_btn_1SAgaZRt8WbJblnRMz9XKYis"
											publishable-key="pk_live_51RsYPuRt8WbJblnRhd7gwvTqkNie5A5GhGotKYbdYj6R18PtKzDpObayQdpUQ7sjSMt4b0381Je2yyphYot6ELYR00D50NnmJt"
										></stripe-buy-button>`}
									</div>
									<div style="text-align: center; font-size: 0.9rem; font-weight: 600; color: var(--faf-gray-dark); margin-top: 0.5rem;">
										$20/month - Monthly flexibility
									</div>
								</div>

								<!-- Green FAF Delivers Box -->
								<div style="text-align: center; padding: 1rem; background: linear-gradient(135deg, #f0fff4 0%, var(--faf-white) 100%); border-radius: 8px; border: 2px solid var(--faf-green);">
									<div style="font-size: 1.25rem; font-weight: 900; color: var(--faf-black); margin-bottom: 0.5rem;">
										⚡ .FAF Delivers Instantly
									</div>
									<div style="font-size: 1rem; font-weight: 700; color: var(--faf-green);">
										GET LOCKED-IN NOW
									</div>
								</div>

								<!-- $100/year Green Button -->
								<div style="width: 100%;">
									<div class="stripe-button-wrapper" style="width: 100%;">
										{@html `<stripe-buy-button
											buy-button-id="buy_btn_1SAMYLRt8WbJblnRL4SoZiDY"
											publishable-key="pk_live_51RsYPuRt8WbJblnRhd7gwvTqkNie5A5GhGotKYbdYj6R18PtKzDpObayQdpUQ7sjSMt4b0381Je2yyphYot6ELYR00D50NnmJt"
										></stripe-buy-button>`}
									</div>
									<div style="text-align: center; font-size: 1rem; font-weight: 700; color: var(--faf-black); margin-top: 0.5rem;">
										$100 ANNUAL 🏆 SAVE $140!
									</div>
								</div>
							</div>
						</div>
						<p class="urgency-text">
							⚡ Real lock-ins • Real price bands • No BS
						</p>
					</div>
					
					<!-- Teams Plan -->
					<div class="pricing-card teams-card">
						<div class="popular-badge" style="background: var(--faf-green); border-color: var(--faf-green);">PERMANENT DEALS</div>
						<div class="card-header">
							<h3 class="plan-name">TEAMS</h3>
							<div class="price">
								<div style="display: flex; align-items: baseline; justify-content: center; gap: 0.25rem;">
									<span class="currency" style="color: var(--faf-green);">$</span>
									<span class="amount" style="color: var(--faf-green);">90</span>
									<span style="font-size: 1.25rem; margin-left: 0.25rem; color: var(--faf-green);">/month</span>
								</div>
								<div style="font-size: 1.5rem; color: var(--faf-gray-dark); margin-top: 0.5rem;">
									per member - See table below
								</div>
							</div>
							<p class="plan-description">
								Team discounts - up to 50% off
							</p>
						</div>
						<ul class="features">
							<li>✅ Everything in PRO</li>
							<li>✅ Team management</li>
							<li>✅ Centralized billing</li>
							<li>✅ Usage analytics</li>
							<li>✅ Team sync</li>
						</ul>
						<div class="team-pricing-table">
							<div style="font-weight: 700; margin-bottom: 0.5rem; text-align: center;">Team Pricing</div>
							<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.9rem; background: #f9f9f9; padding: 1rem; border-radius: 8px;">
								<div>2 members:</div><div style="text-align: right;">$90 each</div>
								<div>3 members:</div><div style="text-align: right;">$80 each</div>
								<div>5 members:</div><div style="text-align: right;">$70 each</div>
								<div>10 members:</div><div style="text-align: right;">$60 each</div>
								<div>20+ members:</div><div style="text-align: right;"><strong>$50 MAX</strong></div>
							</div>
						</div>
						<div style="margin-top: 1.5rem;">
							<a href="mailto:support@faf.one?subject=Team%20Pricing%20Request" 
							   class="btn btn-block" 
							   style="background: var(--faf-green); color: var(--faf-white); border: 2px solid var(--faf-green); padding: 0.75rem 1.5rem; font-weight: 700; font-size: 1rem; border-radius: 8px; text-decoration: none; display: block; text-align: center; transition: all 0.2s ease;">
								SECURE TEAM PRICING →
							</a>
						</div>
					</div>
				</div>
				
				<!-- Enterprise Plan -->
				<div class="pricing-card enterprise-card">
					<div class="enterprise-content">
						<div class="enterprise-left">
							<h3 class="plan-name">ENTERPRISE</h3>
							<p class="plan-description">Custom solutions for organizations that need proven reliability at scale</p>
						</div>
						<div class="enterprise-features">
							<ul>
								<li>✓ Everything in TEAMS</li>
								<li>✓ Custom contracts</li>
								<li>✓ SLA guarantees</li>
							</ul>
							<ul>
								<li>✓ On-premise option</li>
								<li>✓ Dedicated support</li>
								<li>✓ Training included</li>
							</ul>
						</div>
						<div class="enterprise-cta">
							<button class="btn btn-ghost">Contact Sales</button>
						</div>
					</div>
				</div>
			</div>
			
			<div class="guarantee">
				<span class="guarantee-icon">🛡️</span>
				<div class="guarantee-text">
					<h4>30-Day Money Back Guarantee</h4>
					<p>Try it risk-free. If .faf doesn't improve your workflow, we'll refund you. No questions asked.</p>
				</div>
			</div>
			
			<div class="roi-calculator">
				<h3>ROI Calculator</h3>
				<p>Use your own calculator.</p>
				<p>IF average tech cost is <span class="highlight">$100 per hour</span>.</p>
				<p>We charge <span class="highlight">$100 per month</span>.</p>
				<p style="font-weight: 700; margin-top: 1rem;">What else do you want us to do!? ⚡️🏁</p>
			</div>
		</div>
	</div>
</section>

<style>
	.pricing {
		padding: 5rem 0;
		background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%);
	}
	
	.content {
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease-out;
	}
	
	.content.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	.early-bird-banner {
		background: var(--faf-orange);
		color: var(--faf-white);
		padding: 1rem 2rem;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 3rem;
		font-weight: 600;
		animation: pulse 2s ease-in-out infinite;
	}
	
	.banner-icon {
		font-size: 1.5rem;
	}
	
	.countdown {
		font-family: var(--font-mono);
		font-size: 1.25rem;
		margin-left: auto;
	}
	
	.time {
		background: rgba(255, 255, 255, 0.2);
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
	}
	
	.section-title {
		text-align: center;
		margin-bottom: 1rem;
	}
	
	.section-subtitle {
		text-align: center;
		color: var(--faf-gray-dark);
		font-size: 1.25rem;
		margin-bottom: 3rem;
	}
	
	.pricing-wrapper {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.pricing-grid-two {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
		align-items: start;
	}
	
	.pricing-grid-two .pricing-card {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	
	
	.pricing-card {
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 16px;
		padding: 2rem;
		position: relative;
		transition: all 0.3s ease;
	}
	
	.pricing-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
	}
	
	.pricing-card.featured {
		border-color: var(--faf-orange);
		box-shadow: 0 0 0 2px var(--faf-orange);
		transition: all 0.3s ease;
	}
	
	.pricing-card.featured:hover {
		transform: translateY(-5px);
		box-shadow: 0 0 0 2px var(--faf-orange), 0 20px 40px rgba(255, 107, 53, 0.2);
	}
	
	.popular-badge {
		position: absolute;
		top: -15px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--faf-orange);
		color: var(--faf-white);
		padding: 0.5rem 1rem;
		border-radius: 999px;
		font-size: 0.875rem;
		font-weight: 600;
	}
	
	.card-header {
		text-align: center;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--faf-gray-medium);
	}
	
	.plan-name {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}
	
	.price {
		text-align: center;
		margin-bottom: 1rem;
	}
	
	.currency {
		font-size: 1.5rem;
		color: var(--faf-gray-dark);
	}
	
	.amount {
		font-size: 4rem;
		font-weight: 900;
		color: var(--faf-black);
		line-height: 1;
	}
	
	.period {
		color: var(--faf-gray-dark);
		font-size: 1rem;
	}
	
	.original-price {
		text-decoration: line-through;
		color: var(--faf-gray-dark);
		font-size: 1.5rem;
		margin-right: 0.5rem;
	}
	
	.plan-description {
		color: var(--faf-gray-dark);
		font-size: 0.875rem;
	}
	
	.savings-badge {
		background: var(--faf-green);
		color: var(--faf-white);
		padding: 0.5rem 1rem;
		border-radius: 999px;
		font-size: 0.875rem;
		font-weight: 600;
		display: inline-block;
		margin-top: 1rem;
	}
	
	.features {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem;
		flex-grow: 1;
	}
	
	.features li {
		padding: 0.75rem 0;
		color: var(--faf-gray-dark);
		border-bottom: 1px solid var(--faf-gray-light);
	}
	
	.features li:last-child {
		border-bottom: none;
	}
	
	.btn-block {
		width: 100%;
		padding: 1rem;
	}
	
	.urgency-text {
		text-align: center;
		color: var(--faf-orange);
		font-size: 0.875rem;
		font-weight: 600;
		margin-top: 1rem;
	}
	
	.button-group {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 1rem;
	}
	
	.divider-text {
		text-align: center;
		color: var(--faf-gray-dark);
		font-size: 0.875rem;
		font-weight: 600;
		margin: 0.25rem 0;
		opacity: 0.7;
	}
	
	.btn-block {
		width: 100%;
		text-align: center;
		display: block;
		text-decoration: none;
	}
	
	.btn-secondary {
		background: var(--faf-white);
		color: var(--faf-black);
		border: 2px solid var(--faf-black);
		padding: 0.75rem 1.5rem;
		font-weight: 600;
		font-size: 1rem;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.2s ease;
	}
	
	.btn-secondary:hover {
		background: var(--faf-black);
		color: var(--faf-white);
		transform: translateY(-2px);
	}

	.legends-button {
		display: block;
		width: 100%;
		padding: 1.2rem 2rem;
		background: linear-gradient(135deg, var(--faf-orange) 0%, #ff8c42 100%);
		color: var(--faf-white);
		text-decoration: none;
		border-radius: 8px;
		font-weight: 900;
		font-size: 1.3rem;
		text-align: center;
		transition: all 0.3s ease;
		box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3);
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.legends-button:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
		background: linear-gradient(135deg, #ff8c42 0%, var(--faf-orange) 100%);
	}
	
	.stripe-button-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	
	.stripe-button-wrapper :global(stripe-buy-button) {
		display: block;
		margin: 0 auto;
	}
	
	.teams-card {
		border-color: var(--faf-green);
		box-shadow: 0 0 0 2px var(--faf-green);
	}
	
	.teams-card .card-header {
		background: linear-gradient(135deg, #f0fff4 0%, #e6ffed 100%);
	}
	
	.team-pricing-table {
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--faf-gray-light);
	}
	
	.enterprise-card {
		background: var(--faf-black);
		color: var(--faf-white);
		border-color: var(--faf-black);
		padding: 2rem;
	}
	
	.enterprise-content {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		gap: 2rem;
		align-items: center;
	}
	
	.enterprise-left h3 {
		color: var(--faf-white);
		margin-bottom: 0.5rem;
	}
	
	.enterprise-left p {
		color: var(--faf-gray-light);
		font-size: 0.9rem;
	}
	
	.enterprise-features {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}
	
	.enterprise-features ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	
	.enterprise-features li {
		color: var(--faf-white);
		padding: 0.5rem 0;
		font-size: 0.9rem;
	}
	
	.enterprise-cta {
		text-align: right;
	}
	
	.enterprise-card .btn-ghost {
		background: var(--faf-white);
		color: var(--faf-black);
		border: 2px solid var(--faf-white);
	}
	
	.enterprise-card .btn-ghost:hover {
		background: transparent;
		color: var(--faf-white);
	}
	
	.guarantee {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 12px;
		padding: 2rem;
		max-width: 800px;
		margin: 3rem auto;
	}
	
	.guarantee-icon {
		font-size: 3rem;
	}
	
	.guarantee-text h4 {
		margin-bottom: 0.5rem;
	}
	
	.guarantee-text p {
		color: var(--faf-gray-dark);
		margin: 0;
	}
	
	.roi-calculator {
		text-align: center;
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 12px;
		padding: 2rem;
		max-width: 600px;
		margin: 0 auto;
	}
	
	.roi-calculator h3 {
		margin-bottom: 1rem;
	}
	
	.roi-calculator p {
		color: var(--faf-gray-dark);
		margin: 0.5rem 0;
	}
	
	.highlight {
		color: var(--faf-orange);
		font-weight: 700;
		font-size: 1.25rem;
	}
	
	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.02); }
	}
	
	@media (max-width: 768px) {
		.pricing-grid-two {
			grid-template-columns: 1fr;
		}
		
		.pricing-card.featured {
			transform: none;
		}
		
		.early-bird-banner {
			flex-direction: column;
			text-align: center;
		}
		
		.countdown {
			margin-left: 0;
		}
		
		.enterprise-content {
			grid-template-columns: 1fr;
			text-align: center;
		}
		
		.enterprise-features {
			grid-template-columns: 1fr;
		}
		
		.enterprise-cta {
			text-align: center;
		}
	}
</style>