<script>
	function downloadAsset(filename) {
		// In production, these would link to actual assets
		alert(`Press kit asset "${filename}" will be available soon!`);
	}
</script>

<svelte:head>
	<title>Press Kit - .faf Format</title>
	<meta name="description" content=".faf press kit - logos, brand assets, and information for media">
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<div class="press-hero">
	<div class="container">
		<h1>📣 Press Release</h1>
		<p class="subtitle">Everything you need to cover .faf - The JPEG for AI™</p>
	</div>
</div>

<section class="press-intro">
	<div class="container">
		<div class="intro-box">
			<h2>About .faf</h2>
			<p class="lead">
				.faf (Foundational AI-context Format) - transforming how developers 
				communicate project context to AI tools.
			</p>
			<p>
				Just as JPEG became the standard for images, .faf is becoming the standard for 
				AI context. It reduces context loading from 20 minutes to 3 minutes - a 6.7x improvement.
			</p>
		</div>
	</div>
</section>

<section class="press-facts">
	<div class="container">
		<h2>Key Facts</h2>
		<div class="facts-grid">
			<div class="fact-card">
				<h3>Founded</h3>
				<p>2024</p>
			</div>
			<div class="fact-card">
				<h3>Location</h3>
				<p>Atlanta, GA</p>
			</div>
			<div class="fact-card">
				<h3>Projects Tested</h3>
				<p>10,000+</p>
			</div>
			<div class="fact-card">
				<h3>Performance</h3>
				<p>&lt;50ms processing</p>
			</div>
			<div class="fact-card">
				<h3>AI Rating</h3>
				<p>9.3/10 average</p>
			</div>
			<div class="fact-card">
				<h3>Setup Time</h3>
				<p>20 min → 3 min</p>
			</div>
		</div>
	</div>
</section>

<section class="press-achievements">
	<div class="container">
		<h2>Evolution & Achievements</h2>
		<div class="achievements-list">
			<div class="achievement">
				<div class="achievement-icon">☑️</div>
				<div class="achievement-content">
					<h3>.faf Format Created</h3>
					<p>Foundational AI-context Format - YAML and 🍜 noodles for AI</p>
				</div>
			</div>
			
			<div class="achievement">
				<div class="achievement-icon">☑️</div>
				<div class="achievement-content">
					<h3>.faf-Engine-Mk1 & Mk2</h3>
					<p>The REAL Engineering - that powers it all (&lt;50ms performance)</p>
				</div>
			</div>
			
			<div class="achievement">
				<div class="achievement-icon">☑️</div>
				<div class="achievement-content">
					<h3>DevOps: fafdev.tools</h3>
					<p>Lightning fast Setup Utilities and origin of .faf tools | became Gamified web platform with balance tracking and instant validation in V.2.0</p>
				</div>
			</div>
			
			<div class="achievement">
				<div class="achievement-icon">☑️</div>
				<div class="achievement-content">
					<h3>MCP Integration</h3>
					<p>Model Context Protocol with 800+ weekly downloads for Claude Desktop</p>
				</div>
			</div>
			
			<div class="achievement">
				<div class="achievement-icon">☑️</div>
				<div class="achievement-content">
					<h3>CLI Tool</h3>
					<p>Universal command-line interface: npm install -g claude-faf-mcp</p>
				</div>
			</div>
			
			<div class="achievement">
				<div class="achievement-icon">☑️</div>
				<div class="achievement-content">
					<h3>Chrome Extension</h3>
					<p>Google-approved and live in Chrome Web Store - Intelligent code base scanner with Report and Intro to .faf</p>
				</div>
			</div>
			
			<div class="achievement">
				<div class="achievement-icon">🏁</div>
				<div class="achievement-content">
					<h3>Wolfejam Testing Center</h3>
					<p>F1-inspired Software Engineering Testing Center for championship performance, bulletproof security, and enterprise-scale validation</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="press-quotes">
	<div class="container">
		<h2>Quotes</h2>
		<div class="quotes-grid">
			<div class="quote-card">
				<h3>The Problem</h3>
				<blockquote>
					"Every AI conversation starts with 20 minutes of context setup. That's 85% waste. 
					.faf reduces this to 3 minutes. It's not just an improvement - it's a paradigm shift."
				</blockquote>
				<cite>- Founder Statement</cite>
			</div>
			
			<div class="quote-card">
				<h3>The Vision</h3>
				<blockquote>
					"JPEG didn't ask permission to become the image standard. It just solved the problem 
					better than anything else. That's what .faf does for AI context."
				</blockquote>
				<cite>- Product Philosophy</cite>
			</div>
			
			<div class="quote-card">
				<h3>The Impact</h3>
				<blockquote>
					"20 minutes down to 3 minutes. 99% AI-valid context. Every single time. 
					The real value: AI finally works with correct information. Project success metrics dramatically improve when AI does what it's good at."
				</blockquote>
				<cite>- Performance Metrics</cite>
			</div>
		</div>
	</div>
