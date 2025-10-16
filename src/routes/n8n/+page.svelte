<script>
	import { onMount } from 'svelte';

	let heroVisible = $state(false);
	let problemVisible = $state(false);
	let solutionVisible = $state(false);
	let examplesVisible = $state(false);
	let statsVisible = $state(false);
	let howItWorksVisible = $state(false);
	let pricingVisible = $state(false);

	let heroRef = $state(null);
	let problemRef = $state(null);
	let solutionRef = $state(null);
	let examplesRef = $state(null);
	let statsRef = $state(null);
	let howItWorksRef = $state(null);
	let pricingRef = $state(null);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const target = entry.target;
						if (target === heroRef) heroVisible = true;
						if (target === problemRef) problemVisible = true;
						if (target === solutionRef) solutionVisible = true;
						if (target === examplesRef) examplesVisible = true;
						if (target === statsRef) statsVisible = true;
						if (target === howItWorksRef) howItWorksVisible = true;
						if (target === pricingRef) pricingVisible = true;
					}
				});
			},
			{ threshold: 0.2 }
		);

		const refs = [heroRef, problemRef, solutionRef, examplesRef, statsRef, howItWorksRef, pricingRef];
		refs.forEach(ref => {
			if (ref) observer.observe(ref);
		});

		return () => {
			refs.forEach(ref => {
				if (ref) observer.unobserve(ref);
			});
		};
	});
</script>

<svelte:head>
	<title>TURBO for n8n - Make Workflows AI-Readable | .faf</title>
	<meta name="description" content="n8n workflows are powerful, but AI can't read them. .faf makes n8n workflows AI-native. 85% faster debugging, cross-workflow search, instant onboarding." />
</svelte:head>

