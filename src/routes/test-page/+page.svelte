<svelte:head>
	<title>68 Minutes: B&W to Technicolor | FAF CLI</title>
</svelte:head>

<div class="back-nav">
	<a href="/">← Back to Home</a>
</div>

<article class="press-release">
	<div class="container">
		<h1>68 Minutes</h1>
		<p class="subtitle">B&W-to-Color TVs took ~20 years...<br/>We did it in CLI in 68 minutes ⚡️</p>
		<p class="date">October 1, 2025 • 8:13am → 9:21am EST</p>

		<h2>8:13am — The Problem</h2>
		<p>We just built championship-grade ASCII art for FAF CLI to celebrate Sonnet 4.5 hitting 100% AI readiness. Full ANSI colors. Cyan-to-orange gradient. Looks stunning in your terminal with <code>faf version</code>.</p>
		<p>But there's a catch: <strong>Claude Code auto-collapses it</strong>. Users have to hit Ctrl+O to expand and see the banner. We wanted people to see our art without hunting for it. Solution? Put it on the NPM page where it can't be hidden.</p>
		<img src="/images/68-minutes/npm-bw.png" alt="v2.4.16" style="max-width: 100%;" />
		<p style="text-align: center; color: #666; font-size: 0.9rem; font-style: italic;">v2.4.16: First attempt - ASCII art broken in NPM's markdown renderer.</p>

		<h2>8:13am-8:48am — The Solution</h2>
		<p>Simple: Screenshot the beautiful terminal output. Host it on GitHub. Reference it in the README.</p>
		<p>The trick? GitHub raw URLs for images. NPM can fetch and display them. Perfect workaround.</p>
		<img src="/images/68-minutes/npm-no-banner.png" alt="v2.4.17" style="max-width: 100%;" />
		<p style="text-align: center; color: #666; font-size: 0.9rem; font-style: italic;">v2.4.17: Wrong URL = 404. Getting warmer.</p>

		<h2>8:48am-9:21am — The Polish</h2>
		<p>Fixed the URL. Cropped 4 pixels of noise from the edge. Published.</p>
		<p>68 minutes from ASCII chaos to technicolor perfection.</p>

		<h2>9:21am — Victory</h2>
		<img src="/images/68-minutes/npm-color.png" alt="v2.4.21" style="max-width: 100%;" />
		<p style="text-align: center; color: #666; font-size: 0.9rem; font-style: italic;">v2.4.21: Championship-grade technicolor banner. Cyan-to-orange gradient. Perfect.</p>
		<p>68 minutes from disaster to triumph. From monochrome mess to full-color glory.</p>
		<p style="color: #FF6B35; font-style: italic; font-weight: 600;">And yes, 68 is my birth year (1968) and my favorite number. The universe has a sense of humor. ✨</p>

		<h2>Try it yourself</h2>
		<p><strong>npm install -g faf-cli</strong></p>
		<p><strong>2.7k downloads/week and climbing 🏎️⚡️</strong></p>
		<p>Transform any project into perfect AI context in 30 seconds. 41 commands. Works with Claude, ChatGPT, Gemini, and all AI tools.</p>
		<p>
			<a href="https://www.npmjs.com/package/faf-cli" target="_blank">View on NPM →</a> |
			<a href="https://github.com/Wolfe-Jam/faf-cli" target="_blank">GitHub →</a>
		</p>
		<hr />
		<p style="text-align: center;">Made with 🧡 by <a href="https://github.com/Wolfe-Jam" target="_blank">wolfejam</a></p>
	</div>
</article>

<style>
	.back-nav { padding: 1rem; }
	.back-nav a { color: #333; text-decoration: none; }
	.press-release { padding: 2rem 0; background: white; }
	.container { max-width: 800px; margin: 0 auto; padding: 0 2rem; }
	h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
	h2 { font-size: 1.5rem; margin: 2rem 0 1rem; color: #333; }
	.subtitle { font-size: 1.2rem; color: #666; margin-bottom: 1rem; }
	.date { color: #888; font-style: italic; margin-bottom: 2rem; }
	p { line-height: 1.6; margin: 1rem 0; }
	img { display: block; margin: 1rem auto; border: 1px solid #eee; }
	code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; }
</style>
