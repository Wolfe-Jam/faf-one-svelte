<script>
	import { onMount } from 'svelte';
	
	let isVisible = $state(false);
	let sectionRef = $state(null);
	
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						isVisible = true;
					}
				});
			},
			{ threshold: 0.2 }
		);
		
		if (sectionRef) {
			observer.observe(sectionRef);
		}
		
		return () => {
			if (sectionRef) {
				observer.unobserve(sectionRef);
			}
		};
	});
</script>

<section bind:this={sectionRef} class="trust-vs-hope">
	<div class="container">
		<div class="content" class:visible={isVisible}>
			<h2 class="section-title">Stop Hoping. Start Trusting.</h2>
			<p class="section-subtitle">
				Your AI doesn't understand YOUR project.<br>
				<span class="interlude">STOP BLAMING AI</span><br>
				It's time to change all this. Ready? AI is.
			</p>
			
			<div class="comparison">
				<div class="card hope-card">
					<div class="card-header">
						<span class="card-icon">😰</span>
						<h3 class="card-title">Hope</h3>
						<span class="badge badge-hope">DIY Context</span>
					</div>
					<div class="card-score">22%</div>
					<p class="card-intro">🤨 DUMP everything on AI - that'll work = <strong>100% WRONG</strong></p>
					<ul class="card-list">
						<li>❌ Give it KILLER prompt</li>
						<li>❌ Sit back and consider how GREAT that Prompt is I got off YouTube</li>
						<li>❌ Grab a Coffee, catch another TUBE</li>
						<li>❌ Read email, use Dan's Tip</li>
						<li>❌ Change AI this one SUCKS</li>
						<li>❌ I'll carry on, it'll be alright, AI knows everything</li>
						<li>❌ Oh, it's not working like they said (who's they Bob??)</li>
						<li>❌ Stop faffing about</li>
					</ul>
					<div class="card-footer">
						<div class="time-stat">
							<div>⏱️ 20+ minutes</div>
							<div>• AI's calculated time (not human guessing)</div>
							<div>• Collects INCOMPLETE context</div>
							<div>• Delays or even derails projects</div>
						</div>
					</div>
				</div>
				
				<div class="vs-divider">
					<span class="vs-text">VS</span>
				</div>
				
				<div class="card trust-card">
					<div class="card-header">
						<span class="card-icon">🏆</span>
						<h3 class="card-title">Trust</h3>
						<span class="badge badge-orange">.faf AUTO</span>
					</div>
					<div class="card-score">99%</div>
					<p class="card-intro">😎 Type FAF AUTO =<br>Actually Does WORK!</p>
					<ul class="card-list">
						<li>☑️ Auto-discovered <span class="green-text">in seconds</span></li>
						<li>☑️ Achieve 99% score in minutes</li>
						<li>☑️ AI totally gets it! <span class="cyan-text">🤖 Verified</span></li>
						<li>☑️ Can share with any AI, Dev, Team, or even Enterprise 🤯</li>
						<li>☑️ Context-Mirroring™ is Eternal-Sync</li>
						<li>✅ SET IT & FORGET IT<br>(not just words for once)</li>
					</ul>
					<div class="card-footer">
						<div class="time-stat">
							<div>⚡️ &lt;3 seconds</div>
							<div>⌚ Set and Forget</div>
							<div>🧡 Trusted-AI</div>
							<div class="eternal-sync">🧡⚡️🩵 Eternal-Sync ACTIVE</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="stats">
				<div class="stat">
					<span class="stat-value">6.7x</span>
					<span class="stat-label">Faster AI responses</span>
				</div>
				<div class="stat-divider">•</div>
				<div class="stat">
					<span class="stat-value">154</span>
					<span class="stat-label">Validated formats</span>
				</div>
				<div class="stat-divider">•</div>
				<div class="stat">
					<span class="stat-value">100%</span>
					<span class="stat-label">Self-healing</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.trust-vs-hope {
		padding: 5rem 0;
		background: var(--faf-white);
		position: relative;
	}
	
	.content {
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease-out;
	}
	
	.content.visible {
		opacity: 1;
		transform: translateY(0);
	}
	
	.section-title {
		text-align: center;
		margin-bottom: 1.5rem;
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 900;
		letter-spacing: -0.02em;
		color: var(--faf-black);
	}
	
	.section-subtitle {
		text-align: center;
		color: var(--faf-black);
		font-size: 1.5rem;
		margin-bottom: 3rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
		line-height: 1.4;
		font-weight: 500;
	}
	
	.interlude {
		font-size: 2rem;
		font-weight: 900;
		color: var(--faf-orange);
		letter-spacing: 0.1em;
		display: inline-block;
		margin: 1rem 0;
		padding: 0.5rem 2rem;
		border: 3px solid var(--faf-orange);
		border-radius: 50px;
		background: var(--faf-white);
		box-shadow: 0 4px 8px rgba(255, 107, 53, 0.2);
	}
	
	.comparison {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: 2rem;
		align-items: start;
		max-width: 900px;
		margin: 0 auto 4rem;
	}
	
	.card {
		background: var(--faf-white);
		border: 3px solid var(--faf-black);
		border-radius: 16px;
		padding: 1.5rem;
		position: relative;
		transition: all 0.3s ease;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
	}
	
	.hope-card {
		animation: slideInLeft 0.8s ease-out 0.2s backwards;
		background: linear-gradient(135deg, #fff 0%, #f9f9f9 100%);
	}
	
	.hope-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	
	.trust-card {
		animation: slideInRight 0.8s ease-out 0.2s backwards;
		border-color: var(--faf-orange);
		box-shadow: 0 0 0 2px var(--faf-orange), 0 8px 16px rgba(255, 107, 53, 0.2);
		background: linear-gradient(135deg, #fff 0%, #fff5f0 100%);
	}
	
	.trust-card:hover {
		transform: translateY(-4px) scale(1.02);
		box-shadow: 0 0 0 3px var(--faf-orange), 0 12px 24px rgba(255, 107, 53, 0.3);
	}
	
	.card-header {
		text-align: center;
		margin-bottom: 1rem;
	}
	
	.card-icon {
		font-size: 3rem;
		display: block;
		margin-bottom: 1rem;
	}
	
	.card-title {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 900;
	}
	
	.badge {
		display: inline-block;
		padding: 0.25rem 1rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.badge-hope {
		background: var(--faf-black);
		color: var(--faf-white);
		border: 2px solid var(--faf-black);
	}
	
	.badge-orange {
		background: var(--faf-orange);
		color: var(--faf-white);
		border: 2px solid var(--faf-orange);
		box-shadow: 0 2px 4px rgba(255, 107, 53, 0.3);
	}
	
	.card-score {
		font-size: 2.5rem;
		font-weight: 900;
		text-align: center;
		margin-bottom: 1rem;
		font-family: var(--font-mono);
	}
	
	.hope-card .card-score {
		color: #999;
	}
	
	.trust-card .card-score {
		color: var(--faf-green);
	}
	
	.card-intro {
		font-size: 0.85rem;
		font-weight: 600;
		text-align: center;
		margin: 0.75rem 0;
		line-height: 1.4;
		padding: 0.25rem 0;
	}
	
	.hope-card .card-intro {
		color: #666;
	}
	
	.trust-card .card-intro {
		color: var(--faf-green);
		font-family: var(--font-mono);
	}
	
	.card-list {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem;
	}
	
	.card-list li {
		padding: 0.35rem 0;
		font-size: 0.95rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		line-height: 1.4;
	}
	
	.green-text {
		color: var(--faf-green);
		font-weight: 600;
	}
	
	.cyan-text {
		color: #00BCD4;
		font-weight: 600;
	}
	
	.card-footer {
		text-align: center;
		padding-top: 1rem;
		border-top: 1px solid var(--faf-gray-medium);
	}
	
	.time-stat {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--faf-gray-dark);
		line-height: 1.8;
	}
	
	.time-stat div {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-align: left;
	}
	
	.time-stat div:first-child {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		justify-content: center;
	}
	
	.trust-card .time-stat {
		color: var(--faf-green);
		font-weight: 600;
		font-size: 0.875rem;
	}
	
	.trust-card .time-stat div {
		justify-content: center;
		padding-left: 0;
	}
	
	.trust-card .time-stat div:first-child {
		font-size: 1.125rem;
		font-weight: 700;
	}
	
	.eternal-sync {
		margin-top: 1.5rem;
		padding-top: 1rem;
		border-top: 1px solid var(--faf-black);
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--faf-black);
		letter-spacing: 0.05em;
		animation: glow 2s ease-in-out infinite;
		text-align: center;
		display: block;
		width: 100%;
		margin-bottom: -0.75rem;
	}
	
	@keyframes glow {
		0%, 100% { opacity: 0.8; }
		50% { opacity: 1; }
	}
	
	.vs-divider {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.vs-text {
		font-size: 1.75rem;
		font-weight: 900;
		color: var(--faf-white);
		padding: 0.5rem;
		background: linear-gradient(135deg, var(--faf-orange) 0%, #ff8c57 100%);
		border: 3px solid var(--faf-black);
		border-radius: 50%;
		width: 80px;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4), 0 0 0 6px rgba(255, 107, 53, 0.1);
		position: relative;
		z-index: 10;
		animation: pulse 2s infinite;
	}
	
	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.05); }
	}
	
	.stats {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		max-width: 600px;
		margin: 0 auto;
	}
	
	.stat {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		animation: fadeIn 0.8s ease-out 0.4s backwards;
		white-space: nowrap;
	}
	
	.stat-value {
		font-size: 1.75rem;
		font-weight: 900;
		color: var(--faf-orange);
	}
	
	.stat-label {
		color: var(--faf-gray-dark);
		font-size: 0.875rem;
	}
	
	.stat-divider {
		color: var(--faf-gray-medium);
		font-size: 1.25rem;
		padding: 0 0.75rem;
	}
	
	@keyframes slideInLeft {
		from {
			opacity: 0;
			transform: translateX(-30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
	
	@keyframes slideInRight {
		from {
			opacity: 0;
			transform: translateX(30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
	
	@media (max-width: 768px) {
		.comparison {
			grid-template-columns: 1fr;
		}
		
		.vs-divider {
			transform: rotate(90deg);
			margin: 2rem 0;
		}
		
		.stats {
			flex-direction: column;
			gap: 1rem;
		}
		
		.stat {
			justify-content: center;
		}
		
		.stat-divider {
			display: none;
		}
	}
</style>