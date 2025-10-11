<script lang="ts">
	import RiskSlider from '$lib/components/risk-assessment/RiskSlider.svelte';
	import ImpactDisplay from '$lib/components/risk-assessment/ImpactDisplay.svelte';

	// Automation-specific inputs
	let workflows = $state(25); // Total workflows managed
	let monthlyChanges = $state(10); // How many workflows change per month
	let timePerChange = $state(45); // Minutes to understand + modify each workflow
	let hourlyRate = $state(75); // Developer hourly rate
	let teamSize = $state(3); // People who need to understand workflows

	// Calculations
	const monthsPerYear = 12;

	// Without .faf (Hope scenario)
	const hopeMinutesPerChange = $derived(timePerChange); // Full time to understand + change
	const hopeMonthlyHours = $derived((monthlyChanges * hopeMinutesPerChange) / 60);
	const hopeAnnualHours = $derived(hopeMonthlyHours * monthsPerYear);
	const hopeAnnualCost = $derived(Math.round(hopeAnnualHours * hourlyRate));

	// With .faf (Trust scenario) - AI explains workflow instantly
	const trustMinutesPerChange = $derived(Math.max(5, timePerChange * 0.15)); // 85% faster with AI context
	const trustMonthlyHours = $derived((monthlyChanges * trustMinutesPerChange) / 60);
	const trustAnnualHours = $derived(trustMonthlyHours * monthsPerYear);
	const trustAnnualCost = $derived(Math.round(trustAnnualHours * hourlyRate));

	// Savings
	const hoursSaved = $derived(Math.round(hopeAnnualHours - trustAnnualHours));
	const moneySaved = $derived(hopeAnnualCost - trustAnnualCost);
	const percentSaved = $derived(Math.round(((hopeAnnualHours - trustAnnualHours) / hopeAnnualHours) * 100));

	// Team onboarding impact
	const hopeOnboardingDays = $derived(Math.ceil(workflows * 0.5)); // 30 min per workflow to learn
	const trustOnboardingDays = $derived(Math.ceil(workflows * 0.05)); // AI explains in 3 min each
	const onboardingDaysSaved = $derived(hopeOnboardingDays - trustOnboardingDays);

	// Documentation debt
	const undocumentedWorkflows = $derived(Math.round(workflows * 0.7)); // 70% typically undocumented
	const documentationHours = $derived(undocumentedWorkflows * 2); // 2 hours per workflow to document manually

	// Quality metrics
	const errorRate = $derived(workflows > 50 ? 15 : workflows > 20 ? 10 : 5); // More workflows = more errors
	const avgErrorCost = 250; // Average cost to debug/fix workflow error
	const annualErrorCost = $derived(Math.round((errorRate * avgErrorCost * monthsPerYear) / 12));

	// ROI calculation
	const turboCostRegular = 360; // $30/month regular price
	const turboCostFast = 120; // $10/month with FAST code
	const totalAnnualSavings = $derived(moneySaved + annualErrorCost);
	const netSavings = $derived(totalAnnualSavings - turboCostFast);
	const roi = $derived(Math.round((netSavings / turboCostFast) * 100));

	function resetToDefaults() {
		workflows = 25;
		monthlyChanges = 10;
		timePerChange = 45;
		hourlyRate = 75;
		teamSize = 3;
	}
</script>

<svelte:head>
	<title>Automation Calculator - The REAL Cost of Workflow Context</title>
	<meta name="description" content="See how much time and money you waste managing n8n/automation workflows without AI context">
</svelte:head>

<div class="risk-hero">
	<div class="container">
		<h1>🤖 Automation Workflow ⚡️ Calculator</h1>
		<p class="subtitle">The REAL Cost of Context-Free Workflows</p>
		<p class="tagline">
			If you manage n8n, Make, or automation workflows without .faf...<br/>
			how much time are you actually wasting?
		</p>
	</div>
</div>