</section>

<section class="press-assets">
	<div class="container">
		<h2>Brand Assets</h2>
		<div class="assets-grid">
			<div class="asset-card">
				<div class="asset-preview logo-preview">.faf</div>
				<h3>Logo Pack</h3>
				<p>SVG, PNG in various sizes</p>
				<button onclick={() => downloadAsset('logo-pack.zip')} class="btn-download">
					Download →
				</button>
			</div>
			
			<div class="asset-card">
				<div class="asset-preview color-preview">
					<div class="color-swatch orange"></div>
					<div class="color-swatch black"></div>
					<div class="color-swatch white"></div>
				</div>
				<h3>Brand Colors</h3>
				<p>Official color palette</p>
				<button onclick={() => downloadAsset('colors.zip')} class="btn-download">
					Download →
				</button>
			</div>
			
			<div class="asset-card">
				<div class="asset-preview screenshot-preview">UI</div>
				<h3>Screenshots</h3>
				<p>Product screenshots</p>
				<button onclick={() => downloadAsset('screenshots.zip')} class="btn-download">
					Download →
				</button>
			</div>
			
			<div class="asset-card">
				<div class="asset-preview doc-preview">📄</div>
				<h3>Press Release</h3>
				<p>Latest announcement</p>
				<button onclick={() => downloadAsset('press-release.pdf')} class="btn-download">
					Download →
				</button>
			</div>
		</div>
	</div>
</section>

