<script>
	let { codeTyped = '', codeText = 'faf init' } = $props();
</script>

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

<style>
	.pathways {
		margin: 3rem 0;
		text-align: center;
	}

	.pathways-title {
		font-size: 1.8rem;
		color: var(--faf-black);
		margin-bottom: 2rem;
		font-weight: 700;
	}

	.pathways-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		max-width: 700px;
		margin: 0 auto;
	}

	.pathway {
		background: white;
		padding: 2rem 1rem;
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		transition: all 0.3s ease;
		border: 2px solid transparent;
	}

	.pathway:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
		border-color: var(--faf-orange);
	}

	.pathway.featured {
		background: linear-gradient(135deg, #fff9f7 0%, #ffffff 100%);
		border-color: var(--faf-orange);
		transform: scale(1.05);
	}

	.pathway-icon {
		font-size: 2.5rem;
		line-height: 1;
	}

	.pathway-name {
		font-size: 1.2rem;
		font-weight: 900;
		color: var(--faf-black);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.pathway-desc {
		font-size: 0.9rem;
		color: #666;
		opacity: 0.8;
	}

	.terminal {
		background: #1e1e1e;
		border-radius: 12px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		overflow: hidden;
		margin: 2rem auto;
		max-width: 600px;
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
		animation: slideInUp 0.7s ease-out 0.3s backwards;
	}

	.terminal-header {
		background: #2d2d2d;
		padding: 0.75rem 1rem;
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.terminal-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		display: block;
	}

	.terminal-dot.red { background: #ff5f56; }
	.terminal-dot.yellow { background: #ffbd2e; }
	.terminal-dot.green { background: #27c93f; }

	.terminal-body {
		padding: 1.5rem;
		color: #d4d4d4;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.terminal-line {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	.prompt {
		color: #58d68d;
		margin-right: 0.5rem;
		font-weight: 600;
	}

	.cursor {
		animation: blink 1s infinite;
		color: #58d68d;
		font-weight: 300;
	}

	.terminal-output {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid #444;
	}

	.output-line {
		margin: 0.5rem 0;
		color: #b4b4b4;
	}

	.score-green {
		color: #58d68d;
		font-weight: 600;
	}

	.score-cyan {
		color: #5dade2;
		font-weight: 600;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
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

	@media (max-width: 768px) {
		.pathways-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
			max-width: 300px;
		}

		.pathway.featured {
			transform: scale(1);
		}

		.terminal {
			margin: 1.5rem auto;
		}

		.terminal-body {
			font-size: 0.85rem;
			padding: 1rem;
		}
	}
</style>