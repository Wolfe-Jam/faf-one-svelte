<script lang="ts">
	import RiskSlider from '$lib/components/risk-assessment/RiskSlider.svelte';
	import ImpactDisplay from '$lib/components/risk-assessment/ImpactDisplay.svelte';
	import ComparisonCard from '$lib/components/risk-assessment/ComparisonCard.svelte';
	import ContextPreview from '$lib/components/risk-assessment/ContextPreview.svelte';

	// Default values
	const defaults = {
		aiContext: 55,
		projectDuration: 12,
		weeklyBurn: 3000  // $75/hour * 40 hours
	};

	let aiContext = $state(defaults.aiContext);
	let projectDuration = $state(defaults.projectDuration);
	let weeklyBurn = $state(defaults.weeklyBurn);

	// For the pill input display
	let projectCost = $state(75);
	let costMode = $state('hourly'); // 'weekly' or 'hourly'

	// Sync projectCost with weeklyBurn based on mode
	$effect(() => {
		if (costMode === 'hourly') {
			// Convert hourly rate to weekly burn (40 hours/week)
			weeklyBurn = projectCost * 40;
		} else {
			// Use weekly rate directly
			weeklyBurn = projectCost;
		}
	});

	// Convert projectCost when switching modes
	let previousMode = $state('hourly');
	$effect(() => {
		if (costMode !== previousMode) {
			if (costMode === 'hourly' && previousMode === 'weekly') {
				// Converting from weekly to hourly
				projectCost = Math.round(projectCost / 40);
			} else if (costMode === 'weekly' && previousMode === 'hourly') {
				// Converting from hourly to weekly
				projectCost = projectCost * 40;
			}
			previousMode = costMode;
		}
	});

	const projectWeeks = $derived(projectDuration);
	const baseTotalCost = $derived(weeklyBurn * projectDuration);

	function resetToDefaults() {
		aiContext = defaults.aiContext;
		projectDuration = defaults.projectDuration;
		weeklyBurn = defaults.weeklyBurn;
		projectCost = 75; // $75/hour
		costMode = 'hourly';
	}

	// Smart multiplier calculation
	const impactMultiplier = $derived(
		aiContext >= 95 ? 1.0 :
		aiContext >= 90 ? 1.2 :
		aiContext >= 75 ? 1.5 :
		aiContext >= 60 ? 1.75 :
		aiContext >= 50 ? 2.0 :
		aiContext >= 40 ? 2.5 :
		aiContext >= 30 ? 3.0 :
		aiContext >= 20 ? 4.0 :
		aiContext >= 10 ? 5.0 :
		10.0
	);

	// Calculations
	const contextFactor = $derived(1 + ((100 - aiContext) / 100) * (impactMultiplier - 1));
	const actualWeeks = $derived(Math.round(projectWeeks * contextFactor));
	const actualDays = $derived(actualWeeks * 5);
	const plannedDays = $derived(projectWeeks * 5);
	const delayDays = $derived(actualDays - plannedDays);
	const actualCost = $derived(Math.round(baseTotalCost * contextFactor));
	const plannedCost = $derived(baseTotalCost);
	const costOverrun = $derived(actualCost - plannedCost);

	// Success metrics
	const successRate = $derived(Math.max(5, aiContext * 0.85 + 5));
	const failureRisk = $derived(100 - successRate);

	// Risk level calculation
	const getRiskLevel = (rate: number) => {
		if (rate >= 90) return { level: 'Low', color: 'var(--faf-green)' };
		if (rate >= 70) return { level: 'Medium', color: '#666' };
		if (rate >= 50) return { level: 'High', color: '#999' };
		return { level: 'Critical', color: '#ff4444' };
	};

	const currentRisk = $derived(getRiskLevel(successRate));

	// Scale items for multiplier display - use $derived for reactivity
	const scaleItems = $derived([
		{ label: '100%→1x', active: aiContext >= 95 },
		{ label: '75%→1.5x', active: aiContext >= 75 && aiContext < 95 },
		{ label: '50%→2x', active: aiContext >= 50 && aiContext < 75 },
		{ label: '25%→3x', active: aiContext >= 25 && aiContext < 50 },
		{ label: '10%→5x+', active: aiContext < 25 }
	]);
