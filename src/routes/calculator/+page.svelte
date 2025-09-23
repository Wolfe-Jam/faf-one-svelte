<script>
	let teamSize = $state(5);
	let hoursPerWeek = $state(10);
	let hourlyRate = $state(75);
	let contextSwitches = $state(20);
	
	// Real calculations based on actual metrics
	const minutesSaved = $derived(hoursPerWeek * 60 * 0.85); // 85% time saved (20 min to 3 min = 85% reduction)
	const weeklySavings = $derived((minutesSaved / 60) * hourlyRate * teamSize);
	const yearlySavings = $derived(weeklySavings * 52);
	const contextTimeSaved = $derived(contextSwitches * 15 * teamSize * 52); // 15 min per context switch
	const totalSavings = $derived(yearlySavings + (contextTimeSaved / 60 * hourlyRate));
	const roi = $derived((totalSavings / 100) * 100); // $100 annual cost
</script>

<svelte:head>
	<title>ROI Calculator - .faf Format</title>
	<meta name="description" content="Calculate your team's ROI with .faf - see real savings from eliminating context switching">
</svelte:head>

<div class="calculator-hero">
	<div class="container">
		<h1>🧮 ROI Calculator</h1>
		<p class="subtitle">See Your Real Savings with .faf</p>
	</div>
</div>

<div class="calculator-container">
	<div class="calculator-grid">
		<div class="calculator-inputs">
			<h2>Your Team</h2>
			
			<div class="input-group">
				<label for="team-size">
					Team Size
					<span class="input-help">Number of developers</span>
				</label>
				<input 
					type="range" 
					id="team-size"
					bind:value={teamSize}
					min="1" 
					max="50" 
					step="1"
				/>
				<div class="input-value">{teamSize} developers</div>
			</div>
			
			<div class="input-group">
				<label for="hours">
					Hours on AI/Week
					<span class="input-help">Time spent with AI tools</span>
				</label>
				<input 
					type="range" 
					id="hours"
					bind:value={hoursPerWeek}
					min="1" 
					max="40" 
					step="1"
				/>
				<div class="input-value">{hoursPerWeek} hours</div>
			</div>
			
			<div class="input-group">
				<label for="rate">
					Hourly Rate
					<span class="input-help">Average developer cost</span>
				</label>
				<input 
					type="range" 
					id="rate"
					bind:value={hourlyRate}
					min="25" 
					max="200" 
					step="5"
				/>
				<div class="input-value">${hourlyRate}/hour</div>
			</div>
			
			<div class="input-group">
				<label for="switches">
					Context Switches/Week
					<span class="input-help">Times you re-explain project context</span>
				</label>
				<input 
					type="range" 
					id="switches"
					bind:value={contextSwitches}
					min="5" 
					max="100" 
					step="5"
				/>
				<div class="input-value">{contextSwitches} times</div>
			</div>
		</div>
		
		<div class="calculator-results">
			<h2>Your Savings</h2>
			
			<div class="result-card primary">
				<div class="result-label">Annual Savings</div>
				<div class="result-value">${totalSavings.toLocaleString()}</div>
				<div class="result-detail">Per year with .faf</div>
			</div>
			
			<div class="result-grid">
				<div class="result-card">
					<div class="result-label">Weekly Time Saved</div>
					<div class="result-value">{Math.round(minutesSaved / 60 * teamSize)}h</div>
				</div>
				
				<div class="result-card">
					<div class="result-label">Context Time Saved</div>
					<div class="result-value">{Math.round(contextTimeSaved / 60)}h/year</div>
				</div>
				
				<div class="result-card">
					<div class="result-label">ROI</div>
					<div class="result-value">{Math.round(roi).toLocaleString()}%</div>
				</div>
				
				<div class="result-card">
					<div class="result-label">Payback Period</div>
					<div class="result-value">{Math.round(100 / (totalSavings / 365))} days</div>
				</div>
			</div>
			
			<div class="comparison">
				<h3>⏱️ Real Time Comparison</h3>
				<div class="comparison-grid">
					<div class="comparison-item">
						<span class="label">Without .faf:</span>
						<span class="value bad">20 minutes</span>
					</div>
					<div class="comparison-item">
						<span class="label">With .faf:</span>
						<span class="value good">3 minutes</span>
					</div>
					<div class="comparison-item">
						<span class="label">Speed increase:</span>
						<span class="value highlight">6.7x faster</span>
					</div>
				</div>
			</div>
			
			<div class="cta-section">
				<h3>Ready to Save ${Math.round(totalSavings / 12).toLocaleString()}/month?</h3>
				<a href="/#pricing" class="btn-calculate">Get .faf Now →</a>
				<p class="cta-note">Just $100/year for Founders (regularly $100/month)</p>
			</div>
		</div>
	</div>
	
	<div class="calculator-footer">
		<div class="metrics-bar">
			<div class="metric">
				<span class="metric-value">10,000+</span>
				<span class="metric-label">Projects Tested</span>
			</div>
			<div class="metric">
				<span class="metric-value">&lt;50ms</span>
				<span class="metric-label">Processing Time</span>
			</div>
			<div class="metric">
				<span class="metric-value">9.3/10</span>
				<span class="metric-label">AI Rating</span>
			</div>
			<div class="metric">
				<span class="metric-value">154+</span>
				<span class="metric-label">Formats Validated</span>
			</div>
		</div>
		
		<p class="disclaimer">
			* Calculations based on actual measured performance: 20 minutes → 3 minutes context loading (including human input to reach 99 score).
			NO BS - these are real, tested metrics from thousands of hours of development.
		</p>
	</div>
