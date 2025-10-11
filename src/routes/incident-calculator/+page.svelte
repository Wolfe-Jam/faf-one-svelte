<script lang="ts">
	import RiskSlider from '$lib/components/risk-assessment/RiskSlider.svelte';

	// Incident-specific inputs
	let incidentsPerMonth = $state(3); // Production incidents
	let avgResolutionTime = $state(2.5); // Hours without .faf
	let engineerRate = $state(150); // Loaded cost per hour (on-call premium)
	let revenueImpact = $state(500); // Revenue loss per hour of downtime
	let teamSize = $state(3); // People pulled into incident

	// Calculations
	const monthsPerYear = 12;

	// Without .faf (Hope scenario) - long debug time
	const hopeDebugHours = $derived(avgResolutionTime);
	const hopeTotalEngineers = $derived(teamSize * hopeDebugHours); // Total engineer hours
	const hopeEngineerCost = $derived(hopeTotalEngineers * engineerRate);
	const hopeRevenueLoss = $derived(avgResolutionTime * revenueImpact);
	const hopeTotalCostPerIncident = $derived(hopeEngineerCost + hopeRevenueLoss);
	const hopeAnnualCost = $derived(Math.round(hopeTotalCostPerIncident * incidentsPerMonth * monthsPerYear));

	// With .faf (Trust scenario) - 85% faster resolution
	const trustDebugHours = $derived(Math.max(0.25, avgResolutionTime * 0.15)); // 85% faster
	const trustTotalEngineers = $derived(teamSize * trustDebugHours);
	const trustEngineerCost = $derived(trustTotalEngineers * engineerRate);
	const trustRevenueLoss = $derived(trustDebugHours * revenueImpact);
	const trustTotalCostPerIncident = $derived(trustEngineerCost + trustRevenueLoss);
	const trustAnnualCost = $derived(Math.round(trustTotalCostPerIncident * incidentsPerMonth * monthsPerYear));

	// Savings
	const hoursSavedPerIncident = $derived(hopeDebugHours - trustDebugHours);
	const annualHoursSaved = $derived(Math.round(hoursSavedPerIncident * incidentsPerMonth * monthsPerYear * teamSize));
	const moneySaved = $derived(hopeAnnualCost - trustAnnualCost);
	const percentSaved = $derived(Math.round((moneySaved / hopeAnnualCost) * 100));

	// Sleep impact (incidents at night)
	const nightIncidentsPercent = 40; // 40% of incidents happen off-hours
	const nightIncidents = $derived(Math.round((incidentsPerMonth * monthsPerYear * nightIncidentsPercent) / 100));
	const sleepHoursSaved = $derived(Math.round(nightIncidents * hoursSavedPerIncident));

	// ROI calculation
	const turboCostAnnual = 120; // $10/month
	const netSavings = $derived(moneySaved - turboCostAnnual);
	const roi = $derived(Math.round((netSavings / turboCostAnnual) * 100));

	function resetToDefaults() {
		incidentsPerMonth = 3;
		avgResolutionTime = 2.5;
		engineerRate = 150;
		revenueImpact = 500;
		teamSize = 3;
	}
</script>

<svelte:head>
	<title>🚨 Incident Response Calculator - The REAL Cost of 2AM Alerts</title>
	<meta name="description" content="Calculate the cost of production incidents and workflow failures without AI context">
</svelte:head>

<div class="risk-hero">
	<div class="container">
		<h1>🚨 Incident Response 🔥 Calculator</h1>
		<p class="subtitle">The REAL Cost of Production Fires</p>
		<p class="tagline">
			It's 2AM. Your automation broke. Customer-facing.<br/>
			How much does this "working" workflow actually cost you?
		</p>
	</div>
</div>

