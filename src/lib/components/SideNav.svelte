<script>
	import { onMount } from 'svelte';

	let isOpen = $state(false);
	let autoHideTimeout;

	function toggleMenu() {
		isOpen = !isOpen;
		if (isOpen) {
			startAutoHide();
		}
	}

	function startAutoHide() {
		clearTimeout(autoHideTimeout);
		autoHideTimeout = setTimeout(() => {
			isOpen = false;
		}, 5000); // Auto-hide after 5 seconds
	}

	function handleMouseEnter() {
		if (isOpen) {
			clearTimeout(autoHideTimeout);
		}
	}

	function handleMouseLeave() {
		if (isOpen) {
			startAutoHide();
		}
	}

	onMount(() => {
		return () => clearTimeout(autoHideTimeout);
	});
</script>

<button class="menu-trigger" onclick={toggleMenu} aria-label="Toggle navigation">
	{#if isOpen}
		✕
	{:else}
		☰
	{/if}
</button>

<nav class="side-nav" class:open={isOpen} onmouseenter={handleMouseEnter} onmouseleave={handleMouseLeave}>
	<div class="nav-header">
		<h3>.faf Menu</h3>
	</div>

	<div class="nav-section">
		<h4>Main</h4>
		<a href="/" onclick={() => isOpen = false}>🏠 Home</a>
		<a href="/about" onclick={() => isOpen = false}>📖 About</a>
		<a href="/docs" onclick={() => isOpen = false}>📚 Documentation</a>
	</div>

	<div class="nav-section">
		<h4>Products</h4>
		<a href="https://www.fafcli.dev/" target="_blank">📺 CLI</a>
		<a href="/mcp" onclick={() => isOpen = false}>🤖 MCP Server</a>
		<a href="https://fafdev.tools/" target="_blank">🧰 Web Tools</a>
		<a href="https://chromewebstore.google.com/detail/lnecebepmpjpilldfmndnaofbfjkjlkm" target="_blank">🌐 Chrome Extension</a>
	</div>

	<div class="nav-section">
		<h4>Community</h4>
		<a href="https://github.com/Wolfe-Jam/faf/discussions" target="_blank">💬 GitHub Discussions</a>
		<a href="/support" onclick={() => isOpen = false}>🛟 Software Club</a>
		<a href="/founders" onclick={() => isOpen = false}>🏆 Join Movement</a>
		<a href="/calculator" onclick={() => isOpen = false}>🧮 ROI Calculator</a>
		<a href="/risk-assessment" onclick={() => isOpen = false}>🎯 Risk Assessment</a>
	</div>

	<div class="nav-section">
		<h4>Resources</h4>
		<a href="/press-center" onclick={() => isOpen = false}>📰 Press Center</a>
		<a href="/press" onclick={() => isOpen = false}>📦 Press Kit</a>
		<a href="/terms" onclick={() => isOpen = false}>📜 Terms</a>
		<a href="/privacy" onclick={() => isOpen = false}>🔒 Privacy</a>
	</div>
</nav>

{#if isOpen}
	<div class="overlay" onclick={() => isOpen = false}></div>
{/if}

<style>
	.menu-trigger {
		position: fixed;
		top: 0.5rem;
		left: 1rem;
		z-index: 1001;
		background: var(--faf-orange);
		color: white;
		border: none;
		border-radius: 8px;
		width: 48px;
		height: 48px;
		font-size: 1.5rem;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 2px 10px rgba(0,0,0,0.2);
		font-weight: 700;
	}

	.menu-trigger:hover {
		transform: scale(1.05);
		box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
	}

	.side-nav {
		position: fixed;
		top: 0;
		left: -320px;
		width: 300px;
		height: 100vh;
		background: var(--faf-black);
		color: white;
		transition: left 0.3s ease;
		z-index: 1000;
		overflow-y: auto;
		box-shadow: 2px 0 20px rgba(0,0,0,0.3);
	}

	.side-nav.open {
		left: 0;
	}

	.nav-header {
		padding: 2rem 1.5rem 1rem;
		border-bottom: 2px solid var(--faf-orange);
		margin-bottom: 1rem;
		text-align: center;
	}

	.nav-header h3 {
		margin: 0;
		font-size: 1.25rem;
		color: var(--faf-orange);
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.nav-section {
		padding: 0 1.5rem;
		margin-bottom: 2rem;
	}

	.nav-section h4 {
		margin: 0 0 0.75rem 0;
		font-size: 0.875rem;
		color: var(--faf-orange);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 700;
		opacity: 0.8;
	}

	.nav-section a {
		display: block;
		padding: 0.75rem 1rem;
		color: #ccc;
		text-decoration: none;
		border-radius: 8px;
		transition: all 0.2s ease;
		margin-bottom: 0.25rem;
		font-weight: 600;
	}

	.nav-section a:hover {
		background: rgba(255, 107, 53, 0.1);
		color: var(--faf-orange);
		transform: translateX(5px);
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
		animation: fadeIn 0.3s ease;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@media (max-width: 600px) {
		.side-nav {
			width: 250px;
			left: -270px;
		}

		.nav-section {
			padding: 0 1rem;
		}

		.nav-header {
			padding: 1.5rem 1rem 1rem;
		}
	}
</style>