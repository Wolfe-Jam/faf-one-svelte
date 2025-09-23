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

<div class="about-container" class:visible={isVisible}>
	<section class="hero-section">
		<div class="container">
			<h1 class="page-title">About <span class="faf-highlight">.faf</span></h1>
			<p class="tagline">The Foundational AI-context Format</p>
		</div>
	</section>

	<section class="definition-section">
		<div class="container">
			<div class="card">
				<h2>Definition</h2>
				<p class="definition">
					<strong>.faf</strong> (Foundational AI-context Format) is the industry-standard file format 
					for AI context management, providing bank-grade Context-Mirroring™ with eternal-sync, 
					self-healing, and disaster recovery capabilities.
				</p>
				<div class="key-points">
					<div class="point">
						<span class="icon">📄</span>
						<span>File Extension: <code>.faf</code></span>
					</div>
					<div class="point">
						<span class="icon">🎯</span>
						<span>Purpose: AI Context Management</span>
					</div>
					<div class="point">
						<span class="icon">⚡</span>
						<span>Performance: &lt;50ms processing</span>
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
						<div class="version-number">v1.0.0</div>
						<p>Anthropic Approved</p>
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
						<div class="year">1985</div>
						<div class="content">
							<h4>The Beginning</h4>
							<p>Journey starts with .iff format on Commodore Amiga</p>
						</div>
					</div>
					<div class="timeline-item">
						<div class="year">1990s-2020s</div>
						<div class="content">
							<h4>Format Evolution</h4>
							<p>40+ years developing complex formats for color simulation and carpet industry</p>
						</div>
					</div>
					<div class="timeline-item">
						<div class="year">2024</div>
						<div class="content">
							<h4>AI Context Crisis</h4>
							<p>Recognized the need for standardized AI context management</p>
						</div>
					</div>
					<div class="timeline-item">
						<div class="year">2025</div>
						<div class="content">
							<h4>.faf Launch</h4>
							<p>Released as the definitive AI context format</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="principles-section">
		<div class="container">
			<div class="card">
				<h2>Core Principles</h2>
				<div class="principles-grid">
					<div class="principle">
						<div class="principle-icon">🏛️</div>
						<h3>Trust Over Hope</h3>
						<p>Bank-grade reliability with 99.9% uptime SLA</p>
					</div>
					<div class="principle">
						<div class="principle-icon">⚡</div>
						<h3>Speed First</h3>
						<p>Every operation under 50ms, guaranteed</p>
					</div>
					<div class="principle">
						<div class="principle-icon">🔄</div>
						<h3>Self-Healing</h3>
						<p>Automatic error correction and recovery</p>
					</div>
					<div class="principle">
						<div class="principle-icon">♾️</div>
						<h3>Eternal Sync</h3>
						<p>Context persistence across all sessions</p>
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
						<img src="/anthropic-logo.png" alt="Anthropic" class="partner-logo" />
						<p>MCP Approved</p>
					</div>
					<div class="recognition-item">
						<img src="/google-chrome-logo.png" alt="Google Chrome" class="partner-logo" />
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
						40+ years of format development experience, from the Commodore Amiga's .iff to 
						complex industrial simulation formats. Creator of the FAF specification and the 
						driving force behind making AI context management as reliable as image formats.
					</p>
					<div class="founder-quote">
						"AI needed its JPEG moment. We built it."
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
				<a href="https://github.com/Wolfe-Jam/faf-one-svelte" class="contact-card">
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
	}
</style>