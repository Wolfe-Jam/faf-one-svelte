<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Support | .faf Format</title>
</svelte:head>

<Navigation />

<main class="support-page">
	<div class="container">
		<div class="support-header">
			<h1>🤖 Software Club</h1>
			<p class="subtitle">Features • Ideas • Bugs • No faff to join</p>
		</div>

		<div class="support-grid">
			<!-- Quick Help -->
			<div class="support-card">
				<div class="card-icon">⚡</div>
				<h3>Quick Help</h3>
				<ul>
					<li><a href="/docs">Documentation</a></li>
					<li><a href="/docs#faq">FAQ</a></li>
					<li><a href="https://github.com/Wolfe-Jam/faf/issues" target="_blank">Known Issues</a></li>
				</ul>
			</div>

			<!-- Contact Options -->
			<div class="support-card">
				<div class="card-icon">📧</div>
				<h3>Contact Us</h3>
				<p>Email: <a href="mailto:support@faf.one">support@faf.one</a></p>
				<p>Response time: Within 24 hours</p>
				<p class="priority-note">🏆 LEGENDS get priority support</p>
			</div>

			<!-- Community -->
			<div class="support-card">
				<div class="card-icon">🤝</div>
				<h3>Community</h3>
				<ul>
					<li><a href="https://github.com/Wolfe-Jam/faf/discussions" target="_blank">GitHub Discussions</a></li>
					<li><a href="https://x.com/wolfe_jam" target="_blank">X (Twitter)</a></li>
					<li><a href="/founders">Founders Circle</a></li>
				</ul>
			</div>
		</div>

		<!-- FAQ Section -->
		<div class="faq-section">
			<h2>🤔 Frequently Asked Questions</h2>

			<div class="faq-item">
				<h3>What's the difference between .faf and package.json?</h3>
				<p>package.json tells AI what dependencies you have. .faf tells AI how to use them, what your project does, and provides complete context. It's like the difference between a grocery list and a recipe.</p>
			</div>

			<div class="faq-item">
				<h3>Do I need the Chrome Extension?</h3>
				<p>No, but it helps! The extension automatically extracts context from web-based IDEs (Monaco, GitHub, CodeSandbox) and adds it to your .faf file. It's especially useful for Chrome Extension development.</p>
			</div>

			<div class="faq-item">
				<h3>What's MCP and why 30+ tools?</h3>
				<p>MCP (Model Context Protocol) is Anthropic's standard for AI tool integration. Our MCP server provides 30+ tools that let Claude directly work with .faf files - reading, writing, scoring, and optimizing them.</p>
			</div>

			<div class="faq-item">
				<h3>Is .faf really free?</h3>
				<p>Yes! 100% free forever for the current version. No caps, no limits. We believe good developer tools should be accessible to everyone.</p>
			</div>

			<div class="faq-item">
				<h3>How do I get started?</h3>
				<p>Just run <code>npm install -g faf-cli</code> then <code>faf init</code> in your project. That's it! Your project now has AI context.</p>
			</div>
		</div>

		<!-- Common Issues -->
		<div class="common-issues">
			<h2>🔧 Troubleshooting</h2>

			<div class="issue-item">
				<h3>CLI not found after installation</h3>
				<p>Make sure npm's global bin directory is in your PATH:</p>
				<div class="code-block">
					<pre><code>npm config get prefix
export PATH=$PATH:$(npm config get prefix)/bin</code></pre>
				</div>
			</div>

			<div class="issue-item">
				<h3>.faf file not being recognized</h3>
				<p>Ensure your .faf file is valid YAML:</p>
				<div class="code-block">
					<pre><code>faf validate</code></pre>
				</div>
			</div>

			<div class="issue-item">
				<h3>Chrome Extension not detecting .faf</h3>
				<p>Refresh the page and ensure the extension has permissions for the site.</p>
			</div>
		</div>

		<div class="contact-form">
			<h2>🏁 Join the Software Club</h2>
			<p class="form-subtitle">No signup required - just share your thoughts</p>
			<form action="https://formspree.io/f/xyzwolfe" method="POST">
				<div class="form-group">
					<label for="name">Name (optional)</label>
					<input type="text" id="name" name="name" placeholder="Anonymous is fine">
				</div>

				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" id="email" name="email" required placeholder="For our reply">
				</div>

				<div class="form-group">
					<label for="category">What's this about?</label>
					<select id="category" name="category" required>
						<option value="">Pick one...</option>
						<option value="bug">🐛 Bug Report</option>
						<option value="feature">✨ Feature Idea</option>
						<option value="idea">💡 General Idea</option>
						<option value="help">❓ Need Help</option>
						<option value="feedback">💬 Feedback</option>
					</select>
				</div>

				<div class="form-group">
					<label for="message">Tell us more</label>
					<textarea id="message" name="message" rows="6" required placeholder="Be honest, we can take it..."></textarea>
				</div>

				<button type="submit" class="btn-submit">Send to Software Club →</button>
			</form>
		</div>

		<div class="emergency-banner">
			<h3>🚨 Urgent Issue?</h3>
			<p>LEGENDS and Enterprise customers can reach us directly at <strong>priority@faf.one</strong></p>
		</div>
	</div>
