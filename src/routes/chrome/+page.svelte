<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const chromeStoreUrl = 'https://chromewebstore.google.com/detail/lnecebepmpjpilldfmndnaofbfjkjlkm';

	onMount(() => {
		if (browser) {
			// Redirect to Chrome Web Store
			window.location.href = chromeStoreUrl;
		}
	});
</script>

<svelte:head>
	<title>FAF Chrome Extension - Redirecting...</title>
	<meta name="description" content="Get the FAF Chrome Extension for instant AI context extraction from web IDEs" />
</svelte:head>

<div class="redirect-container">
	<img src="/orange-smiley.svg" alt="FAF Logo" class="logo" />
	<h1>🎯 FAF Chrome Extension</h1>
	<p class="subtitle">The JPEG for AI™ - Now in your browser!</p>

	<div class="features">
		<h2>🎉 Friday Features</h2>
		<ul>
			<li><strong>Chrome Extension Auto-Detection</strong> | 90%+ scores automatically</li>
			<li><strong>Typo Help™</strong> | We know "raect" means "react"</li>
			<li><strong>Universal Context Extraction</strong> | Works on 15+ web IDEs</li>
		</ul>
	</div>

	<p class="redirecting">Redirecting to Chrome Web Store...</p>
	<p class="manual">
		If you're not redirected,
		<a href={chromeStoreUrl} target="_blank" rel="noopener noreferrer">
			click here to get the extension
		</a>
	</p>

	<div class="supported-platforms">
		<h3>Supported Platforms:</h3>
		<p>GitHub • GitLab • Bitbucket • Replit • CodeSandbox • StackBlitz • VS Code Web • Codespaces + more!</p>
	</div>
</div>

<style>
	.redirect-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 2rem;
		text-align: center;
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		color: white;
	}

	.logo {
		width: 120px;
		height: 120px;
		margin-bottom: 2rem;
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.05); }
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		background: linear-gradient(90deg, #FF6B35 0%, #FF914D 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #999;
		margin-bottom: 2rem;
	}

	.features {
		background: rgba(255, 107, 53, 0.1);
		border: 1px solid rgba(255, 107, 53, 0.3);
		border-radius: 12px;
		padding: 1.5rem;
		margin: 2rem 0;
		max-width: 600px;
	}

	.features h2 {
		color: #FF914D;
		margin-bottom: 1rem;
	}

	.features ul {
		list-style: none;
		padding: 0;
		text-align: left;
	}

	.features li {
		margin-bottom: 0.8rem;
		color: #ccc;
	}

	.features strong {
		color: #FF6B35;
	}

	.redirecting {
		font-size: 1.1rem;
		color: #FF914D;
		margin-top: 2rem;
		animation: blink 1.5s ease-in-out infinite;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}

	.manual {
		margin-top: 1rem;
		color: #999;
	}

	.manual a {
		color: #FF914D;
		text-decoration: none;
		border-bottom: 1px solid #FF914D;
		transition: all 0.3s ease;
	}

	.manual a:hover {
		color: #FF6B35;
		border-bottom-color: #FF6B35;
	}

	.supported-platforms {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #333;
		max-width: 600px;
	}

	.supported-platforms h3 {
		color: #FF914D;
		margin-bottom: 0.5rem;
	}

	.supported-platforms p {
		color: #999;
		font-size: 0.9rem;
	}
</style>