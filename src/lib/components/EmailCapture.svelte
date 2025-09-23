<script>
	let email = $state('');
	let savedEmail = $state('');
	let status = $state('');
	let isSubmitting = $state(false);
	
	async function handleSubmit(e) {
		e.preventDefault();
		if (!email || isSubmitting) return;
		
		isSubmitting = true;
		status = 'subscribing';
		
		try {
			// Formspree connected! Emails will be sent to your inbox
			const FORMSPREE_ID = 'xnngaegg'; // ✅ Connected to your Formspree form
			
			if (FORMSPREE_ID === 'YOUR_FORM_ID') {
				// Always save to localStorage as backup
				const subscribers = JSON.parse(localStorage.getItem('faf-subscribers') || '[]');
				subscribers.push({
					email,
					timestamp: new Date().toISOString(),
					type: 'founders'
				});
				localStorage.setItem('faf-subscribers', JSON.stringify(subscribers));
				// Email saved locally as backup
			} else {
				// Send to Formspree AND save locally as backup
				const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email,
						type: 'FAF Founders Circle',
						timestamp: new Date().toISOString(),
						source: 'faf.one'
					})
				});
				
				if (!response.ok) throw new Error('Submission failed');
				
				// Also save as backup even when Formspree works
				const subscribers = JSON.parse(localStorage.getItem('faf-subscribers') || '[]');
				subscribers.push({
					email,
					timestamp: new Date().toISOString(),
					type: 'founders',
					sentToFormspree: true
				});
				localStorage.setItem('faf-subscribers', JSON.stringify(subscribers));
				// Email sent to Formspree AND backed up locally
			}
			
			// Show success
			status = 'success';
			savedEmail = email; // Save for checkout link
			email = '';
			
			// Reset after 5 seconds
			setTimeout(() => {
				status = '';
			}, 5000);
		} catch (error) {
			status = 'error';
			// Handle email submission error silently
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section class="email-capture">
	<div class="container">
		<div class="capture-content">
			<h2 class="capture-title">🧡 Lock In Your Founders Rate</h2>
			<p class="capture-subtitle">
				Be among the first 100 to get <strong>$9/year forever</strong><br>
				<span class="limited">Limited slots remaining</span>
			</p>
			
			<form class="capture-form" onsubmit={handleSubmit}>
				<div class="form-group">
					<input
						type="email"
						bind:value={email}
						placeholder="your@email.com"
						required
						class="email-input"
						disabled={isSubmitting}
					/>
					<button 
						type="submit" 
						class="submit-btn"
						disabled={isSubmitting || !email}
					>
						{isSubmitting ? 'Securing...' : 'Secure My Spot'}
					</button>
				</div>
				
				{#if status === 'success'}
					<div class="status success">
						☑️ Spot secured! Complete your Founders membership:
						<div class="stripe-checkout-wrapper">
							{@html `<stripe-buy-button
								buy-button-id="buy_btn_1SAMYLRt8WbJblnRL4SoZiDY"
								publishable-key="pk_live_51RsYPuRt8WbJblnRhd7gwvTqkNie5A5GhGotKYbdYj6R18PtKzDpObayQdpUQ7sjSMt4b0381Je2yyphYot6ELYR00D50NnmJt"
							></stripe-buy-button>`}
						</div>
					</div>
				{:else if status === 'error'}
					<div class="status error">
						Something went wrong. Please try again.
					</div>
				{/if}
				
				<p class="form-note">
					No spam. No BS. Just your Founders access when we launch.
				</p>
			</form>
		</div>
	</div>
</section>

<style>
	.email-capture {
		padding: 4rem 0;
		background: linear-gradient(135deg, var(--faf-white) 0%, #fff5f0 100%);
		border-top: 3px solid var(--faf-orange);
		border-bottom: 3px solid var(--faf-orange);
	}
	
	.capture-content {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}
	
	.capture-title {
		font-size: 2.5rem;
		font-weight: 900;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}
	
	.capture-subtitle {
		font-size: 1.25rem;
		color: var(--faf-gray-dark);
		margin-bottom: 2rem;
		line-height: 1.5;
	}
	
	.capture-subtitle strong {
		color: var(--faf-orange);
		font-weight: 900;
	}
	
	.limited {
		display: inline-block;
		margin-top: 0.5rem;
		padding: 0.25rem 1rem;
		background: var(--faf-black);
		color: var(--faf-white);
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.capture-form {
		max-width: 450px;
		margin: 0 auto;
	}
	
	.form-group {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}
	
	.email-input {
		flex: 1;
		padding: 1rem 1.25rem;
		font-size: 1rem;
		border: 3px solid var(--faf-black);
		border-radius: 8px;
		background: var(--faf-white);
		font-family: var(--font-mono);
		transition: all 0.2s ease;
	}
	
	.email-input:focus {
		outline: none;
		border-color: var(--faf-orange);
		box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2);
	}
	
	.email-input:disabled {
		opacity: 0.6;
	}
	
	.submit-btn {
		padding: 1rem 2rem;
		font-size: 1rem;
		font-weight: 700;
		background: var(--faf-orange);
		color: var(--faf-white);
		border: 3px solid var(--faf-orange);
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.2s ease;
		white-space: nowrap;
	}
	
	.submit-btn:hover:not(:disabled) {
		background: #ff5722;
		border-color: #ff5722;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(255, 107, 53, 0.3);
	}
	
	.submit-btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	
	.status {
		padding: 0.75rem 1rem;
		border-radius: 8px;
		margin-bottom: 1rem;
		font-weight: 600;
		animation: slideInUp 0.3s ease-out;
	}
	
	.status.success {
		background: var(--faf-green);
		color: var(--faf-white);
		border: 2px solid var(--faf-green);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: center;
	}
	
	.checkout-link {
		display: inline-block;
		padding: 0.5rem 1.5rem;
		background: var(--faf-white);
		color: var(--faf-green);
		border-radius: 6px;
		text-decoration: none;
		font-weight: 700;
		transition: all 0.2s ease;
	}
	
	.checkout-link:hover {
		transform: scale(1.05);
		box-shadow: 0 4px 8px rgba(0,0,0,0.2);
	}
	
	.stripe-checkout-wrapper {
		margin-top: 1rem;
		display: flex;
		justify-content: center;
	}
	
	.status.error {
		background: #ff5252;
		color: var(--faf-white);
		border: 2px solid #ff5252;
	}
	
	.form-note {
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
		margin-top: 0.5rem;
		font-family: var(--font-mono);
	}
	
	@keyframes slideInUp {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	
	@media (max-width: 600px) {
		.form-group {
			flex-direction: column;
		}
		
		.submit-btn {
			width: 100%;
		}
	}
</style>