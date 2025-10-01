<script>
	import FafLogo from '$lib/components/FafLogo.svelte';
	import ScrollRevealText from '$lib/components/ScrollRevealText.svelte';
</script>

<svelte:head>
	<title>MCP - Model Context Protocol | .faf</title>
	<meta name="description" content="Set up the .faf Model Context Protocol (MCP) with 800+ weekly downloads. Direct AI integration for Claude Desktop." />
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<div class="mcp-page">
	<section class="hero-section">
		<div class="container">
			<div class="logo-wrapper">
				<FafLogo size="small" color="black" />
			</div>
			<h1 class="page-title">Model Context Protocol</h1>
			<p class="subtitle">Direct AI Integration • 800+ Weekly Downloads</p>
		</div>
	</section>

	<section class="content-section">
		<div class="container">
			<ScrollRevealText threshold={0.3}>
				<div class="intro-block">
					<h2>What is MCP?</h2>
					<p>The Model Context Protocol (MCP) is an open-source protocol that enables seamless integration between AI assistants and external data sources. The .faf MCP server allows Claude Desktop to directly read and understand your project's .faf files, providing instant context about your codebase.</p>
				</div>
			</ScrollRevealText>

			<ScrollRevealText threshold={0.3} delay={200}>
				<div class="feature-grid">
					<div class="feature-card">
						<span class="feature-icon">⚡</span>
						<h3>Instant Context</h3>
						<p>Claude automatically understands your project structure</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">🔒</span>
						<h3>Local & Secure</h3>
						<p>All processing happens on your machine</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">🤖</span>
						<h3>Native Integration</h3>
						<p>Built directly into Claude Desktop</p>
					</div>
				</div>
			</ScrollRevealText>

			<ScrollRevealText threshold={0.3} delay={400}>
				<div class="setup-section">
					<h2>Quick Setup</h2>
					<div class="steps">
						<div class="step">
							<div class="step-number">1</div>
							<div class="step-content">
								<h3>Install Claude Desktop</h3>
								<p>Download the latest version from Anthropic</p>
								<a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" class="link">
									Download Claude Desktop →
								</a>
							</div>
						</div>
						
						<div class="step">
							<div class="step-number">2</div>
							<div class="step-content">
								<h3>Install .faf MCP Server</h3>
								<div class="code-block">
									<code>npm install -g claude-faf-mcp</code>
								</div>
							</div>
						</div>
						
						<div class="step">
							<div class="step-number">3</div>
							<div class="step-content">
								<h3>Configure Claude Desktop</h3>
								<p>Add to your Claude Desktop config:</p>
								<div class="code-block">
									<pre>{`{
  "mcpServers": {
    "faf": {
      "command": "npx",
      "args": ["@faf/mcp-server"]
    }
  }
}`}</pre>
								</div>
							</div>
						</div>
						
						<div class="step">
							<div class="step-number">4</div>
							<div class="step-content">
								<h3>Restart Claude Desktop</h3>
								<p>The .faf MCP server will now automatically provide context</p>
							</div>
						</div>
					</div>
				</div>
			</ScrollRevealText>

			<ScrollRevealText threshold={0.3} delay={600}>
				<div class="benefits-section">
					<h2>Why Use MCP?</h2>
					<div class="benefits-grid">
						<div class="benefit">
							<h3>🎯 Perfect Context</h3>
							<p>Claude understands your entire project structure, dependencies, and configurations instantly</p>
						</div>
						<div class="benefit">
							<h3>⌚ Save Time</h3>
							<p>No more copying and pasting context. Claude reads .faf files directly</p>
						</div>
						<div class="benefit">
							<h3>🔄 Stay in Sync</h3>
							<p>Changes to your .faf files are immediately available to Claude</p>
						</div>
						<div class="benefit">
							<h3>🛡️ Privacy First</h3>
							<p>Your code never leaves your machine. All processing is local</p>
						</div>
					</div>
				</div>
			</ScrollRevealText>

			<ScrollRevealText threshold={0.3} delay={800}>
				<div class="cta-section">
					<h2>Ready to Get Started?</h2>
					<div class="cta-buttons">
						<a href="https://modelcontextprotocol.io/quickstart" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
							View Official MCP Docs
						</a>
						<a href="https://github.com/Wolfe-Jam/faf" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">⭐
							View on GitHub
						</a>
					</div>
				</div>
			</ScrollRevealText>
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

	.mcp-page {
		min-height: 100vh;
		background: var(--faf-cream);
	}

	.hero-section {
		padding: 4rem 0 3rem;
		background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, rgba(0, 243, 255, 0.05) 100%);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.logo-wrapper {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.page-title {
		font-size: 3.5rem;
		font-weight: 900;
		text-align: center;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}

	.subtitle {
		text-align: center;
		font-size: 1.25rem;
		color: var(--faf-gray);
		font-weight: 600;
	}

	.content-section {
		padding: 4rem 0;
	}

	.intro-block {
		max-width: 800px;
		margin: 0 auto 4rem;
		text-align: center;
	}

	.intro-block h2 {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
		color: var(--faf-black);
	}

	.intro-block p {
		font-size: 1.25rem;
		line-height: 1.6;
		color: var(--faf-gray-dark);
	}

	.feature-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.feature-card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		transition: transform 0.3s ease;
	}

	.feature-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.feature-icon {
		font-size: 3rem;
		display: block;
		margin-bottom: 1rem;
	}

	.feature-card h3 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
	}

	.feature-card p {
		color: var(--faf-gray);
		line-height: 1.5;
	}

	.setup-section {
		margin: 4rem 0;
	}

	.setup-section h2 {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 3rem;
		color: var(--faf-black);
	}

	.steps {
		max-width: 800px;
		margin: 0 auto;
	}

	.step {
		display: flex;
		align-items: flex-start;
		margin-bottom: 3rem;
		gap: 2rem;
	}

	.step-number {
		width: 50px;
		height: 50px;
		background: var(--faf-orange);
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: bold;
		flex-shrink: 0;
	}

	.step-content {
		flex: 1;
	}

	.step-content h3 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
	}

	.step-content p {
		color: var(--faf-gray);
		margin-bottom: 1rem;
		line-height: 1.5;
	}

	.code-block {
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 1rem 1.5rem;
		border-radius: 8px;
		font-family: 'Roboto Mono', monospace;
		font-size: 0.95rem;
		overflow-x: auto;
	}

	.code-block pre {
		margin: 0;
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	.link {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
		transition: opacity 0.3s ease;
	}

	.link:hover {
		opacity: 0.8;
	}

	.benefits-section {
		margin: 4rem 0;
	}

	.benefits-section h2 {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 3rem;
		color: var(--faf-black);
	}

	.benefits-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	.benefit {
		padding: 1.5rem;
		background: rgba(255, 107, 53, 0.05);
		border-left: 4px solid var(--faf-orange);
		border-radius: 8px;
	}

	.benefit h3 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
	}

	.benefit p {
		color: var(--faf-gray);
		line-height: 1.5;
	}

	.cta-section {
		text-align: center;
		margin: 4rem 0 2rem;
	}

	.cta-section h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: var(--faf-black);
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-block;
		padding: 1rem 2rem;
		font-size: 1.125rem;
		font-weight: 600;
		text-decoration: none;
		border-radius: 8px;
		transition: all 0.3s ease;
		border: 2px solid transparent;
	}

	.btn-primary {
		background: var(--faf-orange);
		color: white;
	}

	.btn-primary:hover {
		background: var(--faf-orange-dark);
		transform: translateY(-2px);
	}

	.btn-secondary {
		background: transparent;
		color: var(--faf-black);
		border-color: var(--faf-black);
	}

	.btn-secondary:hover {
		background: var(--faf-black);
		color: white;
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.page-title {
			font-size: 2.5rem;
		}
		
		.feature-grid {
			grid-template-columns: 1fr;
		}
		
		.step {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
</style>