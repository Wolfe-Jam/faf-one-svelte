<script>
	import { onMount } from 'svelte';
	import FafLogo from '$lib/components/FafLogo.svelte';
	import ScrollRevealText from '$lib/components/ScrollRevealText.svelte';
	import TypewriterText from '$lib/components/TypewriterText.svelte';
	import DownloadCounter from '$lib/components/DownloadCounter.svelte';
	
	// Removed scrollY prop - not needed
	
	let titleRef = $state(null);
	let subtitleRef = $state(null);
	let ctaRef = $state(null);
	let isVisible = $state(false);
	let codeTyped = $state('');
	let showScorePopup = $state(false);
	let currentScore = $state(94);

	const codeText = 'faf init';
	const scores = [85, 88, 91, 94, 96, 99];
	
	onMount(() => {
		setTimeout(() => {
			isVisible = true;
		}, 100);

		// Type out the code
		let index = 0;
		const typeInterval = setInterval(() => {
			if (index <= codeText.length) {
				codeTyped = codeText.slice(0, index);
				index++;
			} else {
				clearInterval(typeInterval);
			}
		}, 150);

		// Random score popup every 8-15 seconds
		const showRandomScore = () => {
			const randomScore = scores[Math.floor(Math.random() * scores.length)];
			currentScore = randomScore;
			showScorePopup = true;

			setTimeout(() => {
				showScorePopup = false;
			}, 3000);

			// Schedule next popup
			const nextDelay = 8000 + Math.random() * 7000; // 8-15 seconds
			setTimeout(showRandomScore, nextDelay);
		};

		// Start first popup after 5 seconds
		setTimeout(showRandomScore, 5000);

		return () => clearInterval(typeInterval);
	});
	
	// Removed parallax - keeping it simple
</script>

