<script>
	import { onMount } from 'svelte';
	
	let isVisible = $state(false);
	let sectionRef = $state(null);
	let currentStep = $state(0);
	let isCompleted = $state(false);
	
	const steps = [
		{
			icon: '⚡',
			title: 'Install claude-faf-mcp',
			command: 'npm install -g claude-faf-mcp',
			description: '30 seconds. One command. That\'s it.',
			time: '30 sec'
		},
		{
			icon: '🚀',
			title: 'Initialize your project',
			command: 'faf init',
			description: 'Auto-discovers everything. Creates your .faf file.',
			time: '3 sec'
		},
		{
			icon: '📊',
			title: 'Check your score',
			command: 'faf score',
			description: 'See your AI-Readiness instantly. Watch it climb.',
			time: '1 sec'
		},
		{
			icon: '🔄',
			title: 'Activate eternal-sync',
			command: 'faf bi-sync',
			description: 'Context-Mirroring™ keeps everything current forever.',
			time: '2 sec'
		},
		{
			icon: '🎉',
			title: 'You\'re done!',
			command: 'faf validate',
			description: 'Your project is now 99% AI-Ready. Forever.',
			time: 'Done!'
		}
	];
	
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						isVisible = true;
						startOnboarding();
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
	
	function startOnboarding() {
		setTimeout(() => {
			animateSteps();
		}, 500);
	}
	
	function animateSteps() {
		if (currentStep < steps.length) {
			setTimeout(() => {
				currentStep++;
				animateSteps();
			}, 800);
		} else {
			setTimeout(() => {
				isCompleted = true;
			}, 500);
		}
	}
	
	function copyCommand(command) {
		navigator.clipboard.writeText(command);
		// Could add a toast notification here
	}
</script>

