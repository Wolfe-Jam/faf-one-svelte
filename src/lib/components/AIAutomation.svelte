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
				<h2 class="section-title">AI-Automation Intelligence</h2>
				<p class="section-subtitle">
					The automation industry is fragmenting.<br/>
					<strong>.faf is the universal standard.</strong>
				</p>
			</div>

			<div class="problem-section">
				<h3 class="problem-title">The Problem</h3>
				<div class="platform-grid">
					<div class="platform-item">
						<div class="platform-name">n8n</div>
						<div class="platform-format">proprietary JSON</div>
					</div>
					<div class="platform-item">
						<div class="platform-name">Make.com</div>
						<div class="platform-format">blueprint format</div>
					</div>
					<div class="platform-item">
						<div class="platform-name">OpenAI</div>
						<div class="platform-format">assistant schema</div>
					</div>
					<div class="platform-item">
						<div class="platform-name">Google Opal</div>
						<div class="platform-format">mini-app config</div>
					</div>
					<div class="platform-item">
						<div class="platform-name">Zapier</div>
						<div class="platform-format">zap format</div>
					</div>
					<div class="platform-item">
						<div class="platform-name">+ 100s more</div>
						<div class="platform-format">all different</div>
					</div>
				</div>
				<p class="problem-statement">
					Each platform has its own format. Your automation intelligence is trapped in silos.<br/>
					<strong>AI can't help if it doesn't understand your workflows.</strong>
				</p>
			</div>

			<div class="solution-arrow">
				<div class="arrow-symbol">↓</div>
				<div class="arrow-text">.faf solves this</div>
			</div>

			<div class="solution-section">
				<h3 class="solution-title">The Universal Adapter</h3>
				<div class="adapter-visual">
					<div class="adapter-input">
						<div class="input-label">Any Platform</div>
						<div class="input-formats">
							n8n • Make • OpenAI • Opal • Zapier • etc.
						</div>
					</div>
					<div class="adapter-arrow">→</div>
					<div class="adapter-faf">
						<div class="faf-box">.faf</div>
						<div class="faf-tagline">Universal Format</div>
					</div>
					<div class="adapter-arrow">→</div>
					<div class="adapter-output">
						<div class="output-label">AI-Ready</div>
						<div class="output-benefits">
							Context • Search • Documentation • RAG
						</div>
					</div>
				</div>
			</div>

			<div class="value-props">
				<div class="value-card">
					<div class="value-icon">🎯</div>
					<h4 class="value-title">AI Context for Automations</h4>
					<p class="value-description">
						Your automation projects are just projects. Give them the same AI context your code has.
					</p>
				</div>
				<div class="value-card">
					<div class="value-icon">🔍</div>
					<h4 class="value-title">Cross-Platform Intelligence</h4>
					<p class="value-description">
						Search, compare, and understand automations across any platform. No more silos.
					</p>
				</div>
				<div class="value-card">
					<div class="value-icon">📚</div>
					<h4 class="value-title">Template Library Access</h4>
					<p class="value-description">
						10,000+ automation templates become AI-searchable. Find patterns, learn approaches.
					</p>
				</div>
				<div class="value-card">
					<div class="value-icon">🚀</div>
					<h4 class="value-title">Future-Proof Standard</h4>
					<p class="value-description">
						When the next automation platform launches, .faf is already the standard. Stay ahead.
					</p>
				</div>
			</div>

			<div class="availability">
				<div class="availability-badge">
					<span class="badge-icon">⚡️</span>
					<span class="badge-text">NOW AVAILABLE</span>
				</div>
				<h3 class="availability-title">TURBO Automation</h3>
				<p class="availability-description">
					Server-side workflow intelligence for n8n, Make.com, OpenAI Assistants, and Google Opal.<br/>
					More platforms coming soon.
				</p>
				<div class="availability-cta">
					<a href="/automation-calculator" class="btn-calculator">
						Calculate Your Savings →
					</a>
					<a href="#pricing" class="btn-primary">
						Get TURBO for $10/month →
					</a>
					<p class="cta-subtext">Lock in this rate forever. No BS.</p>
				</div>
			</div>

			<div class="future-teaser">
				<div class="teaser-icon">🔮</div>
				<h4 class="teaser-title">What's Next?</h4>
				<p class="teaser-text">
					RAG for automation intelligence is coming. Imagine searching across thousands of workflows,<br/>
					finding patterns, asking "how do others solve this?" across every platform.<br/>
					<strong>.faf makes this possible.</strong>
				</p>
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
		font-size: 1.5rem;
		color: var(--faf-gray-dark);
		line-height: 1.4;
	}

	.section-subtitle strong {
		color: #019193;
	}

	.problem-section {
		max-width: 900px;
		margin: 0 auto 3rem;
		text-align: center;
	}

	.problem-title {
		font-size: 2rem;
		font-weight: 900;
		color: var(--faf-black);
		margin-bottom: 2rem;
	}

	.platform-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.platform-item {
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 8px;
		padding: 1rem;
		transition: all 0.3s ease;
	}

	.platform-item:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		border-color: #019193;
	}

	.platform-name {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 0.25rem;
	}

	.platform-format {
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
		font-family: var(--font-mono);
	}

	.problem-statement {
		font-size: 1.125rem;
		color: var(--faf-gray-dark);
		line-height: 1.6;
		margin-top: 2rem;
	}

	.problem-statement strong {
		color: var(--faf-black);
		font-weight: 700;
	}

	.solution-arrow {
		text-align: center;
		margin: 3rem 0;
	}

	.arrow-symbol {
		font-size: 4rem;
		color: #019193;
		line-height: 1;
		animation: bounce 2s infinite;
	}

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(10px); }
	}

	.arrow-text {
		font-size: 1.5rem;
		font-weight: 700;
		color: #019193;
		margin-top: 0.5rem;
	}

	.solution-section {
		max-width: 1000px;
		margin: 0 auto 4rem;
	}

	.solution-title {
		font-size: 2rem;
		font-weight: 900;
		color: var(--faf-black);
		text-align: center;
		margin-bottom: 2rem;
	}

	.adapter-visual {
		display: grid;
		grid-template-columns: 1fr auto 1fr auto 1fr;
		gap: 1.5rem;
		align-items: center;
		background: var(--faf-white);
		border: 3px solid #019193;
		border-radius: 16px;
		padding: 2rem;
		box-shadow: 0 8px 16px rgba(1, 145, 147, 0.2);
	}

	.adapter-input, .adapter-output {
		text-align: center;
	}

	.input-label, .output-label {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.input-formats, .output-benefits {
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
		line-height: 1.6;
	}

	.adapter-arrow {
		font-size: 2rem;
		color: #019193;
		font-weight: 900;
	}

	.adapter-faf {
		text-align: center;
	}

	.faf-box {
		background: #019193;
		color: var(--faf-white);
		font-size: 2rem;
		font-weight: 900;
		font-family: var(--font-mono);
		padding: 1rem 2rem;
		border-radius: 12px;
		border: 3px solid var(--faf-black);
		box-shadow: 0 4px 12px rgba(1, 145, 147, 0.3);
		margin-bottom: 0.5rem;
	}

	.faf-tagline {
		font-size: 0.875rem;
		font-weight: 700;
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

	.availability {
		max-width: 600px;
		margin: 0 auto 4rem;
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

	.future-teaser {
		max-width: 700px;
		margin: 0 auto;
		text-align: center;
		padding: 2rem;
		background: rgba(1, 145, 147, 0.05);
		border: 2px dashed #019193;
		border-radius: 12px;
	}

	.teaser-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.teaser-title {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 1rem;
	}

	.teaser-text {
		font-size: 1rem;
		color: var(--faf-gray-dark);
		line-height: 1.6;
		margin: 0;
	}

	.teaser-text strong {
		color: #019193;
		font-weight: 700;
	}

	@media (max-width: 768px) {
		.platform-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.adapter-visual {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.adapter-arrow {
			transform: rotate(90deg);
		}

		.value-props {
			grid-template-columns: 1fr;
		}

		.section-subtitle,
		.problem-statement,
		.teaser-text {
			font-size: 1rem;
		}
	}
</style>
