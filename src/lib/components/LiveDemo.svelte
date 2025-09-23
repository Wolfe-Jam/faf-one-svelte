<script>
	import { onMount } from 'svelte';
	
	let isVisible = $state(false);
	let sectionRef = $state(null);
	let currentStep = $state(0);
	let score = $state(22);
	let isProcessing = $state(false);
	
	const steps = [
		{ command: 'faf init', description: 'Initialize .faf file', score: 22 },
		{ command: 'faf score', description: 'Check AI-readiness', score: 22 },
		{ command: 'faf bi-sync', description: 'Activate Context-Mirroring™', score: 85 },
		{ command: 'faf validate', description: 'Enterprise validation', score: 99 }
	];
	
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						isVisible = true;
						startDemo();
					}
				});
			},
			{ threshold: 0.3 }
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
	
	function startDemo() {
		setTimeout(() => {
			runStep();
		}, 1000);
	}
	
	function runStep() {
		if (currentStep >= steps.length) {
			currentStep = 0;
			score = 22;
			setTimeout(() => runStep(), 2000);
			return;
		}
		
		isProcessing = true;
		
		setTimeout(() => {
			score = steps[currentStep].score;
			isProcessing = false;
			currentStep++;
			
			setTimeout(() => runStep(), 2000);
		}, 800);
	}
	
	function getScoreColor(score) {
		if (score >= 85) return 'var(--faf-green)';
		if (score >= 50) return 'var(--faf-orange)';
		return '#999';
	}
</script>

<section bind:this={sectionRef} class="live-demo">
	<div class="container">
		<div class="content" class:visible={isVisible}>
			<h2 class="section-title">Watch the Magic ✨</h2>
			<p class="section-subtitle">
				From DIY chaos to enterprise-ready in seconds
			</p>
			
			<div class="demo-wrapper">
				<div class="demo-terminal">
					<div class="terminal-header">
						<span class="dot red"></span>
						<span class="dot yellow"></span>
						<span class="dot green"></span>
						<span class="terminal-title">faf-cli v2.4.0</span>
					</div>
					<div class="terminal-body">
						{#each steps as step, i}
							{#if i <= currentStep}
								<div class="command-line" class:active={i === currentStep}>
									<span class="prompt">$</span> {step.command}
								</div>
								{#if i < currentStep || (i === currentStep && !isProcessing)}
									<div class="output">
										✅ {step.description} complete
									</div>
								{/if}
								{#if i === currentStep && isProcessing}
									<div class="processing">
										<span class="spinner-small"></span> Processing...
									</div>
								{/if}
							{/if}
						{/each}
					</div>
				</div>
				
				<div class="score-display">
					<div class="score-label">AI-Readiness Score</div>
					<div class="score-value" style="color: {getScoreColor(score)}">
						{score}%
					</div>
					<div class="score-bar">
						<div class="score-fill" style="width: {score}%; background: {getScoreColor(score)}"></div>
					</div>
					<div class="score-stages">
						<div class="stage" class:active={score >= 22}>
							<span class="stage-icon">🚀</span>
							<span class="stage-label">START</span>
						</div>
						<div class="stage" class:active={score >= 85}>
							<span class="stage-icon">🏗️</span>
							<span class="stage-label">BUILD</span>
						</div>
						<div class="stage" class:active={score >= 99}>
							<span class="stage-icon">🎯</span>
							<span class="stage-label">LAUNCH</span>
						</div>
					</div>
				</div>
			</div>
			
			<div class="cta-section">
				<button class="btn btn-primary">
					Try Live Demo
				</button>
				<p class="cta-note">No installation required</p>
			</div>
		</div>
	</div>
</section>

<style>
	.live-demo {
		padding: 5rem 0;
		background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%);
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
		margin-bottom: 1rem;
	}
	
	.section-subtitle {
		text-align: center;
		color: var(--faf-gray-dark);
		font-size: 1.25rem;
		margin-bottom: 3rem;
	}
	
	.demo-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		max-width: 1000px;
		margin: 0 auto 3rem;
		align-items: start;
	}
	
	.demo-terminal {
		background: var(--faf-black);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
		animation: slideInLeft 0.8s ease-out;
	}
	
	.terminal-header {
		background: #2D2D2D;
		padding: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	
	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}
	
	.dot.red {
		background: #FF5F56;
	}
	
	.dot.yellow {
		background: #FFBD2E;
	}
	
	.dot.green {
		background: #27C93F;
	}
	
	.terminal-title {
		margin-left: auto;
		color: #999;
		font-size: 0.875rem;
		font-family: var(--font-mono);
		padding-right: 1rem;
	}
	
	.terminal-body {
		padding: 1.5rem;
		font-family: var(--font-mono);
		font-size: 0.875rem;
		color: var(--faf-white);
		min-height: 300px;
	}
	
	.command-line {
		margin: 0.5rem 0;
		opacity: 0.5;
		animation: fadeIn 0.3s ease-out forwards;
	}
	
	.command-line.active {
		opacity: 1;
		color: var(--faf-cyan);
	}
	
	.prompt {
		color: var(--faf-green);
		margin-right: 0.5rem;
	}
	
	.output {
		color: #999;
		margin: 0.25rem 0 1rem 1.5rem;
		animation: fadeIn 0.5s ease-out;
	}
	
	.processing {
		color: var(--faf-orange);
		margin: 0.25rem 0 1rem 1.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		animation: fadeIn 0.3s ease-out;
	}
	
	.spinner-small {
		width: 12px;
		height: 12px;
		border: 2px solid transparent;
		border-top-color: var(--faf-orange);
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}
	
	@keyframes spin {
		to { transform: rotate(360deg); }
	}
	
	.score-display {
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 16px;
		padding: 2rem;
		text-align: center;
		animation: slideInRight 0.8s ease-out;
	}
	
	.score-label {
		color: var(--faf-gray-dark);
		font-size: 1rem;
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
	
	.score-value {
		font-size: 4rem;
		font-weight: 900;
		font-family: var(--font-mono);
		transition: all 0.5s ease-out;
		margin-bottom: 1rem;
	}
	
	.score-bar {
		width: 100%;
		height: 8px;
		background: var(--faf-gray-light);
		border-radius: 4px;
		overflow: hidden;
		margin-bottom: 2rem;
	}
	
	.score-fill {
		height: 100%;
		transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
		border-radius: 4px;
	}
	
	.score-stages {
		display: flex;
		justify-content: space-around;
	}
	
	.stage {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		opacity: 0.3;
		transition: all 0.3s ease-out;
	}
	
	.stage.active {
		opacity: 1;
		transform: scale(1.1);
	}
	
	.stage-icon {
		font-size: 1.5rem;
	}
	
	.stage-label {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--faf-gray-dark);
	}
	
	.cta-section {
		text-align: center;
	}
	
	.cta-note {
		margin-top: 1rem;
		color: var(--faf-gray-dark);
		font-size: 0.875rem;
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
	
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	
	@media (max-width: 768px) {
		.demo-wrapper {
			grid-template-columns: 1fr;
		}
	}
</style>