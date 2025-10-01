<script>
	import { onMount } from 'svelte';
	
	let isVisible = $state(false);
	
	onMount(() => {
		isVisible = true;
	});
</script>

<svelte:head>
	<title>About FAF - The Foundational AI-context Format</title>
	<meta name="description" content="Learn about .faf - the JPEG for AI. Created by industry veterans with 40+ years of format expertise." />
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<div class="about-container" class:visible={isVisible}>
	<section class="hero-section">
		<div class="container">
			<h1 class="page-title">About <span class="faf-highlight">.faf</span></h1>
			<p class="tagline">The Foundational AI-context Format</p>
		</div>
	</section>

	<section class="definition-section">
		<div class="container">
			<div class="card clean-definition-card">
				<h2 class="definition-header">Definition</h2>

				<!-- Logo and faf display -->
				<div class="faf-logo-display">
					<img src="/faf-logo.png" alt=".faf logo" class="faf-logo-img" />
					<span class="faf-text-large">.faf</span>
				</div>

				<p class="format-subtitle">FOUNDATIONAL AI-CONTEXT FORMAT</p>

				<p class="definition-description">
					Universal, shareable AI-Context for any AI, human or team, regardless of size, location, languages, stack, setup or documentation.
				</p>
			</div>
		</div>
	</section>

	<!-- Enterprise Capabilities Section -->
	<section class="enterprise-section">
		<div class="container">
			<div class="enterprise-capabilities-bar">
				<h3 class="enterprise-header">Enterprise Capabilities</h3>
				<div class="enterprise-grid">
					<div class="enterprise-item">
						<span class="enterprise-icon">🏛️</span>
						<span>Bank-grade Tested</span>
					</div>
					<div class="enterprise-item">
						<span class="enterprise-icon">♾️</span>
						<span>Eternal-sync</span>
					</div>
					<div class="enterprise-item">
						<span class="enterprise-icon">🔄</span>
						<span>Self-healing</span>
					</div>
					<div class="enterprise-item">
						<span class="enterprise-icon">🛡️</span>
						<span>Disaster recovery</span>
					</div>
					<div class="enterprise-item">
						<span class="enterprise-icon">⚡</span>
						<span>&lt;50ms processing</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="version-section">
		<div class="container">
			<div class="card">
				<h2>Current Version</h2>
				<div class="version-grid">
					<div class="version-item">
						<h3>Format Specification</h3>
						<div class="version-number">v1.0.1</div>
						<p>Stable Release</p>
					</div>
					<div class="version-item">
						<h3>MCP Integration</h3>
						<div class="version-number">v2.3.0</div>
						<p>PR #2759 Pending</p>
					</div>
					<div class="version-item">
						<h3>Chrome Extension</h3>
						<div class="version-number">v1.2.0</div>
						<p>Live in Web Store</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="origin-section">
		<div class="container">
			<div class="card">
				<h2>Origin Story</h2>
				<div class="timeline">
					<div class="timeline-item">
						<div class="year">1994</div>
						<div class="content">
							<h4>The Beginning</h4>
							<p>Journey starts with fascination of the .iff format on Commodore Amiga</p>
						</div>
					</div>
					<div class="timeline-item">
						<div class="year">2000-2020s</div>
						<div class="content">
							<h4>Format Evolution</h4>
							<p>20+ years developing complex formats for color simulation, carpet industry</p>
						</div>
					</div>
					<div class="timeline-item">
						<div class="year">2024</div>
						<div class="content">
							<h4>AI Realization.. no format..🧐</h4>
							<p>Recognized the need for standardized AI context file format</p>
						</div>
					</div>
					<div class="timeline-item">
						<div class="year">2025</div>
						<div class="content">
							<h4>Devised the .faf</h4>
							<p>Considerations: size, language, universality, human-readable, shareable, security. Released .faf as the definitive, Foundational AI-context Format</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="capabilities-section">
		<div class="container">
			<div class="card">
				<h2>Current Format Capabilities 🤯</h2>
				<p class="capabilities-subtitle">(things evolved..)</p>

				<div class="capabilities-grid">
					<!-- Core Pillars -->
					<div class="capability-group">
						<h3 class="capability-group-title">🏛️ Core Pillars</h3>
						<ul class="capability-list">
							<li><strong>Speed:</strong> &lt;50ms processing guaranteed</li>
							<li><strong>Security:</strong> Bank-grade reliability</li>
							<li><strong>Size:</strong> Optimized for minimal footprint</li>
							<li><strong>Universality:</strong> Works with any AI, any platform</li>
							<li><strong>Human-readable:</strong> YAML-based, clear structure</li>
							<li><strong>Shareable:</strong> Version control friendly</li>
						</ul>
					</div>

					<!-- Advanced Features -->
					<div class="capability-group">
						<h3 class="capability-group-title">⚡ Advanced Features</h3>
						<ul class="capability-list">
							<li><strong>Self-healing:</strong> Automatic error correction</li>
							<li><strong>Eternal-sync:</strong> Context persistence across sessions</li>
							<li><strong>Context-Mirroring™:</strong> Perfect state preservation</li>
							<li><strong>Disaster recovery:</strong> Built-in redundancy</li>
							<li><strong>AI-native:</strong> Optimized for LLM parsing</li>
							<li><strong>Self-documenting:</strong> Contains own metadata</li>
						</ul>
					</div>

					<!-- Technical Specs -->
					<div class="capability-group">
						<h3 class="capability-group-title">🔧 Technical Specs</h3>
						<ul class="capability-list">
							<li><strong>Format:</strong> YAML with custom extensions</li>
							<li><strong>Compression:</strong> Text-based, highly compressible</li>
							<li><strong>Version control:</strong> Git-friendly, diffable</li>
							<li><strong>Cross-platform:</strong> OS agnostic</li>
							<li><strong>Extensible:</strong> Plugin architecture ready</li>
							<li><strong>Standards-based:</strong> Built on established formats</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="principles-section">
		<div class="container">
			<div class="card">
				<h2>Core Principles</h2>
				<p class="principles-subtitle">Context-first methodology</p>
				<div class="principles-grid">
					<div class="principle">
						<div class="principle-icon">🏛️</div>
						<h3>Trust Over Hope</h3>
						<p>Bank-grade reliability. Zero errors.</p>
					</div>
					<div class="principle">
						<div class="principle-icon">⚡</div>
						<h3>Performance Based</h3>
						<p>Every operation under 50ms, guaranteed</p>
					</div>
					<div class="principle">
						<div class="principle-icon">🔄</div>
						<h3>Self-Healing</h3>
						<p>Automatic error correction and recovery, score will improve itself</p>
					</div>
					<div class="principle">
						<div class="principle-icon">♾️</div>
						<h3>Eternal Sync</h3>
						<p>Context-Mirroring with persistence across all sessions</p>
					</div>
					<div class="principle">
						<div class="principle-icon">🧡🩵</div>
						<h3>Trusted AI</h3>
						<p>Unique AI|HUMAN<br/>Balance</p>
					</div>
					<div class="principle">
						<div class="principle-icon">🔒</div>
						<h3>Security Focused</h3>
						<p>FAST, SAFE, SECURE, RECOVERABLE</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="recognition-section">
		<div class="container">
			<div class="card">
				<h2>Industry Recognition</h2>
				<div class="recognition-grid">
					<div class="recognition-item">
						<!-- <img src="/anthropic-logo.png" alt="Anthropic" class="partner-logo" /> -->
					<div class="partner-logo-placeholder">🤖</div>
						<p>MCP w/30+ Tools</p>
					</div>
					<div class="recognition-item">
						<!-- <img src="/google-chrome-logo.png" alt="Google Chrome" class="partner-logo" /> -->
					<div class="partner-logo-placeholder">🌐</div>
						<p>Extension Live</p>
					</div>
					<div class="recognition-item">
						<div class="stat">
							<div class="stat-number">10K+</div>
							<div class="stat-label">Projects</div>
						</div>
					</div>
					<div class="recognition-item">
						<div class="stat">
							<div class="stat-number">9.3/10</div>
							<div class="stat-label">AI Rating</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="founder-section">
		<div class="container">
			<div class="card">
				<h2>Created By</h2>
				<div class="founder-info">
					<h3>Wolfejam</h3>
					<p class="founder-title">Format Architect & AI Pioneer</p>
					<p class="founder-bio">
						30+ years of file format fascination starting with the Commodore Amiga's .iff through
						2/2.5D and into complex 3D industrial simulation formats. Creator of the FAF specification and the
						driving force behind making AI context management as reliable as image formats, albeit using YAML and
						🍜noodles as the inventor calls it.
					</p>
					<div class="founder-quote">
						"AI needed a solid reliable format, a JPEG for AI, so to speak— So, we built it."
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="contact-section">
		<div class="container">
			<div class="contact-grid">
				<a href="/docs" class="contact-card">
					<span class="icon">📚</span>
					<span>Documentation</span>
				</a>
				<a href="https://github.com/Wolfe-Jam/faf" class="contact-card">⭐
					<span class="icon">🐙</span>
					<span>GitHub</span>
				</a>
				<a href="/support" class="contact-card">
					<span class="icon">💬</span>
					<span>Support</span>
				</a>
				<a href="/press" class="contact-card">
					<span class="icon">📰</span>
					<span>Press Kit</span>
				</a>
			</div>
		</div>
	</section>