<section bind:this={sectionRef} class="onboarding">
	<div class="container">
		<div class="content" class:visible={isVisible}>
			<div class="header">
				<h2 class="section-title">Solo Dev? Start Here 👇</h2>
				<p class="section-subtitle">
					From zero to AI-Ready in under 2 minutes. No BS. No complexity.
				</p>
				<div class="value-banner">
					<div class="value-item">
						<span class="value-icon">🆓</span>
						<span class="value-text">Free Forever</span>
					</div>
					<div class="value-item">
						<span class="value-icon">🔧</span>
						<span class="value-text">No Config</span>
					</div>
					<div class="value-item">
						<span class="value-icon">⚡</span>
						<span class="value-text">2 Minutes</span>
					</div>
				</div>
			</div>
			
			<div class="onboarding-flow">
				<div class="steps">
					{#each steps as step, i}
						<div class="step" class:active={i < currentStep} class:current={i === currentStep - 1}>
							<div class="step-number" class:completed={i < currentStep}>
								{#if i < currentStep}
									✓
								{:else}
									{i + 1}
								{/if}
							</div>
							<div class="step-content">
								<div class="step-header">
									<span class="step-icon">{step.icon}</span>
									<h3 class="step-title">{step.title}</h3>
									<span class="step-time">{step.time}</span>
								</div>
								{#if step.command}
									<button class="command-box" onclick={() => copyCommand(step.command)} aria-label={`Copy command: ${step.command}`}>
										<code>{step.command}</code>
										<span class="copy-btn" title="Copy command">
											📋
										</span>
									</button>
								{/if}
								<p class="step-description">{step.description}</p>
							</div>
							{#if i < steps.length - 1}
								<div class="step-connector" class:active={i < currentStep - 1}></div>
							{/if}
						</div>
					{/each}
				</div>
				
				<div class="demo-panel">
					<div class="demo-header">
						<span class="demo-title">Live Progress</span>
						<div class="demo-dots">
							<span class="dot red"></span>
							<span class="dot yellow"></span>
							<span class="dot green"></span>
						</div>
					</div>
					<div class="demo-body">
						<div class="progress-meter">
							<div class="progress-label">AI-Readiness Score</div>
							<div class="progress-value" style="color: {currentStep >= 3 ? 'var(--faf-green)' : currentStep >= 1 ? 'var(--faf-orange)' : '#999'}">
								{currentStep === 0 ? '0%' : currentStep === 1 ? '22%' : currentStep === 2 ? '45%' : currentStep === 3 ? '85%' : '99%'}
							</div>
							<div class="progress-bar">
								<div class="progress-fill" style="width: {currentStep === 0 ? '0%' : currentStep === 1 ? '22%' : currentStep === 2 ? '45%' : currentStep === 3 ? '85%' : '99%'}; background: {currentStep >= 3 ? 'var(--faf-green)' : currentStep >= 1 ? 'var(--faf-orange)' : '#999'}"></div>
							</div>
						</div>
						
						{#if isCompleted}
							<div class="completion-message">
								<span class="completion-icon">🎉</span>
								<h3>You're FAF-Ready!</h3>
								<p>Your AI now understands your project perfectly.</p>
								<button class="btn btn-primary">
									Explore Advanced Features
								</button>
							</div>
						{:else}
							<div class="status-messages">
								{#if currentStep > 0}
									<div class="status-message">✅ CLI installed globally</div>
								{/if}
								{#if currentStep > 1}
									<div class="status-message">✅ Project structure mapped</div>
								{/if}
								{#if currentStep > 2}
									<div class="status-message">✅ Dependencies validated</div>
								{/if}
								{#if currentStep > 3}
									<div class="status-message">✅ Context-Mirroring™ active</div>
								{/if}
								{#if currentStep > 4}
									<div class="status-message">✅ Enterprise-ready validation complete</div>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			</div>
			
			<div class="testimonials">
				<h3>What the BIG-3 AI's have to say during Verified Testing</h3>
				<div class="testimonial-grid">
					<div class="testimonial">
						<p><strong>"Should become the standard"</strong></p>
						<div class="author">
							<span class="author-name">Claude Code</span>
							<span class="author-role">(9.5/10 Rating)</span>
						</div>
					</div>
					<div class="testimonial">
						<p><strong>"Every project should have one"</strong></p>
						<div class="author">
							<span class="author-name">OpenAI Codex CLI</span>
							<span class="author-role">(9/10 Rating)</span>
						</div>
					</div>
					<div class="testimonial">
						<p><strong>"README evolution for AI era"</strong></p>
						<div class="author">
							<span class="author-name">Google Gemini CLI</span>
							<span class="author-role">(9.5/10 Rating)</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.onboarding {
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
	
	.header {
		text-align: center;
		margin-bottom: 3rem;
	}
	
	.section-title {
		margin-bottom: 1rem;
	}
	
	.section-subtitle {
		color: var(--faf-gray-dark);
		font-size: 1.25rem;
		margin-bottom: 2rem;
	}
	
	.value-banner {
		display: flex;
		justify-content: center;
		gap: 3rem;
		flex-wrap: wrap;
	}
	
	.value-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 999px;
	}
	
	.value-icon {
		font-size: 1.25rem;
	}
	
	.value-text {
		font-weight: 600;
		color: var(--faf-black);
	}
	
	.onboarding-flow {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		max-width: 1200px;
		margin: 0 auto 3rem;
	}
	
	.steps {
		position: relative;
	}
	
	.step {
		position: relative;
		margin-bottom: 2rem;
		opacity: 0.3;
		transition: all 0.5s ease-out;
	}
	
	.step.active {
		opacity: 1;
	}
	
	.step.current {
		transform: scale(1.02);
	}
	
	.step-number {
		position: absolute;
		left: 0;
		top: 0;
		width: 32px;
		height: 32px;
		background: var(--faf-gray-medium);
		color: var(--faf-gray-dark);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		font-size: 0.875rem;
		transition: all 0.3s ease;
	}
	
	.step-number.completed {
		background: var(--faf-green);
		color: var(--faf-white);
	}
	
	.step-content {
		margin-left: 48px;
		padding-bottom: 1rem;
	}
	
	.step-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
	}
	
	.step-icon {
		font-size: 1.5rem;
	}
	
	.step-title {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--faf-black);
		margin: 0;
	}
	
	.step-time {
		margin-left: auto;
		background: var(--faf-cyan);
		color: var(--faf-white);
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		font-size: 0.75rem;
		font-weight: 600;
	}
	
	.command-box {
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 0.75rem 1rem;
		border-radius: 8px;
		font-family: var(--font-mono);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		transition: all 0.3s ease;
		border: none;
		width: 100%;
		text-align: left;
	}
	
	.command-box:hover {
		background: #1a1a1a;
		transform: translateX(2px);
	}
	
	.copy-btn {
		background: none;
		border: none;
		color: var(--faf-white);
		cursor: pointer;
		font-size: 1rem;
		opacity: 0.7;
		transition: opacity 0.3s ease;
	}
	
	.copy-btn:hover {
		opacity: 1;
	}
	
	.step-description {
		color: var(--faf-gray-dark);
		font-size: 0.875rem;
		margin: 0;
	}
	
	.step-connector {
		position: absolute;
		left: 15px;
		top: 32px;
		width: 2px;
		height: calc(100% - 32px);
		background: var(--faf-gray-medium);
		transition: background 0.3s ease;
	}
	
	.step-connector.active {
		background: var(--faf-green);
	}
	
	.demo-panel {
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 16px;
		overflow: hidden;
		height: fit-content;
		position: sticky;
		top: 100px;
	}
	
	.demo-header {
		background: #f5f5f5;
		padding: 1rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--faf-gray-medium);
	}
	
	.demo-title {
		font-weight: 600;
		color: var(--faf-gray-dark);
	}
	
	.demo-dots {
		display: flex;
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
	
	.demo-body {
		padding: 2rem;
	}
	
	.progress-meter {
		margin-bottom: 2rem;
	}
	
	.progress-label {
		text-align: center;
		color: var(--faf-gray-dark);
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.5rem;
	}
	
	.progress-value {
		text-align: center;
		font-size: 3rem;
		font-weight: 900;
		font-family: var(--font-mono);
		margin-bottom: 1rem;
		transition: all 0.5s ease-out;
	}
	
	.progress-bar {
		width: 100%;
		height: 8px;
		background: var(--faf-gray-light);
		border-radius: 4px;
		overflow: hidden;
	}
	
	.progress-fill {
		height: 100%;
		transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
		border-radius: 4px;
	}
	
	.status-messages {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	
	.status-message {
		color: var(--faf-gray-dark);
		font-size: 0.875rem;
		padding: 0.5rem;
		background: var(--faf-gray-light);
		border-radius: 6px;
		animation: slideInRight 0.5s ease-out;
	}
	
	.completion-message {
		text-align: center;
		animation: fadeIn 0.5s ease-out;
	}
	
	.completion-icon {
		font-size: 3rem;
		display: block;
		margin-bottom: 1rem;
		animation: bounce 1s ease-in-out;
	}
	
	.completion-message h3 {
		color: var(--faf-green);
		margin-bottom: 0.5rem;
	}
	
	.completion-message p {
		color: var(--faf-gray-dark);
		margin-bottom: 1.5rem;
	}
	
	.testimonials {
		margin-top: 4rem;
		text-align: center;
	}
	
	.testimonials h3 {
		margin-bottom: 2rem;
	}
	
	.testimonial-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		max-width: 1000px;
		margin: 0 auto;
	}
	
	.testimonial {
		background: var(--faf-white);
		border: 2px solid var(--faf-gray-medium);
		border-radius: 12px;
		padding: 1.5rem;
		transition: all 0.3s ease;
	}
	
	.testimonial:hover {
		border-color: var(--faf-orange);
		transform: translateY(-2px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}
	
	.testimonial p {
		color: var(--faf-gray-dark);
		font-style: italic;
		margin-bottom: 1rem;
	}
	
	.author {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	
	.author-name {
		font-weight: 600;
		color: var(--faf-black);
	}
	
	.author-role {
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
	}
	
	@keyframes slideInRight {
		from {
			opacity: 0;
			transform: translateX(20px);
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
	
	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}
	
	@media (max-width: 768px) {
		.onboarding-flow {
			grid-template-columns: 1fr;
		}
		
		.demo-panel {
			position: static;
		}
		
		.value-banner {
			gap: 1rem;
		}
		
		.testimonial-grid {
			grid-template-columns: 1fr;
		}
	}
</style>