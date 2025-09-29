<script>
	let { aiContext = 50 } = $props();

	const isInferior = $derived(aiContext < 90);

	const bullets = $derived(
		aiContext >= 90 ? [
			"Building exactly what was designed",
			"Team is in flow state",
			"Shipping championship code",
			"AI augments productivity effectively",
			"Predictable delivery timeline",
			{ text: "PROJECT SUCCESS", isLast: true }
		] :
		aiContext >= 75 ? [
			"Mostly on track",
			"Some re-explanation needed",
			"Quality holding steady",
			"Minor inefficiencies creeping in",
			"Still manageable with effort",
			{ text: "RISKY BUT POSSIBLE", isLast: true }
		] :
		aiContext >= 60 ? [
			"Starting to cut corners",
			"Re-explaining requirements weekly",
			"Quality slipping",
			"AI making occasional mistakes",
			"Timeline starting to stretch",
			{ text: "DELAYS GUARANTEED", isLast: true }
		] :
		aiContext >= 50 ? [
			"You are literally flipping a coin with AI",
			"Half the context = double the confusion",
			"Building the wrong thing efficiently",
			"Team frustration rising",
			"AI WILL make mistakes, not might",
			"Setup for delays and incorrect code",
			{ text: "PROJECT FAILURE", isLast: true }
		] :
		aiContext >= 30 ? [
			"Major gaps in understanding",
			"Endless rework cycles",
			"Good developers considering leaving",
			"AI is now a liability, not an asset",
			"Project failure becoming likely",
			"Every sprint is a crisis",
			{ text: "PROJECT FAILURE", isLast: true }
		] :
		aiContext >= 20 ? [
			"Nobody remembers the original goal",
			"Complete chaos",
			"Team morale critical",
			"AI actively making things worse",
			"Burning money with no progress",
			"Technical debt out of control",
			{ text: "PROJECT FAILURE", isLast: true }
		] : [
			"Project death spiral",
			"Complete restart needed",
			"Reputation destroyed",
			"AI is generating garbage",
			"Team has given up",
			"Failure is guaranteed",
			{ text: "PROJECT FAILURE", isLast: true }
		]
	);
</script>

<div class="context-preview">
	<h4>💣 What {isInferior ? 'Inferior' : ''} AI Context Really Means:</h4>
	<ul>
		{#each bullets as bullet}
			{#if typeof bullet === 'string'}
				<li>{bullet}</li>
			{:else}
				<li class="last-item">Ultimately, {bullet.text}</li>
			{/if}
		{/each}
	</ul>
</div>

<style>
	.context-preview {
		margin-top: 1rem;
		padding: 1.5rem;
		background: linear-gradient(135deg, #fff 0%, #f8f8f8 100%);
		border-radius: 12px;
		border: 2px solid #e0e0e0;
		box-shadow: 0 2px 8px rgba(0,0,0,0.05);
		transition: all 0.3s ease;
		min-height: 180px;
		display: flex;
		flex-direction: column;
	}

	.context-preview:hover {
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.1);
		border-color: var(--faf-orange);
	}

	h4 {
		margin: 0 0 1rem 0;
		color: var(--faf-orange);
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 800;
	}

	ul {
		margin: 0;
		padding-left: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		gap: 0.75rem;
	}

	li {
		color: #444;
		font-size: 0.875rem;
		line-height: 1.5;
		position: relative;
		padding-left: 1.5rem;
		font-weight: 500;
	}

	li:before {
		content: "→";
		color: var(--faf-orange);
		font-weight: bold;
		position: absolute;
		left: 0;
		font-size: 1rem;
	}

	li.last-item {
		margin-top: auto;
		padding-top: 0.5rem;
		border-top: 1px solid #e0e0e0;
		font-weight: 800;
		color: var(--faf-black);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	li.last-item:before {
		content: "⚠️";
		font-size: 1rem;
	}
</style>