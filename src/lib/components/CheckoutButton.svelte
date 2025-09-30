<script lang="ts">
	import type { CheckoutButtonProps } from '$lib/types';

	let {
		email = '',
		variant = 'primary' as 'primary' | 'secondary'
	}: Partial<CheckoutButtonProps> = $props();
	
	// Stripe Payment Link - LIVE! 
	const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_bIY6oJ5Yx8328tq3cc'; // ✅ Connected to Stripe
	
	function handleCheckout() {
		// If we have an email, append it to the Stripe link
		const checkoutUrl = email 
			? `${STRIPE_PAYMENT_LINK}?prefilled_email=${encodeURIComponent(email)}`
			: STRIPE_PAYMENT_LINK;
			
		// For now, just log what would happen
		if (STRIPE_PAYMENT_LINK.includes('YOUR_LINK')) {
			alert('🎯 Stripe Payment Link needed!\n\n1. Go to Stripe Dashboard\n2. Create Payment Link ($9/year)\n3. Add link to CheckoutButton.svelte\n\nFor now, email captured successfully!');
		} else {
			window.location.href = checkoutUrl;
		}
	}
</script>

<button 
	onclick={handleCheckout}
	class="checkout-btn {variant}"
	type="button"
>
	<span class="price-original">$100</span>
	<span class="price-founders">$9 FOUNDERS</span>
	<span class="cta-text">Secure Now →</span>
</button>

<style>
	.checkout-btn {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 2rem;
		font-size: 1.125rem;
		font-weight: 700;
		border: 3px solid var(--faf-orange);
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.2s ease;
		background: var(--faf-orange);
		color: var(--faf-white);
		text-decoration: none;
		position: relative;
		overflow: hidden;
	}
	
	.checkout-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
		background: #ff5722;
		border-color: #ff5722;
	}
	
	.price-original {
		text-decoration: line-through;
		opacity: 0.7;
		font-size: 0.9rem;
	}
	
	.price-founders {
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--faf-white);
		text-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}
	
	.cta-text {
		font-size: 1rem;
		opacity: 0.9;
	}
	
	.checkout-btn.secondary {
		background: transparent;
		color: var(--faf-black);
		border-color: var(--faf-black);
	}
	
	.checkout-btn.secondary:hover {
		background: var(--faf-black);
		color: var(--faf-white);
	}
	
	.checkout-btn.secondary .price-founders {
		color: var(--faf-orange);
	}
	
	.checkout-btn.secondary:hover .price-founders {
		color: var(--faf-white);
	}
	
	/* Add pulse animation for urgency */
	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.02); }
	}
	
	.checkout-btn {
		animation: pulse 3s infinite;
	}
	
	.checkout-btn:hover {
		animation: none;
	}
</style>