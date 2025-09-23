# 🚨 Stripe Payment Link Fix

## The Problem
The URL `https://buy.stripe.com/test_bIY6oJ5Yx8328tq3cc` appears to be a checkout session ID, not a payment link.

## How to Get the Correct Payment Link:

### Option 1: Create a Payment Link (Recommended)
1. Go to https://dashboard.stripe.com/test/payment-links
2. Click "Create payment link"
3. Add your product:
   - Name: FAF Founders Circle
   - Price: $9.00
   - Type: Recurring (yearly)
4. Click "Create link"
5. Copy the generated link (format: `https://buy.stripe.com/test_XXXXXXXXXXXXX`)

### Option 2: Use Stripe Checkout API
Instead of a payment link, create a server endpoint that generates checkout sessions:

```javascript
// api/create-checkout.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price: 'price_XXXXXX', // Your price ID
      quantity: 1
    }],
    mode: 'subscription',
    success_url: 'https://faf.one/success',
    cancel_url: 'https://faf.one/pricing'
  });
  
  return { url: session.url };
}
```

### Option 3: Quick Fix - Comment Out for Now
Until you get the proper payment link, prevent errors by disabling the links.

## What a Valid Payment Link Looks Like:
- Test mode: `https://buy.stripe.com/test/14k5kF4Ut6IYbKw5kl`
- Live mode: `https://buy.stripe.com/14k5kF4Ut6IYbKw5kl`

The ID after `/test/` or directly after `.com/` should be alphanumeric, not starting with "test_".

## To Fix Now:
1. Go to Stripe Dashboard
2. Navigate to "Payment Links" 
3. Create a new payment link
4. Replace all instances of the broken URL with the new one