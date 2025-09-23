# 💳 Stripe Quick Setup for FAF Founders Circle

## What You Need (You already have):
- ✅ Stripe account
- ✅ Stripe API keys (test & live)

## Quick Integration Plan

### Option 1: Stripe Payment Links (5 minutes)
**FASTEST - No code needed!**

1. Go to Stripe Dashboard > Payment Links
2. Create new payment link:
   - Name: "FAF Founders Circle"
   - Price: $9/year (was $100)
   - Recurring: Annual
   - Description: "Lifetime Founders rate - normally $100/year"
3. Get the payment link
4. Replace our "Secure My Spot" button with Stripe link

### Option 2: Stripe Checkout (30 minutes)
**Professional flow with email capture first**

```javascript
// In EmailCapture.svelte after email capture:
const response = await fetch('/api/create-checkout-session', {
  method: 'POST',
  body: JSON.stringify({ 
    email,
    priceId: 'price_founders_annual_9' 
  })
});
const { url } = await response.json();
window.location.href = url; // Redirect to Stripe
```

### Option 3: Embedded Stripe Elements (1 hour)
**Seamless on-site checkout**

## Recommended: Start with Payment Links

### Why Payment Links are perfect for MVP:
- ✅ Zero code needed
- ✅ Works immediately  
- ✅ Handles taxes, invoices, receipts
- ✅ Customer portal included
- ✅ Can upgrade to API later

### Your Pricing Structure:
- **Regular Price**: $100/year (displayed)
- **Founders Price**: $9/year (limited time)
- **Coupon Code**: "FOUNDERS91" (91% off)

## Quick Setup Steps:

1. **Create Product in Stripe**
   - Name: ".faf Format License"
   - Description: "AI Context Format - Founders Circle"

2. **Create Prices**
   - Regular: $100/year (price_regular_100)
   - Founders: $9/year (price_founders_9)

3. **Create Payment Link**
   - Use Founders price
   - Add metadata: `type: founders`

4. **Update Website**
   - Replace form action with Stripe link
   - Or redirect after email capture

## The Flow:
1. User enters email (Formspree)
2. Click "Secure My Spot"
3. Redirect to Stripe checkout
4. Payment processed
5. Welcome email sent
6. Access granted

---
Ready to add payments in 5 minutes! 🏎️