<div class="risk-container">
	<!-- Simple Inputs -->
	<div class="simple-inputs">
		<div class="input-pill black-pill">
			<label for="incidents-input">INCIDENTS/MONTH</label>
			<div class="pill-value">
				<input
					type="number"
					id="incidents-input"
					bind:value={incidentsPerMonth}
					min="1"
					max="50"
					step="1"
				/>
				<span>failures</span>
			</div>
		</div>

		<div class="input-pill red-pill">
			<label for="hours-input">AVG RESOLUTION TIME</label>
			<div class="pill-value">
				<input
					type="number"
					id="hours-input"
					bind:value={avgResolutionTime}
					min="0.5"
					max="12"
					step="0.5"
				/>
				<span>hours</span>
			</div>
		</div>
	</div>

	<div class="risk-grid">
		<!-- Left Column - Inputs -->
		<div class="risk-inputs">
			<div class="inputs-header">
				<h2>Your Incident Reality</h2>
				<button onclick={resetToDefaults} class="reset-button">Use Example</button>
			</div>

			<RiskSlider
				label="Production Incidents Per Month"
				helpText="Workflow failures, bugs, unexpected behavior"
				bind:value={incidentsPerMonth}
				min={1}
				max={50}
				step={1}
				displayValue="{incidentsPerMonth} incidents"
				color="black"
			/>

			<RiskSlider
				label="Average Resolution Time (hours)"
				helpText="Time to find and fix the issue without .faf"
				bind:value={avgResolutionTime}
				min={0.5}
				max={12}
				step={0.5}
				displayValue="{avgResolutionTime} hours"
				color="orange"
			/>

			<RiskSlider
				label="Engineer Hourly Rate"
				helpText="Loaded cost (includes on-call premium, overhead)"
				bind:value={engineerRate}
				min={50}
				max={300}
				step={10}
				displayValue="${engineerRate}/hour"
				color="orange"
			/>

			<RiskSlider
				label="Revenue Impact Per Hour"
				helpText="Lost revenue while workflow is down"
				bind:value={revenueImpact}
				min={0}
				max={5000}
				step={100}
				displayValue="${revenueImpact}/hour"
				color="orange"
			/>

			<RiskSlider
				label="Engineers Per Incident"
				helpText="How many people get pulled in?"
				bind:value={teamSize}
				min={1}
				max={10}
				step={1}
				displayValue="{teamSize} engineers"
				color="black"
			/>

			<div class="warning-box">
				<h4>🔥 Hidden Incident Costs</h4>
				<ul>
					<li><strong>{nightIncidents}/year</strong> happen at night (40% of all incidents)</li>
					<li><strong>{sleepHoursSaved} hours</strong> of sleep lost annually</li>
					<li><strong>Customer trust</strong> damaged during downtime</li>
					<li><strong>Team morale</strong> crushed by constant fires</li>
				</ul>
			</div>
		</div>

		<!-- Right Column - Results -->
		<div class="risk-results">
			<div class="cost-comparison">
				<h2>COST PER INCIDENT</h2>
				<div class="comparison-cards">
					<div class="cost-card without-card">
						<div class="card-label">WITHOUT .FAF</div>
						<div class="card-value">${Math.round(hopeTotalCostPerIncident).toLocaleString()}</div>
						<div class="card-breakdown">
							<div class="breakdown-line">
								<span>Engineers ({teamSize} × {hopeDebugHours}h)</span>
								<span>${Math.round(hopeEngineerCost).toLocaleString()}</span>
							</div>
							<div class="breakdown-line">
								<span>Revenue Loss</span>
								<span>${Math.round(hopeRevenueLoss).toLocaleString()}</span>
							</div>
						</div>
						<div class="card-emoji">😰</div>
					</div>
					<div class="cost-card with-card">
						<div class="card-label">WITH .FAF + TURBO</div>
						<div class="card-value">${Math.round(trustTotalCostPerIncident).toLocaleString()}</div>
						<div class="card-breakdown">
							<div class="breakdown-line">
								<span>Engineers ({teamSize} × {trustDebugHours.toFixed(1)}h)</span>
								<span>${Math.round(trustEngineerCost).toLocaleString()}</span>
							</div>
							<div class="breakdown-line">
								<span>Revenue Loss</span>
								<span>${Math.round(trustRevenueLoss).toLocaleString()}</span>
							</div>
						</div>
						<div class="card-emoji">⚡️</div>
					</div>
				</div>
			</div>

			<div class="annual-impact">
				<h3>Annual Incident Cost</h3>
				<div class="annual-grid">
					<div class="annual-item without">
						<div class="annual-label">Without .faf</div>
						<div class="annual-value">${hopeAnnualCost.toLocaleString()}</div>
						<div class="annual-detail">{incidentsPerMonth * monthsPerYear} incidents/year</div>
					</div>
					<div class="annual-item with">
						<div class="annual-label">With .faf</div>
						<div class="annual-value">${trustAnnualCost.toLocaleString()}</div>
						<div class="annual-detail">{percentSaved}% cost reduction</div>
					</div>
				</div>
			</div>

			<div class="savings-callout">
				<div class="savings-headline">ANNUAL SAVINGS</div>
				<div class="savings-amount">${moneySaved.toLocaleString()}</div>
				<div class="savings-details">
					<div class="detail-item">
						<span class="detail-icon">⏰</span>
						<span class="detail-text">{annualHoursSaved} engineer hours saved</span>
					</div>
					<div class="detail-item">
						<span class="detail-icon">😴</span>
						<span class="detail-text">{sleepHoursSaved} hours of sleep saved</span>
					</div>
					<div class="detail-item">
						<span class="detail-icon">💰</span>
						<span class="detail-text">{Math.round(hoursSavedPerIncident * 60)} min faster per incident</span>
					</div>
				</div>
			</div>

			<div class="roi-section">
				<h3>Return on Investment</h3>
				<div class="roi-simple">
					<div class="roi-line">
						<span>Annual Incident Savings</span>
						<span class="roi-value">${moneySaved.toLocaleString()}</span>
					</div>
					<div class="roi-line cost">
						<span>TURBO Cost (Annual)</span>
						<span class="roi-value">-$120</span>
					</div>
					<div class="roi-line net">
						<span>Net Savings</span>
						<span class="roi-value">${netSavings.toLocaleString()}</span>
					</div>
				</div>
				<div class="roi-badge-container">
					<span class="roi-badge">{roi}% ROI</span>
					<p class="roi-subtext">First incident pays for entire year</p>
				</div>
			</div>

			<div class="bottom-line">
				<h3>One 2AM Alert Pays for TURBO</h3>
				<p class="responsibility-check">
					Stop bleeding ${Math.round(moneySaved/12).toLocaleString()}/month on incidents.<br/>
					Debug faster. Sleep better. Save money.
				</p>
				<div class="pricing-callout">
					<div class="price-strike">$30/month</div>
					<div class="price-fast">$10/month with code <strong>FAST</strong></div>
				</div>
				<a href="/#pricing" class="btn-emergency">Get TURBO → Stop The Bleeding</a>
				<p class="lock-in">🔒 Lock in $10/month forever. Your future self will thank you.</p>
			</div>
		</div>
	</div>

	<div class="reality-check">
		<h3>The 2AM Incident Reality</h3>
		<div class="reality-grid">
			<div class="reality-item without">
				<h4>WITHOUT .FAF</h4>
				<ul>
					<li>🚨 Alert wakes you at 2AM</li>
					<li>😴 Groggily open laptop</li>
					<li>❓ "What does this workflow even do?"</li>
					<li>📖 Read 200 lines of JSON</li>
					<li>🔍 Trace through 47 nodes</li>
					<li>💬 Wake up teammate for context</li>
					<li>⏰ 2.5 hours later, find the bug</li>
					<li>😫 Back to bed at 4:30AM, exhausted</li>
				</ul>
			</div>
			<div class="reality-item with">
				<h4>WITH .FAF + TURBO</h4>
				<ul>
					<li>🚨 Alert wakes you at 2AM</li>
					<li>💪 Open laptop, ready to crush it</li>
					<li>🤖 "AI, what's broken in this workflow?"</li>
					<li>⚡️ "Node 23 - API credentials expired"</li>
					<li>🔧 Rotate credentials, test, fixed</li>
					<li>✅ 15 minutes later, back to bed</li>
					<li>😴 Wake up refreshed at 7AM</li>
					<li>🏆 Hero status, not a zombie</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="context-stories">
		<h3>Production fires will happen. Be ready.</h3>
		<div class="story-text">TURBO Automation = Your incident response superpower.<br/>$10/month. Worth it at 2AM.</div>
	</div>