</main>

<Footer />

<style>
	.support-page {
		padding: 6rem 0 4rem;
		min-height: 100vh;
		background: var(--faf-white);
	}

	.support-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.support-header h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--faf-gray-dark);
	}

	.support-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 4rem;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
	}

	.support-card {
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 12px;
		padding: 2rem;
		text-align: center;
		transition: all 0.3s ease;
	}

	.support-card:hover {
		border-color: var(--faf-orange);
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(0,0,0,0.1);
	}

	.card-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.support-card h3 {
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.support-card ul {
		list-style: none;
		padding: 0;
	}

	.support-card li {
		margin: 0.5rem 0;
	}

	.support-card a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}

	.support-card a:hover {
		text-decoration: underline;
	}

	.priority-note {
		margin-top: 1rem;
		padding: 0.5rem;
		background: linear-gradient(135deg, #fff5f0 0%, white 100%);
		border-radius: 8px;
		color: var(--faf-orange);
		font-weight: 600;
	}

	/* FAQ Section Styles */
	.faq-section {
		max-width: 800px;
		margin: 0 auto 4rem;
	}

	.faq-section h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: center;
		color: var(--faf-black);
	}

	.faq-item {
		background: var(--faf-white);
		border: 2px solid var(--faf-light-gray);
		border-radius: 12px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
		transition: all 0.3s ease;
	}

	.faq-item:hover {
		border-color: var(--faf-orange);
		transform: translateX(5px);
	}

	.faq-item h3 {
		margin-bottom: 0.75rem;
		color: var(--faf-dark);
		font-size: 1.2rem;
	}

	.faq-item p {
		color: var(--faf-gray-dark);
		line-height: 1.6;
	}

	.faq-item code {
		background: var(--faf-cream);
		color: var(--faf-orange);
		padding: 0.2em 0.4em;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.9em;
	}

	.common-issues {
		max-width: 800px;
		margin: 0 auto 4rem;
	}

	.common-issues h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: center;
		color: var(--faf-black);
	}

	.issue-item {
		background: #f9f9f9;
		border-radius: 12px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.issue-item h3 {
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.code-block {
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 1rem;
		border-radius: 8px;
		margin: 1rem 0;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
		font-family: var(--font-mono);
		font-size: 0.9rem;
	}

	.contact-form {
		max-width: 600px;
		margin: 0 auto 3rem;
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 12px;
		padding: 2rem;
	}

	.contact-form h2 {
		margin-bottom: 0.5rem;
		text-align: center;
		color: var(--faf-black);
	}

	.form-subtitle {
		text-align: center;
		color: var(--faf-gray);
		margin-bottom: 2rem;
		font-style: italic;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: var(--faf-black);
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid var(--faf-gray-medium);
		border-radius: 8px;
		font-size: 1rem;
		transition: border-color 0.2s ease;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--faf-orange);
	}

	.btn-submit {
		width: 100%;
		padding: 1rem;
		background: var(--faf-orange);
		color: var(--faf-white);
		border: none;
		border-radius: 8px;
		font-size: 1.125rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.btn-submit:hover {
		background: #ff5a20;
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
	}

	.emergency-banner {
		background: linear-gradient(135deg, var(--faf-black) 0%, #1a1a1a 100%);
		color: var(--faf-white);
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.emergency-banner h3 {
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	.emergency-banner strong {
		color: var(--faf-orange);
	}

	@media (max-width: 768px) {
		.support-grid {
			grid-template-columns: 1fr;
		}

		.support-header h1 {
			font-size: 2rem;
		}
	}
</style>