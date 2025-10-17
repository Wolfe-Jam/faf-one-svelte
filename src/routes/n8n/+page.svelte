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

	let matrixRainColumns = $state([]);

	// Hero subtitle rotation
	const heroSubtitles = [
		{
			subtitle: "n8n workflows, AI optimized.",
			subtitleStrong: "validates, debugs/fixes, enables → tracks!",
			subtitleInfo: ""
		},
		{
			subtitle: "AIAaaS* - Serious platform, serious outcomes.",
			subtitleStrong: "Power builders deserve power tools.",
			subtitleInfo: "AIAaaS - AI Automation as a Service™️ [for serious n8n architects]"
		}
	];

	let currentSubtitle = $state(heroSubtitles[0]);

	onMount(() => {
		// Randomly select a subtitle
		currentSubtitle = heroSubtitles[Math.floor(Math.random() * heroSubtitles.length)];
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

		// Generate matrix rain columns
		const characters = ['0', '1', '{', '}', '[', ']', 'a', 'b', 'c', 'd', 'e', 'f', ':', '"', ',', 'uuid', 'id', 'node', '4f3a', '8b2c', 'null'];
		const numColumns = 8;

		matrixRainColumns = Array.from({ length: numColumns }, (_, i) => ({
			id: i,
			chars: Array.from({ length: 10 }, () => characters[Math.floor(Math.random() * characters.length)]),
			delay: Math.random() * 2,
			duration: 4 + Math.random() * 2
		}));

		return () => {
			refs.forEach(ref => {
				if (ref) observer.unobserve(ref);
			});
		};
	});
</script>

<svelte:head>
	<title>n8n.faf - Make n8n Workflows AI-Readable | .faf</title>
	<meta name="description" content="n8n workflows are powerful, but AI can't read them. n8n.faf makes workflows AI-native. Works with Claude, Cursor, Codex and other leading AI tools." />
</svelte:head>

