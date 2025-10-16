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

<section bind:this={sectionRef} class="ai-automation">
	<div class="container">
		<div class="content" class:visible={isVisible}>
			<div class="header-section">
				<h2 class="section-title">n8n Workflows Are Powerful</h2>
				<p class="section-subtitle">
					But <strong>AI can't read them.</strong>
				</p>
				<p class="section-tagline">
					.faf makes n8n workflows AI-native.
				</p>
			</div>

			<div class="comparison-grid">
				<div class="comparison-column">
					<div class="column-header before">
						<h3>Before .faf</h3>
						<div class="column-label">n8n JSON</div>
					</div>
					<div class="comparison-content">
						<div class="code-block">
							<pre><code>{`{
  "nodes": [
    {
      "id": "8a4d5c6e",
      "type": "httpRequest",
      "parameters": {...}
    }
  ]
}`}</code></pre>
						</div>
						<div class="comparison-issues">
							<div class="issue-item">
								<span class="issue-icon">❌</span>
								<span class="issue-text">AI can't help</span>
							</div>
							<div class="issue-item">
								<span class="issue-icon">❌</span>
								<span class="issue-text">No search</span>
							</div>
							<div class="issue-item">
								<span class="issue-icon">❌</span>
								<span class="issue-text">Vague errors</span>
							</div>
							<div class="issue-item">
								<span class="issue-icon">❌</span>
								<span class="issue-text">Manual docs</span>
							</div>
						</div>
					</div>
				</div>

				<div class="comparison-arrow">
					<div class="arrow-symbol">→</div>
					<div class="arrow-text">.faf</div>
				</div>

				<div class="comparison-column">
					<div class="column-header after">
						<h3>After .faf</h3>
						<div class="column-label">.faf Universal Format</div>
					</div>
					<div class="comparison-content">
						<div class="code-block">
							<pre><code>{`# .faf - AI-Readable
project:
  name: "customer-onboarding"
  platform: "n8n"

context:
  purpose: "Stripe → User → Email"
  triggers: ["stripe-webhook"]

automation:
  nodes: [...]`}</code></pre>
						</div>
						<div class="comparison-benefits">
							<div class="benefit-item">
								<span class="benefit-icon">✅</span>
								<span class="benefit-text">AI understands</span>
							</div>
							<div class="benefit-item">
								<span class="benefit-icon">✅</span>
								<span class="benefit-text">Instant search</span>
							</div>
							<div class="benefit-item">
								<span class="benefit-icon">✅</span>
								<span class="benefit-text">Smart debugging</span>
							</div>
							<div class="benefit-item">
								<span class="benefit-icon">✅</span>
								<span class="benefit-text">Auto-generated docs</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="n8n-quote">
				<div class="quote-icon">"</div>
				<p class="quote-text">
					While n8n can integrate with AI services, it <strong>lacks native AI understanding.</strong>
				</p>
				<p class="quote-source">— n8n Review, 2025</p>
				<p class="quote-solution">.faf solves this.</p>
			</div>

			<div class="value-props">
				<div class="value-card">
					<div class="value-icon">⚡️</div>
					<h4 class="value-title">85% Faster Debugging</h4>
					<p class="value-description">
						AI reads your .faf workflows and helps diagnose issues instantly. No more 2AM guesswork.
					</p>
				</div>
				<div class="value-card">
					<div class="value-icon">🔍</div>
					<h4 class="value-title">Cross-Workflow Search</h4>
					<p class="value-description">
						"Which workflows use Stripe?" Get instant answers across all your n8n automations.
					</p>
				</div>
				<div class="value-card">
					<div class="value-icon">📚</div>
					<h4 class="value-title">Onboarding: Weeks → Days</h4>
					<p class="value-description">
						AI explains workflows to new team members. No more 45-minute manual explanations.
					</p>
				</div>
				<div class="value-card">
					<div class="value-icon">🤖</div>
					<h4 class="value-title">Always-Current Documentation</h4>
					<p class="value-description">
						The .faf file IS the documentation. Generated from source, never out of date.
					</p>
				</div>
			</div>

			<div class="platform-support">
				<p class="platform-label">Also works with:</p>
				<div class="platform-tags">
					<span class="platform-tag">Make.com</span>
					<span class="platform-tag">OpenAI Assistants</span>
					<span class="platform-tag">Google Opal</span>
					<span class="platform-tag">Zapier</span>
					<span class="platform-tag">+ more</span>
				</div>
				<p class="platform-note">Universal format. One standard. Any automation platform.</p>
			</div>

			<div class="availability">
				<div class="availability-badge">
					<span class="badge-icon">⚡️</span>
					<span class="badge-text">NOW AVAILABLE</span>
				</div>
				<h3 class="availability-title">TURBO for n8n</h3>
				<p class="availability-description">
					Convert your n8n workflows to AI-readable .faf format in seconds.<br/>
					Server-side processing. Secure. Fast.
				</p>
				<div class="availability-cta">
					<a href="/automation-calculator" class="btn-calculator">
						Calculate Your Savings →
					</a>
					<a href="#pricing" class="btn-primary">
						Get TURBO for $10/month →
					</a>
					<p class="cta-subtext">Lock in $10/month forever with code <strong>FAST</strong></p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.ai-automation {
		padding: 5rem 0;
		background: linear-gradient(180deg, var(--faf-white) 0%, var(--faf-cream) 100%);
		position: relative;
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

	.header-section {
		text-align: center;
		margin-bottom: 4rem;
	}

	.section-title {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 900;
		letter-spacing: -0.02em;
		color: var(--faf-black);
		margin-bottom: 1rem;
	}

	.section-subtitle {
		font-size: 2rem;
		color: var(--faf-gray-dark);
		line-height: 1.4;
		margin-bottom: 1rem;
	}

	.section-subtitle strong {
		color: #FF6B35;
	}

	.section-tagline {
		font-size: 1.5rem;
		color: #019193;
		font-weight: 700;
		margin-top: 1rem;
	}

	.comparison-grid {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto 4rem;
		align-items: start;
	}

	.comparison-column {
		background: var(--faf-white);
		border-radius: 16px;
		overflow: hidden;
		border: 3px solid var(--faf-gray-medium);
		transition: all 0.3s ease;
	}

	.comparison-column:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}

	.column-header {
		padding: 1.5rem;
		text-align: center;
	}

	.column-header.before {
		background: rgba(255, 107, 53, 0.1);
		border-bottom: 3px solid #FF6B35;
	}

	.column-header.after {
		background: rgba(1, 145, 147, 0.1);
		border-bottom: 3px solid #019193;
	}

	.column-header h3 {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.column-label {
		font-size: 0.875rem;
		font-family: var(--font-mono);
		color: var(--faf-gray-dark);
		font-weight: 600;
	}

	.comparison-content {
		padding: 1.5rem;
	}

	.code-block {
		background: #0a0a0a;
		border-radius: 8px;
		padding: 1rem;
		margin-bottom: 1.5rem;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		line-height: 1.5;
	}

	.code-block code {
		color: #00D4D4;
		white-space: pre;
	}

	.comparison-issues,
	.comparison-benefits {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.issue-item,
	.benefit-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1rem;
		font-weight: 600;
	}

	.issue-icon {
		font-size: 1.25rem;
	}

	.benefit-icon {
		font-size: 1.25rem;
	}

	.issue-text {
		color: #FF6B35;
	}

	.benefit-text {
		color: #019193;
	}

	.comparison-arrow {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.arrow-symbol {
		font-size: 3rem;
		color: #019193;
		font-weight: 900;
	}

	.arrow-text {
		font-size: 1.5rem;
		font-weight: 900;
		font-family: var(--font-mono);
		color: #019193;
		background: var(--faf-white);
		padding: 0.5rem 1rem;
		border-radius: 8px;
		border: 2px solid #019193;
	}

	.n8n-quote {
		max-width: 800px;
		margin: 0 auto 4rem;
		text-align: center;
		background: var(--faf-white);
		border-left: 6px solid #FF6B35;
		border-radius: 12px;
		padding: 2.5rem 2rem;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		position: relative;
	}

	.quote-icon {
		position: absolute;
		top: -20px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 4rem;
		color: #FF6B35;
		line-height: 1;
		opacity: 0.3;
	}

	.quote-text {
		font-size: 1.5rem;
		color: var(--faf-black);
		line-height: 1.6;
		margin-bottom: 1rem;
		font-style: italic;
	}

	.quote-text strong {
		color: #FF6B35;
		font-weight: 700;
	}

	.quote-source {
		font-size: 1rem;
		color: var(--faf-gray-dark);
		margin-bottom: 1.5rem;
	}

	.quote-solution {
		font-size: 1.25rem;
		font-weight: 900;
		color: #019193;
	}

	.value-props {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		max-width: 1000px;
		margin: 0 auto 4rem;
	}

	.value-card {
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-light);
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		transition: all 0.3s ease;
	}

	.value-card:hover {
		transform: translateY(-4px);
		border-color: #019193;
		box-shadow: 0 8px 16px rgba(1, 145, 147, 0.2);
	}

	.value-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.value-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 0.75rem;
	}

	.value-description {
		font-size: 0.95rem;
		color: var(--faf-gray-dark);
		line-height: 1.6;
		margin: 0;
	}

	.platform-support {
		max-width: 800px;
		margin: 0 auto 4rem;
		text-align: center;
		padding: 2rem;
		background: rgba(1, 145, 147, 0.05);
		border-radius: 12px;
		border: 2px dashed #019193;
	}

	.platform-label {
		font-size: 1rem;
		color: var(--faf-gray-dark);
		margin-bottom: 1rem;
		font-weight: 600;
	}

	.platform-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.platform-tag {
		background: var(--faf-white);
		color: #019193;
		padding: 0.5rem 1rem;
		border-radius: 999px;
		font-size: 0.875rem;
		font-weight: 600;
		border: 2px solid #019193;
	}

	.platform-note {
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
		font-style: italic;
		margin: 0;
	}

	.availability {
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
		background: #019193;
		color: var(--faf-white);
		border-radius: 16px;
		padding: 3rem 2rem;
		border: 3px solid var(--faf-black);
		box-shadow: 0 12px 24px rgba(1, 145, 147, 0.3);
	}

	.availability-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--faf-white);
		color: #019193;
		padding: 0.5rem 1.5rem;
		border-radius: 999px;
		font-weight: 700;
		font-size: 0.875rem;
		margin-bottom: 1.5rem;
	}

	.badge-icon {
		font-size: 1.25rem;
	}

	.availability-title {
		font-size: 2.5rem;
		font-weight: 900;
		margin-bottom: 1rem;
		color: var(--faf-white);
	}

	.availability-description {
		font-size: 1.125rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		color: var(--faf-white);
	}

	.availability-cta {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	.btn-calculator {
		display: inline-block;
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 1rem 2rem;
		border-radius: 8px;
		font-weight: 700;
		font-size: 1.125rem;
		text-decoration: none;
		border: 2px solid var(--faf-black);
		transition: all 0.3s ease;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	.btn-calculator:hover {
		background: var(--faf-white);
		color: var(--faf-black);
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
	}

	.btn-primary {
		display: inline-block;
		background: var(--faf-white);
		color: #019193;
		padding: 1rem 2rem;
		border-radius: 8px;
		font-weight: 700;
		font-size: 1.125rem;
		text-decoration: none;
		border: 2px solid var(--faf-white);
		transition: all 0.3s ease;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	.btn-primary:hover {
		background: transparent;
		color: var(--faf-white);
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
	}

	.cta-subtext {
		margin-top: 1rem;
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.9);
		font-weight: 600;
	}

	.cta-subtext strong {
		color: var(--faf-white);
		font-weight: 900;
	}

	@media (max-width: 1024px) {
		.comparison-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.comparison-arrow {
			flex-direction: row;
		}

		.arrow-symbol {
			transform: rotate(90deg);
		}
	}

	@media (max-width: 768px) {
		.value-props {
			grid-template-columns: 1fr;
		}

		.section-title {
			font-size: 2rem;
		}

		.section-subtitle {
			font-size: 1.5rem;
		}

		.code-block {
			font-size: 0.75rem;
		}

		.quote-text {
			font-size: 1.125rem;
		}

		.platform-tags {
			gap: 0.5rem;
		}
	}
</style>
