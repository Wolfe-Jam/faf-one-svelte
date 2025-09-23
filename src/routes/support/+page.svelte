<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Support | .faf - The JPEG for AI</title>
</svelte:head>

<Navigation />

<main class="support-page">
	<div class="container">
		<h1>🧡 Support Center</h1>
		<p class="subtitle">Real humans. Real help. NO BS.</p>
		
		<div class="support-grid">
			<!-- Email Support -->
			<div class="support-card primary">
				<div class="card-icon">📧</div>
				<h2>Email Support</h2>
				<p>Get help from our team</p>
				<a href="mailto:support@faf.one" class="support-link">
					support@faf.one
				</a>
				<p class="response-time">Response within 24 hours</p>
			</div>

			<!-- Founders Direct -->
			<div class="support-card premium">
				<div class="badge-premium">FOUNDERS ONLY</div>
				<div class="card-icon">🏆</div>
				<h2>Creator Direct</h2>
				<p>Direct line to the creator</p>
				<a href="mailto:faf@wolfejam.dev" class="support-link">
					faf@wolfejam.dev
				</a>
				<p class="response-time">Priority response</p>
			</div>

			<!-- Customer Portal -->
			<div class="support-card">
				<div class="card-icon">⚙️</div>
				<h2>Manage Account</h2>
				<p>Billing, invoices, subscription</p>
				<a href="https://billing.stripe.com/p/login/4gM3cx1NPbfo42Lab6bV600" 
				   target="_blank" 
				   class="support-link">
					Customer Portal →
				</a>
				<p class="response-time">Self-service 24/7</p>
			</div>

			<!-- Documentation -->
			<div class="support-card">
				<div class="card-icon">📚</div>
				<h2>Documentation</h2>
				<p>Guides, tutorials, API docs</p>
				<a href="https://github.com/faf-cli" 
				   target="_blank" 
				   class="support-link">
					View Docs →
				</a>
				<p class="response-time">Always up-to-date</p>
			</div>
		</div>

		<section class="faq">
			<h2>Frequently Asked Questions</h2>
			
			<div class="faq-item">
				<h3>How do I get started with .faf?</h3>
				<p>Run <code>npx faf init</code> in your project directory. The CLI will guide you through creating your first .faf file in under 3 minutes.</p>
			</div>

			<div class="faq-item">
				<h3>What's included in Founders Circle?</h3>
				<p>Everything! Full toolkit, unlimited projects, Context-Mirroring™, priority support, and all future updates. Lock in $9/year forever (normally $100).</p>
			</div>

			<div class="faq-item">
				<h3>Can I cancel anytime?</h3>
				<p>Yes! Cancel anytime via the Customer Portal. Your access continues until the end of your billing period. 30-day money-back guarantee.</p>
			</div>

			<div class="faq-item">
				<h3>Does .faf work with all AI tools?</h3>
				<p>Yes! The format is universal. Officially integrated with Claude (MCP), ChatGPT, Cursor, and more. Works with any tool that reads YAML/Markdown.</p>
			</div>

			<div class="faq-item">
				<h3>Is my project data private?</h3>
				<p>100% yes. Your .faf files stay in your project. We never see your code or project details. The format runs locally.</p>
			</div>

			<div class="faq-item">
				<h3>What's Context-Mirroring™?</h3>
				<p>Bi-directional sync between .faf and CLAUDE.md files. Updates in 40ms. Your AI context stays perfect automatically.</p>
			</div>
		</section>

		<section class="contact-form">
			<h2>Send Us a Message</h2>
			<p>Need help? Have feedback? Just want to say hi? 🧡</p>
			
			<div class="form-notice">
				<p>📧 For fastest response, email <a href="mailto:support@faf.one">support@faf.one</a> directly.</p>
			</div>
		</section>

		<div class="support-footer">
			<h3>Our Support Promise</h3>
			<p>Real humans. Real answers. No runaround. NO BS.</p>
			<p>We're here to help you succeed with .faf</p>
		</div>
	</div>
</main>

<Footer />

<style>
	.support-page {
		min-height: calc(100vh - 200px);
		padding: 4rem 0;
		background: var(--faf-white);
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
		text-align: center;
	}

	.subtitle {
		text-align: center;
		font-size: 1.25rem;
		color: var(--faf-gray-dark);
		margin-bottom: 3rem;
	}

	.support-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.support-card {
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-light);
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		transition: all 0.3s ease;
		position: relative;
	}

	.support-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 20px rgba(0,0,0,0.1);
	}

	.support-card.primary {
		border-color: var(--faf-orange);
		background: linear-gradient(135deg, var(--faf-white) 0%, #fff5f0 100%);
	}

	.support-card.premium {
		border-color: var(--faf-black);
		background: linear-gradient(135deg, var(--faf-white) 0%, #f9f9f9 100%);
	}

	.badge-premium {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.05em;
	}

	.card-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.support-card h2 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
	}

	.support-card p {
		color: var(--faf-gray-dark);
		margin-bottom: 1rem;
	}

	.support-link {
		display: inline-block;
		color: var(--faf-orange);
		font-weight: 700;
		font-size: 1.125rem;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border: 2px solid var(--faf-orange);
		border-radius: 8px;
		transition: all 0.2s ease;
	}

	.support-link:hover {
		background: var(--faf-orange);
		color: var(--faf-white);
		transform: scale(1.05);
	}

	.response-time {
		margin-top: 1rem;
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
		font-style: italic;
	}

	.faq {
		margin-bottom: 4rem;
	}

	.faq h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: var(--faf-orange);
		text-align: center;
	}

	.faq-item {
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: linear-gradient(135deg, #f9f9f9 0%, var(--faf-white) 100%);
		border-radius: 8px;
		border-left: 4px solid var(--faf-orange);
	}

	.faq-item h3 {
		font-size: 1.25rem;
		margin-bottom: 0.75rem;
		color: var(--faf-black);
	}

	.faq-item p {
		line-height: 1.7;
	}

	code {
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-family: var(--font-mono);
	}

	.contact-form {
		text-align: center;
		margin-bottom: 3rem;
	}

	.contact-form h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: var(--faf-orange);
	}

	.form-notice {
		background: linear-gradient(135deg, #fff5f0 0%, var(--faf-white) 100%);
		border: 2px solid var(--faf-orange);
		border-radius: 8px;
		padding: 1.5rem;
		margin-top: 1.5rem;
	}

	.form-notice a {
		color: var(--faf-orange);
		font-weight: 700;
		text-decoration: none;
	}

	.form-notice a:hover {
		text-decoration: underline;
	}

	.support-footer {
		text-align: center;
		padding-top: 3rem;
		border-top: 2px solid var(--faf-gray-light);
	}

	.support-footer h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.support-footer p {
		color: var(--faf-gray-dark);
		margin-bottom: 0.5rem;
	}

	@media (max-width: 768px) {
		.support-grid {
			grid-template-columns: 1fr;
		}
	}
</style>