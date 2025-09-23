<script>
	// Stripe Customer Portal URL - LIVE!
	const PORTAL_URL = 'https://billing.stripe.com/p/login/4gM3cx1NPbfo42Lab6bV600';
	
	function openPortal() {
		if (PORTAL_URL.includes('YOUR_PORTAL_ID')) {
			alert('Customer portal coming soon!\n\nFounders will receive their portal link via email.');
		} else {
			window.open(PORTAL_URL, '_blank');
		}
	}
</script>

<section class="customer-portal">
	<div class="container">
		<div class="portal-content">
			<h3>🧡 Founders Circle Members</h3>
			<p>Manage your subscription, update payment methods, and download invoices.</p>
			<button onclick={openPortal} class="btn btn-portal">
				Access Customer Portal →
			</button>
			<p class="portal-note">
				Portal access is sent via email after your first payment.
			</p>
		</div>
	</div>
</section>

<style>
	.customer-portal {
		padding: 3rem 0;
		background: var(--faf-white);
		border-top: 1px solid var(--faf-gray-light);
	}
	
	.portal-content {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}
	
	.portal-content h3 {
		font-size: 1.75rem;
		margin-bottom: 1rem;
		color: var(--faf-black);
	}
	
	.portal-content p {
		color: var(--faf-gray-dark);
		margin-bottom: 1.5rem;
	}
	
	.btn-portal {
		background: var(--faf-black);
		color: var(--faf-white);
		border: 2px solid var(--faf-black);
		padding: 0.75rem 2rem;
		font-size: 1rem;
		font-weight: 600;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.2s ease;
		display: inline-block;
	}
	
	.btn-portal:hover {
		background: transparent;
		color: var(--faf-black);
		transform: translateY(-2px);
	}
	
	.portal-note {
		margin-top: 1rem;
		font-size: 0.875rem;
		color: var(--faf-gray-dark);
		font-style: italic;
	}
</style>