<div class="n8n-page">
	<!-- Hero Section -->
	<section bind:this={heroRef} class="hero" class:visible={heroVisible}>
		<div class="container">
			<div class="hero-content">
				<div class="hero-badge">
					<span class="badge-icon">⚡️</span>
					<span class="badge-text">n8n.faf</span>
				</div>
				<h1 class="hero-title">
					n8n workflows are so powerful,<br/>
					<span class="gradient-text">we decided to tell AI about&nbsp;them</span>
				</h1>
				<p class="hero-subtitle">
					{currentSubtitle.subtitle}<br/>
					{#if currentSubtitle.subtitleInfo}
						<span class="subtitle-info">{currentSubtitle.subtitleInfo}</span><br/>
					{/if}
					{#if currentSubtitle.subtitleStrong}
						<strong>{currentSubtitle.subtitleStrong}</strong>
					{/if}
				</p>
				<div class="hero-cta">
					<a href="#pricing" class="btn-primary">
						Get n8n.faf for $15/month →
					</a>
					<a href="/automation-calculator" class="btn-secondary">
						Calculate Your Savings
					</a>
				</div>
				<p class="hero-note">
					<span style="text-decoration: line-through; opacity: 0.6;">$30/month</span> → $15/month <strong>(Half price during development)</strong>
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
				<p class="section-subtitle">n8n.faf makes n8n workflows AI-native</p>

				<div class="outcome-grid">
					<!-- Before Column -->
					<div class="outcome-column">
						<div class="outcome-header before">
							<h3>❌ Before n8n.faf</h3>
						</div>
						<div class="outcome-content">
							<div class="outcome-visual before-visual">
								<div class="visual-placeholder">
									<div class="json-mess">
										<div class="matrix-rain">
											{#each matrixRainColumns as column (column.id)}
												<div
													class="rain-column"
													style="animation-delay: {column.delay}s; animation-duration: {column.duration}s;"
												>
													{#each column.chars as char}
														<div class="rain-char">{char}</div>
													{/each}
												</div>
											{/each}
										</div>
										<div class="mess-overlay">
											<span class="overlay-text">AI can't understand this</span>
										</div>
									</div>
								</div>
							</div>
							<div class="outcome-problems">
								<ul class="outcome-list">
									<li>❌ Claude sees random UUIDs and nested objects</li>
									<li>❌ No way to search across workflows</li>
									<li>❌ Manual debugging takes 30+ minutes</li>
									<li>❌ Documentation out of sync</li>
								</ul>
							</div>
						</div>
					</div>

					<!-- Arrow -->
					<div class="outcome-arrow">
						<div class="arrow-symbol">→</div>
						<div class="arrow-text">n8n.faf</div>
					</div>

					<!-- After Column -->
					<div class="outcome-column">
						<div class="outcome-header after">
							<h3>☑️ After n8n.faf</h3>
						</div>
						<div class="outcome-content">
							<div class="outcome-visual after-visual">
								<div class="visual-placeholder">
									<div class="ai-noodles-box">
										<div class="noodles-text">
											AI 🤖 noodles on this 🍜 yummy<br/>
											<span class="context-subtext">☑️ 100% context ⚡️</span>
										</div>
									</div>
								</div>
							</div>
							<div class="outcome-benefits">
								<ul class="outcome-list">
									<li>☑️ Claude instantly understands workflow logic</li>
									<li>☑️ Cross-workflow search in seconds</li>
									<li>☑️ Debug issues in 2 minutes not 30</li>
									<li>☑️ Docs always current with workflows</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="outcome-proof">
					<p class="proof-stat benefit">
						<strong>Instant diagnostics.</strong><br/>
						<strong class="white-text">.faf can detect a missing syntax in &lt;50 milliseconds</strong><br/>
						<strong>🤨 How long does it take you?</strong>
					</p>
					<p class="proof-stat compatibility">
						Works with Claude, Cursor, Codex and other leading AI tools
					</p>
				</div>

				<!-- Standard Format Callout -->
				<div class="standard-format-callout">
					<div class="callout-icon">📦</div>
					<div class="callout-content">
						<h3 class="callout-title">.faf is a Standard Format</h3>
						<p class="callout-text">
							<strong>We took years to arrive at .faf so you don't need to.</strong>
						</p>
						<p class="callout-comparison">
							Just like you don't have to worry about dependencies with <code>package.json</code>,<br/>
							now you don't have to worry about context with <code>.faf</code>
						</p>
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

	<!-- How It Works Section -->
	<section bind:this={howItWorksRef} class="how-it-works" class:visible={howItWorksVisible}>
		<div class="container">
			<div class="how-content">
				<h2 class="section-title">How n8n.faf Works</h2>
				<p class="section-subtitle">Fix, validate, and enable AI for your workflows</p>

				<div class="steps-grid">
					<div class="step-card">
						<div class="step-number">1</div>
						<h3 class="step-title">Upload Workflow</h3>
						<p class="step-description">
							Export from n8n or connect API for auto-sync. We handle the rest.
						</p>
					</div>

					<div class="step-arrow">→</div>

					<div class="step-card">
						<div class="step-number">2</div>
						<h3 class="step-title">Fix & Validate</h3>
						<p class="step-description">
							Auto-repair issues. Validate syntax in &lt;50ms. Ensure workflow quality.
						</p>
					</div>

					<div class="step-arrow">→</div>

					<div class="step-card">
						<div class="step-number">3</div>
						<h3 class="step-title">Enable AI</h3>
						<p class="step-description">
							Convert to .faf format. Store in cloud. Make your workflows AI-ready.
						</p>
					</div>

					<div class="step-arrow">→</div>

					<div class="step-card">
						<div class="step-number">4</div>
						<h3 class="step-title">Use with Claude</h3>
						<p class="step-description">
							MCP connects Claude to your validated workflows. Ask anything.
						</p>
					</div>
				</div>

				<div class="how-features">
					<div class="feature-item">
						<span class="feature-icon">🔧</span>
						<span class="feature-text"><strong>Auto-Fix:</strong> Repairs syntax errors and validates structure</span>
					</div>
					<div class="feature-item">
						<span class="feature-icon">⚡️</span>
						<span class="feature-text"><strong>Instant:</strong> Validate workflows in &lt;50 milliseconds</span>
					</div>
					<div class="feature-item">
						<span class="feature-icon">🔄</span>
						<span class="feature-text"><strong>Auto-Sync:</strong> Connect n8n API for continuous validation</span>
					</div>
					<div class="feature-item">
						<span class="feature-icon">🤖</span>
						<span class="feature-text"><strong>AI-Ready:</strong> MCP server connects Claude to your workflows</span>
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
				<p class="section-subtitle">Half price during development</p>

				<div class="pricing-card">
					<div class="pricing-badge">
						<span class="badge-icon">🏎️</span>
						<span class="badge-text">SPECIAL n8n MODULE</span>
					</div>
					<h3 class="pricing-title">n8n.faf</h3>
					<div class="pricing-price">
						<span class="price-currency">$</span>
						<span class="price-amount">15</span>
						<span class="price-period">/month</span>
					</div>
					<p class="pricing-guarantee"><span style="text-decoration: line-through; opacity: 0.6;">$30/month</span> → Half price while we build the best n8n tool we can</p>

					<ul class="pricing-features">
						<li class="pricing-feature">
							<span class="feature-check">☑️</span>
							<span class="feature-text">Unlimited n8n workflow conversions</span>
						</li>
						<li class="pricing-feature">
							<span class="feature-check">☑️</span>
							<span class="feature-text">Server-side processing (&lt;2 seconds)</span>
						</li>
						<li class="pricing-feature">
							<span class="feature-check">☑️</span>
							<span class="feature-text">Auto-sync with n8n API</span>
						</li>
						<li class="pricing-feature">
							<span class="feature-check">☑️</span>
							<span class="feature-text">Cross-workflow search</span>
						</li>
						<li class="pricing-feature">
							<span class="feature-check">☑️</span>
							<span class="feature-text">Works with Claude & Cursor</span>
						</li>
						<li class="pricing-feature">
							<span class="feature-check">☑️</span>
							<span class="feature-text">Priority support</span>
						</li>
					</ul>

					<div class="pricing-cta">
						<a href="https://faf.one/#pricing" class="btn-primary-large">
							Get n8n.faf for $15/month →
						</a>
						<p class="cta-subtext">Special n8n module - half price during development</p>
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

	<!-- Page Footer -->
	<section class="page-footer">
		<div class="container">
			<p class="footer-attribution">
				AIAaaS - AI Automation as a Service™️ [for serious n8n architects] © 2025 v1.0.0 🏎️⚡️wolfejam.dev
			</p>
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

	.subtitle-info {
		font-size: 0.9rem;
		color: #999;
		font-style: italic;
		font-weight: 400;
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

	.outcome-grid {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 2rem;
		align-items: start;
	}

	.outcome-column {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		overflow: hidden;
	}

	.outcome-header {
		padding: 1.5rem;
		text-align: center;
	}

	.outcome-header.before {
		background: rgba(255, 77, 77, 0.1);
		border-bottom: 2px solid rgba(255, 77, 77, 0.3);
	}

	.outcome-header.after {
		background: rgba(10, 160, 208, 0.1);
		border-bottom: 2px solid rgba(10, 160, 208, 0.3);
	}

	.outcome-header h3 {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0;
	}

	.outcome-content {
		padding: 2rem;
	}

	.outcome-visual {
		min-height: 200px;
		margin-bottom: 1.5rem;
	}

	.visual-placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.json-mess {
		width: 100%;
		padding: 2rem;
		background: #0a0a0a;
		border-radius: 8px;
		position: relative;
		min-height: 200px;
		overflow: hidden;
	}

	.matrix-rain {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		height: 100%;
		min-height: 200px;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.5;
		pointer-events: none;
		z-index: 1;
	}

	.rain-column {
		display: flex;
		flex-direction: column;
		animation: rain-fall linear infinite;
		font-family: var(--font-mono);
		font-size: 0.7rem;
		color: rgba(255, 255, 255, 0.9);
		text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
		letter-spacing: 1px;
	}

	.rain-char {
		padding: 3px 0;
		line-height: 1.3;
		white-space: nowrap;
	}

	@keyframes rain-fall {
		0% {
			transform: translateY(-120%);
			opacity: 0;
		}
		5% {
			opacity: 0.8;
		}
		95% {
			opacity: 0.8;
		}
		100% {
			transform: translateY(320%);
			opacity: 0;
		}
	}

	.mess-overlay {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: 10;
	}

	.overlay-text {
		background: rgba(255, 77, 77, 1);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-weight: 700;
		font-size: 1.1rem;
		box-shadow: 0 4px 20px rgba(255, 77, 77, 0.6);
	}

	.ai-noodles-box {
		width: 100%;
		padding: 2rem;
		background: rgba(10, 160, 208, 0.1);
		border-radius: 8px;
		min-height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid rgba(10, 160, 208, 0.3);
	}

	.noodles-text {
		font-size: 1.75rem;
		font-weight: 700;
		color: white;
		text-align: center;
		line-height: 1.4;
	}

	.context-subtext {
		font-size: 1.1rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.85);
	}

	.outcome-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.outcome-list li {
		padding: 0.75rem 0;
		color: #b0b0b0;
		line-height: 1.6;
		font-size: 1rem;
	}

	.outcome-proof {
		margin-top: 3rem;
		text-align: center;
		padding: 2rem;
		background: rgba(10, 160, 208, 0.1);
		border: 2px solid rgba(10, 160, 208, 0.3);
		border-radius: 12px;
	}

	.proof-stat {
		font-size: 1.25rem;
		color: #b0b0b0;
		margin: 0;
	}

	.proof-stat strong {
		color: #0AA0D0;
		font-weight: 700;
	}

	.proof-stat.benefit {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.proof-stat.benefit strong {
		color: #FF4400;
		font-weight: 800;
	}

	.proof-stat.benefit strong.white-text {
		color: white;
	}

	.proof-stat.compatibility {
		font-size: 1rem;
		color: #0AA0D0;
	}

	.outcome-arrow {
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

	.standard-format-callout {
		margin-top: 3rem;
		padding: 2.5rem;
		background: rgba(255, 145, 77, 0.05);
		border: 2px solid rgba(255, 145, 77, 0.3);
		border-radius: 16px;
		display: flex;
		gap: 2rem;
		align-items: flex-start;
	}

	.callout-icon {
		font-size: 3rem;
		flex-shrink: 0;
	}

	.callout-content {
		flex: 1;
	}

	.callout-title {
		font-size: 1.75rem;
		font-weight: 800;
		margin-bottom: 1rem;
		color: #FF914D;
	}

	.callout-text {
		font-size: 1.25rem;
		line-height: 1.6;
		margin-bottom: 1rem;
		color: white;
	}

	.callout-text strong {
		color: #FF914D;
		font-weight: 700;
	}

	.callout-comparison {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #b0b0b0;
	}

	.callout-comparison code {
		background: rgba(0, 0, 0, 0.4);
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		color: #0AA0D0;
		font-family: var(--font-mono);
		font-size: 1rem;
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
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		margin-top: 3rem;
	}

	.example-card {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		padding: 2rem;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.example-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(10, 160, 208, 0.2);
	}

	.example-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
		text-align: center;
	}

	.example-title {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		text-align: center;
	}

	.example-scenario {
		margin-bottom: 1.5rem;
		flex-grow: 1;
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
		gap: 0.75rem;
		padding: 1rem;
		background: rgba(10, 160, 208, 0.1);
		border-radius: 8px;
		border: 1px solid rgba(10, 160, 208, 0.3);
		margin-top: auto;
	}

	.result-icon {
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.result-text {
		font-weight: 600;
		color: #0AA0D0;
		line-height: 1.4;
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

	/* Page Footer */
	.page-footer {
		padding: 2rem 0;
		background: rgba(0, 0, 0, 0.3);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.footer-attribution {
		text-align: center;
		font-size: 0.85rem;
		color: #666;
		margin: 0;
		font-family: var(--font-mono);
		line-height: 1.6;
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

		.standard-format-callout {
			flex-direction: column;
			gap: 1rem;
			padding: 2rem;
			text-align: center;
		}

		.callout-icon {
			margin: 0 auto;
		}

		.callout-title {
			font-size: 1.5rem;
		}

		.callout-text {
			font-size: 1.1rem;
		}

		.callout-comparison {
			font-size: 1rem;
		}
	}
</style>
