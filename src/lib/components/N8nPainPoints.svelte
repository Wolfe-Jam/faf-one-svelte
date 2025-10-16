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

<section bind:this={sectionRef} class="n8n-pain-points">
	<div class="container">
		<div class="content" class:visible={isVisible}>
			<div class="header-section">
				<div class="killer-quote">
					<div class="quote-mark">"</div>
					<h2 class="quote-text">
						While n8n can integrate with AI services,<br/>
						<span class="highlight">it lacks native AI understanding</span>
					</h2>
					<div class="quote-attribution">— n8n Review, 2025</div>
				</div>
				<p class="section-subtitle">
					Until now. <strong>.faf TURBO</strong> gives AI the ability to read, understand,<br/>
					and help you fix your n8n workflows.
				</p>
			</div>

			<!-- Championship Positioning -->
			<div class="championship-hero">
				<div class="championship-badge">
					<div class="badge-icon">🏎️</div>
					<div class="badge-content">
						<h3 class="championship-title">The McLaren Mercedes of n8n</h3>
						<p class="championship-subtitle">Championship-Grade AI Context for n8n Experts</p>
					</div>
				</div>
				<p class="championship-description">
					n8n is a great automation platform. <strong>.faf TURBO</strong> takes it to championship level.<br/>
					Not competing with n8n — <span class="highlight-orange">elevating the n8n experience</span> to expert-grade performance.
				</p>
				<div class="championship-comparison-quick">
					<div class="comparison-item">
						<div class="item-icon">🔧</div>
						<div class="item-text">
							<strong>n8n</strong><br/>
							Great Automation Tool
						</div>
					</div>
					<div class="plus-symbol">+</div>
					<div class="comparison-item">
						<div class="item-icon">🏆</div>
						<div class="item-text">
							<strong>.faf TURBO</strong><br/>
							Championship Engineering
						</div>
					</div>
					<div class="equals-symbol">=</div>
					<div class="comparison-item result">
						<div class="item-icon">🏎️</div>
						<div class="item-text">
							<strong>McLaren Performance</strong><br/>
							Expert-Grade Workflows
						</div>
					</div>
				</div>
			</div>

			<div class="pain-grid">
				<div class="pain-card">
					<div class="pain-icon">😰</div>
					<div class="pain-quote">"I dread touching very complex workflows"</div>
					<div class="pain-label">Version Control Fear</div>
					<div class="pain-stat">24 hours of history (free tier)</div>
					<div class="solution-arrow">→</div>
					<div class="solution-text">
						<strong>.faf TURBO:</strong> Full Git history<br/>
						AI-readable diffs, rollback confidence
					</div>
				</div>

				<div class="pain-card">
					<div class="pain-icon">🔥</div>
					<div class="pain-quote">"Middle-of-the-night workflow failures destroy client relationships"</div>
					<div class="pain-label">2AM Production Incidents</div>
					<div class="pain-stat">Average: 2.5 hours to fix</div>
					<div class="solution-arrow">→</div>
					<div class="solution-text">
						<strong>.faf TURBO:</strong> 85% faster debugging<br/>
						AI context for emergency fixes
					</div>
				</div>

				<div class="pain-card">
					<div class="pain-icon">❓</div>
					<div class="pain-quote">"ERROR: Request failed with status code 400"</div>
					<div class="pain-label">Vague Error Messages</div>
					<div class="pain-stat">70% hit same 7 errors</div>
					<div class="solution-arrow">→</div>
					<div class="solution-text">
						<strong>.faf TURBO:</strong> AI understands context<br/>
						Intelligent error suggestions
					</div>
				</div>

				<div class="pain-card">
					<div class="pain-icon">🤯</div>
					<div class="pain-quote">"Made one small improvement, hours later everything's broken"</div>
					<div class="pain-label">Silent Failures</div>
					<div class="pain-stat">No "what changed" view</div>
					<div class="solution-arrow">→</div>
					<div class="solution-text">
						<strong>.faf TURBO:</strong> Track every change<br/>
						Ask AI "what broke and why?"
					</div>
				</div>

				<div class="pain-card">
					<div class="pain-icon">📚</div>
					<div class="pain-quote">"If you can't program, using n8n effectively becomes nearly impossible"</div>
					<div class="pain-label">Steep Learning Curve</div>
					<div class="pain-stat">Weeks to onboard new members</div>
					<div class="solution-arrow">→</div>
					<div class="solution-text">
						<strong>.faf TURBO:</strong> Ask AI to explain<br/>
						Plain English documentation
					</div>
				</div>

				<div class="pain-card">
					<div class="pain-icon">🔍</div>
					<div class="pain-quote">"I have 47 workflows. Which one handles Stripe webhooks?"</div>
					<div class="pain-label">Search = Impossible</div>
					<div class="pain-stat">Manual inspection workflow-by-workflow</div>
					<div class="solution-arrow">→</div>
					<div class="solution-text">
						<strong>.faf TURBO:</strong> Cross-workflow search<br/>
						Find patterns instantly
					</div>
				</div>
			</div>

			<div class="reality-check">
				<h3 class="reality-title">The Reality of n8n at Scale</h3>
				<div class="reality-grid">
					<div class="reality-without">
						<div class="reality-header">WITHOUT .faf TURBO</div>
						<ul class="reality-list">
							<li>❌ 24 hours of version history (free)</li>
							<li>❌ No AI can read your workflows</li>
							<li>❌ "Error 400" with no context</li>
							<li>❌ Manual workflow documentation</li>
							<li>❌ Can't search across workflows</li>
							<li>❌ 2AM debugging nightmares</li>
							<li>❌ "What changed?" = mystery</li>
							<li>❌ Enterprise pricing for version control</li>
						</ul>
					</div>
					<div class="reality-with">
						<div class="reality-header">WITH .faf TURBO</div>
						<ul class="reality-list">
							<li>☑️ Unlimited Git-based history</li>
							<li>☑️ AI understands your workflows</li>
							<li>☑️ Context-aware error diagnosis</li>
							<li>☑️ Auto-generated documentation</li>
							<li>☑️ Cross-workflow intelligence</li>
							<li>☑️ 85% faster incident resolution</li>
							<li>☑️ AI diffs: "Here's what broke"</li>
							<li>☑️ $10/month (lock in forever)</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="enterprise-comparison">
				<h3 class="comparison-title">Why Pay Enterprise Prices?</h3>
				<div class="comparison-grid">
					<div class="comparison-card n8n-enterprise">
						<div class="comparison-logo">n8n Enterprise</div>
						<div class="comparison-price">$$$$ / month</div>
						<div class="comparison-features">
							<div class="feature-item">☑️ Full version history</div>
							<div class="feature-item">☑️ Team collaboration</div>
							<div class="feature-item">❌ AI workflow understanding</div>
							<div class="feature-item">❌ Cross-workflow search</div>
							<div class="feature-item">❌ AI-assisted debugging</div>
						</div>
					</div>
					<div class="comparison-vs">VS</div>
					<div class="comparison-card turbo-card">
						<div class="comparison-logo turbo-logo">.faf TURBO</div>
						<div class="comparison-price turbo-price">
							<span class="strike">$30</span> $10/month
							<div class="code-badge">Code: FAST</div>
						</div>
						<div class="comparison-features">
							<div class="feature-item">☑️ Unlimited Git history</div>
							<div class="feature-item">☑️ Team-ready (Git native)</div>
							<div class="feature-item">☑️ AI workflow understanding</div>
							<div class="feature-item">☑️ Cross-workflow intelligence</div>
							<div class="feature-item">☑️ AI-assisted debugging</div>
						</div>
					</div>
				</div>
			</div>

			<div class="cta-section">
				<h3 class="cta-title">Stop Fighting Your Workflows</h3>
				<p class="cta-description">
					Calculate how much time (and sleep) you're losing to n8n's limitations.
				</p>
				<div class="cta-buttons">
					<a href="/automation-calculator" class="btn-calculator">
						⚡️ Calculate Time Savings
					</a>
					<a href="/incident-calculator" class="btn-incident">
						🔥 Calculate Incident Costs
					</a>
					<a href="https://fafdev.tools" class="btn-discover" target="_blank" rel="noopener noreferrer">
						🍊 Try the .faf Tool →
					</a>
					<a href="#pricing" class="btn-primary">
						Get TURBO for $10/month →
					</a>
				</div>
				<p class="cta-subtext">Lock in this rate forever. No BS.</p>
			</div>
		</div>
	</div>