<div class="risk-container">
	<!-- Simple Inputs -->
	<div class="simple-inputs">
		<div class="input-pill black-pill">
			<label for="workflows-input">WORKFLOWS</label>
			<div class="pill-value">
				<input
					type="number"
					id="workflows-input"
					bind:value={workflows}
					min="1"
					max="500"
					step="5"
				/>
				<span>total</span>
			</div>
		</div>

		<div class="input-pill cyan-pill">
			<label for="changes-input">MONTHLY CHANGES</label>
			<div class="pill-value">
				<input
					type="number"
					id="changes-input"
					bind:value={monthlyChanges}
					min="1"
					max="100"
					step="1"
				/>
				<span>workflows</span>
			</div>
		</div>
	</div>

	<div class="risk-grid">
		<!-- Left Column - Inputs -->
		<div class="risk-inputs">
			<div class="inputs-header">
				<h2>Your Workflow Reality</h2>
				<button onclick={resetToDefaults} class="reset-button">Use Example</button>
			</div>

			<RiskSlider
				label="Total Workflows Managed"
				helpText="How many workflows does your team manage?"
				bind:value={workflows}
				min={5}
				max={500}
				step={5}
				displayValue="{workflows} workflows"
				color="black"
			/>

			<RiskSlider
				label="Monthly Workflow Changes"
				helpText="How many workflows get modified each month?"
				bind:value={monthlyChanges}
				min={1}
				max={100}
				step={1}
				displayValue="{monthlyChanges} changes/month"
				color="orange"
			/>

			<RiskSlider
				label="Time Per Change (minutes)"
				helpText="How long to understand + modify each workflow?"
				bind:value={timePerChange}
				min={15}
				max={180}
				step={5}
				displayValue="{timePerChange} minutes"
				color="gray"
			/>

			<RiskSlider
				label="Developer Hourly Rate"
				helpText="Average cost per hour (including overhead)"
				bind:value={hourlyRate}
				min={25}
				max={200}
				step={5}
				displayValue="${hourlyRate}/hour"
				color="orange"
			/>

			<RiskSlider
				label="Team Size"
				helpText="How many people need to understand workflows?"
				bind:value={teamSize}
				min={1}
				max={20}
				step={1}
				displayValue="{teamSize} people"
				color="black"
			/>

			<div class="insight-box">
				<h4>📊 Hidden Costs</h4>
				<ul>
					<li><strong>{undocumentedWorkflows}</strong> workflows likely undocumented</li>
					<li><strong>{documentationHours} hours</strong> to document them manually</li>
					<li><strong>{hopeOnboardingDays} days</strong> to onboard new team members</li>
					<li><strong>~{errorRate} errors/year</strong> from context gaps</li>
				</ul>
			</div>
		</div>

		<!-- Right Column - Results -->
		<div class="risk-results">
			<div class="time-comparison">
				<h2>ANNUAL TIME SPENT ON WORKFLOW CHANGES</h2>
				<div class="comparison-cards">
					<div class="time-card hope-card">
						<div class="card-label">WITHOUT .FAF</div>
						<div class="card-value">{Math.round(hopeAnnualHours)}h</div>
						<div class="card-detail">{Math.round(hopeMonthlyHours)}h/month • {hopeMinutesPerChange} min/change</div>
						<div class="card-emoji">😰</div>
					</div>
					<div class="time-card trust-card">
						<div class="card-label">WITH .FAF + TURBO</div>
						<div class="card-value">{Math.round(trustAnnualHours)}h</div>
						<div class="card-detail">{Math.round(trustMonthlyHours)}h/month • {Math.round(trustMinutesPerChange)} min/change</div>
						<div class="card-emoji">⚡️</div>
					</div>
				</div>
			</div>

			<div class="savings-headline">
				<div class="savings-grid">
					<div class="savings-item primary">
						<div class="savings-label">Time Saved Annually</div>
						<div class="savings-value">{hoursSaved} hours</div>
						<div class="savings-subtext">{percentSaved}% reduction</div>
					</div>
					<div class="savings-item primary">
						<div class="savings-label">Money Saved Annually</div>
						<div class="savings-value">${moneySaved.toLocaleString()}</div>
						<div class="savings-subtext">Direct cost savings</div>
					</div>
				</div>
			</div>

			<div class="impact-summary">
				<h3>Additional Benefits</h3>
				<div class="benefits-grid">
					<div class="benefit-item">
						<div class="benefit-icon">🚀</div>
						<div class="benefit-label">Faster Onboarding</div>
						<div class="benefit-value">{onboardingDaysSaved} days saved</div>
						<div class="benefit-detail">per new team member</div>
					</div>
					<div class="benefit-item">
						<div class="benefit-icon">📚</div>
						<div class="benefit-label">Auto-Documentation</div>
						<div class="benefit-value">{documentationHours}h saved</div>
						<div class="benefit-detail">no manual docs needed</div>
					</div>
					<div class="benefit-item">
						<div class="benefit-icon">🛡️</div>
						<div class="benefit-label">Fewer Errors</div>
						<div class="benefit-value">${annualErrorCost.toLocaleString()} saved</div>
						<div class="benefit-detail">better understanding = fewer bugs</div>
					</div>
					<div class="benefit-item">
						<div class="benefit-icon">🤝</div>
						<div class="benefit-label">Team Collaboration</div>
						<div class="benefit-value">{teamSize}x faster</div>
						<div class="benefit-detail">everyone understands instantly</div>
					</div>
				</div>
			</div>

			<div class="roi-section">
				<h3>Return on Investment</h3>
				<div class="roi-breakdown">
					<div class="roi-line">
						<span>Annual Savings (Time)</span>
						<span class="roi-value">${moneySaved.toLocaleString()}</span>
					</div>
					<div class="roi-line">
						<span>Annual Savings (Quality)</span>
						<span class="roi-value">${annualErrorCost.toLocaleString()}</span>
					</div>
					<div class="roi-line total">
						<span>Total Annual Benefit</span>
						<span class="roi-value">${totalAnnualSavings.toLocaleString()}</span>
					</div>
					<div class="roi-line cost strikethrough">
						<span>TURBO Regular Cost</span>
						<span class="roi-value">-${turboCostRegular}</span>
					</div>
					<div class="roi-line cost fast">
						<span>TURBO with FAST Code 🏎️</span>
						<span class="roi-value">-${turboCostFast}</span>
					</div>
					<div class="roi-line net">
						<span>Net Savings</span>
						<span class="roi-value">${netSavings.toLocaleString()}</span>
					</div>
					<div class="roi-percentage">
						<span class="roi-badge">{roi}% ROI</span>
					</div>
				</div>
			</div>

			<div class="bottom-line">
				<h3>Save ${netSavings.toLocaleString()} per year with TURBO Automation</h3>
				<p class="responsibility-check">
					That's ${Math.round(netSavings / 12).toLocaleString()}/month saved for a $10/month investment.<br/>
					{Math.round(roi / 100)}x return. Championship-grade ROI.
				</p>
				<div class="pricing-callout">
					<div class="price-strike">$30/month</div>
					<div class="price-fast">$10/month with code <strong>FAST</strong></div>
				</div>
				<a href="/#pricing" class="btn-turbo">Get TURBO → Lock in $10/month Forever</a>
				<p class="lock-in">🔒 Use code FAST at checkout. Limited time for fast movers.</p>
			</div>
		</div>
	</div>

	<div class="reality-check">
		<h3>The Reality for Automation Builders</h3>
		<div class="reality-grid">
			<div class="reality-item">
				<h4>WITHOUT .FAF</h4>
				<ul>
					<li>❌ Open workflow, try to remember what it does</li>
					<li>❌ Trace through 20 nodes manually</li>
					<li>❌ Check Slack for context from 3 months ago</li>
					<li>❌ Ask teammate who might remember</li>
					<li>❌ 45+ minutes just to understand, then modify</li>
					<li>❌ Break something because you missed a dependency</li>
					<li>❌ New team member takes weeks to onboard</li>
				</ul>
			</div>
			<div class="reality-item trust">
				<h4>WITH .FAF + TURBO</h4>
				<ul>
					<li>☑️ Ask AI "What does this workflow do?"</li>
					<li>☑️ Get instant, accurate explanation</li>
					<li>☑️ AI explains all nodes and connections</li>
					<li>☑️ AI warns about dependencies</li>
					<li>☑️ 5 minutes to understand, then modify</li>
					<li>☑️ Fewer errors, higher quality</li>
					<li>☑️ New team member productive in hours</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="context-stories">
		<h3>Stop wasting time re-learning your own workflows.</h3>
		<div class="story-text">TURBO Automation makes your workflows AI-readable.<br/>$10/month with FAST code. Lock it in forever.</div>
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
		color: #019193;
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

	/* Simple Inputs */
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

	.cyan-pill {
		background: #019193;
		color: white;
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
		width: 100px;
		color: white;
		text-align: center;
		border-radius: 8px;
		padding: 0.25rem;
		transition: all 0.2s ease;
		-webkit-text-fill-color: white;
	}

	.pill-value input:hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.3);
	}

	.pill-value input:focus {
		background: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.5);
	}

	.pill-value input::-webkit-inner-spin-button,
	.pill-value input::-webkit-outer-spin-button {
		opacity: 1;
		height: 30px;
		width: 20px;
		cursor: pointer;
		filter: invert(1);
	}

	.pill-value span {
		opacity: 0.8;
		font-size: 1.25rem;
		font-weight: 600;
	}

	/* Grid Layout */
	.risk-grid {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	/* Inputs Section */
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
		border-bottom: 2px solid #019193;
	}

	.inputs-header h2 {
		margin: 0;
		color: var(--faf-black);
		font-size: 1.5rem;
	}

	.reset-button {
		padding: 0.5rem 1rem;
		background: #019193;
		color: white;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.reset-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(1, 145, 147, 0.3);
	}

	.insight-box {
		background: #f8f8f8;
		border: 2px solid var(--faf-gray-light);
		border-radius: 8px;
		padding: 1.5rem;
		margin-top: 2rem;
	}

	.insight-box h4 {
		margin: 0 0 1rem 0;
		color: var(--faf-black);
		font-size: 1.125rem;
	}

	.insight-box ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.insight-box li {
		padding: 0.5rem 0;
		color: var(--faf-gray-dark);
		font-size: 0.95rem;
	}

	.insight-box strong {
		color: #019193;
		font-weight: 700;
	}

	/* Results Section */
	.risk-results {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.time-comparison h2 {
		margin: 0 0 1.5rem 0;
		color: var(--faf-black);
		text-align: center;
		font-size: 1.125rem;
		letter-spacing: 0.05em;
	}

	.comparison-cards {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}

	.time-card {
		background: white;
		border: 3px solid;
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
		position: relative;
		transition: all 0.3s ease;
	}

	.hope-card {
		border-color: var(--faf-gray-medium);
		background: linear-gradient(135deg, #fff 0%, #f9f9f9 100%);
	}

	.trust-card {
		border-color: #019193;
		background: linear-gradient(135deg, #fff 0%, #f0fffe 100%);
		box-shadow: 0 4px 12px rgba(1, 145, 147, 0.2);
	}

	.card-label {
		font-size: 0.875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--faf-gray-dark);
		margin-bottom: 1rem;
	}

	.card-value {
		font-size: 3rem;
		font-weight: 900;
		font-family: var(--font-mono);
		margin-bottom: 0.5rem;
	}

	.hope-card .card-value {
		color: #999;
	}

	.trust-card .card-value {
		color: #019193;
	}

	.card-detail {
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
		line-height: 1.5;
	}

	.card-emoji {
		font-size: 2rem;
		margin-top: 1rem;
	}

	.savings-headline {
		background: #019193;
		color: white;
		padding: 2rem;
		border-radius: 12px;
	}

	.savings-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.savings-item {
		text-align: center;
	}

	.savings-label {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.9;
		margin-bottom: 0.75rem;
		font-weight: 600;
	}

	.savings-value {
		font-size: 2.5rem;
		font-weight: 900;
		font-family: var(--font-mono);
		margin-bottom: 0.5rem;
	}

	.savings-subtext {
		font-size: 0.875rem;
		opacity: 0.8;
	}

	.impact-summary {
		background: white;
		border: 2px solid var(--faf-gray-light);
		border-radius: 12px;
		padding: 2rem;
	}

	.impact-summary h3 {
		margin: 0 0 1.5rem 0;
		color: var(--faf-black);
		text-align: center;
		font-size: 1.25rem;
	}

	.benefits-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.benefit-item {
		text-align: center;
		padding: 1rem;
		background: #f8f8f8;
		border-radius: 8px;
	}

	.benefit-icon {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.benefit-label {
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--faf-black);
		margin-bottom: 0.5rem;
	}

	.benefit-value {
		font-size: 1.5rem;
		font-weight: 900;
		color: #019193;
		font-family: var(--font-mono);
		margin-bottom: 0.25rem;
	}

	.benefit-detail {
		font-size: 0.75rem;
		color: var(--faf-gray-dark);
	}

	.roi-section {
		background: var(--faf-black);
		color: white;
		padding: 2rem;
		border-radius: 12px;
	}

	.roi-section h3 {
		margin: 0 0 1.5rem 0;
		text-align: center;
		font-size: 1.25rem;
	}

	.roi-breakdown {
		max-width: 500px;
		margin: 0 auto;
	}

	.roi-line {
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.roi-line.total {
		border-top: 2px solid rgba(255, 255, 255, 0.3);
		border-bottom: 2px solid rgba(255, 255, 255, 0.3);
		padding: 1rem 0;
		margin: 0.5rem 0;
		font-weight: 700;
	}

	.roi-line.cost {
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.95rem;
	}

	.roi-line.cost.strikethrough {
		text-decoration: line-through;
		opacity: 0.5;
		font-size: 0.875rem;
	}

	.roi-line.cost.fast {
		color: #019193;
		font-weight: 700;
		font-size: 1rem;
	}

	.roi-line.net {
		border-bottom: none;
		padding: 1rem 0;
		font-size: 1.25rem;
		font-weight: 900;
	}

	.roi-line.net .roi-value {
		color: var(--faf-green);
	}

	.roi-value {
		font-family: var(--font-mono);
		font-weight: 700;
	}

	.roi-percentage {
		text-align: center;
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 2px solid rgba(255, 255, 255, 0.2);
	}

	.roi-badge {
		display: inline-block;
		background: var(--faf-green);
		color: white;
		padding: 0.75rem 2rem;
		border-radius: 999px;
		font-size: 1.5rem;
		font-weight: 900;
		box-shadow: 0 4px 12px rgba(34, 139, 34, 0.3);
	}

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
		line-height: 1.6;
	}

	.btn-turbo {
		display: inline-block;
		padding: 1rem 2rem;
		background: #019193;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 700;
		font-size: 1.125rem;
		transition: all 0.2s ease;
	}

	.btn-turbo:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(1, 145, 147, 0.3);
	}

	.pricing-callout {
		background: rgba(1, 145, 147, 0.1);
		border: 2px solid #019193;
		border-radius: 8px;
		padding: 1rem;
		margin: 1.5rem 0;
		text-align: center;
	}

	.price-strike {
		font-size: 1.25rem;
		text-decoration: line-through;
		color: #999;
		margin-bottom: 0.5rem;
	}

	.price-fast {
		font-size: 1.5rem;
		font-weight: 700;
		color: #019193;
	}

	.price-fast strong {
		background: #019193;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		letter-spacing: 2px;
	}

	.lock-in {
		margin-top: 1rem;
		font-size: 0.875rem;
		color: #666;
		font-weight: 600;
	}

	/* Reality Check */
	.reality-check {
		margin: 3rem 0;
		padding: 3rem 2rem;
		background: white;
		border-radius: 12px;
		border: 2px solid var(--faf-gray-light);
	}

	.reality-check h3 {
		text-align: center;
		margin: 0 0 2rem 0;
		color: var(--faf-black);
		font-size: 2rem;
	}

	.reality-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		max-width: 900px;
		margin: 0 auto;
	}

	.reality-item {
		background: #f9f9f9;
		border: 2px solid var(--faf-gray-medium);
		border-radius: 12px;
		padding: 2rem;
	}

	.reality-item.trust {
		border-color: #019193;
		background: linear-gradient(135deg, #fff 0%, #f0fffe 100%);
	}

	.reality-item h4 {
		margin: 0 0 1rem 0;
		color: var(--faf-black);
		font-size: 1.125rem;
		text-align: center;
	}

	.reality-item ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.reality-item li {
		padding: 0.5rem 0;
		font-size: 0.95rem;
		line-height: 1.5;
	}

	/* Context Stories */
	.context-stories {
		margin-top: 3rem;
		padding: 3rem 2rem;
		background: linear-gradient(90deg, #2a2a2a 0%, #000000 50%, #2a2a2a 100%);
		border-radius: 12px;
		text-align: center;
		border: 2px solid #444;
		box-shadow: 0 4px 20px rgba(0,0,0,0.5);
	}

	.context-stories h3 {
		margin: 0 0 1rem 0;
		color: white;
		font-size: 2rem;
		font-weight: 900;
		line-height: 1.2;
	}

	.story-text {
		font-size: 1.25rem;
		color: #019193;
		font-weight: 700;
		line-height: 1.4;
	}

	/* Responsive */
	@media (max-width: 968px) {
		.risk-grid {
			grid-template-columns: 1fr;
		}

		.comparison-cards,
		.savings-grid,
		.benefits-grid,
		.reality-grid {
			grid-template-columns: 1fr;
		}

		.simple-inputs {
			grid-template-columns: 1fr;
			border-radius: 25px;
		}

		.black-pill {
			border-radius: 25px 25px 0 0;
		}

		.orange-pill {
			border-radius: 0 0 25px 25px;
		}
	}
</style>