<div class="n8n-page">
	<!-- Hero Section -->
	<section bind:this={heroRef} class="hero" class:visible={heroVisible}>
		<div class="container">
			<div class="hero-content">
				<div class="hero-badge">
					<span class="badge-icon">⚡️</span>
					<span class="badge-text">TURBO for n8n</span>
				</div>
				<h1 class="hero-title">
					Make n8n Workflows<br/>
					<span class="gradient-text">AI-Readable</span>
				</h1>
				<p class="hero-subtitle">
					Your n8n workflows are powerful.<br/>
					But AI assistants can't understand them.<br/>
					<strong>.faf solves this.</strong>
				</p>
				<div class="hero-cta">
					<a href="#pricing" class="btn-primary">
						Get TURBO for $10/month →
					</a>
					<a href="/automation-calculator" class="btn-secondary">
						Calculate Your Savings
					</a>
				</div>
				<p class="hero-note">
					Lock in $10/month forever with code <strong>FAST</strong>
				</p>
			</div>
		</div>
	</section>

	<!-- Problem Section -->
	<section bind:this={problemRef} class="problem" class:visible={problemVisible}>
		<div class="container">
			<div class="problem-content">
				<h2 class="section-title">The Problem</h2>
				<div class="problem-quote">
					<div class="quote-icon">"</div>
					<p class="quote-text">
						While n8n can integrate with AI services, it <strong>lacks native AI understanding.</strong>
					</p>
					<p class="quote-source">— n8n Review, 2025</p>
				</div>
				<div class="problem-list">
					<div class="problem-item">
						<span class="problem-icon">❌</span>
						<div class="problem-text">
							<h4>AI can't help debug</h4>
							<p>Paste n8n JSON into Claude? It can't parse the structure or suggest fixes.</p>
						</div>
					</div>
					<div class="problem-item">
						<span class="problem-icon">❌</span>
						<div class="problem-text">
							<h4>No cross-workflow search</h4>
							<p>Finding where you used that Stripe webhook? Manual file-by-file search.</p>
						</div>
					</div>
					<div class="problem-item">
						<span class="problem-icon">❌</span>
						<div class="problem-text">
							<h4>Onboarding takes weeks</h4>
							<p>New team members dig through dozens of workflows with zero AI assistance.</p>
						</div>
					</div>
					<div class="problem-item">
						<span class="problem-icon">❌</span>
						<div class="problem-text">
							<h4>Documentation drift</h4>
							<p>Your workflows evolve. Your docs don't. AI can't auto-update from n8n JSON.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Solution Section -->
	<section bind:this={solutionRef} class="solution" class:visible={solutionVisible}>
		<div class="container">
			<div class="solution-content">
				<h2 class="section-title">The Solution</h2>
				<p class="section-subtitle">.faf makes n8n workflows AI-native</p>

				<div class="comparison-grid">
					<!-- Before Column -->
					<div class="comparison-column">
						<div class="column-header before">
							<h3>Before .faf</h3>
							<div class="column-label">n8n JSON Export</div>
						</div>
						<div class="comparison-content">
							<div class="code-block">
								<pre><code>{`{
  "nodes": [
    {
      "id": "8a4d5c6e-2f1b-4a9c-b3e7-1d4a5c6e7f8a",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.1,
      "position": [250, 300],
      "parameters": {
        "url": "={{$json.webhook_url}}",
        "authentication": "predefinedCredentialType",
        "nodeCredentialType": "stripeApi",
        "options": {}
      },
      "name": "Stripe Webhook Handler"
    },
    {
      "id": "9b5e6d7f-3a2c-5b0d-c4f8-2e5b6d7f8a9b",
      "type": "n8n-nodes-base.function",
      "typeVersion": 1,
      "position": [450, 300],
      "parameters": {
        "functionCode": "return items.map(item => ({
          json: {
            userId: item.json.customer,
            email: item.json.email,
            plan: item.json.plan_id
          }
        }));"
      },
      "name": "Transform Data"
    }
  ],
  "connections": {
    "8a4d5c6e-2f1b-4a9c-b3e7-1d4a5c6e7f8a": {
      "main": [
        [
          {
            "node": "9b5e6d7f-3a2c-5b0d-c4f8-2e5b6d7f8a9b",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}`}</code></pre>
							</div>
							<div class="comparison-problems">
								<p class="problems-label">AI sees this as:</p>
								<ul class="problems-list">
									<li>Random UUIDs</li>
									<li>Nested parameter objects</li>
									<li>Connection arrays with indexes</li>
									<li>No clear business logic</li>
								</ul>
							</div>
						</div>
					</div>

					<!-- Arrow -->
					<div class="comparison-arrow">
						<div class="arrow-symbol">→</div>
						<div class="arrow-text">.faf</div>
					</div>

					<!-- After Column -->
					<div class="comparison-column">
						<div class="column-header after">
							<h3>After .faf</h3>
							<div class="column-label">.faf Universal Format</div>
						</div>
						<div class="comparison-content">
							<div class="code-block">
								<pre><code>{`# .faf - AI-Readable n8n Workflow
project:
  name: "customer-onboarding-automation"
  platform: "n8n"
  version: "1.2.0"

context:
  purpose: "Handle Stripe webhooks for new customer onboarding"
  business_logic: "When customer subscribes → extract data → send to CRM"
  triggers:
    - type: "webhook"
      source: "stripe"
      event: "customer.subscription.created"

automation:
  workflow_steps:
    - step: "receive_stripe_webhook"
      action: "Listen for Stripe subscription events"
      node_type: "httpRequest"
      credentials: "stripeApi"

    - step: "transform_customer_data"
      action: "Extract userId, email, and plan from webhook payload"
      input: "stripe_webhook_data"
      output: "customer_profile"

    - step: "send_to_crm"
      action: "Create new contact in CRM system"
      destination: "hubspot"

dependencies:
  external_services:
    - stripe: "Webhook source"
    - hubspot: "CRM destination"
  credentials_required:
    - "Stripe API Key"
    - "HubSpot API Token"

metadata:
  created: "2024-10-15"
  last_updated: "2025-01-10"
  owner: "growth-team"
  tags: ["onboarding", "stripe", "crm"]`}</code></pre>
							</div>
							<div class="comparison-benefits">
								<p class="benefits-label">AI understands:</p>
								<ul class="benefits-list">
									<li>✅ Business purpose</li>
									<li>✅ Data flow</li>
									<li>✅ Dependencies</li>
									<li>✅ Context & history</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Real Examples Section -->
	<section bind:this={examplesRef} class="examples" class:visible={examplesVisible}>
		<div class="container">
			<div class="examples-content">
				<h2 class="section-title">Real Examples</h2>
				<p class="section-subtitle">What you can do with AI-readable n8n workflows</p>

				<div class="examples-grid">
					<div class="example-card">
						<div class="example-icon">🐛</div>
						<h3 class="example-title">Debug Faster</h3>
						<div class="example-scenario">
							<p class="scenario-before"><strong>Before:</strong> "Stripe webhook stopped working. Let me check 15 nodes manually..."</p>
							<p class="scenario-after"><strong>After:</strong> Paste .faf into Claude → "Check my Stripe webhook workflow, subscriptions aren't triggering."</p>
						</div>
						<div class="example-result">
							<span class="result-icon">⚡️</span>
							<span class="result-text">Issue found in 2 minutes instead of 30.</span>
						</div>
					</div>

					<div class="example-card">
						<div class="example-icon">🔍</div>
						<h3 class="example-title">Cross-Workflow Search</h3>
						<div class="example-scenario">
							<p class="scenario-before"><strong>Before:</strong> "Where did we use that Slack notification? Open 20 workflows, Ctrl+F each..."</p>
							<p class="scenario-after"><strong>After:</strong> Ask AI → "Show me all workflows using Slack notifications."</p>
						</div>
						<div class="example-result">
							<span class="result-icon">🎯</span>
							<span class="result-text">Instant results across all workflows.</span>
						</div>
					</div>

					<div class="example-card">
						<div class="example-icon">👥</div>
						<h3 class="example-title">Onboard New Team Members</h3>
						<div class="example-scenario">
							<p class="scenario-before"><strong>Before:</strong> "Here are 50 workflows. Good luck understanding them over the next 2 weeks."</p>
							<p class="scenario-after"><strong>After:</strong> Share .faf files → New dev asks Claude → "Explain the customer onboarding flow."</p>
						</div>
						<div class="example-result">
							<span class="result-icon">🚀</span>
							<span class="result-text">Weeks → Days for full understanding.</span>
						</div>
					</div>

					<div class="example-card">
						<div class="example-icon">📚</div>
						<h3 class="example-title">Always-Current Documentation</h3>
						<div class="example-scenario">
							<p class="scenario-before"><strong>Before:</strong> Workflow changes. Docs drift. Six months later: "This documentation is useless."</p>
							<p class="scenario-after"><strong>After:</strong> .faf auto-updates from n8n → AI generates fresh docs on demand.</p>
						</div>
						<div class="example-result">
							<span class="result-icon">✨</span>
							<span class="result-text">Documentation never stale again.</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats Section -->
	<section bind:this={statsRef} class="stats" class:visible={statsVisible}>
		<div class="container">
			<div class="stats-content">
				<h2 class="section-title">The Impact</h2>
				<div class="stats-grid">
					<div class="stat-card">
						<div class="stat-number">85%</div>
						<div class="stat-label">Faster Debugging</div>
						<p class="stat-description">Minutes instead of hours to find and fix workflow issues.</p>
					</div>
					<div class="stat-card">
						<div class="stat-number">82hrs</div>
						<div class="stat-label">Saved Per Year</div>
						<p class="stat-description">Average time saved per developer annually.</p>
					</div>
					<div class="stat-card">
						<div class="stat-number">70%</div>
						<div class="stat-label">Faster Onboarding</div>
						<p class="stat-description">New team members productive in days, not weeks.</p>
					</div>
					<div class="stat-card">
						<div class="stat-number">100%</div>
						<div class="stat-label">Always Current</div>
						<p class="stat-description">Documentation auto-updates with workflow changes.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- How It Works Section -->
	<section bind:this={howItWorksRef} class="how-it-works" class:visible={howItWorksVisible}>
		<div class="container">
			<div class="how-content">
				<h2 class="section-title">How TURBO Works</h2>
				<p class="section-subtitle">Server-side workflow intelligence in seconds</p>

				<div class="steps-grid">
					<div class="step-card">
						<div class="step-number">1</div>
						<h3 class="step-title">Export from n8n</h3>
						<p class="step-description">
							Export your workflow as JSON (or connect n8n API for auto-sync).
						</p>
					</div>

					<div class="step-arrow">→</div>

					<div class="step-card">
						<div class="step-number">2</div>
						<h3 class="step-title">Upload to TURBO</h3>
						<p class="step-description">
							Secure server-side processing. Your workflows never leave your control.
						</p>
					</div>

					<div class="step-arrow">→</div>

					<div class="step-card">
						<div class="step-number">3</div>
						<h3 class="step-title">Get .faf Format</h3>
						<p class="step-description">
							AI-readable YAML file with context, dependencies, and business logic.
						</p>
					</div>

					<div class="step-arrow">→</div>

					<div class="step-card">
						<div class="step-number">4</div>
						<h3 class="step-title">Use with ANY AI</h3>
						<p class="step-description">
							Works with Claude, Cursor, ChatGPT, Copilot, or any AI assistant.
						</p>
					</div>
				</div>

				<div class="how-features">
					<div class="feature-item">
						<span class="feature-icon">🔒</span>
						<span class="feature-text"><strong>Secure:</strong> Server-side processing, no data retention</span>
					</div>
					<div class="feature-item">
						<span class="feature-icon">⚡️</span>
						<span class="feature-text"><strong>Fast:</strong> Process workflows in &lt;2 seconds</span>
					</div>
					<div class="feature-item">
						<span class="feature-icon">🔄</span>
						<span class="feature-text"><strong>Auto-Sync:</strong> Connect n8n API for automatic updates</span>
					</div>
					<div class="feature-item">
						<span class="feature-icon">🌍</span>
						<span class="feature-text"><strong>Universal:</strong> Works with any AI tool, not locked to one vendor</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Pricing Section -->
	<section bind:this={pricingRef} id="pricing" class="pricing" class:visible={pricingVisible}>
		<div class="container">
			<div class="pricing-content">
				<h2 class="section-title">Pricing</h2>
				<p class="section-subtitle">Lock in $10/month forever</p>

				<div class="pricing-card">
					<div class="pricing-badge">
						<span class="badge-icon">🏎️</span>
						<span class="badge-text">EARLY ACCESS</span>
					</div>
					<h3 class="pricing-title">TURBO for n8n</h3>
					<div class="pricing-price">
						<span class="price-currency">$</span>
						<span class="price-amount">10</span>
						<span class="price-period">/month</span>
					</div>
					<p class="pricing-guarantee">Lock in this price forever with code <strong>FAST</strong></p>

					<ul class="pricing-features">
						<li class="pricing-feature">
							<span class="feature-check">✅</span>
							<span class="feature-text">Unlimited n8n workflow conversions</span>
						</li>
						<li class="pricing-feature">
							<span class="feature-check">✅</span>
							<span class="feature-text">Server-side processing (&lt;2 seconds)</span>
						</li>
						<li class="pricing-feature">
							<span class="feature-check">✅</span>
							<span class="feature-text">Auto-sync with n8n API</span>
						</li>
						<li class="pricing-feature">
							<span class="feature-check">✅</span>
							<span class="feature-text">Cross-workflow search</span>
						</li>
						<li class="pricing-feature">
							<span class="feature-check">✅</span>
							<span class="feature-text">Works with ANY AI assistant</span>
						</li>
						<li class="pricing-feature">
							<span class="feature-check">✅</span>
							<span class="feature-text">Priority support</span>
						</li>
					</ul>

					<div class="pricing-cta">
						<a href="https://faf.one/#pricing" class="btn-primary-large">
							Get TURBO for $10/month →
						</a>
						<p class="cta-subtext">Use code <strong>FAST</strong> at checkout</p>
					</div>

					<p class="pricing-note">
						Free for open source projects. Contact us for enterprise pricing.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Partnership Section -->
	<section class="partnership">
		<div class="container">
			<div class="partnership-content">
				<div class="partnership-logo">🤝</div>
				<h2 class="partnership-title">Building with n8n</h2>
				<p class="partnership-description">
					We're working to make .faf the standard AI-context format for n8n workflows.<br/>
					Interested in partnering? <a href="mailto:contact@faf.one">Let's talk.</a>
				</p>
			</div>
		</div>
	</section>
