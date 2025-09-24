<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Terms of Service | .faf - The JPEG for AI</title>
</svelte:head>

<Navigation />

<main class="legal-page">
	<div class="container">
		<h1>Terms of Service</h1>
		<p class="last-updated">Last Updated: September 23, 2025</p>
		
		<section>
			<h2>1. Acceptance of Terms</h2>
			<p>By accessing and using the .faf format and associated tools ("Service"), you accept and agree to be bound by these Terms of Service.</p>
		</section>

		<section>
			<h2>2. .FAF Format License</h2>
			<p>The .faf format specification is open source under MIT License. You are free to:</p>
			<ul>
				<li>Use the format in any project (personal or commercial)</li>
				<li>Modify and distribute the format</li>
				<li>Create tools and integrations</li>
			</ul>
		</section>

		<section>
			<h2>3. Founders Circle Subscription</h2>
			<p><strong>FOUNDER Pricing:</strong> $9/month (limited time WIN/WIN deal)</p>
			<p><strong>LEGENDS Pricing:</strong> $100/year (includes 🏆 badge)</p>
			<p><strong>Benefits:</strong></p>
			<ul>
				<li>Full access to .faf CLI toolkit</li>
				<li>Chrome Extension Pro features</li>
				<li>MCP Server integration</li>
				<li>Unlimited projects</li>
				<li>Priority support</li>
				<li>All future updates</li>
				<li>Direct creator access</li>
			</ul>
			<p><strong>Billing:</strong> Monthly or annual subscription, auto-renewing. Cancel anytime via Customer Portal.</p>
		</section>

		<section>
			<h2>4. Refund Policy</h2>
			<p>30-day money-back guarantee. If you're not satisfied, contact us within 30 days for a full refund. No questions asked.</p>
		</section>

		<section>
			<h2>5. Intellectual Property</h2>
			<p>You retain all rights to your project files and .faf configurations. We claim no ownership over your content.</p>
		</section>

		<section>
			<h2>6. Privacy</h2>
			<p>We collect minimal data necessary for service operation. See our <a href="/privacy">Privacy Policy</a> for details.</p>
		</section>

		<section>
			<h2>7. NO BS Guarantee</h2>
			<p>We commit to:</p>
			<ul>
				<li>No fake statistics or claims</li>
				<li>Transparent pricing</li>
				<li>Real performance metrics</li>
				<li>Honest communication</li>
			</ul>
		</section>

		<section>
			<h2>8. Limitation of Liability</h2>
			<p>The Service is provided "as is" without warranties. We're not liable for any damages arising from use of the Service.</p>
		</section>

		<section>
			<h2>9. Termination</h2>
			<p>Either party may terminate at any time. Upon termination, your subscription ends at the current billing period.</p>
		</section>

		<section>
			<h2>10. Contact</h2>
			<p>Questions? Email us at <a href="mailto:faf@wolfejam.dev">faf@wolfejam.dev</a></p>
		</section>

		<div class="legal-footer">
			<p>© {new Date().getFullYear()} FAF. The JPEG for AI.</p>
			<p>Built with 🧡 and NO BS in Atlanta, GA</p>
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