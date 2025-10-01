<svelte:head>
	<title>Press Center | FAF - Media Resources & Blog</title>
	<meta name="description" content="Media resources, press releases, and blog posts from FAF - The JPEG for AI">
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<article class="press-center">
	<div class="container">
		<h1>Press Center</h1>
		<div class="subtitle">Media Resources, Press Releases & Blog Posts</div>

		<section class="section">
			<h2>📢 Press Releases</h2>
			<div class="card-grid">
				<a href="/press-release" class="card">
					<div class="card-emoji">📰</div>
					<h3>The JPEG for AI</h3>
					<p>Foundational AI-context Format - Universal, shareable AI context for any AI, human or team</p>
					<div class="card-date">September 24, 2025</div>
				</a>
			</div>
		</section>

		<section class="section">
			<h2>⚡️ Blog Posts</h2>
			<div class="card-grid">
				<a href="/68-minutes" class="card">
					<div class="card-emoji">🏎️</div>
					<h3>68 Minutes: B&W to Technicolor</h3>
					<p>B&W-to-color TVs took ~20 years. We transformed our CLI in 68 minutes.</p>
					<div class="card-date">October 1, 2025</div>
				</a>
			</div>
		</section>

		<section class="section">
			<h2>🎯 Media Resources</h2>
			<div class="card-grid">
				<a href="/press" class="card">
					<div class="card-emoji">📦</div>
					<h3>Press Kit</h3>
					<p>Logos, screenshots, brand assets and media information</p>
				</a>

				<div class="card info-card">
					<div class="card-emoji">📊</div>
					<h3>Live Stats</h3>
					<ul class="stats-list">
						<li><strong>MCP:</strong> 800+ downloads/week</li>
						<li><strong>CLI:</strong> 2.7k downloads/week</li>
						<li><strong>AI Rating:</strong> 9.3/10 average</li>
						<li><strong>Tests Run:</strong> 10,000+ projects</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="section">
			<h2>🔗 Quick Links</h2>
			<div class="quick-links">
				<a href="https://www.npmjs.com/package/faf-cli" target="_blank" class="quick-link">
					<span class="link-emoji">📦</span>
					<span>FAF CLI on NPM</span>
				</a>
				<a href="https://www.npmjs.com/package/claude-faf-mcp" target="_blank" class="quick-link">
					<span class="link-emoji">🤖</span>
					<span>MCP on NPM</span>
				</a>
				<a href="https://github.com/Wolfe-Jam/faf" target="_blank" class="quick-link">
					<span class="link-emoji">⭐</span>
					<span>GitHub Repository</span>
				</a>
				<a href="https://chromewebstore.google.com/detail/lnecebepmpjpilldfmndnaofbfjkjlkm" target="_blank" class="quick-link">
					<span class="link-emoji">🌐</span>
					<span>Chrome Extension</span>
				</a>
			</div>
		</section>

		<section class="section">
			<h2>📧 Media Contact</h2>
			<div class="contact-card">
				<p><strong>Email:</strong> support@faf.one</p>
				<p><strong>GitHub:</strong> <a href="https://github.com/Wolfe-Jam/faf" target="_blank">@Wolfe-Jam</a></p>
				<p><strong>Website:</strong> <a href="https://faf.one">faf.one</a></p>
			</div>
		</section>
	</div>
</article>

<style>
	.back-nav {
		padding: 1rem 2rem;
		background: var(--faf-white);
		border-bottom: 1px solid var(--faf-light-gray);
	}

	.back-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--faf-dark);
		text-decoration: none;
		font-weight: 600;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.back-button:hover {
		background: var(--faf-cream);
		color: var(--faf-orange);
		transform: translateX(-2px);
	}

	.press-center {
		padding: 3rem 0;
		background: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
		font-weight: 900;
	}

	h2 {
		font-size: 1.75rem;
		margin: 0 0 1.5rem;
		color: var(--faf-black);
		font-weight: 800;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin-bottom: 3rem;
		font-weight: 500;
	}

	.section {
		margin-bottom: 4rem;
	}

	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.card {
		background: #f9f9f9;
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid var(--faf-cream);
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
		display: block;
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
		border-color: var(--faf-orange);
	}

	.card-emoji {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.card h3 {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
		color: var(--faf-black);
		font-weight: 700;
	}

	.card p {
		color: #666;
		line-height: 1.6;
		margin: 0;
	}

	.card-date {
		margin-top: 1rem;
		color: #888;
		font-size: 0.9rem;
		font-style: italic;
	}

	.info-card {
		cursor: default;
	}

	.info-card:hover {
		transform: none;
		box-shadow: none;
		border-color: var(--faf-cream);
	}

	.stats-list {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0;
	}

	.stats-list li {
		padding: 0.5rem 0;
		color: #666;
		font-size: 1rem;
	}

	.stats-list strong {
		color: var(--faf-orange);
	}

	.quick-links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
	}

	.quick-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.25rem 1.5rem;
		background: #f9f9f9;
		border: 2px solid var(--faf-cream);
		border-radius: 8px;
		text-decoration: none;
		color: var(--faf-black);
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.quick-link:hover {
		background: var(--faf-cream);
		border-color: var(--faf-orange);
		transform: translateX(4px);
	}

	.link-emoji {
		font-size: 1.75rem;
	}

	.contact-card {
		background: #f9f9f9;
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid var(--faf-cream);
	}

	.contact-card p {
		margin: 1rem 0;
		font-size: 1.125rem;
	}

	.contact-card a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}

	.contact-card a:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.card-grid {
			grid-template-columns: 1fr;
		}

		.quick-links {
			grid-template-columns: 1fr;
		}

		.container {
			padding: 0 1rem;
		}
	}
</style>
