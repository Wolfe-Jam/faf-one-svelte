<script>
	import { onMount } from 'svelte';

	let cliDownloads = $state(0);
	let mcpDownloads = $state(0);
	let totalDownloads = $state(0);
	let loading = $state(true);
	let error = $state(null);

	async function fetchNpmDownloads(packageName) {
		try {
			const response = await fetch(`https://api.npmjs.org/downloads/point/last-month/${packageName}`);
			if (!response.ok) throw new Error('Failed to fetch');
			const data = await response.json();
			return data.downloads || 0;
		} catch (err) {
			console.error(`Error fetching ${packageName}:`, err);
			return 0;
		}
	}

	onMount(async () => {
		try {
			// Fetch real npm stats
			const [cli, mcp] = await Promise.all([
				fetchNpmDownloads('faf-cli'),
				fetchNpmDownloads('claude-faf-mcp')
			]);

			cliDownloads = cli;
			mcpDownloads = mcp;
			totalDownloads = cli + mcp;
			loading = false;

			// Animate counters from 0
			animateCounter('cli', cli);
			animateCounter('mcp', mcp);
			animateCounter('total', cli + mcp);

		} catch (err) {
			error = 'Failed to load download stats';
			loading = false;
		}
	});

	function animateCounter(type, target) {
		let start = 0;
		const duration = 2000;
		const increment = target / (duration / 16);

		const timer = setInterval(() => {
			start += increment;
			if (start >= target) {
				if (type === 'cli') cliDownloads = target;
				if (type === 'mcp') mcpDownloads = target;
				if (type === 'total') totalDownloads = target;
				clearInterval(timer);
			} else {
				if (type === 'cli') cliDownloads = Math.floor(start);
				if (type === 'mcp') mcpDownloads = Math.floor(start);
				if (type === 'total') totalDownloads = Math.floor(start);
			}
		}, 16);
	}
</script>

<div class="npm-stats">
	{#if loading}
		<div class="loading">Loading npm stats...</div>
	{:else if error}
		<div class="error">{error}</div>
	{:else}
		<div class="stats-container">
			<!-- CLI Downloads -->
			<div class="stat-item cli">
				<div class="npm-badge">
					<span class="badge-icon">📺</span>
					<div class="badge-content">
						<span class="badge-number">{cliDownloads.toLocaleString()}</span>
						<span class="badge-label">CLI downloads</span>
					</div>
				</div>
			</div>

			<!-- MCP Downloads -->
			<div class="stat-item mcp">
				<div class="npm-badge">
					<span class="badge-icon">🤖</span>
					<div class="badge-content">
						<span class="badge-number">{mcpDownloads.toLocaleString()}</span>
						<span class="badge-label">MCP downloads</span>
					</div>
				</div>
			</div>

			<!-- Total -->
			<div class="stat-item total">
				<div class="npm-badge total-badge">
					<span class="badge-icon">📦</span>
					<div class="badge-content">
						<span class="badge-number">{totalDownloads.toLocaleString()}</span>
						<span class="badge-label">Total downloads</span>
					</div>
				</div>
			</div>
		</div>

		<p class="update-note">Last 30 days • Updated live from npm</p>
	{/if}
</div>

<style>
	.npm-stats {
		margin: 2rem 0;
	}

	.loading,
	.error {
		text-align: center;
		padding: 1rem;
		color: var(--faf-gray-dark);
	}

	.stats-container {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.npm-badge {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1.5rem;
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 999px;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.npm-badge:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.stat-item.cli .npm-badge:hover {
		border-color: var(--faf-cyan);
	}

	.stat-item.mcp .npm-badge:hover {
		border-color: var(--faf-orange);
	}

	.total-badge {
		background: linear-gradient(135deg, var(--faf-orange) 0%, #FF914D 100%);
		color: white;
		border-color: var(--faf-orange);
		font-weight: 700;
	}

	.total-badge:hover {
		border-color: var(--faf-black);
	}

	.badge-icon {
		font-size: 1.5rem;
	}

	.badge-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.badge-number {
		font-size: 1.25rem;
		font-weight: 900;
		font-variant-numeric: tabular-nums;
		line-height: 1;
	}

	.badge-label {
		font-size: 0.75rem;
		opacity: 0.9;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-top: 0.25rem;
	}

	.total-badge .badge-label {
		opacity: 1;
		font-weight: 600;
	}

	.update-note {
		text-align: center;
		font-size: 0.75rem;
		color: var(--faf-gray);
		margin-top: 1rem;
		font-style: italic;
	}

	@media (max-width: 640px) {
		.stats-container {
			flex-direction: column;
			align-items: center;
		}

		.npm-badge {
			width: 100%;
			max-width: 300px;
			justify-content: center;
		}
	}
</style>
