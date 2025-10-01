<script>
	import '../app.css';
	import SideNav from '$lib/components/SideNav.svelte';

	let { children } = $props();
</script>

<SideNav />

<!-- 3-Section Banner -->
<div class="official-banner">
	<a href="/press-release" class="banner-section">
		🚀 PRESS RELEASE 🚀
	</a>
	<div class="banner-section-center">
		🏎️ 4,100+ Downloads • CLI: 2.4k 🏆 vs MCP: 1.6k 🤖
	</div>
	<a href="https://github.com/modelcontextprotocol/servers/pull/2759" target="_blank" rel="noopener" class="banner-section">
		⚡️ MCP #2759 Pending ⚡️
	</a>
	<div class="banner-shine"></div>
</div>

{@render children?.()}

<style>
	.official-banner {
		background: linear-gradient(135deg,
			#4a4a4a 0%,
			#2c3e50 20%,
			#0a0a0a 50%,
			#2c3e50 80%,
			#4a4a4a 100%
		);
		color: white;
		padding: 12px 20px;
		font-weight: 600;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		position: sticky;
		top: 0;
		z-index: 900;
		overflow: hidden;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		transition: all 0.3s ease;
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		align-items: center;
		text-align: center;
	}

	.banner-section {
		color: white;
		text-decoration: none;
		padding: 8px;
		transition: opacity 0.3s ease;
		font-size: 0.9em;
	}

	.banner-section:hover {
		opacity: 0.8;
	}

	.banner-section-center {
		font-size: 1em;
		font-weight: 700;
	}

	.banner-home-link {
		text-decoration: none;
		color: inherit;
		display: flex;
		align-items: center;
		cursor: pointer;
		flex: 1;
		justify-content: center;
	}

	.official-banner::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg,
			var(--faf-orange) 0%,
			var(--faf-cyan-dark) 50%,
			var(--faf-orange) 100%
		);
		animation: shimmer 3s linear infinite;
	}

	@keyframes shimmer {
		0% { transform: translateX(-100%); }
		100% { transform: translateX(100%); }
	}

	.official-banner:hover {
		background: linear-gradient(135deg,
			#5a5a5a 0%,
			#3c4e60 20%,
			#1a1a1a 50%,
			#3c4e60 80%,
			#5a5a5a 100%
		);
		transform: translateY(-1px);
	}

	.banner-content {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		transition: transform 0.2s ease;
	}

	.banner-home-link:hover .banner-content {
		transform: scale(1.02);
	}

	.banner-emoji {
		font-size: 1.25rem;
		animation: bounce 2s ease-in-out infinite;
	}

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-3px); }
	}

	.banner-text {
		font-size: 0.95rem;
		letter-spacing: 0.02em;
	}

	.faf-text {
		color: var(--faf-orange);
		font-weight: 700;
		text-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
	}

	.banner-cta {
		display: inline-flex;
		align-items: center;
		padding: 6px 14px;
		background: linear-gradient(135deg, var(--faf-orange) 0%, #FF914D 100%);
		border-radius: 999px;
		font-size: 0.85rem;
		font-weight: 600;
		white-space: nowrap;
		transition: all 0.3s ease;
		text-decoration: none;
		color: white;
		position: relative;
		z-index: 1;
	}

	.banner-cta:hover {
		background: linear-gradient(135deg, var(--faf-cyan-dark) 0%, #00E5E5 100%);
		transform: scale(1.05);
		box-shadow: 0 0 15px rgba(0, 229, 229, 0.4);
	}

	.banner-shine {
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg,
			transparent 0%,
			rgba(255, 255, 255, 0.03) 50%,
			transparent 100%
		);
		animation: steelSheen 4s ease-in-out infinite;
		pointer-events: none;
	}

	@keyframes steelSheen {
		0% { left: -100%; }
		100% { left: 100%; }
	}

	@media (max-width: 640px) {
		.official-banner {
			flex-direction: column;
			padding: 10px 15px;
			gap: 0.5rem;
		}

		.banner-home-link {
			width: 100%;
		}

		.banner-content {
			font-size: 0.85rem;
		}

		.banner-emoji {
			font-size: 1rem;
		}

		.banner-cta {
			font-size: 0.75rem;
			padding: 4px 10px;
		}
	}
</style>
