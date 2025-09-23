<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Privacy Policy | .faf - The JPEG for AI</title>
</svelte:head>

<Navigation />

<main class="legal-page">
	<div class="container">
		<h1>Privacy Policy</h1>
		<p class="last-updated">Last Updated: September 23, 2025</p>
		
		<section>
			<h2>Our Promise</h2>
			<p><strong>NO BS Privacy:</strong> We collect only what's necessary, protect it fiercely, and never sell your data. Period.</p>
		</section>

		<section>
			<h2>1. Information We Collect</h2>
			<h3>When You Sign Up:</h3>
			<ul>
				<li>Email address (for account access)</li>
				<li>Payment information (processed by Stripe - we never see your card details)</li>
			</ul>
			
			<h3>When You Use .faf:</h3>
			<ul>
				<li>Project metadata (to calculate your FAF score)</li>
				<li>Usage statistics (to improve the service)</li>
				<li>Error logs (to fix bugs)</li>
			</ul>
		</section>

		<section>
			<h2>2. How We Use Your Information</h2>
			<ul>
				<li>Process your subscription</li>
				<li>Send important updates (no spam, ever)</li>
				<li>Improve the .faf format and tools</li>
				<li>Provide customer support</li>
			</ul>
		</section>

		<section>
			<h2>3. Data Storage & Security</h2>
			<ul>
				<li><strong>Encryption:</strong> All data encrypted in transit and at rest</li>
				<li><strong>Location:</strong> Stored on secure servers in the United States</li>
				<li><strong>Access:</strong> Limited to essential personnel only</li>
				<li><strong>Retention:</strong> Deleted 30 days after account closure</li>
			</ul>
		</section>

		<section>
			<h2>4. Third-Party Services</h2>
			<p>We use trusted partners:</p>
			<ul>
				<li><strong>Stripe:</strong> Payment processing (PCI compliant)</li>
				<li><strong>Formspree:</strong> Email capture (GDPR compliant)</li>
				<li><strong>Vercel:</strong> Website hosting (SOC 2 compliant)</li>
			</ul>
			<p>Each has their own privacy policy. We chose them for their security standards.</p>
		</section>

		<section>
			<h2>5. Your Rights</h2>
			<p>You can always:</p>
			<ul>
				<li>Access your data</li>
				<li>Correct inaccuracies</li>
				<li>Delete your account</li>
				<li>Export your information</li>
				<li>Opt-out of communications</li>
			</ul>
			<p>Email <a href="mailto:faf@wolfejam.dev">faf@wolfejam.dev</a> for any data requests.</p>
		</section>

		<section>
			<h2>6. Cookies</h2>
			<p>We use minimal cookies:</p>
			<ul>
				<li>Essential cookies for authentication</li>
				<li>Analytics to improve the service (anonymous)</li>
				<li>No tracking cookies</li>
				<li>No advertising cookies</li>
			</ul>
		</section>

		<section>
			<h2>7. Children's Privacy</h2>
			<p>The Service is not intended for users under 13. We don't knowingly collect data from children.</p>
		</section>

		<section>
			<h2>8. Changes to This Policy</h2>
			<p>We'll notify you of significant changes via email. Continued use means acceptance of updates.</p>
		</section>

		<section>
			<h2>9. Contact Us</h2>
			<p>Privacy questions or concerns?</p>
			<p>Email: <a href="mailto:faf@wolfejam.dev">faf@wolfejam.dev</a></p>
			<p>Location: Atlanta, GA, USA</p>
		</section>

		<section class="privacy-commitment">
			<h2>🧡 Our Commitment</h2>
			<p>Your trust is everything. We'll never:</p>
			<ul>
				<li>Sell your data</li>
				<li>Share without permission</li>
				<li>Use dark patterns</li>
				<li>Hide important details</li>
			</ul>
			<p><strong>This is the NO BS way.</strong></p>
		</section>

		<div class="legal-footer">
			<p>© {new Date().getFullYear()} FAF. The JPEG for AI.</p>
			<p>Your privacy matters. No BS. 🧡</p>
		</div>
	</div>
</main>

<Footer />

<style>
	.legal-page {
		min-height: calc(100vh - 200px);
		padding: 4rem 0;
		background: var(--faf-white);
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.last-updated {
		color: var(--faf-gray-dark);
		font-size: 1rem;
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 2px solid var(--faf-gray-light);
	}

	section {
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: var(--faf-orange);
	}

	h3 {
		font-size: 1.2rem;
		margin-bottom: 0.75rem;
		margin-top: 1rem;
		color: var(--faf-black);
	}

	p {
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	ul {
		margin-left: 2rem;
		margin-bottom: 1rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}

	a:hover {
		text-decoration: underline;
	}

	.privacy-commitment {
		background: linear-gradient(135deg, #fff5f0 0%, var(--faf-white) 100%);
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid var(--faf-orange);
		margin-top: 3rem;
	}

	.legal-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 2px solid var(--faf-gray-light);
		text-align: center;
		color: var(--faf-gray-dark);
	}

	.legal-footer p {
		margin-bottom: 0.5rem;
	}
</style>