<section class="press-timeline">
	<div class="container">
		<h2>Company Timeline</h2>
		<div class="timeline-container">
			<div class="timeline-entry">
				<div class="timeline-date">Q1 2024</div>
				<div class="timeline-event">
					<h4>.faf Format Conceived</h4>
					<p>Initial development begins after identifying the AI context problem</p>
				</div>
			</div>
			
			<div class="timeline-entry">
				<div class="timeline-date">Q2 2024</div>
				<div class="timeline-event">
					<h4>First 1,000 Projects</h4>
					<p>Validation across multiple frameworks and languages</p>
				</div>
			</div>
			
			<div class="timeline-entry">
				<div class="timeline-date">Q3 2024</div>
				<div class="timeline-event">
					<h4>MCP Server Launch</h4>
					<p>Released MCP server for Claude Desktop - 3000+ total downloads (PR #2759 pending)</p>
				</div>
			</div>
			
			<div class="timeline-entry">
				<div class="timeline-date">Q4 2024</div>
				<div class="timeline-event">
					<h4>Chrome Extension Launch</h4>
					<p>Google approves and lists extension in Chrome Web Store</p>
				</div>
			</div>
			
			<div class="timeline-entry">
				<div class="timeline-date">2025</div>
				<div class="timeline-event">
					<h4>Public Launch</h4>
					<p>Founders Circle opens, 10,000+ projects validated</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="press-contact">
	<div class="container">
		<div class="contact-box">
			<h2>Media Contact</h2>
			<div class="contact-info">
				<div class="contact-item">
					<strong>Email:</strong>
					<a href="mailto:press@faf.one">press@faf.one</a>
				</div>
				<div class="contact-item">
					<strong>General Inquiries:</strong>
					<a href="mailto:support@faf.one">support@faf.one</a>
				</div>
				<div class="contact-item">
					<strong>Website:</strong>
					<a href="https://faf.one">faf.one</a>
				</div>
			</div>
			
			<div class="social-links">
				<a href="https://github.com/Wolfe-Jam/faf" target="_blank" class="social-link">GitHub</a>
				<a href="https://twitter.com/faf_format" target="_blank" class="social-link">Twitter</a>
			</div>
			
			<p class="contact-note">
				For interviews, comments, or additional information, please contact us via email.
				High-resolution assets and additional materials available upon request.
			</p>
		</div>
	</div>
</section>

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

	.press-hero {
		background: var(--faf-black);
		color: white;
		padding: 4rem 0;
		text-align: center;
		border-bottom: 3px solid var(--faf-orange);
	}
	
	.press-hero h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		font-weight: 900;
	}
	
	.subtitle {
		font-size: 1.25rem;
		color: var(--faf-orange);
		font-weight: 600;
	}
	
	.press-intro {
		padding: 4rem 0;
		background: white;
	}
	
	.intro-box {
		max-width: 800px;
		margin: 0 auto;
	}
	
	.intro-box h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--faf-black);
	}
	
	.lead {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}
	
	.intro-box p {
		font-size: 1.125rem;
		line-height: 1.6;
		color: #666;
	}
	
	.press-facts {
		padding: 4rem 0;
		background: #f8f8f8;
	}
	
	.press-facts h2 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 3rem;
		color: var(--faf-black);
	}
	
	.facts-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}
	
	.fact-card {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		text-align: center;
		border: 2px solid #e0e0e0;
	}
	
	.fact-card h3 {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #666;
		margin-bottom: 0.5rem;
	}
	
	.fact-card p {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--faf-orange);
		margin: 0;
		font-family: var(--font-mono);
	}
	
	.press-achievements {
		padding: 4rem 0;
		background: white;
	}
	
	.press-achievements h2 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 3rem;
		color: var(--faf-black);
	}
	
	.achievements-list {
		max-width: 800px;
		margin: 0 auto;
	}
	
	.achievement {
		display: flex;
		gap: 1.5rem;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #f8f8f8;
		border-radius: 8px;
	}
	
	.achievement-icon {
		font-size: 2rem;
		flex-shrink: 0;
	}
	
	.achievement-content h3 {
		margin: 0 0 0.5rem 0;
		color: var(--faf-black);
		font-size: 1.25rem;
	}
	
	.achievement-content p {
		margin: 0;
		color: #666;
	}
	
	.press-quotes {
		padding: 4rem 0;
		background: var(--faf-black);
		color: white;
	}
	
	.press-quotes h2 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 3rem;
	}
	
	.quotes-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}
	
	.quote-card {
		background: rgba(255, 255, 255, 0.05);
		padding: 2rem;
		border-radius: 8px;
		border-left: 4px solid var(--faf-orange);
	}
	
	.quote-card h3 {
		margin: 0 0 1rem 0;
		color: var(--faf-orange);
	}
	
	.quote-card blockquote {
		margin: 0 0 1rem 0;
		font-style: italic;
		line-height: 1.6;
	}
	
	.quote-card cite {
		display: block;
		text-align: right;
		font-size: 0.875rem;
		opacity: 0.7;
	}
	
	.press-assets {
		padding: 4rem 0;
		background: white;
	}
	
	.press-assets h2 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 3rem;
		color: var(--faf-black);
	}
	
	.assets-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}
	
	.asset-card {
		text-align: center;
	}
	
	.asset-preview {
		height: 120px;
		background: #f8f8f8;
		border: 2px solid #e0e0e0;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
		font-size: 2rem;
		font-weight: 900;
	}
	
	.logo-preview {
		color: var(--faf-orange);
		font-size: 2.5rem;
	}
	
	.color-preview {
		display: flex;
		gap: 0.5rem;
		padding: 2rem;
	}
	
	.color-swatch {
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
	
	.color-swatch.orange {
		background: var(--faf-orange);
	}
	
	.color-swatch.black {
		background: var(--faf-black);
	}
	
	.color-swatch.white {
		background: white;
		border: 2px solid #e0e0e0;
	}
	
	.screenshot-preview {
		background: linear-gradient(135deg, var(--faf-orange) 0%, #ff8a65 100%);
		color: white;
	}
	
	.doc-preview {
		font-size: 3rem;
	}
	
	.asset-card h3 {
		margin: 0 0 0.5rem 0;
		color: var(--faf-black);
	}
	
	.asset-card p {
		margin: 0 0 1rem 0;
		color: #666;
		font-size: 0.875rem;
	}
	
	.btn-download {
		padding: 0.5rem 1.5rem;
		background: var(--faf-orange);
		color: white;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}
	
	.btn-download:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0,0,0,0.2);
	}
	
	.press-timeline {
		padding: 4rem 0;
		background: #f8f8f8;
	}
	
	.press-timeline h2 {
		text-align: center;
		font-size: 2rem;
		margin-bottom: 3rem;
		color: var(--faf-black);
	}
	
	.timeline-container {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
		padding-left: 150px;
	}
	
	.timeline-container::before {
		content: '';
		position: absolute;
		left: 120px;
		top: 0;
		bottom: 0;
		width: 3px;
		background: var(--faf-orange);
	}
	
	.timeline-entry {
		display: flex;
		gap: 2rem;
		margin-bottom: 2rem;
		position: relative;
	}
	
	.timeline-date {
		position: absolute;
		left: -150px;
		width: 100px;
		text-align: right;
		font-weight: 900;
		color: var(--faf-orange);
		font-size: 0.875rem;
	}
	
	.timeline-event {
		background: white;
		padding: 1.5rem;
		border-radius: 8px;
		flex: 1;
	}
	
	.timeline-event h4 {
		margin: 0 0 0.5rem 0;
		color: var(--faf-black);
	}
	
	.timeline-event p {
		margin: 0;
		color: #666;
		font-size: 0.925rem;
	}
	
	.press-contact {
		padding: 4rem 0;
		background: white;
	}
	
	.contact-box {
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
	}
	
	.contact-box h2 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: var(--faf-black);
	}
	
	.contact-info {
		margin-bottom: 2rem;
	}
	
	.contact-item {
		margin-bottom: 1rem;
		font-size: 1.125rem;
	}
	
	.contact-item strong {
		color: var(--faf-black);
		margin-right: 0.5rem;
	}
	
	.contact-item a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}
	
	.contact-item a:hover {
		text-decoration: underline;
	}
	
	.social-links {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin: 2rem 0;
	}
	
	.social-link {
		padding: 0.5rem 1.5rem;
		background: var(--faf-black);
		color: white;
		text-decoration: none;
		border-radius: 6px;
		font-weight: 600;
		transition: all 0.2s ease;
	}
	
	.social-link:hover {
		background: var(--faf-orange);
		transform: translateY(-2px);
	}
	
	.contact-note {
		font-size: 0.875rem;
		color: #666;
		font-style: italic;
		margin-top: 2rem;
	}
	
	@media (max-width: 968px) {
		.facts-grid,
		.quotes-grid {
			grid-template-columns: 1fr;
		}
		
		.assets-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		
		.timeline-container {
			padding-left: 40px;
		}
		
		.timeline-container::before {
			left: 10px;
		}
		
		.timeline-date {
			position: static;
			margin-bottom: 0.5rem;
		}
		
		.timeline-entry {
			flex-direction: column;
		}
	}
	
	@media (max-width: 600px) {
		.press-hero h1 {
			font-size: 2rem;
		}
		
		.assets-grid {
			grid-template-columns: 1fr;
		}
		
		.social-links {
			flex-direction: column;
		}
	}
</style>