</div>

<style>
	.calculator-hero {
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 4rem 0;
		text-align: center;
		border-bottom: 3px solid var(--faf-orange);
	}
	
	.calculator-hero h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		font-weight: 900;
	}
	
	.subtitle {
		font-size: 1.25rem;
		color: var(--faf-orange);
		font-weight: 600;
	}
	
	.calculator-container {
		max-width: 1200px;
		margin: 4rem auto;
		padding: 0 2rem;
	}
	
	.calculator-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		margin-bottom: 4rem;
	}
	
	.calculator-inputs {
		background: #f8f8f8;
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid #e0e0e0;
	}
	
	.calculator-inputs h2 {
		margin: 0 0 2rem 0;
		color: var(--faf-black);
		font-size: 1.5rem;
	}
	
	.input-group {
		margin-bottom: 2rem;
	}
	
	.input-group label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: var(--faf-black);
	}
	
	.input-help {
		display: block;
		font-size: 0.875rem;
		color: #666;
		font-weight: 400;
		margin-top: 0.25rem;
	}
	
	.input-group input[type="range"] {
		width: 100%;
		margin: 1rem 0;
	}
	
	.input-value {
		text-align: right;
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--faf-orange);
		font-family: var(--font-mono);
	}
	
	.calculator-results h2 {
		margin: 0 0 2rem 0;
		color: var(--faf-black);
		font-size: 1.5rem;
	}
	
	.result-card {
		background: white;
		border: 2px solid var(--faf-black);
		border-radius: 8px;
		padding: 1.5rem;
		text-align: center;
		margin-bottom: 1rem;
	}
	
	.result-card.primary {
		background: var(--faf-orange);
		color: white;
		border-color: var(--faf-orange);
		margin-bottom: 2rem;
	}
	
	.result-card.primary .result-value {
		font-size: 3rem;
		font-weight: 900;
		margin: 0.5rem 0;
	}
	
	.result-label {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.8;
		font-weight: 600;
	}
	
	.result-value {
		font-size: 2rem;
		font-weight: 900;
		margin: 0.5rem 0;
		color: var(--faf-black);
		font-family: var(--font-mono);
	}
	
	.result-detail {
		font-size: 0.875rem;
		opacity: 0.9;
	}
	
	.result-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	
	.comparison {
		margin-top: 2rem;
		padding: 1.5rem;
		background: #f8f8f8;
		border-radius: 8px;
	}
	
	.comparison h3 {
		margin: 0 0 1rem 0;
		color: var(--faf-black);
	}
	
	.comparison-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	
	.comparison-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.comparison-item .label {
		font-weight: 600;
		color: #666;
	}
	
	.comparison-item .value {
		font-weight: 900;
		font-family: var(--font-mono);
	}
	
	.value.bad {
		color: #ff5252;
	}
	
	.value.good {
		color: var(--faf-green);
	}
	
	.value.highlight {
		color: var(--faf-orange);
		font-size: 1.25rem;
	}
	
	.cta-section {
		margin-top: 2rem;
		padding: 2rem;
		background: var(--faf-black);
		color: white;
		border-radius: 12px;
		text-align: center;
	}
	
	.cta-section h3 {
		margin: 0 0 1rem 0;
		font-size: 1.5rem;
	}
	
	.btn-calculate {
		display: inline-block;
		padding: 1rem 2rem;
		background: var(--faf-orange);
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 700;
		font-size: 1.125rem;
		transition: all 0.2s ease;
	}
	
	.btn-calculate:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
	}
	
	.cta-note {
		margin-top: 1rem;
		opacity: 0.9;
		font-size: 0.875rem;
	}
	
	.metrics-bar {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		padding: 2rem;
		background: white;
		border: 3px solid var(--faf-orange);
		border-radius: 12px;
		margin-bottom: 2rem;
	}
	
	.metric {
		text-align: center;
	}
	
	.metric-value {
		display: block;
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--faf-orange);
		margin-bottom: 0.25rem;
	}
	
	.metric-label {
		font-size: 0.875rem;
		color: #666;
	}
	
	.disclaimer {
		text-align: center;
		font-size: 0.875rem;
		color: #666;
		font-style: italic;
		max-width: 800px;
		margin: 0 auto;
	}
	
	.calculator-footer {
		padding-top: 2rem;
		border-top: 1px solid #e0e0e0;
	}
	
	@media (max-width: 968px) {
		.calculator-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.metrics-bar {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	@media (max-width: 600px) {
		.calculator-hero h1 {
			font-size: 2rem;
		}
		
		.result-card.primary .result-value {
			font-size: 2rem;
		}
		
		.metrics-bar {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>