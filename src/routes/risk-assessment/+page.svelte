<script>
	// Default values
	const defaults = {
		aiContext: 55,      // (10 + 100) / 2 = 55
		projectWeeks: 12,   // 12 weeks (3 months) is typical project
		weeklyBurn: 18000,  // $18k/week = ~$216k for 12-week project
		impactMultiplier: 2.0 // Default to 2x (at 50% context, takes twice as long)
	};

	let aiContext = $state(defaults.aiContext);
	let projectWeeks = $state(defaults.projectWeeks);
	let weeklyBurn = $state(defaults.weeklyBurn);
	let impactMultiplier = $state(defaults.impactMultiplier);

	function resetToDefaults() {
		aiContext = defaults.aiContext;
		projectWeeks = defaults.projectWeeks;
		weeklyBurn = defaults.weeklyBurn;
		impactMultiplier = defaults.impactMultiplier;
	}

	// Calculations
	// Simple formula: the lower the context, the more impact
	// At 100% context = 1x time (no delay)
	// At 50% context with 2x setting = 2x time
	// At 0% context with 2x setting = 3x time
	const contextFactor = $derived(1 + ((100 - aiContext) / 100) * (impactMultiplier - 1));
	const actualWeeks = $derived(Math.round(projectWeeks * contextFactor));
	const actualDays = $derived(actualWeeks * 5); // Business days
	const plannedDays = $derived(projectWeeks * 5);
	const delayDays = $derived(actualDays - plannedDays);
	const actualCost = $derived(actualWeeks * weeklyBurn);
	const plannedCost = $derived(projectWeeks * weeklyBurn);
	const costOverrun = $derived(actualCost - plannedCost);

	// Success rate drops dramatically with poor context
	// At 100% context = 90% success (10% base failure)
	// At 50% context = ~45% success
	// At 10% context = ~5% success
	const successRate = $derived(Math.max(5, aiContext * 0.85 + 5));
	const failureRisk = $derived(100 - successRate);

	// Quality mapping
	const getQuality = (context) => {
		if (context >= 100) return { level: 'Best Possible', emoji: '🏆', color: 'var(--faf-orange)' }; // FAF Orange - ONLY at 100%
		if (context >= 90) return { level: 'Excellent', emoji: '🌟', color: '#228B22' }; // Green
		if (context >= 80) return { level: 'Very Good', emoji: '💪', color: '#333' }; // Dark grey
		if (context >= 70) return { level: 'Good', emoji: '👍', color: '#555' }; // Medium grey
		if (context >= 60) return { level: 'Fair', emoji: '😐', color: '#666' }; // Grey
		if (context >= 50) return { level: 'Compromised', emoji: '⚠️', color: '#777' }; // Grey
		if (context >= 40) return { level: 'Poor', emoji: '😰', color: '#999' }; // Light grey
		if (context >= 30) return { level: 'Critical', emoji: '🔥', color: '#bbb' }; // Lighter grey
		if (context >= 20) return { level: 'Failing', emoji: '❌', color: '#DC143C' }; // Red
		return { level: 'Disaster', emoji: '💀', color: '#8B0000' }; // Dark red
	};

	const currentQuality = $derived(getQuality(aiContext));
	const withFafQuality = $derived(getQuality(100));

	// Risk level
	const getRiskLevel = (rate) => {
		if (rate < 15) return { level: 'Low', color: 'var(--faf-black)' };
		if (rate < 30) return { level: 'Medium', color: '#666' };
		if (rate < 50) return { level: 'High', color: '#999' };
		return { level: 'Critical', color: '#ccc' };
	};

	const currentRisk = $derived(getRiskLevel(failureRisk));
</script>

<svelte:head>
	<title>Project Risk Assessment - The REAL Cost of Context</title>
	<meta name="description" content="See how AI context quality impacts project success, timeline, and costs">
</svelte:head>

<div class="risk-hero">
	<div class="container">
		<h1>🎯 Project Risk Assessment</h1>
		<p class="subtitle">The REAL Cost of Inferior Context</p>
		<p class="tagline">If you're responsible for a software project and not using .faf...<br>how responsible are you?</p>
	</div>
</div>

