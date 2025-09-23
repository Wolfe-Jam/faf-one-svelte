<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	
	let isVisible = $state(false);
	let glitchActive = $state(false);
	
	onMount(() => {
		isVisible = true;
		// Activate glitch effect periodically
		const interval = setInterval(() => {
			glitchActive = true;
			setTimeout(() => {
				glitchActive = false;
			}, 200);
		}, 3000);
		
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<title>404 - Page Not Found | .faf</title>
	<meta name="description" content="The page you're looking for doesn't exist in the FAF universe." />
</svelte:head>

<div class="error-container" class:visible={isVisible}>
	<div class="error-content">
		<div class="error-code" class:glitch={glitchActive}>
			<span class="number">404</span>
			<div class="subtitle">Context Not Found</div>
		</div>
		
		<div class="error-message">
			<h1>This page is lost in the void</h1>
			<p>
				The context you're searching for doesn't exist in our format universe. 
				It might have been moved, deleted, or never existed in the first place.
			</p>
		</div>
		
		<div class="error-visual">
			<div class="floating-smiley">
				<img src="/orange-smiley.svg" alt="Lost smiley" class="smiley" />
			</div>
			<div class="particles">
				{#each Array(20) as _, i}
					<span class="particle" style="--i: {i}"></span>
				{/each}
			</div>
		</div>
		
		<div class="error-actions">
			<a href="/" class="btn btn-primary">
				<span class="icon">🏠</span>
				Return Home
			</a>
			<a href="/docs" class="btn btn-ghost">
				<span class="icon">📚</span>
				Browse Docs
			</a>
			<a href="/support" class="btn btn-ghost">
				<span class="icon">💬</span>
				Get Help
			</a>
		</div>
		
		<div class="error-details">
			<details>
				<summary>Technical Details</summary>
				<div class="tech-info">
					<code>
						Error: {$page.status}<br/>
						Path: {$page.url.pathname}<br/>
						Format: Context not found in .faf registry<br/>
						Recovery: Automatic redirect available
					</code>
				</div>
			</details>
		</div>
	</div>
</div>

<style>
	.error-container {
		min-height: 100vh;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		position: relative;
		overflow: hidden;
		opacity: 0;
		transition: opacity 0.6s ease;
	}
	
	.error-container.visible {
		opacity: 1;
	}
	
	.error-content {
		max-width: 800px;
		width: 100%;
		text-align: center;
		position: relative;
		z-index: 2;
	}
	
	.error-code {
		margin-bottom: 2rem;
		position: relative;
	}
	
	.number {
		font-size: 10rem;
		font-weight: 900;
		color: var(--faf-orange);
		line-height: 1;
		text-shadow: 0 0 40px rgba(255, 107, 53, 0.5);
		display: block;
		letter-spacing: -0.05em;
	}
	
	.subtitle {
		font-size: 1.5rem;
		color: var(--faf-cyan);
		font-family: 'Roboto Mono', monospace;
		margin-top: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
	
	.glitch .number {
		animation: glitch 0.2s ease-in-out;
	}
	
	@keyframes glitch {
		0%, 100% {
			text-shadow: 
				0 0 40px rgba(255, 107, 53, 0.5),
				2px 2px 0 var(--faf-cyan),
				-2px -2px 0 var(--faf-green);
		}
		50% {
			text-shadow: 
				0 0 40px rgba(255, 107, 53, 0.5),
				-2px 2px 0 var(--faf-cyan),
				2px -2px 0 var(--faf-green);
		}
	}
	
	.error-message {
		margin-bottom: 3rem;
	}
	
	.error-message h1 {
		font-size: 2rem;
		color: var(--faf-white);
		margin-bottom: 1rem;
		font-weight: 800;
	}
	
	.error-message p {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.6;
		max-width: 500px;
		margin: 0 auto;
	}
	
	.error-visual {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}
	
	.floating-smiley {
		position: absolute;
		top: 20%;
		right: 10%;
		animation: float 6s ease-in-out infinite;
	}
	
	.smiley {
		width: 80px;
		height: 80px;
		opacity: 0.1;
		filter: blur(2px);
	}
	
	@keyframes float {
		0%, 100% {
			transform: translate(0, 0) rotate(0deg);
		}
		33% {
			transform: translate(30px, -30px) rotate(120deg);
		}
		66% {
			transform: translate(-20px, 20px) rotate(240deg);
		}
	}
	
	.particles {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	
	.particle {
		position: absolute;
		width: 4px;
		height: 4px;
		background: var(--faf-orange);
		border-radius: 50%;
		opacity: 0.3;
		animation: particle-float calc(10s + var(--i) * 1s) ease-in-out infinite;
		animation-delay: calc(var(--i) * 0.5s);
		top: calc(var(--i) * 5%);
		left: calc(var(--i) * 5%);
	}
	
	@keyframes particle-float {
		0% {
			transform: translate(0, 100vh) scale(0);
			opacity: 0;
		}
		10% {
			opacity: 0.3;
		}
		90% {
			opacity: 0.3;
		}
		100% {
			transform: translate(100vw, -100vh) scale(1);
			opacity: 0;
		}
	}
	
	.error-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 3rem;
		position: relative;
		z-index: 2;
	}
	
	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 2rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
	}
	
	.btn-primary {
		background: var(--faf-orange);
		color: var(--faf-white);
		border: 2px solid var(--faf-orange);
	}
	
	.btn-primary:hover {
		background: transparent;
		color: var(--faf-orange);
		box-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
	}
	
	.btn-ghost {
		background: transparent;
		color: var(--faf-white);
		border: 2px solid rgba(255, 255, 255, 0.2);
	}
	
	.btn-ghost:hover {
		border-color: var(--faf-cyan);
		color: var(--faf-cyan);
		box-shadow: 0 0 20px rgba(0, 243, 255, 0.3);
	}
	
	.icon {
		font-size: 1.2rem;
	}
	
	.error-details {
		position: relative;
		z-index: 2;
	}
	
	details {
		margin: 0 auto;
		max-width: 400px;
	}
	
	summary {
		color: rgba(255, 255, 255, 0.5);
		font-size: 0.9rem;
		cursor: pointer;
		padding: 0.5rem;
		transition: color 0.3s ease;
	}
	
	summary:hover {
		color: var(--faf-cyan);
	}
	
	.tech-info {
		background: rgba(0, 0, 0, 0.5);
		border: 1px solid rgba(255, 107, 53, 0.2);
		border-radius: 8px;
		padding: 1rem;
		margin-top: 1rem;
	}
	
	code {
		color: var(--faf-cyan);
		font-family: 'Roboto Mono', monospace;
		font-size: 0.875rem;
		line-height: 1.6;
	}
	
	@media (max-width: 768px) {
		.number {
			font-size: 6rem;
		}
		
		.subtitle {
			font-size: 1.2rem;
		}
		
		.error-message h1 {
			font-size: 1.5rem;
		}
		
		.error-actions {
			flex-direction: column;
			align-items: center;
		}
		
		.btn {
			width: 100%;
			max-width: 250px;
			justify-content: center;
		}
	}
</style>