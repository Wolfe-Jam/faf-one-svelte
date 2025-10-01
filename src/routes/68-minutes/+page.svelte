<svelte:head>
	<title>68 Minutes: B&W to Technicolor | FAF CLI</title>
	<meta name="description" content="B&W-to-color TVs took ~20 years. We transformed our CLI in 68 minutes." />
</svelte:head>

<div class="back-nav">
	<a href="/" class="back-button">← Back to Home</a>
</div>

<article class="press-release">
	<div class="container">
		<h1 class="animated-title">68 Minutes</h1>
		<div class="subtitle">B&W-to-Color TVs took ~20 years...<br/>We did it in CLI in 68 minutes ⚡️</div>

		<div class="date">October 1, 2025 • 8:13am → 9:21am EST</div>

		<h2>8:13am — The Problem</h2>
		<p>
			We just built championship-grade ASCII art for FAF CLI to celebrate Sonnet 4.5 hitting 100% AI readiness.
			Full ANSI colors. Cyan-to-orange gradient. Looks stunning in your terminal with <code>faf version</code>.
		</p>
		<p>
			But there's a catch: <strong>Claude Code auto-collapses it</strong>. Users have to hit Ctrl+O to expand and see the banner.
			We wanted people to see our art without hunting for it. Solution? Put it on the NPM page where it can't be hidden.
		</p>
		<img src="/images/68-minutes/npm-bw.png" alt="Broken B&W ASCII art on NPM v2.4.16" class="hero-image">
		<p style="text-align: center; color: #666; font-size: 0.9rem; font-style: italic;">v2.4.16: First attempt - ASCII art broken in NPM's markdown renderer.</p>

		<h2>8:13am-8:48am — The Solution</h2>
		<p>
			Simple: Screenshot the beautiful terminal output. Host it on GitHub. Reference it in the README.
		</p>
		<p>
			The trick? GitHub raw URLs for images. NPM can fetch and display them. Perfect workaround.
		</p>
		<img src="/images/68-minutes/npm-no-banner.png" alt="NPM page with no banner showing" class="hero-image">
		<p style="text-align: center; color: #666; font-size: 0.9rem; font-style: italic;">v2.4.17: Wrong URL = 404. Getting warmer.</p>

		<h2>8:48am-9:21am — The Polish</h2>
		<p>
			Fixed the URL. Cropped 4 pixels of noise from the edge. Published.
		</p>
		<pre class="code-block"><code>![FAF Championship Banner](https://raw.githubusercontent.com/Wolfe-Jam/faf/main/cli/faf-banner.png)

> **💎 See it live in your terminal:** `faf version`</code></pre>
		<p>
			68 minutes from ASCII chaos to technicolor perfection.
		</p>

		<h2>9:21am — Victory</h2>
		<img src="/images/68-minutes/npm-color.png" alt="Full color championship banner on NPM v2.4.21" class="hero-image">
		<p style="text-align: center; color: #666; font-size: 0.9rem; font-style: italic;">v2.4.21: Championship-grade technicolor banner. Cyan-to-orange gradient. Perfect.</p>
		<p>
			68 minutes from disaster to triumph. From monochrome mess to full-color glory.
		</p>
		<p style="color: var(--faf-orange); font-style: italic; font-weight: 600;">
			And yes, 68 is my birth year (1968) and my favorite number.<br/>
			The universe has a sense of humor. ✨
		</p>

		<h2>Try it yourself</h2>
		<div class="npm-command">npm install -g faf-cli</div>
		<p><strong>2.7k downloads/week and climbing 🏎️⚡️</strong></p>
		<p>
			Transform any project into perfect AI context in 30 seconds.<br/>
			41 commands. Works with Claude, ChatGPT, Gemini, and all AI tools.
		</p>
		<div style="margin: 2rem 0;">
			<a href="https://www.npmjs.com/package/faf-cli" target="_blank" class="cta" style="margin-right: 1rem;">View on NPM →</a>
			<a href="https://github.com/Wolfe-Jam/faf" target="_blank" class="cta">⭐ GitHub →</a>
		</div>

		<hr class="divider">

		<p style="text-align: center;">Made with 🧡 by <a href="https://github.com/Wolfe-Jam/faf" target="_blank" style="color: var(--faf-orange); text-decoration: none; font-weight: 600;">wolfejam</a></p>
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

	.press-release {
		padding: 3rem 0;
		background: white;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: var(--faf-black);
		font-weight: 900;
	}

	.animated-title {
		background: linear-gradient(90deg,
			#000 0%,
			#000 100%
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 200% 100%;
		animation: bwToColor 4s ease-in-out forwards;
	}

	@keyframes bwToColor {
		0% {
			background: linear-gradient(90deg, #000 0%, #000 100%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		40% {
			background: linear-gradient(90deg, #000 0%, #000 100%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
		60% {
			background: linear-gradient(90deg,
				#00CED1 0%,
				#1E90FF 25%,
				#FF6B35 50%,
				#FF914D 75%,
				#FFA500 100%
			);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-size: 200% 100%;
			background-position: 0% 0%;
		}
		100% {
			background: linear-gradient(90deg,
				#00CED1 0%,
				#1E90FF 25%,
				#FF6B35 50%,
				#FF914D 75%,
				#FFA500 100%
			);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-size: 200% 100%;
			background-position: 100% 0%;
			animation: colorSweep 3s ease-in-out infinite;
		}
	}

	@keyframes colorSweep {
		0%, 100% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 100% 0%;
		}
	}

	h2 {
		font-size: 1.75rem;
		margin: 2rem 0 1rem;
		color: var(--faf-black);
		font-weight: 800;
	}

	h2.highlight {
		color: var(--faf-orange);
	}

	h3 {
		font-size: 1.25rem;
		margin: 1.5rem 0 1rem;
		color: var(--faf-black);
		font-weight: 700;
	}

	.subtitle {
		font-size: 1.3rem;
		color: #666;
		margin-bottom: 1rem;
		font-weight: 500;
	}

	.subtitle strong {
		color: var(--faf-orange);
	}

	.intro {
		font-size: 1.2rem;
		line-height: 1.8;
		margin: 2rem 0;
		font-weight: 500;
		color: var(--faf-black);
	}

	.date {
		color: #888;
		margin-bottom: 2rem;
		font-style: italic;
		font-size: 1rem;
	}

	.hero-image {
		width: 100%;
		max-width: 600px;
		margin: 2rem auto;
		display: block;
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0,0,0,0.1);
	}

	.lead {
		font-size: 1.125rem;
		line-height: 1.7;
		margin: 2rem 0;
	}

	.metrics {
		background: #f9f9f9;
		padding: 2rem;
		border-radius: 12px;
		margin: 2rem 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		border: 2px solid var(--faf-cream);
	}

	.metrics-column h3 {
		color: var(--faf-orange);
		margin-top: 0;
	}

	.metrics-column ul {
		list-style: none;
		padding: 0;
	}

	.metrics-column li {
		padding: 0.5rem 0;
		position: relative;
		padding-left: 1.5rem;
	}

	.metrics-column li::before {
		content: "•";
		position: absolute;
		left: 0;
		color: var(--faf-orange);
		font-weight: bold;
	}

	.metrics-box {
		background: #f9f9f9;
		padding: 2rem;
		border-radius: 12px;
		margin: 2rem 0;
		border: 2px solid var(--faf-cream);
	}

	.metrics-box h3 {
		color: var(--faf-orange);
		margin-top: 0;
	}

	.code-block {
		background: #1a1a1a;
		padding: 1.5rem;
		border-radius: 8px;
		overflow-x: auto;
		margin: 1.5rem 0;
		border-left: 4px solid var(--faf-orange);
	}

	.code-block code {
		font-family: var(--font-mono);
		font-size: 0.95rem;
		line-height: 1.6;
		color: #e0e0e0;
	}

	.testimonial {
		margin: 2rem 0;
		padding: 1.5rem;
		background: #f9f9f9;
		border-radius: 12px;
		border-left: 4px solid var(--faf-orange);
	}

	.testimonial blockquote {
		margin: 0;
		font-size: 1.25rem;
		font-style: italic;
		color: var(--faf-black);
	}

	.testimonial p {
		margin: 1rem 0 0 0;
		color: var(--faf-orange);
		font-weight: 600;
	}

	blockquote {
		border-left: 4px solid var(--faf-orange);
		padding-left: 1.5rem;
		margin: 2rem 0;
		color: #666;
		font-style: italic;
		font-size: 1.125rem;
	}

	.npm-command {
		background: #000;
		color: #0f0;
		padding: 1.25rem;
		border-radius: 8px;
		font-family: var(--font-mono);
		margin: 1rem 0;
		font-size: 1.125rem;
		font-weight: 600;
		box-shadow: 0 2px 10px rgba(0,0,0,0.2);
	}

	.cta {
		background: var(--faf-orange);
		color: white;
		padding: 1rem 2.5rem;
		text-decoration: none;
		border-radius: 8px;
		display: inline-block;
		margin: 2rem 0;
		font-weight: 700;
		font-size: 1.125rem;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
	}

	.cta:hover {
		background: #e55a2b;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
	}

	.platform-list {
		list-style: none;
		padding: 0;
		margin: 1.5rem 0;
	}

	.platform-list li {
		padding: 0.75rem 0;
		font-size: 1.125rem;
		position: relative;
		padding-left: 2rem;
	}

	.platform-list li::before {
		position: absolute;
		left: 0;
		font-size: 1.25rem;
	}

	.divider {
		margin: 3rem 0;
		border: 0;
		border-top: 2px solid var(--faf-cream);
	}

	.tagline {
		text-align: center;
		font-size: 1.25rem;
		color: var(--faf-orange);
		font-weight: 600;
		margin: 2rem 0;
	}

	.contact-list {
		list-style: none;
		padding: 0;
		margin: 1.5rem 0;
	}

	.contact-list li {
		padding: 0.5rem 0;
		font-size: 1.0625rem;
	}

	.contact-list a {
		color: var(--faf-orange);
		text-decoration: none;
		font-weight: 600;
	}

	.contact-list a:hover {
		text-decoration: underline;
	}

	.contact-list code {
		background: #f4f4f4;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-family: var(--font-mono);
		font-size: 0.95rem;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.metrics {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.container {
			padding: 0 1rem;
		}
	}
</style>