<section class="hero">
	<div class="container">
		<div class="hero-content" class:visible={isVisible}>
			<!-- Main Title - MASSIVE -->
			<div bind:this={titleRef} class="title-wrapper">
				<div class="main-logo">
					<FafLogo size="large" color="black" showDefinition={true} />
				</div>
				<div class="subtitle">
					Professional AI-Context Management
				</div>
				<div class="features-tagline">
					<span class="feature-item">⚡ Lightning Fast</span>
					<span class="separator">•</span>
					<span class="feature-item">🔄 Eternal-Sync™</span>
					<span class="separator">•</span>
					<span class="feature-item">🛡️ Disaster Recovery</span>
					<span class="separator">•</span>
					<span class="feature-item">🔒 Bank-Grade Secure</span>
				</div>
			</div>
			
			<!-- Tagline - BOLD -->
			<div bind:this={subtitleRef} class="tagline">
				⚡ <span class="emoji">🧡</span> <span class="tagline-underline">The JPEG for AI</span> <span class="emoji">🩵</span> ⚡
			</div>
			
			<!-- BLOCK 1: Claude Quote -->
			<ScrollRevealText threshold={0.5} delay={0}>
				<div class="text-block claude-quote">
					{#if isVisible}
						<TypewriterText 
							text={"\"It's so logical if it didn't exist, AI would have built it itself\" — Claude"}
							speed={30}
							delay={200}
						/>
					{:else}
						<span style="opacity: 0">"It's so logical if it didn't exist, AI would have built it itself" — Claude</span>
					{/if}
				</div>
			</ScrollRevealText>
			
			<!-- BLOCK 2: Authority Statements -->
			<ScrollRevealText threshold={0.5} delay={0}>
				<div class="text-block authority-statement">
					<div>The AI Context MCP with 800+ weekly downloads</div>
					<div>The AI Chrome Extension, LIVE and approved by Google,</div>
					<div><em>Ready, and waiting for Claude-beta and Gemini</em></div>
				</div>
			</ScrollRevealText>
			
			<!-- BLOCK 3: Core Message with Visual -->
			<ScrollRevealText threshold={0.5} delay={0}>
				<div class="text-block core-message">
					<h2>AI context needed a file format, it got one— .faf</h2>
					{#if false}
					<!-- TODO: Add faf-jpeg-for-ai.png to static folder -->
					<div class="transformation-visual">
						<img src="/faf-jpeg-for-ai.png" alt="From development chaos to clean .faf format - the JPEG for AI" class="jpeg-for-ai-img" />
					</div>
					{/if}
					<p class="classic-tagline">Stop faffing about with context — use .faf — no excuses left</p>
				</div>
			</ScrollRevealText>
			
			<!-- BLOCK 4: Inventor Quote -->
			<ScrollRevealText threshold={0.5} delay={0}>
				<div class="text-block quote-item">
					<p>"package.json wasn't built for this, .faf was"</p>
					<span class="quote-author">— .faf Inventor</span>
				</div>
			</ScrollRevealText>
			
			<!-- BLOCK 5: Claude Code Quote -->
			<ScrollRevealText threshold={0.5} delay={0}>
				<div class="text-block quote-item">
					<p>"package.json gives me a list of dependencies,<br/>.faf shows me how to use them"</p>
					<span class="quote-author">— Claude Code (Anthropic)</span>
				</div>
			</ScrollRevealText>
			
			
			<!-- Authority Badges -->
			<div class="authority-badges">
				<a href="https://github.com/Wolfe-Jam" class="badge-item badge-mcp" target="_blank" rel="noopener">
					<img src="/mcp-logo.png" alt="Model Context Protocol" class="mcp-logo" />
					<span class="badge-text">Model Context Protocol<br><small>Open-sourced by Anthropic</small></span>
				</a>
				<a href="https://chrome.google.com/webstore/detail/faf" class="badge-item badge-chrome" target="_blank" rel="noopener">
					<img src="/chrome-web-store-badge-medium.png" alt="Available in the Chrome Web Store" class="chrome-badge-img" />
				</a>
			</div>

			<!-- Official MCP Registry Badges -->
			<div class="official-badges">
				<h3 class="official-badges-title">Official MCP Format</h3>
				<div class="badges-row">
					<a href="https://github.com/modelcontextprotocol/servers" class="official-badge" target="_blank" rel="noopener">
						☑️ MCP Official Registry
					</a>
					<a href="https://npmjs.com/package/claude-faf-mcp" class="official-badge" target="_blank" rel="noopener">
						📦 NPM Package
					</a>
				</div>
			</div>
			
			<!-- Live NPM Stats with Animated Counter -->
			<div class="live-npm-stats">
				<DownloadCounter />
			</div>

			<!-- Verified Testing Stats -->
			<div class="testing-stats">
				<h3 class="testing-title">Verified Testing Results</h3>
				<div class="stats-grid">
					<div class="stat-item">
						<span class="stat-number">10,000+</span>
						<span class="stat-label">Projects Tested</span>
					</div>
					<div class="stat-item">
						<span class="stat-number">9.3/10</span>
						<span class="stat-label">AI Average Rating</span>
					</div>
					<div class="stat-item">
						<span class="stat-number">154+</span>
						<span class="stat-label">Formats Validated</span>
					</div>
					<div class="stat-item">
						<span class="stat-number">&lt;50ms</span>
						<span class="stat-label">Processing Time</span>
					</div>
				</div>
			</div>
			
			<!-- AI Testimonials from Testing -->
			<div class="ai-testimonials">
				<h3 class="testimonials-title">What the BIG-3 AI's said during Verified Testing</h3>
				<div class="testimonial-grid">
					<div class="testimonial-item claude-item">
						<p class="testimonial-quote">"Should become the standard"</p>
						<div class="testimonial-author">
							<span class="author-name">Claude Code</span>
							<span class="author-rating">(9.5/10 Rating)</span>
						</div>
					</div>
					<div class="testimonial-item openai-item">
						<p class="testimonial-quote">"Every project should have one"</p>
						<div class="testimonial-author">
							<span class="author-name">OpenAI Codex CLI</span>
							<span class="author-rating">(9/10 Rating)</span>
						</div>
					</div>
					<div class="testimonial-item gemini-item">
						<p class="testimonial-quote">"README evolution for AI era"</p>
						<div class="testimonial-author">
							<span class="author-name">Google Gemini CLI</span>
							<span class="author-rating">(9.5/10 Rating)</span>
						</div>
					</div>
				</div>
			</div>
			
			<!-- Three Pathways -->
			<div class="pathways">
				<h3 class="pathways-title">Choose Your Path to AI Context</h3>
				<div class="pathways-grid">
					<div class="pathway">
						<span class="pathway-icon">🌐</span>
						<span class="pathway-name">WEB</span>
						<span class="pathway-desc">Chrome Extension</span>
					</div>
					<div class="pathway featured">
						<span class="pathway-icon">🤖</span>
						<span class="pathway-name">MCP</span>
						<span class="pathway-desc">Model Context</span>
					</div>
					<div class="pathway">
						<span class="pathway-icon">📺</span>
						<span class="pathway-name">CLI</span>
						<span class="pathway-desc">Command Line</span>
					</div>
				</div>
			</div>
			
			<!-- Terminal Preview -->
			<div class="terminal">
				<div class="terminal-header">
					<span class="terminal-dot red"></span>
					<span class="terminal-dot yellow"></span>
					<span class="terminal-dot green"></span>
				</div>
				<div class="terminal-body">
					<div class="terminal-line">
						<span class="prompt">$</span> {codeTyped}<span class="cursor">|</span>
					</div>
					{#if codeTyped === codeText}
						<div class="terminal-output">
							<div class="output-line">☑️ .faf created (22% → 99% in 3 seconds)</div>
							<div class="output-line">🏆 AI-Readiness Score: <span class="score-green">99%</span></div>
							<div class="output-line">⌚ Processing time: <span class="score-cyan">&lt;50ms</span></div>
						</div>
					{/if}
				</div>
			</div>
			
			<!-- CTAs -->
			<div bind:this={ctaRef} class="cta-wrapper">
				<a href="https://fafdev.tools" class="btn btn-cyan btn-large">
					<span class="btn-icon">🧡⚡️</span>
					WEB - Fafdev.tools
				</a>
				<a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener noreferrer" class="btn btn-orange btn-large">
					<span class="btn-icon">🤖</span>
					MCP Registry
				</a>
				<a href="https://fafcli.dev" class="btn btn-dark btn-large">
					<span class="btn-icon">📺</span>
					Try CLI
				</a>
			</div>
			
			<!-- Trust Signal -->
			<div class="trust-signal">
				<p class="trust-text">
					Trusted by developers at 
					<span class="company">Anthropic</span> and 
					<span class="company">Google Chrome</span>
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		position: relative;
		background: var(--faf-cream);
		padding: 2rem 0 4rem 0;
		min-height: 100vh;
	}
	
	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		position: relative;
	}
	
	.hero-content {
		text-align: center;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease-out;
	}
	
	.hero-content.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	.title-wrapper {
		margin-bottom: 1rem;
		animation: slideInUp 0.7s ease-out 0.1s backwards;
	}
	
	.main-logo {
		display: flex;
		justify-content: center;
		margin-bottom: 0.5rem;
	}
	
	.subtitle {
		font-size: 1.25rem;
		font-family: 'Roboto Condensed', sans-serif;
		color: var(--faf-gray);
		letter-spacing: 0.05em;
		margin-top: 4.5rem;
		margin-bottom: 2rem;
	}
	
	
	.tagline {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--faf-dark);
		margin: 6rem 0 4rem;
		animation: slideInUp 0.7s ease-out 0.2s backwards;
	}
	
	.tagline-underline {
		text-decoration: underline;
		text-decoration-thickness: 3px;
		text-underline-offset: 4px;
		text-decoration-color: var(--faf-black);
	}
	
	.claude-quote {
		font-family: 'Roboto Mono', monospace;
		font-size: 1.25rem;
		font-style: italic;
		color: var(--faf-gray);
		margin: 2rem 0;
		padding: 1.5rem;
		border-left: 4px solid var(--faf-orange);
		background: rgba(0, 243, 255, 0.05);
		animation: slideInUp 0.7s ease-out 0.3s backwards;
	}
	
	.emoji {
		display: inline-block;
		animation: pulse 2s ease-in-out infinite;
	}
	
	.authority-statement {
		font-family: 'Roboto Mono', monospace;
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--faf-gray);
		text-align: center;
		line-height: 1.8;
		margin: 0.75rem 0 2rem 0;
		animation: slideInUp 0.7s ease-out 0.35s backwards;
	}
	
	.authority-statement div:nth-child(2) {
		margin-top: 1.5rem;
	}
	
	.core-message {
		margin: 3rem 0;
		animation: slideInUp 0.7s ease-out 0.4s backwards;
	}
	
	.core-message h2 {
		font-size: 2rem;
		font-weight: 800;
		color: var(--faf-dark);
		text-align: center;
		letter-spacing: -0.01em;
		margin-bottom: 2rem;
	}
	
	.transformation-visual {
		display: flex;
		justify-content: center;
		margin: 3rem 0;
	}
	
	.jpeg-for-ai-img {
		width: 100%;
		max-width: 900px;
		height: auto;
		border-radius: 12px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}
	
	.jpeg-for-ai-img:hover {
		transform: scale(1.02);
		box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
	}
	
	.classic-tagline {
		font-size: 1.75rem;
		font-weight: 700;
		color: var(--faf-black);
		text-align: center;
		margin-top: 3rem;
		font-style: italic;
		letter-spacing: -0.02em;
		position: relative;
		padding: 0 1rem;
	}
	
	.classic-tagline::before,
	.classic-tagline::after {
		content: "—";
		color: var(--faf-orange);
		margin: 0 0.5rem;
		font-weight: 400;
	}
	
	/* Text blocks with scroll reveal */
	.text-block {
		margin: 2.5rem 0;
		padding: 1.5rem 0;
		min-height: 100px;
	}
	
	
	
	.text-block.quote-item {
		text-align: center;
		max-width: 700px;
		margin: 0 auto;
	}
	
	.text-block.quote-item p {
		font-size: 1.25rem;
		font-style: italic;
		color: var(--faf-gray-dark);
		margin-bottom: 0.5rem;
		line-height: 1.6;
		font-weight: 600;
	}
	
	.text-block.quote-item .quote-author {
		font-size: 1rem;
		color: var(--faf-orange);
		font-weight: 700;
		font-style: normal;
	}
	
	
	.quote-author {
		color: var(--faf-orange);
		font-size: 1.125rem;
	}
	
	
	.authority-badges {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin: 2rem 0 3rem;
		flex-wrap: wrap;
		animation: slideInUp 0.7s ease-out 0.3s backwards;
	}
	
	.badge-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1.5rem;
		background: white;
		border: 2px solid var(--faf-gray-medium);
		border-radius: 999px;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--faf-gray-dark);
		transition: all 0.3s ease;
		cursor: pointer;
		text-decoration: none;
	}
	
	.badge-item:hover {
		border-color: var(--faf-orange);
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}
	
	
	.mcp-logo {
		height: 36px;
		width: auto;
	}
	
	.badge-mcp {
		padding: 0.75rem 1.25rem;
		cursor: pointer;
		text-decoration: none;
		color: inherit;
	}
	
	.badge-mcp:hover {
		transform: translateY(-2px);
	}
	
	.badge-mcp:hover .mcp-logo {
		filter: brightness(1.1);
	}
	
	.chrome-badge-img {
		height: 50px;
		width: auto;
	}
	
	.badge-chrome {
		padding: 0;
		background: transparent;
		border: none;
	}
	
	.badge-chrome:hover {
		transform: translateY(-2px);
		filter: brightness(1.05);
	}
	
	.badge-text {
		line-height: 1.3;
		text-align: left;
	}
	
	.badge-text small {
		font-size: 0.75rem;
		color: var(--faf-gray);
		font-weight: 500;
	}

	.official-badges {
		margin: 2rem 0;
		text-align: center;
		animation: slideInUp 0.7s ease-out 0.35s backwards;
	}

	.official-badges-title {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.badges-row {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.official-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
		color: white;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.9rem;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
	}

	.official-badge:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
		filter: brightness(1.1);
	}

	.live-npm-stats {
		display: flex;
		justify-content: center;
		margin: 2rem 0;
		animation: slideInUp 0.7s ease-out 0.35s backwards;
	}

	.npm-badge {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 2rem;
		background: linear-gradient(135deg, #FF6B35 0%, #FF914D 100%);
		color: white;
		border-radius: 999px;
		font-weight: 700;
		box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
		animation: pulse 2s ease-in-out infinite;
	}

	.npm-icon {
		font-size: 2rem;
	}

	.npm-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.npm-number {
		font-size: 1.75rem;
		font-weight: 900;
		line-height: 1;
	}

	.npm-label {
		font-size: 0.875rem;
		opacity: 0.95;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.testing-stats {
		margin: 3rem -2rem;
		padding: 3rem 2rem;
		background: linear-gradient(135deg, 
			#4a4a4a 0%, 
			#2c3e50 20%, 
			#0a0a0a 50%, 
			#2c3e50 80%, 
			#4a4a4a 100%
		);
		border-radius: 20px;
		box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
		animation: slideInUp 0.7s ease-out 0.35s backwards;
		position: relative;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.05);
	}
	
	.testing-stats::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: linear-gradient(90deg, var(--faf-orange) 0%, var(--faf-cyan-dark) 50%, var(--faf-green) 100%);
	}
	
	.testing-stats::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%);
		animation: steelSheen 3s ease-in-out infinite;
		pointer-events: none;
	}
	
	@keyframes steelSheen {
		0% { left: -100%; }
		100% { left: 100%; }
	}
	
	.testing-title {
		text-align: center;
		font-size: 1.25rem;
		color: var(--faf-white);
		margin-bottom: 2rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.15em;
	}
	
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		justify-items: center;
	}
	
	.stat-item {
		text-align: center;
		background: var(--faf-white);
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
		transition: transform 0.3s ease;
		width: 100%;
	}
	
	.stat-item:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
	}
	
	.stat-number {
		display: block;
		font-size: 2.5rem;
		font-weight: 900;
		line-height: 1;
		margin-bottom: 0.5rem;
	}
	
	/* Different color for each stat */
	.stat-item:nth-child(1) .stat-number {
		color: var(--faf-black);
	}
	
	.stat-item:nth-child(2) .stat-number {
		color: var(--faf-cyan-dark);
	}
	
	.stat-item:nth-child(3) .stat-number {
		color: #00C851; /* Green */
	}
	
	.stat-item:nth-child(4) .stat-number {
		color: var(--faf-orange);
	}
	
	.stat-label {
		display: block;
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 600;
	}
	
	.ai-testimonials {
		margin: 2rem 0 3rem;
		animation: slideInUp 0.7s ease-out 0.4s backwards;
	}
	
	.testimonials-title {
		text-align: center;
		font-size: 1.25rem;
		color: var(--faf-gray-dark);
		margin-bottom: 1.5rem;
		font-weight: 600;
	}
	
	.testimonial-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		max-width: 900px;
		margin: 0 auto;
	}
	
	.testimonial-item {
		background: #FFFFFF;
		border: 2px solid var(--faf-gray-light);
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	}
	
	.testimonial-item:hover {
		border-color: var(--faf-orange);
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(255, 107, 53, 0.1);
	}
	
	.testimonial-quote {
		font-size: 1rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 1rem;
		line-height: 1.4;
	}
	
	.testimonial-author {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	
	.author-name {
		font-weight: 600;
		color: var(--faf-orange);
		font-size: 0.875rem;
	}
	
	.author-rating {
		font-size: 0.75rem;
		color: var(--faf-gray-dark);
		font-style: italic;
	}
	
	/* Brand-specific colors for AI testimonials */
	.claude-item .author-name {
		color: var(--faf-orange);
	}
	
	.openai-item .author-name {
		color: #0066CC; /* Standard blue */
	}
	
	.gemini-item .author-name {
		color: var(--faf-cyan-dark); /* Using our great cyan #00d4d4 */
	}
	
	.pathways {
		margin: 3rem 0;
		animation: slideInUp 0.7s ease-out 0.4s backwards;
	}
	
	.pathways-title {
		text-align: center;
		font-size: 1.25rem;
		color: var(--faf-gray-dark);
		margin-bottom: 1.5rem;
		font-weight: 600;
	}
	
	.pathways-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		max-width: 600px;
		margin: 0 auto;
	}
	
	.pathway {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 1.5rem;
		background: white;
		border: 2px solid var(--faf-gray-medium);
		border-radius: 16px;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	
	.pathway:hover {
		transform: translateY(-5px);
		border-color: var(--faf-orange);
		box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
	}
	
	.pathway.featured {
		border-color: var(--faf-orange);
		background: linear-gradient(135deg, white 0%, rgba(255, 107, 53, 0.05) 100%);
		transform: scale(1.05);
	}
	
	.pathway-icon {
		font-size: 2.5rem;
	}
	
	.pathway-name {
		font-weight: 700;
		font-size: 1.125rem;
		color: var(--faf-black);
	}
	
	.pathway-desc {
		font-size: 0.75rem;
		color: var(--faf-gray-dark);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.terminal {
		max-width: 600px;
		margin: 3rem auto;
		background: var(--faf-black);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		animation: slideInUp 0.7s ease-out 0.4s backwards;
	}
	
	.terminal-header {
		background: #2D2D2D;
		padding: 0.75rem;
		display: flex;
		gap: 0.5rem;
	}
	
	.terminal-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}
	
	.terminal-dot.red {
		background: #FF5F56;
	}
	
	.terminal-dot.yellow {
		background: #FFBD2E;
	}
	
	.terminal-dot.green {
		background: #27C93F;
	}
	
	.terminal-body {
		padding: 1.5rem;
		font-family: var(--font-mono);
		font-size: 0.9rem;
		color: var(--faf-white);
		min-height: 150px;
	}
	
	.terminal-line {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	
	.prompt {
		color: var(--faf-green);
	}
	
	.cursor {
		animation: blink 1s steps(1) infinite;
		color: var(--faf-cyan-dark);
	}
	
	@keyframes blink {
		50% { opacity: 0; }
	}
	
	.terminal-output {
		margin-top: 1rem;
		animation: fadeIn 0.5s ease-out;
	}
	
	.output-line {
		margin: 0.5rem 0;
		color: #999;
	}
	
	.score-green {
		color: var(--faf-green);
		font-weight: 700;
	}
	
	.score-cyan {
		color: var(--faf-cyan-dark);
		font-weight: 700;
	}
	
	.cta-wrapper {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin: 3rem 0;
		animation: slideInUp 0.7s ease-out 0.5s backwards;
	}
	
	.btn-large {
		padding: 1rem 2rem;
		font-size: 1.125rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		text-decoration: none;
		font-weight: 600;
		min-width: 200px;
		flex: 1;
		max-width: 250px;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	}
	
	.btn-icon {
		font-size: 1.25rem;
	}
	
	.trust-signal {
		margin-top: 3rem;
		animation: fadeIn 0.7s ease-out 0.6s backwards;
	}
	
	.trust-text {
		color: var(--faf-gray-dark);
		font-size: 0.875rem;
	}
	
	.company {
		font-weight: 600;
		color: var(--faf-black);
	}
	
	
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	
	@keyframes slideInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}
	
	@media (max-width: 768px) {
		.authority-badges {
			flex-direction: column;
			align-items: center;
		}
		
		.badge-item {
			width: 100%;
			max-width: 300px;
			justify-content: center;
		}
		
		.mcp-logo {
			width: 24px;
			height: 24px;
		}
		
		.testing-stats {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
		
		.jpeg-for-ai-img {
			max-width: 100%;
		}
		
		.transformation-visual {
			margin: 2rem 0;
		}
		
		.testimonial-grid {
			grid-template-columns: 1fr;
		}
		
		.stats-grid {
			flex-direction: column;
			gap: 1.5rem;
		}
		
		.stat-number {
			font-size: 2rem;
		}
		
		.pathways-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		
		.pathway.featured {
			transform: none;
		}
		
		.cta-wrapper {
			flex-direction: column;
			align-items: center;
		}
		
		.btn-large {
			width: 100%;
			max-width: 300px;
		}
	}
</style>