<div class="risk-container">
	<div class="risk-grid">
		<div class="risk-inputs">
			<div class="inputs-header">
				<h2>Your Project Parameters</h2>
				<button onclick={resetToDefaults} class="reset-button">Reset to Model Project</button>
			</div>

			<div class="input-group">
				<label for="context">
					AI Context Quality
					<span class="input-help">Current context retention (50% is typical)</span>
				</label>
				<input
					type="range"
					id="context"
					bind:value={aiContext}
					min="10"
					max="100"
					step="5"
					class="context-slider"
				/>
				<div class="input-value">{aiContext}%</div>
				<div class="context-labels">
					<span>Status Quo</span>
					<span>With .faf →</span>
				</div>
			</div>

			<div class="input-group">
				<label for="weeks">
					Project Timeline (weeks)
					<span class="input-help">Original project duration</span>
				</label>
				<input
					type="range"
					id="weeks"
					bind:value={projectWeeks}
					min="1"
					max="52"
					step="1"
				/>
				<div class="input-value">{projectWeeks} weeks</div>
			</div>

			<div class="input-group">
				<label for="burn">
					Weekly Project Cost
					<span class="input-help">Team cost per week (includes overhead)</span>
				</label>
				<input
					type="range"
					id="burn"
					bind:value={weeklyBurn}
					min="5000"
					max="100000"
					step="5000"
				/>
				<div class="input-value">${weeklyBurn.toLocaleString()}</div>
			</div>

			<div class="input-group">
				<label for="multiplier">
					Timeline Impact (days)
					<span class="input-help">How much does poor context multiply timeline? (2x is conservative)</span>
				</label>
				<input
					type="range"
					id="multiplier"
					bind:value={impactMultiplier}
					min="1.5"
					max="10"
					step="0.5"
				/>
				<div class="input-value">+{Math.round((actualWeeks - projectWeeks) * 5)} days</div>
			</div>

			<div class="context-preview">
				<h4>What {aiContext}% AI Context Really Means:</h4>
				<ul>
					{#if aiContext >= 90}
						<li>Building exactly what was designed</li>
						<li>Team is in flow state</li>
						<li>Shipping championship code</li>
					{:else if aiContext >= 75}
						<li>Mostly on track</li>
						<li>Some re-explanation needed</li>
						<li>Quality holding steady</li>
					{:else if aiContext >= 60}
						<li>Starting to cut corners</li>
						<li>Re-explaining requirements weekly</li>
						<li>Quality slipping</li>
					{:else if aiContext >= 50}
						<li>Half the context = double the confusion</li>
						<li>Building the wrong thing efficiently</li>
						<li>Team frustration rising</li>
					{:else if aiContext >= 30}
						<li>Major gaps in understanding</li>
						<li>Endless rework cycles</li>
						<li>Good developers considering leaving</li>
					{:else if aiContext >= 20}
						<li>Nobody remembers the original goal</li>
						<li>Complete chaos</li>
						<li>Team morale critical</li>
					{:else}
						<li>Project death spiral</li>
						<li>Complete restart needed</li>
						<li>Reputation destroyed</li>
					{/if}
				</ul>
			</div>

		</div>

		<div class="risk-results">
			<div class="success-meter">
				<h2>PROJECT SUCCESS PROBABILITY</h2>
				<div class="meter-container">
					<div class="meter-fill" style="width: {successRate}%; background: {successRate > 70 ? 'var(--faf-black)' : successRate > 50 ? '#666' : '#ccc'}">
						<span class="meter-text" style="color: {successRate >= 90 ? '#4CAF50' : successRate < 50 ? '#FF6B6B' : 'white'}">{Math.round(successRate)}%</span>
					</div>
				</div>
				<p class="meter-label">
					{#if successRate >= 90}
						Professional Grade (10% real-world buffer)
					{:else if successRate > 80}
						Professional Grade
					{:else if successRate > 60}
						Rolling the Dice
					{:else if successRate > 40}
						High Risk
					{:else}
						Likely Failure
					{/if}
				</p>
			</div>

			<div class="comparison-grid">
				<div class="comparison-card current">
					<h3>Current State ({aiContext}% AI Context)</h3>
					<div class="stat-row">
						<span class="label">Timeline:</span>
						<span class="value bad">{actualDays} days</span>
					</div>
					<div class="stat-row">
						<span class="label">Cost:</span>
						<span class="value bad">${actualCost.toLocaleString()}</span>
					</div>
					<div class="stat-row">
						<span class="label">Success Ratio:</span>
						<span class="value bad">{Math.round(successRate)}%</span>
					</div>
					<div class="stat-row">
						<span class="label">Risk Level:</span>
						<span class="value" style="color: {currentRisk.color}">{currentRisk.level}</span>
					</div>
					<div class="quality-indicator" style="background: {currentQuality.color}">
						<span>{currentQuality.emoji} {currentQuality.level}</span>
					</div>
				</div>

				<div class="comparison-card optimal">
					<h3>With .faf (100% AI Context)</h3>
					<div class="stat-row">
						<span class="label">Timeline:</span>
						<span class="value good">{plannedDays} days ✅</span>
					</div>
					<div class="stat-row">
						<span class="label">Cost:</span>
						<span class="value good">${plannedCost.toLocaleString()} ✅</span>
					</div>
					<div class="stat-row">
						<span class="label">Success Ratio:</span>
						<span class="value good">90% ✅</span>
					</div>
					<div class="stat-row">
						<span class="label">Risk Level:</span>
						<span class="value good">Low</span>
					</div>
					<div class="quality-indicator" style="background: {withFafQuality.color}">
						<span>{withFafQuality.emoji} {withFafQuality.level}</span>
					</div>
				</div>
			</div>

			<div class="impact-summary">
				<div class="cost-headline">
					<span class="cost-label">The REAL Cost at {aiContext}% AI Context:</span>
					<span class="cost-number">${costOverrun > 0 ? '+' + costOverrun.toLocaleString() : '0'}</span>
				</div>
				<div class="impact-grid">
					<div class="impact-item">
						<span class="impact-emoji">💰</span>
						<span class="impact-label">Extra Cost</span>
						<span class="impact-value">${costOverrun > 0 ? '+' + costOverrun.toLocaleString() : '0'}</span>
					</div>
					<div class="impact-item">
						<span class="impact-emoji">⏰</span>
						<span class="impact-label">Extra Time</span>
						<span class="impact-value">+{delayDays} days</span>
					</div>
					<div class="impact-item">
						<span class="impact-emoji">📉</span>
						<span class="impact-label">Quality Loss</span>
						<span class="impact-value">{currentQuality.level}</span>
					</div>
					<div class="impact-item">
						<span class="impact-emoji">🚨</span>
						<span class="impact-label">Failure Risk</span>
						<span class="impact-value">{Math.round(failureRisk)}% chance</span>
					</div>
				</div>
			</div>

			<div class="bottom-line">
				{#if costOverrun > 0}
					<h3>Save ${costOverrun.toLocaleString()} and ship {delayDays} days earlier with .faf</h3>
				{:else}
					<h3>Ship on time and on budget with .faf</h3>
				{/if}
				<p class="responsibility-check">
					Teams locked in with .faf absolutely kill it.<br>
					100% context = Championship performance.
				</p>
				<a href="/#pricing" class="btn-responsible">Get .faf - Ship Championship Code →</a>
			</div>
		</div>
	</div>

	<div class="context-stories">
		<h3>What {aiContext}% AI Context Really Means:</h3>
		<div class="story-text">
			{#if aiContext >= 90}
				Building exactly what was designed. Team is in flow state. Shipping championship code.
			{:else if aiContext >= 75}
				Mostly on track. Some re-explanation needed. Quality holding steady.
			{:else if aiContext >= 60}
				Starting to cut corners. Re-explaining requirements weekly. Quality slipping.
			{:else if aiContext >= 50}
				Half the context = double the confusion. Building the wrong thing efficiently. Team frustration rising.
			{:else if aiContext >= 30}
				Major gaps in understanding. Endless rework cycles. Good developers considering leaving.
			{:else if aiContext >= 20}
				Nobody remembers the original goal. Complete chaos. Team morale critical.
			{:else}
				Project death spiral. Complete restart needed. Reputation destroyed.
			{/if}
		</div>
	</div>
</div>

<style>
	.risk-hero {
		background: var(--faf-black);
		color: var(--faf-white);
		padding: 3rem 0;
		text-align: center;
		border-bottom: 3px solid var(--faf-orange);
	}

	.risk-hero h1 {
		font-size: 3rem;
		margin-bottom: 0.5rem;
		font-weight: 900;
	}

	.subtitle {
		font-size: 1.5rem;
		color: var(--faf-orange);
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.tagline {
		font-size: 1rem;
		opacity: 0.9;
		font-style: italic;
		max-width: 600px;
		margin: 0 auto;
	}

	.risk-container {
		max-width: 1200px;
		margin: 3rem auto;
		padding: 0 2rem;
	}

	.risk-grid {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	.risk-inputs {
		background: #f8f8f8;
		padding: 2rem;
		border-radius: 12px;
		border: 2px solid #e0e0e0;
	}

	.inputs-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
	}

	.risk-inputs h2 {
		margin: 0;
		color: var(--faf-black);
		font-size: 1.5rem;
	}

	.reset-button {
		padding: 0.5rem 1rem;
		background: var(--faf-black);
		color: white;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		font-size: 0.875rem;
	}

	.reset-button:hover {
		background: var(--faf-orange);
		transform: translateY(-1px);
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
		-webkit-appearance: none;
		appearance: none;
		height: 8px;
		border-radius: 5px;
		outline: none;
		background: #e0e0e0;
	}

	.context-slider {
		background: var(--faf-black) !important;
	}

	#weeks {
		background: #e0e0e0 !important;
	}

	#burn {
		background: #e0e0e0 !important;
	}

	#multiplier {
		background: #e0e0e0 !important;
	}

	input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 20px;
		height: 20px;
		background: white;
		border: 3px solid var(--faf-black);
		cursor: pointer;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	}

	input[type="range"]::-moz-range-thumb {
		width: 20px;
		height: 20px;
		background: white;
		border: 3px solid var(--faf-black);
		cursor: pointer;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	}

	.input-value {
		text-align: right;
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--faf-black);
		font-family: var(--font-mono);
	}

	.context-labels {
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
		color: #999;
		margin-top: -0.5rem;
	}

	.success-meter {
		background: white;
		border: 3px solid var(--faf-black);
		border-radius: 12px;
		padding: 2rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	.success-meter h2 {
		margin: 0 0 1rem 0;
		font-size: 1.25rem;
		color: var(--faf-black);
		font-weight: 900;
	}

	.meter-container {
		width: 100%;
		height: 60px;
		background: #f0f0f0;
		border-radius: 30px;
		overflow: hidden;
		position: relative;
		border: 2px solid var(--faf-black);
	}

	.meter-fill {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 1rem;
		transition: all 0.5s ease;
	}

	.meter-text {
		color: white;
		font-size: 1.5rem;
		font-weight: 900;
		text-shadow: 0 2px 4px rgba(0,0,0,0.3);
	}

	.meter-label {
		margin-top: 1rem;
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--faf-black);
	}

	.comparison-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.comparison-card {
		background: white;
		border: 2px solid var(--faf-black);
		border-radius: 8px;
		padding: 1.5rem;
	}

	.comparison-card.optimal {
		background: white;
		border-color: var(--faf-orange);
		border-width: 3px;
	}

	.comparison-card h3 {
		margin: 0 0 1rem 0;
		font-size: 1rem;
		color: var(--faf-black);
		text-align: center;
		font-weight: 700;
	}

	.stat-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.75rem;
		align-items: center;
	}

	.stat-row .label {
		font-weight: 600;
		color: #666;
	}

	.stat-row .value {
		font-weight: 900;
		font-family: var(--font-mono);
	}

	.value.bad {
		color: #999;
	}

	.value.good {
		color: var(--faf-black);
		font-weight: 900;
	}

	.quality-indicator {
		margin-top: 1rem;
		padding: 0.75rem;
		border-radius: 8px;
		text-align: center;
		color: white;
		font-weight: 700;
		font-size: 1.125rem;
	}

	.impact-summary {
		background: var(--faf-black);
		color: white;
		padding: 2rem;
		border-radius: 12px;
		margin-bottom: 2rem;
	}

	.cost-headline {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 2px solid var(--faf-orange);
	}

	.cost-label {
		font-size: 1.25rem;
		font-weight: 600;
		opacity: 0.9;
	}

	.cost-number {
		font-size: 3.5rem;
		font-weight: 900;
		color: var(--faf-orange);
		font-family: var(--font-mono);
		line-height: 1;
	}

	.impact-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	.impact-item {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.impact-emoji {
		font-size: 2rem;
	}

	.impact-label {
		font-size: 0.75rem;
		opacity: 0.8;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.impact-value {
		font-size: 1.125rem;
		font-weight: 900;
		color: var(--faf-orange);
	}

	.bottom-line {
		text-align: center;
		padding: 2rem;
		background: #f8f8f8;
		border-radius: 12px;
		border: 2px solid var(--faf-orange);
	}

	.bottom-line h3 {
		margin: 0 0 1rem 0;
		color: var(--faf-black);
		font-size: 1.5rem;
	}

	.responsibility-check {
		color: #666;
		font-style: italic;
		margin-bottom: 1.5rem;
		font-weight: 600;
	}

	.btn-responsible {
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

	.btn-responsible:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
	}

	.context-preview {
		margin-top: 1.5rem;
		padding: 1rem;
		background: #f0f0f0;
		border-radius: 8px;
		border-left: 4px solid var(--faf-orange);
	}

	.context-preview h4 {
		margin: 0 0 0.5rem 0;
		color: var(--faf-black);
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-weight: 700;
	}

	.context-preview ul {
		margin: 0;
		padding-left: 1.5rem;
		list-style: none;
	}

	.context-preview li {
		color: #666;
		font-size: 0.95rem;
		line-height: 1.6;
		margin-bottom: 0.25rem;
		position: relative;
		padding-left: 1rem;
	}

	.context-preview li:before {
		content: "•";
		color: var(--faf-orange);
		font-weight: bold;
		position: absolute;
		left: 0;
	}

	.context-stories {
		margin-top: 3rem;
		padding: 2rem;
		background: #f8f8f8;
		border-radius: 12px;
		text-align: center;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.context-stories h3 {
		margin: 0 0 1rem 0;
		color: var(--faf-black);
	}

	.story-text {
		font-size: 1.125rem;
		color: #666;
		font-style: italic;
		line-height: 1.6;
	}

	@media (max-width: 968px) {
		.risk-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.impact-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.risk-hero h1 {
			font-size: 2rem;
		}

		.comparison-grid {
			grid-template-columns: 1fr;
		}

		.impact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>