</div>

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

	.about-container {
		opacity: 0;
		transition: opacity 0.6s ease;
	}
	
	.about-container.visible {
		opacity: 1;
	}
	
	.hero-section {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		color: var(--faf-white);
		padding: 4rem 0;
		text-align: center;
	}
	
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}
	
	.page-title {
		font-size: 3.5rem;
		font-weight: 900;
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
	}
	
	.faf-highlight {
		color: var(--faf-orange);
		text-shadow: 0 0 30px rgba(255, 107, 53, 0.5);
	}
	
	.tagline {
		font-size: 1.5rem;
		color: var(--faf-cyan);
		font-family: 'Roboto Mono', monospace;
	}
	
	section {
		padding: 4rem 0;
	}
	
	.card {
		background: var(--faf-white);
		border-radius: 12px;
		padding: 3rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border: 2px solid var(--faf-light-gray);
	}
	
	h2 {
		font-size: 2.5rem;
		font-weight: 800;
		margin-bottom: 2rem;
		color: var(--faf-dark);
		text-align: center;
	}
	
	.definition {
		font-size: 1.25rem;
		line-height: 1.8;
		color: var(--faf-dark);
		margin-bottom: 2rem;
	}
	
	.key-points {
		display: grid;
		gap: 1rem;
		margin-top: 2rem;
	}
	
	.point {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: var(--faf-cream);
		border-radius: 8px;
	}
	
	.icon {
		font-size: 1.5rem;
	}
	
	/* Clean Definition Card Styles */
	.clean-definition-card {
		text-align: center;
		padding: 3rem;
	}

	.definition-header {
		font-size: 2.5rem;
		font-weight: 900;
		margin-bottom: 3rem;
		color: var(--faf-dark);
	}

	/* Logo and faf display */
	.faf-logo-display {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin: 2rem 0;
	}

	.faf-logo-img {
		width: 80px;
		height: 80px;
		object-fit: contain;
	}

	.faf-text-large {
		font-size: 6rem;
		font-weight: 900;
		color: #000;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
		letter-spacing: -0.02em;
	}

	.format-subtitle {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--faf-gray);
		letter-spacing: 0.15em;
		text-transform: uppercase;
		margin: 2rem 0;
	}

	.definition-description {
		font-size: 1.15rem;
		color: var(--faf-gray-dark);
		line-height: 1.8;
		max-width: 700px;
		margin: 2rem auto 0;
	}

	/* Enterprise Capabilities Bar */
	.enterprise-section {
		margin-top: -2rem;
	}

	.enterprise-capabilities-bar {
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		border-radius: 15px;
		padding: 2.5rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
	}

	.enterprise-header {
		color: var(--faf-white);
		font-size: 1.3rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		margin-bottom: 2rem;
		text-align: center;
		opacity: 0.9;
	}

	.enterprise-grid {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.enterprise-item {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--faf-white);
		font-size: 1rem;
		opacity: 0.95;
		transition: all 0.3s ease;
		padding: 0.5rem;
	}

	.enterprise-item:hover {
		transform: translateY(-3px);
		opacity: 1;
	}

	.enterprise-icon {
		font-size: 1.5rem;
	}

	code {
		background: var(--faf-dark);
		color: var(--faf-orange);
		padding: 0.2em 0.4em;
		border-radius: 4px;
		font-family: 'Roboto Mono', monospace;
	}
	
	.version-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		text-align: center;
	}
	
	.version-item h3 {
		font-size: 1.2rem;
		color: var(--faf-gray);
		margin-bottom: 0.5rem;
	}
	
	.version-number {
		font-size: 2.5rem;
		font-weight: 900;
		color: var(--faf-orange);
		font-family: 'Roboto Mono', monospace;
	}
	
	.version-item p {
		color: var(--faf-green);
		font-weight: 600;
		margin-top: 0.5rem;
	}
	
	.timeline {
		position: relative;
		padding-left: 2rem;
	}
	
	.timeline::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		background: linear-gradient(180deg, var(--faf-orange), var(--faf-cyan));
	}
	
	.timeline-item {
		position: relative;
		padding: 1.5rem 0;
		padding-left: 2rem;
	}
	
	.timeline-item::before {
		content: '';
		position: absolute;
		left: -0.5rem;
		top: 2rem;
		width: 1rem;
		height: 1rem;
		background: var(--faf-orange);
		border-radius: 50%;
		box-shadow: 0 0 20px rgba(255, 107, 53, 0.5);
	}
	
	.year {
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--faf-orange);
		margin-bottom: 0.5rem;
		font-family: 'Roboto Mono', monospace;
	}
	
	.timeline-item h4 {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
	}
	
	.principles-subtitle {
		text-align: center;
		color: var(--faf-orange);
		font-size: 1.3rem;
		font-weight: 600;
		font-style: italic;
		margin-top: -1rem;
		margin-bottom: 2.5rem;
	}

	.principles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
	}
	
	.principle {
		text-align: center;
		padding: 2rem;
		background: var(--faf-cream);
		border-radius: 12px;
		transition: transform 0.3s ease;
	}
	
	.principle:hover {
		transform: translateY(-5px);
	}
	
	.principle-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}
	
	.principle h3 {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
		color: var(--faf-dark);
	}
	
	.capabilities-subtitle {
		text-align: center;
		color: var(--faf-gray);
		font-style: italic;
		margin-top: -1rem;
		margin-bottom: 2rem;
	}

	.capabilities-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.capability-group {
		background: var(--faf-cream);
		border-radius: 12px;
		padding: 1.5rem;
	}

	.capability-group-title {
		font-size: 1.3rem;
		color: var(--faf-dark);
		margin-bottom: 1rem;
		font-weight: 700;
	}

	.capability-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.capability-list li {
		padding: 0.5rem 0;
		color: var(--faf-gray-dark);
		line-height: 1.6;
		border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	}

	.capability-list li:last-child {
		border-bottom: none;
	}

	.capability-list strong {
		color: var(--faf-dark);
	}

	.recognition-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 3rem;
		align-items: center;
		text-align: center;
	}
	
	.recognition-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	
	.partner-logo {
		height: 60px;
		opacity: 0.8;
		transition: opacity 0.3s ease;
	}
	
	.partner-logo:hover {
		opacity: 1;
	}
	
	.stat {
		text-align: center;
	}
	
	.stat-number {
		font-size: 3rem;
		font-weight: 900;
		color: var(--faf-orange);
	}
	
	.stat-label {
		font-size: 1.1rem;
		color: var(--faf-gray);
	}
	
	.founder-info {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}
	
	.founder-info h3 {
		font-size: 2rem;
		color: var(--faf-dark);
		margin-bottom: 0.5rem;
	}
	
	.founder-title {
		color: var(--faf-orange);
		font-weight: 600;
		margin-bottom: 1.5rem;
	}
	
	.founder-bio {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--faf-gray-dark);
		margin-bottom: 2rem;
	}
	
	.founder-quote {
		font-size: 1.5rem;
		font-style: italic;
		color: var(--faf-dark);
		padding: 1.5rem;
		background: var(--faf-cream);
		border-left: 4px solid var(--faf-orange);
		margin: 2rem 0;
	}
	
	.contact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
	
	.contact-card {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 1.5rem;
		background: var(--faf-white);
		border: 2px solid var(--faf-light-gray);
		border-radius: 8px;
		text-decoration: none;
		color: var(--faf-dark);
		font-weight: 600;
		transition: all 0.3s ease;
	}
	
	.contact-card:hover {
		border-color: var(--faf-orange);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);
	}
	
	@media (max-width: 768px) {
		.page-title {
			font-size: 2.5rem;
		}

		.card {
			padding: 2rem 1.5rem;
		}

		.principles-grid {
			grid-template-columns: 1fr;
		}

		/* Mobile styles for clean definition */
		.faf-logo-display {
			flex-direction: column;
			gap: 1rem;
		}

		.faf-text-large {
			font-size: 4rem;
		}

		.faf-logo-img {
			width: 60px;
			height: 60px;
		}

		.enterprise-grid {
			flex-direction: column;
			gap: 1rem;
		}

		.enterprise-item {
			justify-content: flex-start;
		}

		.enterprise-capabilities-bar {
			padding: 1.5rem 1rem;
		}
	}
</style>