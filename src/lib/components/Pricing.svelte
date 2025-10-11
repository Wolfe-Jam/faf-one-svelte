<script>
	import { onMount } from 'svelte';

	let isVisible = $state(false);
	let sectionRef = $state(null);

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

		return () => {
			if (sectionRef) {
				observer.unobserve(sectionRef);
			}
		};
	});
</script>

<section bind:this={sectionRef} id="pricing" class="pricing">
	<div class="container">
		<div class="content" class:visible={isVisible}>
			<h2 class="section-title">Built on Trust, Not Hype</h2>
			<p class="section-subtitle">
				The CLI is free for all developers.<br/>
				Premium features and Teams coming soon, when they're championship-ready.<br/>
				We have Enterprise Ready features to test with ANY Enterprise who wants dive in!
			</p>

			<div class="pricing-wrapper">
				<div class="pricing-grid">
					<!-- FOUNDERS - Orange -->
					<div class="pricing-card founders-card">
						<div class="coming-badge orange-badge">LOCK IN NOW</div>
						<div class="card-header">
							<h3 class="plan-name">CLI + TURBO</h3>
							<div class="price-display">
								<div class="price-original-large">
									<span class="currency">$</span>
									<span class="amount">30</span>
									<span class="period">/month</span>
								</div>
								<div class="savings-banner">
									<div class="savings-text">SAVE $20 • 66.66% OFF</div>
								</div>
								<div class="price-final">
									<div class="only-text">ONLY</div>
									<div class="final-amount">$10<span class="per-month">/month</span></div>
									<div class="code-instruction">🏎️💨 Use code <strong>FAST</strong> at checkout</div>
								</div>
								<div class="founders-lock">🔒 Lock in this rate forever</div>
							</div>
							<p class="plan-description">
								Free CLI always. Add Turbo for first release access + premium features.
							</p>
							<p class="plan-description">
								<strong>$100 ANNUAL - Be a Legend &<br/>Support the Founder</strong>
							</p>
						</div>
						<div class="features-header">
							<h4>What You Get:</h4>
						</div>
						<ul class="features">
							<li>⚡️ First release access</li>
							<li>⚡️ Stack-check analyzer</li>
							<li>⚡️ Project Orientation AI</li>
							<li>⚡️ Build Turbo performance</li>
							<li>⚡️ Priority support</li>
							<li>⚡️ Direct creator access</li>
						</ul>
						<div class="button-group">
							<!-- Monthly Option -->
							<div class="stripe-button-wrapper">
								{@html `<stripe-buy-button
									buy-button-id="buy_btn_1SGkyGRt8WbJblnRCVgSF8JY"
									publishable-key="pk_live_51RsYPuRt8WbJblnRhd7gwvTqkNie5A5GhGotKYbdYj6R18PtKzDpObayQdpUQ7sjSMt4b0381Je2yyphYot6ELYR00D50NnmJt"
								></stripe-buy-button>`}
							</div>

							<div class="divider-text">or</div>

							<!-- Annual LEGENDS Option -->
							<div class="legends-option">
								<div class="legends-header">
									<span class="legends-badge">🏆 LEGENDS</span>
									<span class="legends-price">$100/year</span>
								</div>
								<p class="legends-description">
									Be a Legend & Support the Founder<br/>
									Get TURBO package + Thank You<br/>
									+ 🏆 Legend badge
								</p>
								<div class="stripe-button-wrapper">
									{@html `<stripe-buy-button
										buy-button-id="buy_btn_1SAMYLRt8WbJblnRL4SoZiDY"
										publishable-key="pk_live_51RsYPuRt8WbJblnRhd7gwvTqkNie5A5GhGotKYbdYj6R18PtKzDpObayQdpUQ7sjSMt4b0381Je2yyphYot6ELYR00D50NnmJt"
									></stripe-buy-button>`}
								</div>
							</div>
						</div>
					</div>

					<!-- TEAMS - Green -->
					<div class="pricing-card teams-card">
						<div class="coming-badge green-badge">LOCK IN NOW</div>
						<div class="card-header">
							<h3 class="plan-name">TEAMS (up to 5)</h3>
							<div class="price-display">
								<div class="price">
									<span class="currency">$</span>
									<span class="amount">29</span>
									<span class="period">/month</span>
								</div>
								<div class="founders-lock">🔒 Lock in this rate forever</div>
							</div>
							<p class="plan-description">
								Boss? This is for you. Cloud sharing like Vercel, coming soon.
							</p>
						</div>
						<ul class="features">
							<li>✅ Everything in CLI + TURBO</li>
							<li>✅ Up to 5 Turbos</li>
							<li>✅ Team management</li>
							<li>✅ Centralized billing</li>
							<li>🔜 Cloud sharing (Vercel-style)</li>
							<li>🔜 Usage analytics</li>
						</ul>
						<div class="button-group">
							<!-- Monthly Option -->
							<div class="stripe-button-wrapper">
								{@html `<stripe-buy-button
									buy-button-id="buy_btn_1SF3YgRt8WbJblnRNiM7wqwk"
									publishable-key="pk_live_51RsYPuRt8WbJblnRhd7gwvTqkNie5A5GhGotKYbdYj6R18PtKzDpObayQdpUQ7sjSMt4b0381Je2yyphYot6ELYR00D50NnmJt"
								></stripe-buy-button>`}
							</div>

							<div class="divider-text">or</div>

							<!-- Annual LEGENDS Option -->
							<div class="legends-option legends-green">
								<div class="legends-header">
									<span class="legends-badge">🏆 LEGENDS TEAM</span>
									<span class="legends-price">$300/year</span>
								</div>
								<p class="legends-description">
									Be a Legend & Support the Team<br/>
									Get TEAMS package + Thank You<br/>
									+ 🏆 Legend Team badge
								</p>
								<div class="stripe-button-wrapper">
									{@html `<stripe-buy-button
										buy-button-id="buy_btn_1SF3IVRt8WbJblnRbHaGcaZo"
										publishable-key="pk_live_51RsYPuRt8WbJblnRhd7gwvTqkNie5A5GhGotKYbdYj6R18PtKzDpObayQdpUQ7sjSMt4b0381Je2yyphYot6ELYR00D50NnmJt"
									></stripe-buy-button>`}
								</div>
							</div>
						</div>
					</div>

					<!-- ENTERPRISE - Black -->
					<div class="pricing-card enterprise-card">
						<div class="coming-badge black-badge">PIONEERS ONLY</div>
						<div class="card-header">
							<h3 class="plan-name">ENTERPRISE</h3>
							<div class="price-display">
								<div class="price">
									<span class="amount" style="font-size: 3rem;">$REWARD</span>
								</div>
								<div class="founders-lock">Enterprises who grow with us will be rewarded. Get in touch to be 1st</div>
							</div>
							<p class="plan-description">
								Custom solutions for organizations at scale
							</p>
						</div>
						<ul class="features">
							<li>✅ Everything in TEAMS</li>
							<li>✅ Custom contracts</li>
							<li>✅ SLA guarantees</li>
							<li>✅ On-premise option</li>
							<li>✅ Dedicated support</li>
							<li>✅ Training included</li>
						</ul>
						<div class="button-group">
							<a href="mailto:enterprise@faf.one?subject=Enterprise%20Inquiry" class="btn btn-white">
								Contact Sales →
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="trust-message">
				<h3>Why We're Taking Our Time</h3>
				<div class="trust-grid">
					<div class="trust-item">
						<div class="trust-icon">🏆</div>
						<h4>Championship Standards</h4>
						<p>We won't launch premium features until they meet the same quality bar as our open-source tools</p>
					</div>
					<div class="trust-item">
						<div class="trust-icon">🧡</div>
						<h4>Trust-Driven Development</h4>
						<p>Every feature will be tested, validated, and proven before we ask you to pay for it</p>
					</div>
					<div class="trust-item">
						<div class="trust-icon">⚡️</div>
						<h4>CLI Always Free</h4>
						<p>The core .faf CLI will always be free for all developers</p>
					</div>
				</div>
			</div>

			<div class="cta-box">
				<h3>Get Started Now</h3>
				<p>The CLI has everything you need today. Premium features when they're ready.</p>
				<a href="https://www.npmjs.com/package/faf-cli" class="btn btn-primary" target="_blank">
					Install FAF CLI →
				</a>
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

	.section-title {
		text-align: center;
		margin-bottom: 1rem;
		font-size: 2.5rem;
	}

	.section-subtitle {
		text-align: center;
		color: var(--faf-gray-dark);
		font-size: 1.25rem;
		margin-bottom: 3rem;
	}

	.support-message {
		text-align: center;
		max-width: 800px;
		margin: 0 auto 4rem;
		padding: 2rem;
		background: var(--faf-white);
		border-radius: 12px;
		border: 2px solid var(--faf-gray-light);
	}

	.support-message h3 {
		font-size: 1.75rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.support-message p {
		color: var(--faf-gray-dark);
		font-size: 1.125rem;
		line-height: 1.6;
		margin: 0.75rem 0;
	}

	.rally-text {
		margin-top: 1.5rem;
		font-size: 1.25rem;
		color: var(--faf-black);
	}

	.rally-text strong {
		color: var(--faf-orange);
	}

	.pricing-options {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 1rem 0 !important;
	}

	.pricing-wrapper {
		max-width: 1200px;
		margin: 0 auto;
	}

	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.pricing-card {
		border-radius: 16px;
		padding: 2rem;
		position: relative;
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		border: 2px solid;
	}

	.pricing-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
	}

	/* Founders - Orange */
	.founders-card {
		background: var(--faf-orange);
		border-color: var(--faf-orange);
		color: var(--faf-white);
	}

	.founders-card:hover {
		box-shadow: 0 20px 40px rgba(255, 107, 53, 0.3);
	}

	.founders-card .features li {
		color: var(--faf-white);
		border-bottom-color: rgba(255, 255, 255, 0.2);
	}

	.founders-card .plan-description {
		color: var(--faf-white);
	}

	.founders-card .plan-name {
		color: var(--faf-white);
	}

	.founders-card .card-header {
		border-bottom-color: rgba(255, 255, 255, 0.2);
	}

	.orange-badge {
		background: var(--faf-white);
		color: var(--faf-orange);
		border: 2px solid var(--faf-orange);
	}

	.orange-text {
		color: var(--faf-white);
	}

	/* Teams - Green */
	.teams-card {
		background: var(--faf-green);
		border-color: var(--faf-green);
		color: var(--faf-white);
	}

	.teams-card:hover {
		box-shadow: 0 20px 40px rgba(76, 175, 80, 0.3);
	}

	.teams-card .features li {
		color: var(--faf-white);
		border-bottom-color: rgba(255, 255, 255, 0.2);
	}

	.teams-card .plan-description {
		color: var(--faf-white);
	}

	.teams-card .plan-name {
		color: var(--faf-white);
	}

	.teams-card .card-header {
		border-bottom-color: rgba(255, 255, 255, 0.2);
	}

	.green-badge {
		background: var(--faf-white);
		color: var(--faf-green);
		border: 2px solid var(--faf-green);
	}

	.green-text {
		color: var(--faf-white);
	}

	/* Enterprise - Black */
	.enterprise-card {
		background: var(--faf-black);
		border-color: var(--faf-black);
		color: var(--faf-white);
	}

	.enterprise-card:hover {
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
	}

	.enterprise-card .features li {
		color: var(--faf-white);
		border-bottom-color: rgba(255, 255, 255, 0.2);
	}

	.enterprise-card .plan-description {
		color: var(--faf-gray-light);
	}

	.black-badge {
		background: var(--faf-white);
		color: var(--faf-black);
		border: 2px solid var(--faf-black);
	}

	.white-text {
		color: var(--faf-white);
	}

	.coming-badge {
		position: absolute;
		top: -15px;
		left: 50%;
		transform: translateX(-50%);
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

	.enterprise-card .card-header {
		border-bottom-color: rgba(255, 255, 255, 0.2);
	}

	.plan-name {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.enterprise-card .plan-name {
		color: var(--faf-white);
	}

	.price-display {
		margin: 1.5rem 0;
	}

	/* Original Price - Strikethrough */
	.price-original-large {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: 0.25rem;
		text-decoration: line-through;
		opacity: 0.6;
		margin-bottom: 0.5rem;
	}

	.price-original-large .currency {
		font-size: 1rem;
		color: var(--faf-white);
	}

	.price-original-large .amount {
		font-size: 2rem;
		font-weight: 700;
		color: var(--faf-white);
		line-height: 1;
	}

	.price-original-large .period {
		font-size: 0.875rem;
		color: var(--faf-white);
	}

	/* Savings Banner */
	.savings-banner {
		background: var(--faf-white);
		color: var(--faf-orange);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		margin: 0.75rem auto;
		display: inline-block;
		width: fit-content;
	}

	.savings-text {
		font-size: 1rem;
		font-weight: 900;
		letter-spacing: 0.5px;
	}

	/* Final Price - Prominent */
	.price-final {
		margin: 1rem 0;
	}

	.only-text {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--faf-white);
		letter-spacing: 1px;
		margin-bottom: 0.25rem;
	}

	.final-amount {
		font-size: 4rem;
		font-weight: 900;
		color: var(--faf-white);
		line-height: 1;
		margin-bottom: 0.5rem;
	}

	.per-month {
		font-size: 1.25rem;
		font-weight: 600;
		margin-left: 0.25rem;
	}

	.code-instruction {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--faf-white);
		margin-top: 0.75rem;
		background: rgba(255, 255, 255, 0.15);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		display: inline-block;
	}

	.code-instruction strong {
		font-size: 1.3rem;
		letter-spacing: 2px;
		text-decoration: underline;
	}

	.price {
		display: flex;
		align-items: baseline;
		justify-content: center;
		gap: 0.25rem;
	}

	.currency {
		font-size: 1.5rem;
		color: var(--faf-white);
	}

	.amount {
		font-size: 4rem;
		font-weight: 900;
		color: var(--faf-white);
		line-height: 1;
	}

	.period {
		font-size: 1.25rem;
		color: var(--faf-white);
	}

	.founders-lock {
		margin-top: 0.75rem;
		font-size: 0.9rem;
		color: var(--faf-white);
		opacity: 0.9;
	}

	.coming-text {
		font-size: 1.5rem;
		font-weight: 700;
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

	.divider-text {
		text-align: center;
		color: var(--faf-white);
		font-size: 0.875rem;
		font-weight: 600;
		margin: 1rem 0;
		opacity: 0.7;
	}

	.legends-option {
		background: rgba(255, 255, 255, 0.1);
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-radius: 8px;
		padding: 1rem;
		margin-top: 1rem;
	}

	.legends-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.75rem;
	}

	.legends-badge {
		font-size: 1rem;
		font-weight: 700;
		color: var(--faf-white);
	}

	.legends-price {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--faf-white);
	}

	.legends-description {
		font-size: 0.875rem;
		color: var(--faf-white);
		margin-bottom: 1rem;
		text-align: center;
		line-height: 1.5;
	}

	.plan-description {
		color: var(--faf-gray-dark);
		font-size: 0.875rem;
	}

	.features-header {
		text-align: center;
		margin: 1.5rem 0 1rem;
		padding: 0.75rem;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 8px;
	}

	.features-header h4 {
		margin: 0;
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--faf-white);
		letter-spacing: 0.5px;
		text-transform: uppercase;
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

	.button-group {
		margin-top: auto;
	}

	.btn {
		display: block;
		width: 100%;
		padding: 1rem;
		text-align: center;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 700;
		transition: all 0.2s ease;
		border: 2px solid;
	}

	.btn-orange {
		background: var(--faf-white);
		color: var(--faf-orange);
		border-color: var(--faf-white);
	}

	.btn-orange:hover {
		background: transparent;
		color: var(--faf-white);
		border-color: var(--faf-white);
	}

	.btn-green {
		background: var(--faf-white);
		color: var(--faf-green);
		border-color: var(--faf-white);
	}

	.btn-green:hover {
		background: transparent;
		color: var(--faf-white);
		border-color: var(--faf-white);
	}

	.btn-white {
		background: var(--faf-white);
		color: var(--faf-black);
		border-color: var(--faf-white);
	}

	.btn-white:hover {
		background: transparent;
		color: var(--faf-white);
		border-color: var(--faf-white);
	}

	.trust-message {
		margin: 4rem 0 3rem;
		text-align: center;
	}

	.trust-message h3 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	.trust-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	.trust-item {
		background: var(--faf-white);
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid var(--faf-gray-light);
	}

	.trust-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.trust-item h4 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
	}

	.trust-item p {
		color: var(--faf-gray-dark);
		font-size: 0.9rem;
		margin: 0;
	}

	.cta-box {
		text-align: center;
		background: var(--faf-white);
		border: 2px solid var(--faf-orange);
		border-radius: 12px;
		padding: 3rem 2rem;
		max-width: 600px;
		margin: 0 auto;
	}

	.cta-box h3 {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.cta-box p {
		color: var(--faf-gray-dark);
		font-size: 1.125rem;
		margin-bottom: 2rem;
	}

	.btn-primary {
		background: var(--faf-orange);
		color: var(--faf-white);
		border: 2px solid var(--faf-orange);
		display: inline-block;
		padding: 1rem 2rem;
		font-size: 1.125rem;
	}

	.btn-primary:hover {
		background: var(--faf-white);
		color: var(--faf-orange);
	}

	@media (max-width: 968px) {
		.pricing-grid {
			grid-template-columns: 1fr;
		}

		.trust-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