</div>

<style>
	.n8n-page {
		background: linear-gradient(180deg, #000000 0%, #0a0a0a 100%);
		color: white;
		min-height: 100vh;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Hero Section */
	.hero {
		padding: 8rem 0 6rem 0;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}

	.hero.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-content {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255, 145, 77, 0.1);
		border: 1px solid rgba(255, 145, 77, 0.3);
		padding: 0.5rem 1rem;
		border-radius: 50px;
		margin-bottom: 2rem;
	}

	.badge-icon {
		font-size: 1.2rem;
	}

	.badge-text {
		font-weight: 600;
		color: #FF914D;
	}

	.hero-title {
		font-size: 4rem;
		font-weight: 800;
		line-height: 1.1;
		margin-bottom: 1.5rem;
	}

	.gradient-text {
		background: linear-gradient(135deg, #0AA0D0 0%, #FF4400 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		line-height: 1.6;
		color: #b0b0b0;
		margin-bottom: 3rem;
	}

	.hero-subtitle strong {
		color: white;
		font-weight: 700;
	}

	.hero-cta {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.btn-primary, .btn-primary-large {
		background: linear-gradient(135deg, #0AA0D0 0%, #FF4400 100%);
		color: white;
		padding: 1rem 2rem;
		border-radius: 8px;
		font-weight: 700;
		text-decoration: none;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		display: inline-block;
	}

	.btn-primary-large {
		padding: 1.25rem 2.5rem;
		font-size: 1.1rem;
	}

	.btn-primary:hover, .btn-primary-large:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(10, 160, 208, 0.4);
	}

	.btn-secondary {
		background: rgba(255, 255, 255, 0.1);
		color: white;
		padding: 1rem 2rem;
		border-radius: 8px;
		font-weight: 700;
		text-decoration: none;
		transition: background 0.2s ease;
		display: inline-block;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.15);
	}

	.hero-note {
		color: #808080;
		font-size: 0.9rem;
	}

	.hero-note strong {
		color: #FF914D;
		font-weight: 700;
	}

	/* Problem Section */
	.problem {
		padding: 6rem 0;
		background: rgba(255, 255, 255, 0.02);
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}

	.problem.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.problem-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.section-title {
		font-size: 3rem;
		font-weight: 800;
		text-align: center;
		margin-bottom: 3rem;
	}

	.problem-quote {
		background: rgba(255, 77, 77, 0.1);
		border: 2px solid rgba(255, 77, 77, 0.3);
		border-radius: 12px;
		padding: 2rem;
		margin-bottom: 3rem;
		position: relative;
	}

	.quote-icon {
		font-size: 4rem;
		color: rgba(255, 77, 77, 0.3);
		position: absolute;
		top: -1rem;
		left: 1rem;
	}

	.quote-text {
		font-size: 1.5rem;
		line-height: 1.6;
		margin-bottom: 1rem;
		padding-top: 2rem;
	}

	.quote-text strong {
		color: #ff6b6b;
		font-weight: 700;
	}

	.quote-source {
		color: #808080;
		font-size: 1rem;
		font-style: italic;
	}

	.problem-list {
		display: grid;
		gap: 1.5rem;
	}

	.problem-item {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.problem-icon {
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.problem-text h4 {
		font-size: 1.2rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.problem-text p {
		color: #b0b0b0;
		line-height: 1.6;
	}

	/* Solution Section */
	.solution {
		padding: 6rem 0;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}

	.solution.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.section-subtitle {
		text-align: center;
		font-size: 1.5rem;
		color: #b0b0b0;
		margin-bottom: 3rem;
	}

	.comparison-grid {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 2rem;
		align-items: start;
	}

	.comparison-column {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		overflow: hidden;
	}

	.column-header {
		padding: 1.5rem;
		text-align: center;
	}

	.column-header.before {
		background: rgba(255, 77, 77, 0.1);
		border-bottom: 2px solid rgba(255, 77, 77, 0.3);
	}

	.column-header.after {
		background: rgba(10, 160, 208, 0.1);
		border-bottom: 2px solid rgba(10, 160, 208, 0.3);
	}

	.column-header h3 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.column-label {
		font-size: 0.9rem;
		color: #808080;
	}

	.comparison-content {
		padding: 1.5rem;
	}

	.code-block {
		background: #0a0a0a;
		border-radius: 8px;
		padding: 1rem;
		margin-bottom: 1rem;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
	}

	.code-block code {
		font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
		font-size: 0.85rem;
		line-height: 1.5;
		color: #d4d4d4;
	}

	.comparison-problems, .comparison-benefits {
		padding: 1rem;
		border-radius: 8px;
	}

	.comparison-problems {
		background: rgba(255, 77, 77, 0.05);
	}

	.comparison-benefits {
		background: rgba(10, 160, 208, 0.05);
	}

	.problems-label, .benefits-label {
		font-weight: 600;
		margin-bottom: 0.5rem;
		display: block;
	}

	.problems-list, .benefits-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.problems-list li, .benefits-list li {
		padding: 0.25rem 0;
		color: #b0b0b0;
	}

	.comparison-arrow {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding-top: 4rem;
	}

	.arrow-symbol {
		font-size: 3rem;
		color: #0AA0D0;
	}

	.arrow-text {
		font-weight: 700;
		color: #0AA0D0;
		font-size: 1.2rem;
	}

	/* Examples Section */
	.examples {
		padding: 6rem 0;
		background: rgba(255, 255, 255, 0.02);
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}

	.examples.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.examples-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.example-card {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		padding: 2rem;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.example-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(10, 160, 208, 0.2);
	}

	.example-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.example-title {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.example-scenario {
		margin-bottom: 1.5rem;
	}

	.scenario-before, .scenario-after {
		margin-bottom: 0.75rem;
		line-height: 1.6;
		color: #b0b0b0;
	}

	.scenario-before strong, .scenario-after strong {
		color: white;
		font-weight: 700;
	}

	.example-result {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem;
		background: rgba(10, 160, 208, 0.1);
		border-radius: 8px;
		border: 1px solid rgba(10, 160, 208, 0.3);
	}

	.result-icon {
		font-size: 1.5rem;
	}

	.result-text {
		font-weight: 600;
		color: #0AA0D0;
	}

	/* Stats Section */
	.stats {
		padding: 6rem 0;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}

	.stats.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.stat-card {
		text-align: center;
		padding: 2rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
	}

	.stat-number {
		font-size: 4rem;
		font-weight: 800;
		background: linear-gradient(135deg, #0AA0D0 0%, #FF4400 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 0.5rem;
	}

	.stat-label {
		font-size: 1.2rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.stat-description {
		color: #b0b0b0;
		line-height: 1.6;
	}

	/* How It Works Section */
	.how-it-works {
		padding: 6rem 0;
		background: rgba(255, 255, 255, 0.02);
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}

	.how-it-works.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.steps-grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 1rem;
		align-items: center;
		margin: 3rem 0;
	}

	.step-card {
		grid-column: span 1;
		text-align: center;
		padding: 2rem 1rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		min-height: 250px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.step-card:nth-child(1) { grid-column: 1 / 2; }
	.step-arrow:nth-child(2) { grid-column: 2 / 2; }
	.step-card:nth-child(3) { grid-column: 3 / 4; }
	.step-arrow:nth-child(4) { grid-column: 4 / 4; }
	.step-card:nth-child(5) { grid-column: 5 / 6; }
	.step-arrow:nth-child(6) { grid-column: 6 / 6; }
	.step-card:nth-child(7) { grid-column: 7 / 8; }

	.step-number {
		width: 50px;
		height: 50px;
		background: linear-gradient(135deg, #0AA0D0 0%, #FF4400 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: 800;
		margin: 0 auto 1rem auto;
	}

	.step-title {
		font-size: 1.1rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.step-description {
		color: #b0b0b0;
		line-height: 1.5;
		font-size: 0.9rem;
	}

	.step-arrow {
		text-align: center;
		font-size: 2rem;
		color: #0AA0D0;
		grid-column: span 1;
	}

	.how-features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-top: 3rem;
	}

	.feature-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		background: rgba(255, 255, 255, 0.03);
		border-radius: 8px;
	}

	.feature-icon {
		font-size: 1.5rem;
	}

	.feature-text {
		color: #b0b0b0;
		line-height: 1.5;
	}

	.feature-text strong {
		color: white;
		font-weight: 700;
	}

	/* Pricing Section */
	.pricing {
		padding: 6rem 0;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}

	.pricing.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.pricing-content {
		max-width: 600px;
		margin: 0 auto;
	}

	.pricing-card {
		background: rgba(255, 255, 255, 0.03);
		border: 2px solid rgba(10, 160, 208, 0.4);
		border-radius: 16px;
		padding: 3rem;
		text-align: center;
	}

	.pricing-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255, 145, 77, 0.1);
		border: 1px solid rgba(255, 145, 77, 0.3);
		padding: 0.5rem 1rem;
		border-radius: 50px;
		margin-bottom: 1.5rem;
	}

	.pricing-title {
		font-size: 2rem;
		font-weight: 800;
		margin-bottom: 1.5rem;
	}

	.pricing-price {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.price-currency {
		font-size: 2rem;
		font-weight: 700;
		color: #0AA0D0;
		margin-top: 0.5rem;
	}

	.price-amount {
		font-size: 5rem;
		font-weight: 800;
		color: #0AA0D0;
		line-height: 1;
	}

	.price-period {
		font-size: 1.5rem;
		color: #808080;
		margin-top: 2rem;
	}

	.pricing-guarantee {
		color: #b0b0b0;
		margin-bottom: 2rem;
	}

	.pricing-guarantee strong {
		color: #FF914D;
		font-weight: 700;
	}

	.pricing-features {
		list-style: none;
		padding: 0;
		margin: 0 0 2rem 0;
		text-align: left;
	}

	.pricing-feature {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.pricing-feature:last-child {
		border-bottom: none;
	}

	.feature-check {
		font-size: 1.2rem;
	}

	.feature-text {
		color: #b0b0b0;
	}

	.pricing-cta {
		margin-bottom: 1.5rem;
	}

	.cta-subtext {
		margin-top: 0.75rem;
		color: #808080;
		font-size: 0.9rem;
	}

	.cta-subtext strong {
		color: #FF914D;
		font-weight: 700;
	}

	.pricing-note {
		color: #808080;
		font-size: 0.9rem;
	}

	/* Partnership Section */
	.partnership {
		padding: 4rem 0 6rem 0;
		background: rgba(255, 255, 255, 0.02);
	}

	.partnership-content {
		text-align: center;
		max-width: 700px;
		margin: 0 auto;
	}

	.partnership-logo {
		font-size: 4rem;
		margin-bottom: 1.5rem;
	}

	.partnership-title {
		font-size: 2rem;
		font-weight: 800;
		margin-bottom: 1rem;
	}

	.partnership-description {
		font-size: 1.2rem;
		line-height: 1.8;
		color: #b0b0b0;
	}

	.partnership-description a {
		color: #0AA0D0;
		text-decoration: none;
		font-weight: 600;
		transition: color 0.2s ease;
	}

	.partnership-description a:hover {
		color: #FF4400;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.comparison-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.comparison-arrow {
			transform: rotate(90deg);
			padding: 1rem 0;
		}

		.steps-grid {
			grid-template-columns: 1fr;
		}

		.step-card, .step-arrow {
			grid-column: 1 / -1 !important;
		}

		.step-arrow {
			transform: rotate(90deg);
			padding: 0.5rem 0;
		}
	}

	@media (max-width: 768px) {
		.hero-title {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.2rem;
		}

		.hero-cta {
			flex-direction: column;
		}

		.section-title {
			font-size: 2rem;
		}

		.quote-text {
			font-size: 1.2rem;
		}

		.examples-grid {
			grid-template-columns: 1fr;
		}

		.stats-grid {
			grid-template-columns: 1fr;
		}

		.stat-number {
			font-size: 3rem;
		}
	}
</style>
