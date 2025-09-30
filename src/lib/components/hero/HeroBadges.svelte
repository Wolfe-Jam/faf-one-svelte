<script>
	// Badge components for MCP and Chrome badges
</script>

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
			☑️ MCP Registry (PR #2759 Pending)
		</a>
		<a href="https://npmjs.com/package/claude-faf-mcp" class="official-badge" target="_blank" rel="noopener">
			📦 NPM Package
		</a>
	</div>
</div>

<style>
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
		background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
		color: white;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.9rem;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
		border: 1px solid #333;
	}

	.official-badge:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
		background: linear-gradient(135deg, #2a2a2a 0%, #333 100%);
		border-color: #444;
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
		.authority-badges {
			gap: 1rem;
			flex-direction: column;
			align-items: center;
		}

		.badge-item {
			min-width: 250px;
			justify-content: center;
		}

		.mcp-logo {
			height: 30px;
		}

		.badges-row {
			flex-direction: column;
			gap: 0.75rem;
		}

		.official-badge {
			width: 100%;
			max-width: 280px;
		}
	}
</style>