</section>

<style>
	.n8n-pain-points {
		padding: 5rem 0;
		background: linear-gradient(180deg, var(--faf-cream) 0%, var(--faf-white) 50%, var(--faf-cream) 100%);
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

	.killer-quote {
		background: var(--faf-white);
		border: 3px solid #019193;
		border-radius: 16px;
		padding: 3rem 2rem;
		margin-bottom: 2rem;
		box-shadow: 0 8px 24px rgba(1, 145, 147, 0.2);
		position: relative;
	}

	.quote-mark {
		font-size: 6rem;
		color: #019193;
		opacity: 0.2;
		position: absolute;
		top: 1rem;
		left: 2rem;
		line-height: 1;
		font-family: Georgia, serif;
	}

	.quote-text {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 700;
		color: var(--faf-gray-dark);
		line-height: 1.3;
		position: relative;
		z-index: 1;
		margin-bottom: 1rem;
	}

	.quote-text .highlight {
		color: #019193;
		font-weight: 900;
		background: linear-gradient(180deg, transparent 60%, rgba(1, 145, 147, 0.2) 60%);
	}

	.quote-attribution {
		font-size: 1rem;
		color: var(--faf-gray-dark);
		font-style: italic;
	}

	.section-subtitle {
		font-size: 1.5rem;
		color: var(--faf-gray-dark);
		line-height: 1.4;
	}

	.section-subtitle strong {
		color: #019193;
		font-weight: 900;
	}

	/* Championship Positioning */
	.championship-hero {
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(1, 145, 147, 0.1) 100%);
		border: 3px solid var(--faf-orange);
		border-radius: 20px;
		padding: 3rem 2rem;
		margin: 3rem 0 4rem;
		box-shadow: 0 12px 32px rgba(255, 107, 53, 0.2);
	}

	.championship-badge {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.badge-icon {
		font-size: 4rem;
		line-height: 1;
	}

	.badge-content {
		text-align: left;
	}

	.championship-title {
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 900;
		color: var(--faf-black);
		margin: 0 0 0.5rem 0;
		line-height: 1.2;
	}

	.championship-subtitle {
		font-size: 1.125rem;
		color: var(--faf-gray-dark);
		margin: 0;
		font-weight: 600;
	}

	.championship-description {
		font-size: 1.25rem;
		text-align: center;
		color: var(--faf-gray-dark);
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	.championship-description strong {
		color: #019193;
		font-weight: 700;
	}

	.highlight-orange {
		color: var(--faf-orange);
		font-weight: 900;
		background: linear-gradient(180deg, transparent 60%, rgba(255, 107, 53, 0.2) 60%);
	}

	.championship-comparison-quick {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
		margin-top: 2rem;
	}

	.comparison-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: var(--faf-white);
		padding: 1.25rem 1.5rem;
		border-radius: 12px;
		border: 2px solid var(--faf-gray-light);
		transition: all 0.3s ease;
		min-width: 200px;
	}

	.comparison-item:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.comparison-item.result {
		border-color: var(--faf-orange);
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, var(--faf-white) 100%);
		box-shadow: 0 4px 16px rgba(255, 107, 53, 0.3);
	}

	.item-icon {
		font-size: 2.5rem;
		line-height: 1;
	}

	.item-text {
		font-size: 0.95rem;
		line-height: 1.4;
		color: var(--faf-gray-dark);
	}

	.item-text strong {
		font-size: 1.125rem;
		color: var(--faf-black);
		display: block;
		margin-bottom: 0.25rem;
	}

	.plus-symbol,
	.equals-symbol {
		font-size: 2rem;
		font-weight: 900;
		color: var(--faf-gray-medium);
	}

	.pain-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto 4rem;
	}

	.pain-card {
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-light);
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s ease;
	}

	.pain-card:hover {
		transform: translateY(-4px);
		border-color: #019193;
		box-shadow: 0 8px 16px rgba(1, 145, 147, 0.2);
	}

	.pain-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.pain-quote {
		font-size: 1rem;
		font-style: italic;
		color: var(--faf-gray-dark);
		margin-bottom: 1rem;
		line-height: 1.5;
		min-height: 3em;
	}

	.pain-label {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.pain-stat {
		font-size: 0.875rem;
		color: #dc2626;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.solution-arrow {
		font-size: 1.5rem;
		color: #019193;
		text-align: center;
		margin: 1rem 0;
	}

	.solution-text {
		font-size: 0.95rem;
		color: var(--faf-gray-dark);
		line-height: 1.6;
		padding: 1rem;
		background: rgba(1, 145, 147, 0.05);
		border-radius: 8px;
		border-left: 3px solid #019193;
	}

	.solution-text strong {
		color: #019193;
		font-weight: 700;
	}

	.reality-check {
		max-width: 1200px;
		margin: 0 auto 4rem;
	}

	.reality-title {
		font-size: 2rem;
		font-weight: 900;
		color: var(--faf-black);
		text-align: center;
		margin-bottom: 2rem;
	}

	.reality-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.reality-without,
	.reality-with {
		background: var(--faf-white);
		border-radius: 12px;
		padding: 2rem;
		border: 3px solid var(--faf-gray-medium);
	}

	.reality-with {
		border-color: #019193;
		box-shadow: 0 8px 16px rgba(1, 145, 147, 0.2);
	}

	.reality-header {
		font-size: 1.25rem;
		font-weight: 900;
		text-align: center;
		padding: 1rem;
		margin-bottom: 1.5rem;
		border-radius: 8px;
	}

	.reality-without .reality-header {
		background: rgba(220, 38, 38, 0.1);
		color: #dc2626;
	}

	.reality-with .reality-header {
		background: #019193;
		color: var(--faf-white);
	}

	.reality-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.reality-list li {
		font-size: 1rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid var(--faf-gray-light);
		line-height: 1.5;
	}

	.reality-list li:last-child {
		border-bottom: none;
	}

	.enterprise-comparison {
		max-width: 1200px;
		margin: 0 auto 4rem;
	}

	.comparison-title {
		font-size: 2rem;
		font-weight: 900;
		color: var(--faf-black);
		text-align: center;
		margin-bottom: 2rem;
	}

	.comparison-grid {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 2rem;
		align-items: center;
	}

	.comparison-card {
		background: var(--faf-white);
		border: 3px solid var(--faf-gray-medium);
		border-radius: 16px;
		padding: 2rem;
	}

	.comparison-card.turbo-card {
		border-color: #019193;
		box-shadow: 0 8px 24px rgba(1, 145, 147, 0.3);
	}

	.comparison-logo {
		font-size: 1.5rem;
		font-weight: 900;
		text-align: center;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.turbo-logo {
		color: #019193;
		font-family: var(--font-mono);
	}

	.comparison-price {
		font-size: 2rem;
		font-weight: 900;
		text-align: center;
		color: var(--faf-gray-dark);
		margin-bottom: 1.5rem;
	}

	.turbo-price {
		color: #019193;
	}

	.turbo-price .strike {
		text-decoration: line-through;
		color: var(--faf-gray-medium);
		font-size: 1.5rem;
	}

	.code-badge {
		font-size: 0.875rem;
		background: #019193;
		color: var(--faf-white);
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		display: inline-block;
		margin-top: 0.5rem;
		font-weight: 700;
	}

	.comparison-features {
		border-top: 2px solid var(--faf-gray-light);
		padding-top: 1rem;
	}

	.feature-item {
		font-size: 1rem;
		padding: 0.5rem 0;
		color: var(--faf-gray-dark);
	}

	.comparison-vs {
		font-size: 2rem;
		font-weight: 900;
		color: var(--faf-gray-medium);
		text-align: center;
	}

	.cta-section {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		background: #019193;
		color: var(--faf-white);
		border-radius: 16px;
		padding: 3rem 2rem;
		border: 3px solid var(--faf-black);
		box-shadow: 0 12px 24px rgba(1, 145, 147, 0.3);
	}

	.cta-title {
		font-size: 2.5rem;
		font-weight: 900;
		margin-bottom: 1rem;
		color: var(--faf-white);
	}

	.cta-description {
		font-size: 1.25rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		color: var(--faf-white);
	}

	.cta-buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	.btn-calculator,
	.btn-incident,
	.btn-discover,
	.btn-primary {
		display: inline-block;
		padding: 1rem 2rem;
		border-radius: 8px;
		font-weight: 700;
		font-size: 1.125rem;
		text-decoration: none;
		border: 2px solid;
		transition: all 0.3s ease;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		min-width: 300px;
	}

	.btn-calculator {
		background: var(--faf-black);
		color: var(--faf-white);
		border-color: var(--faf-black);
	}

	.btn-calculator:hover {
		background: var(--faf-white);
		color: var(--faf-black);
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
	}

	.btn-incident {
		background: #dc2626;
		color: var(--faf-white);
		border-color: #dc2626;
	}

	.btn-incident:hover {
		background: var(--faf-white);
		color: #dc2626;
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(220, 38, 38, 0.3);
	}

	.btn-discover {
		background: var(--faf-orange);
		color: var(--faf-white);
		border-color: var(--faf-orange);
	}

	.btn-discover:hover {
		background: var(--faf-white);
		color: var(--faf-orange);
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(255, 107, 53, 0.3);
	}

	.btn-primary {
		background: var(--faf-white);
		color: #019193;
		border-color: var(--faf-white);
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

	@media (max-width: 768px) {
		.pain-grid {
			grid-template-columns: 1fr;
		}

		.reality-grid {
			grid-template-columns: 1fr;
		}

		.comparison-grid {
			grid-template-columns: 1fr;
		}

		.comparison-vs {
			transform: rotate(90deg);
		}

		.quote-text {
			font-size: 1.25rem;
		}

		.quote-mark {
			font-size: 4rem;
		}

		.championship-badge {
			flex-direction: column;
			text-align: center;
		}

		.badge-content {
			text-align: center;
		}

		.championship-comparison-quick {
			flex-direction: column;
		}

		.plus-symbol,
		.equals-symbol {
			transform: rotate(90deg);
		}
	}
</style>
