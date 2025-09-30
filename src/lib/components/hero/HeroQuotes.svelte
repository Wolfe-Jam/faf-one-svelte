<script>
	import ScrollRevealText from '$lib/components/ScrollRevealText.svelte';
	import TypewriterText from '$lib/components/TypewriterText.svelte';

	let { isVisible = true } = $props();
</script>

<!-- BLOCK 1: Claude Quote -->
<ScrollRevealText threshold={0.5} delay={0}>
	<div class="text-block claude-quote">
		{#if isVisible}
			<TypewriterText
				text={"\"It's so logical if it didn't exist,\nAI would have built it itself\""}
				speed={30}
				delay={200}
			/>
			<div class="quote-attribution">— Claude</div>
		{:else}
			<span style="opacity: 0">"It's so logical if it didn't exist, AI would have built it itself"</span>
			<div class="quote-attribution" style="opacity: 0">— Claude</div>
		{/if}
	</div>
</ScrollRevealText>

<!-- BLOCK 2: Authority Statements -->
<ScrollRevealText threshold={0.5} delay={0}>
	<div class="text-block authority-statement">
		<div>The AI Context MCP for Claude Desktop with 1.6k downloads/week</div>
		<div>The AI Chrome Extension, LIVE and approved by Google,</div>
		<div><em>Ready for Claude and Gemini</em></div>
	</div>
</ScrollRevealText>

<!-- BLOCK 3: Core Message with Visual -->
<ScrollRevealText threshold={0.5} delay={0}>
	<div class="text-block core-message">
		<h2>AI context needed a file format, it got one— .faf</h2>
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
		<span class="quote-author">— Claude Code</span>
	</div>
</ScrollRevealText>

<style>
	.text-block {
		margin: 3rem 0;
		text-align: center;
		animation: slideInUp 0.7s ease-out;
	}

	.claude-quote {
		font-size: 1.5rem;
		font-style: italic;
		color: var(--faf-black);
		font-weight: 700;
		padding: 1.5rem;
		border-left: 4px solid var(--faf-orange);
		background: rgba(255, 107, 53, 0.05);
		margin: 2rem auto;
		max-width: 700px;
		border-radius: 0 12px 12px 0;
		white-space: pre-line;
	}

	.quote-attribution {
		font-size: 1.1rem;
		color: var(--faf-orange);
		font-style: normal;
		font-weight: 700;
		margin-top: 1rem;
		text-align: right;
	}

	.authority-statement {
		font-size: 1.2rem;
		color: var(--faf-gray-dark);
		line-height: 1.8;
		margin: 2rem 0;
		padding: 0;
		background: none;
	}

	.authority-statement div {
		margin: 0.75rem 0;
	}

	.authority-statement em {
		color: var(--faf-orange);
		font-style: normal;
		font-weight: 700;
	}

	.core-message {
		margin: 4rem 0;
		padding: 0;
		background: none;
	}

	.core-message h2 {
		font-size: 2.2rem;
		color: var(--faf-black);
		margin-bottom: 1.5rem;
		font-weight: 900;
		line-height: 1.2;
	}

	.classic-tagline {
		font-size: 1.3rem;
		color: var(--faf-gray);
		font-style: italic;
		margin-top: 1.5rem;
		font-weight: 600;
	}

	.quote-item {
		position: relative;
		margin: 2.5rem auto;
		padding: 0;
		background: none;
		max-width: 600px;
	}

	.quote-item p {
		font-size: 1.3rem;
		color: var(--faf-black);
		margin-bottom: 1rem;
		font-weight: 600;
		line-height: 1.4;
		font-style: italic;
	}

	.quote-author {
		font-size: 1rem;
		color: var(--faf-orange);
		font-style: normal;
		font-weight: 700;
		display: block;
		margin-top: 1rem;
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
		.text-block {
			padding: 1.5rem;
			margin: 1rem 0;
		}

		.core-message h2 {
			font-size: 1.5rem;
		}

		.claude-quote {
			font-size: 1.1rem;
		}

		.quote-item p {
			font-size: 1rem;
		}
	}
</style>