</div>

<style>
	/* Hero Section */
	.risk-hero {
		background: #1a0000;
		background: linear-gradient(135deg, #2d0000 0%, #000000 100%);
		color: var(--faf-white);
		padding: 3rem 0;
		text-align: center;
		border-bottom: 3px solid #dc2626;
	}

	.risk-hero h1 {
		font-size: 3rem;
		margin-bottom: 0.5rem;
		font-weight: 900;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #dc2626;
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

	.red-pill {
		background: #dc2626;
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
		border-bottom: 2px solid #dc2626;
	}

	.inputs-header h2 {
		margin: 0;
		color: var(--faf-black);
		font-size: 1.5rem;
	}

	.reset-button {
		padding: 0.5rem 1rem;
		background: #dc2626;
		color: white;
		border: none;
		border-radius: 6px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.reset-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(220, 38, 38, 0.3);
	}

	.warning-box {
		background: #fff5f5;
		border: 2px solid #dc2626;
		border-radius: 8px;
		padding: 1.5rem;
		margin-top: 2rem;
	}

	.warning-box h4 {
		margin: 0 0 1rem 0;
		color: #dc2626;
		font-size: 1.125rem;
	}

	.warning-box ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.warning-box li {
		padding: 0.5rem 0;
		color: var(--faf-gray-dark);
		font-size: 0.95rem;
	}

	.warning-box strong {
		color: #dc2626;
		font-weight: 700;
	}

	/* Results Section */
	.risk-results {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.cost-comparison h2 {
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

	.cost-card {
		background: white;
		border: 3px solid;
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
		position: relative;
		transition: all 0.3s ease;
	}

	.without-card {
		border-color: #dc2626;
		background: linear-gradient(135deg, #fff 0%, #fff5f5 100%);
	}

	.with-card {
		border-color: var(--faf-green);
		background: linear-gradient(135deg, #fff 0%, #f0fff4 100%);
		box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);
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
		font-size: 2.5rem;
		font-weight: 900;
		font-family: var(--font-mono);
		margin-bottom: 1rem;
	}

	.without-card .card-value {
		color: #dc2626;
	}

	.with-card .card-value {
		color: var(--faf-green);
	}

	.card-breakdown {
		border-top: 1px solid var(--faf-gray-light);
		padding-top: 1rem;
		margin-bottom: 1rem;
	}

	.breakdown-line {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		padding: 0.25rem 0;
		color: var(--faf-gray-dark);
	}

	.card-emoji {
		font-size: 2rem;
		margin-top: 0.5rem;
	}

	.annual-impact {
		background: var(--faf-black);
		color: white;
		padding: 2rem;
		border-radius: 12px;
	}

	.annual-impact h3 {
		margin: 0 0 1.5rem 0;
		text-align: center;
		font-size: 1.25rem;
	}

	.annual-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}

	.annual-item {
		text-align: center;
		padding: 1.5rem;
		border-radius: 8px;
	}

	.annual-item.without {
		background: rgba(220, 38, 38, 0.2);
		border: 2px solid #dc2626;
	}

	.annual-item.with {
		background: rgba(34, 197, 94, 0.2);
		border: 2px solid var(--faf-green);
	}

	.annual-label {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		opacity: 0.9;
		margin-bottom: 0.75rem;
	}

	.annual-value {
		font-size: 2rem;
		font-weight: 900;
		font-family: var(--font-mono);
		margin-bottom: 0.5rem;
	}

	.annual-detail {
		font-size: 0.875rem;
		opacity: 0.8;
	}

	.savings-callout {
		background: #dc2626;
		color: white;
		padding: 2rem;
		border-radius: 12px;
		text-align: center;
	}

	.savings-headline {
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		opacity: 0.9;
		margin-bottom: 0.75rem;
	}

	.savings-amount {
		font-size: 3.5rem;
		font-weight: 900;
		font-family: var(--font-mono);
		margin-bottom: 1.5rem;
	}

	.savings-details {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		max-width: 400px;
		margin: 0 auto;
	}

	.detail-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1rem;
	}

	.detail-icon {
		font-size: 1.5rem;
	}

	.detail-text {
		text-align: left;
	}

	.roi-section {
		background: white;
		border: 2px solid var(--faf-gray-light);
		border-radius: 12px;
		padding: 2rem;
	}

	.roi-section h3 {
		margin: 0 0 1.5rem 0;
		text-align: center;
		color: var(--faf-black);
		font-size: 1.25rem;
	}

	.roi-simple {
		max-width: 500px;
		margin: 0 auto 1.5rem;
	}

	.roi-line {
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 0;
		border-bottom: 1px solid var(--faf-gray-light);
	}

	.roi-line.cost {
		color: #666;
		font-size: 0.95rem;
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

	.roi-badge-container {
		text-align: center;
		padding-top: 1.5rem;
		border-top: 2px solid var(--faf-gray-light);
	}

	.roi-badge {
		display: inline-block;
		background: var(--faf-green);
		color: white;
		padding: 0.75rem 2rem;
		border-radius: 999px;
		font-size: 1.5rem;
		font-weight: 900;
		box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
	}

	.roi-subtext {
		margin-top: 1rem;
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
		font-style: italic;
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

	.pricing-callout {
		background: rgba(220, 38, 38, 0.1);
		border: 2px solid #dc2626;
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
		color: #dc2626;
	}

	.price-fast strong {
		background: #dc2626;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 4px;
		letter-spacing: 2px;
	}

	.btn-emergency {
		display: inline-block;
		padding: 1rem 2rem;
		background: #dc2626;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 700;
		font-size: 1.125rem;
		transition: all 0.2s ease;
	}

	.btn-emergency:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
		background: #b91c1c;
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

	.reality-item.without {
		border-color: #dc2626;
		background: linear-gradient(135deg, #fff 0%, #fff5f5 100%);
	}

	.reality-item.with {
		border-color: var(--faf-green);
		background: linear-gradient(135deg, #fff 0%, #f0fff4 100%);
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
		color: #dc2626;
		font-weight: 700;
		line-height: 1.4;
	}

	/* Responsive */
	@media (max-width: 968px) {
		.risk-grid {
			grid-template-columns: 1fr;
		}

		.comparison-cards,
		.annual-grid,
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

		.red-pill {
			border-radius: 0 0 25px 25px;
		}
	}
</style>