</script>

<svelte:head>
	<title>Project Risk Assessment - The REAL Cost of Context</title>
	<meta name="description" content="See how AI context quality impacts project success, timeline, and costs">
</svelte:head>

<div class="risk-hero">
	<div class="container">
		<h1>☑️  Project Risk Assessment</h1>
		<p class="subtitle">The REAL Cost of Inferior Context</p>
		<p class="tagline">If you're responsible for a software project and not using .faf...<br>how responsible are you being?</p>
	</div>
</div>

<div class="risk-container">
	<!-- Simple Input Section -->
	<div class="simple-inputs">
		<div class="input-pill black-pill">
			<label for="duration">PROJECT DURATION</label>
			<div class="pill-value">
				<input
					type="number"
					id="duration"
					bind:value={projectDuration}
					min="1"
					max="52"
					step="1"
				/>
				<span>weeks</span>
			</div>
		</div>

		<div class="input-pill white-pill">
			<div class="pill-value">
				<span>$</span>
				<input
					type="number"
					id="cost"
					bind:value={projectCost}
					min={costMode === 'hourly' ? 25 : 1000}
					step={costMode === 'hourly' ? 5 : 1000}
				/>
				<div class="rate-toggle">
					<button
						class="toggle-btn"
						class:active={costMode === 'hourly'}
						onclick={() => costMode = 'hourly'}
					>
						hourly
					</button>
					<button
						class="toggle-btn"
						class:active={costMode === 'weekly'}
						onclick={() => costMode = 'weekly'}
					>
						weekly
					</button>
				</div>
			</div>
		</div>
	</div>

	<div class="risk-grid">
		<!-- Left Column - Inputs -->
		<div class="risk-inputs">
			<div class="inputs-header">
				<h2>AI Context Quality %</h2>
				<button onclick={resetToDefaults} class="reset-button">Use Example</button>
			</div>

			<RiskSlider
				label="AI Context Quality %"
				helpText="Current context retention (50% is typical without .faf)"
				bind:value={aiContext}
				min={10}
				max={100}
				step={5}
				displayValue="{aiContext}%"
				color="black"
			/>

			<div class="context-labels">
				<span>Status Quo</span>
				<span>With .faf →</span>
			</div>

			<RiskSlider
				label="Project Timeline (weeks)"
				helpText="Original project duration"
				bind:value={projectDuration}
				min={1}
				max={52}
				step={1}
				displayValue="{projectDuration} weeks"
				color="gray"
			/>

			<RiskSlider
				label="Weekly Project Cost"
				helpText="Team cost per week (includes overhead)"
				bind:value={weeklyBurn}
				min={5000}
				max={100000}
				step={5000}
				displayValue="${weeklyBurn.toLocaleString()}"
				color="orange"
			/>

			<div class="multiplier-section">
				<div class="multiplier-label">
					AI-Calculated Timeline Impact
					<span class="help">Smart multiplier based on context quality (automatically adjusts)</span>
				</div>
				<ImpactDisplay multiplier={impactMultiplier} {delayDays} />
				<div class="multiplier-scale">
					{#each scaleItems as item}
						<div class="scale-item" class:active={item.active}>{item.label}</div>
					{/each}
				</div>
			</div>

			<ContextPreview {aiContext} />
		</div>

		<!-- Right Column - Results -->
		<div class="risk-results">
			<div class="success-meter">
				<h2>PROJECT SUCCESS PROBABILITY</h2>
				<div class="meter-container">
					<div
						class="meter-fill"
						style="width: {successRate}%; background: {successRate >= 90 ? 'var(--faf-green)' : successRate > 70 ? 'var(--faf-black)' : successRate > 50 ? '#666' : successRate > 30 ? '#999' : '#ff4444'}; border-radius: {successRate >= 90 ? '20px 0 0 20px' : '20px'}"
					>
						<span
							class="meter-text"
							style="color: white"
						>
							{Math.round(successRate)}%
						</span>
					</div>
					{#if successRate >= 90}
						<div class="buffer-indicator">
							<span class="buffer-text">10%</span>
						</div>
					{/if}
				</div>
				<p class="meter-label" class:highlight-buffer={successRate >= 90}>
					{#if successRate >= 90}
						Professional Grade <span class="buffer-explanation">(10% real-world buffer)</span>
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
				<ComparisonCard
					title="Current State ({aiContext}% AI Context)"
					timeline="{actualDays} days"
					cost="${actualCost.toLocaleString()}"
					successRate="{Math.round(successRate)}%"
					riskLevel={currentRisk.level}
					context={aiContext}
					variant="current"
				/>
				<ComparisonCard
					title="With .faf (100% AI Context)"
					timeline="{plannedDays} days ✅"
					cost="${plannedCost.toLocaleString()} ✅"
					successRate="90% ✅"
					riskLevel="Low"
					context={100}
					variant="optimal"
				/>
			</div>

			<div class="impact-summary">
				<div class="cost-headline">
					<span class="cost-label">The REAL Cost at {aiContext}% AI Context:</span>
					<span class="cost-number">{costOverrun > 0 ? '+$' + costOverrun.toLocaleString() : '$0'}</span>
				</div>
				<div class="impact-grid">
					<div class="impact-item">
						<span class="impact-emoji">💰</span>
						<span class="impact-label">Extra Cost</span>
						<span class="impact-value">{costOverrun > 0 ? '+$' + costOverrun.toLocaleString() + ' Over' : '$0'}</span>
					</div>
					<div class="impact-item">
						<span class="impact-emoji">⏰</span>
						<span class="impact-label">Extra Time</span>
						<span class="impact-value">+{delayDays} days</span>
					</div>
					<div class="impact-item">
						<span class="impact-emoji">📉</span>
						<span class="impact-label">Success Rate</span>
						<span class="impact-value">{Math.round(successRate)}%</span>
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
				<a href="/#pricing" class="btn-responsible">Get .faf - Make your AI-Happy →</a>
			</div>
		</div>
	</div>

	<div class="context-stories">
		<h3>Some decisions in tech are easy.</h3>
		<div class="story-text">Using .faf for Context Management is one of them.</div>
	</div>
</div>

<style>
	/* Hero Section */
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
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.tagline {
		font-size: 1rem;
		opacity: 0.9;
		line-height: 1.6;
	}

	/* Container Layout */
	.risk-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	/* Simple Input Section */
	.simple-inputs {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		margin-bottom: 2rem;
		background: #e0e0e0;
		border-radius: 50px;
		overflow: hidden;
	}

	.input-pill {
		padding: 1rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.input-pill label {
		font-size: 0.875rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		opacity: 0.7;
	}

	.black-pill {
		background: var(--faf-black);
		color: white;
		border-radius: 30px 0 0 30px;
	}

	.white-pill {
		background: white;
		color: var(--faf-black);
		border-radius: 0 30px 30px 0;
	}

	.pill-value {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 1.75rem;
		font-weight: 700;
	}

	.pill-value input {
		background: rgba(255, 255, 255, 0.1);
		border: 2px solid rgba(255, 255, 255, 0.2);
		outline: none;
		font-size: 1.75rem;
		font-weight: 700;
		font-family: var(--font-mono);
		width: 140px;
		color: inherit;
		text-align: center;
		border-radius: 8px;
		padding: 0.25rem;
		transition: all 0.2s ease;
	}

	.pill-value input:hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.3);
	}

	.pill-value input:focus {
		background: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.5);
	}

	.black-pill input {
		color: white !important;
		-webkit-text-fill-color: white !important;
	}

	.black-pill input::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	.black-pill input::-webkit-inner-spin-button,
	.black-pill input::-webkit-outer-spin-button {
		opacity: 1;
		height: 30px;
		width: 20px;
		cursor: pointer;
		filter: invert(1);
	}

	.white-pill input {
		color: var(--faf-black);
		background: rgba(0, 0, 0, 0.05);
		border-color: rgba(0, 0, 0, 0.1);
	}

	.white-pill input:hover {
		background: rgba(0, 0, 0, 0.08);
		border-color: rgba(0, 0, 0, 0.2);
	}

	.white-pill input:focus {
		background: rgba(0, 0, 0, 0.1);
		border-color: rgba(0, 0, 0, 0.3);
	}

	.white-pill input::-webkit-inner-spin-button,
	.white-pill input::-webkit-outer-spin-button {
		opacity: 1;
		height: 30px;
		width: 20px;
		cursor: pointer;
	}

	.pill-value span {
		opacity: 0.8;
		font-size: 1.5rem;
		font-weight: 700;
	}

	.unit {
		opacity: 0.6;
		font-size: 1rem;
		font-weight: 500;
	}

	.rate-toggle {
		display: flex;
		gap: 4px;
		background: #f0f0f0;
		padding: 3px;
		border-radius: 20px;
	}

	.toggle-btn {
		padding: 0.4rem 1rem;
		border: none;
		background: transparent;
		color: #666;
		font-size: 0.875rem;
		font-weight: 600;
		cursor: pointer;
		border-radius: 18px;
		transition: all 0.15s ease;
		text-transform: lowercase;
	}

	.toggle-btn:hover {
		color: #666;
	}

	.toggle-btn.active {
		background: var(--faf-black);
		color: white;
	}

	.risk-grid {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	/* Input Section */
	.risk-inputs {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 2px 10px rgba(0,0,0,0.05);
	}

	.inputs-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid var(--faf-green);
	}

	.inputs-header h2 {
		margin: 0;
		color: var(--faf-black);
		font-size: 1.5rem;
	}

	.reset-button {
		padding: 0.5rem 1rem;
		background: var(--faf-green);
		color: white;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.reset-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(34, 139, 34, 0.3);
	}

	.context-labels {
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
		color: #666;
		margin: -0.5rem 0 1.5rem 0;
		font-weight: 600;
	}

	.multiplier-section label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: var(--faf-black);
	}

	.multiplier-section .help {
		display: block;
		font-size: 0.875rem;
		color: #666;
		font-weight: 400;
		margin-top: 0.25rem;
	}

	.multiplier-scale {
		display: flex;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.scale-item {
		padding: 0.25rem 0.5rem;
		background: #f0f0f0;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
		color: #999;
		transition: all 0.2s ease;
	}

	.scale-item.active {
		background: var(--faf-black);
		color: white;
		transform: scale(1.1);
	}

	/* Results Section */
	.risk-results h2 {
		margin: 0 0 1.5rem 0;
		color: var(--faf-black);
		text-align: center;
		font-size: 1.25rem;
		letter-spacing: 0.1em;
	}

	.success-meter {
		margin-bottom: 2rem;
	}

	.meter-container {
		background: #f0f0f0;
		height: 40px;
		border-radius: 20px;
		overflow: hidden;
		margin-bottom: 0.5rem;
		position: relative;
	}

	.meter-fill {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.5s ease;
		border-radius: 20px;
	}

	.meter-text {
		font-weight: 900;
		font-size: 1.125rem;
	}

	.meter-label {
		text-align: center;
		color: #666;
		font-size: 0.875rem;
		font-style: italic;
		transition: all 0.3s ease;
	}

	.meter-label.highlight-buffer {
		position: relative;
	}

	.buffer-indicator {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 10%;
		background: var(--faf-black);
		display: flex;
		align-items: center;
		justify-content: center;
		border-left: none;
		border-radius: 0 20px 20px 0;
	}

	.buffer-indicator::after {
		content: '';
		position: absolute;
		bottom: -25px;
		left: 50%;
		transform: translateX(-50%);
		width: 2px;
		height: 20px;
		background: var(--faf-black);
		animation: pulse 2s infinite;
		box-shadow: 0 0 4px rgba(0,0,0,0.2);
	}

	.buffer-indicator::before {
		content: '';
		position: absolute;
		bottom: -45px;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, transparent, var(--faf-black), transparent);
		animation: pulse 2s infinite;
	}

	.buffer-text {
		color: white;
		font-weight: 900;
		font-size: 1rem;
		text-shadow: 0 1px 2px rgba(0,0,0,0.3);
	}

	.buffer-explanation {
		background: var(--faf-black);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 6px;
		font-weight: 700;
		font-style: normal;
		animation: highlight 2s infinite;
		display: inline-block;
		margin-left: 0.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
		position: relative;
	}

	.buffer-explanation::before {
		content: '';
		position: absolute;
		top: -15px;
		left: 50%;
		transform: translateX(-50%);
		width: 2px;
		height: 12px;
		background: var(--faf-black);
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}

	@keyframes highlight {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.05); }
	}

	.comparison-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	/* Impact Summary */
	.impact-summary {
		background: var(--faf-black);
		color: white;
		padding: 2rem;
		border-radius: 12px;
		margin-bottom: 2rem;
	}

	.cost-headline {
		display: block;
		margin-bottom: 1.5rem;
		padding-bottom: 1rem;
		border-bottom: 2px solid var(--faf-orange);
	}

	.cost-label {
		display: block;
		font-size: 0.875rem;
		font-weight: 700;
		color: #999;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.5rem;
		opacity: 1;
	}

	.cost-number {
		display: block;
		font-size: 3.5rem;
		font-weight: 900;
		color: #ff4444;
		font-family: var(--font-mono);
		line-height: 1;
	}

	.impact-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}

	.impact-item {
		text-align: center;
	}

	.impact-emoji {
		display: block;
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.impact-label {
		display: block;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.7;
		margin-bottom: 0.25rem;
	}

	.impact-value {
		display: block;
		font-size: 1.125rem;
		font-weight: 900;
		color: #ff4444;
		font-family: var(--font-mono);
	}

	/* Bottom CTA */
	.bottom-line {
		text-align: center;
		padding: 2rem;
		background: #f8f8f8;
		border-radius: 12px;
	}

	.bottom-line h3 {
		margin: 0 0 1rem 0;
		color: var(--faf-black);
		font-size: 1.5rem;
		font-weight: 900;
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
		background: var(--faf-green);
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 700;
		font-size: 1.125rem;
		transition: all 0.2s ease;
	}

	.btn-responsible:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(34, 139, 34, 0.3);
	}

	/* Context Stories */
	.context-stories {
		margin-top: 3rem;
		padding: 3rem 2rem;
		background: linear-gradient(90deg, #2a2a2a 0%, #000000 50%, #2a2a2a 100%);
		border-radius: 12px;
		text-align: center;
		border: 2px solid #444;
		box-shadow: 0 4px 20px rgba(0,0,0,0.5), inset 0 2px 10px rgba(255,255,255,0.05);
		position: relative;
		overflow: hidden;
	}

	.context-stories:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(90deg, transparent, #666, transparent);
		opacity: 0.5;
	}

	.context-stories h3 {
		margin: 0 0 1rem 0;
		color: white;
		font-size: 2.5rem;
		font-weight: 900;
		line-height: 1.2;
	}

	.story-text {
		font-size: 1.75rem;
		color: var(--faf-orange);
		font-weight: 700;
		line-height: 1.4;
	}

	/* Responsive */
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

		.simple-inputs {
			grid-template-columns: 1fr;
			border-radius: 25px;
		}

		.black-pill {
			border-radius: 25px 25px 0 0;
		}

		.white-pill {
			border-radius: 0 0 25px 25px;
		}

		.pill-value {
			font-size: 1.125rem;
		}

		.pill-value input {
			font-size: 1.125rem;
			width: 70px;
		}
	}
</style>