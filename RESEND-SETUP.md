# 📧 Resend Email Setup for FAF TURBO

## Why Resend?
- ✅ Modern, developer-friendly API
- ✅ Free tier: 3,000 emails/month (100/day)
- ✅ Great deliverability
- ✅ Simple setup (5 minutes)

## Setup Steps

### 1. Create Resend Account
1. Go to https://resend.com
2. Sign up with GitHub
3. Verify your email

### 2. Add Domain (Recommended) or Use Onboarding Domain
**Option A: Use your domain (faf.one)**
1. Go to Domains → Add Domain
2. Enter: `faf.one`
3. Add these DNS records to your domain:

```
Type: TXT
Name: @
Value: [Resend provides this]

Type: MX
Name: @
Value: [Resend provides this]
Priority: 10

Type: TXT
Name: resend._domainkey
Value: [Resend provides DKIM key]
```

4. Wait 5-10 minutes for verification

**Option B: Use onboarding domain (testing)**
- Resend gives you `onboarding@resend.dev` for testing
- Limited to verified recipients only
- Good for testing, then switch to your domain

### 3. Get API Key
1. Go to API Keys
2. Click "Create API Key"
3. Name: `faf-turbo-production`
4. Permission: "Sending access"
5. Copy the key (starts with `re_`)

### 4. Add to Vercel Environment Variables

Go to Vercel → faf-one-svelte-new → Settings → Environment Variables

Add:
```
RESEND_API_KEY=re_...
```

### 5. Install Resend SDK

```bash
cd /Users/wolfejam/FAF/faf-one-svelte-new
npm install resend
```

## Testing

Test with this simple script:

```typescript
import { Resend } from 'resend';

const resend = new Resend('re_...');

const { data, error } = await resend.emails.send({
  from: 'turbo@faf.one', // Or onboarding@resend.dev for testing
  to: 'your-email@example.com',
  subject: 'Test Email',
  html: '<h1>It works!</h1>'
});

console.log(data, error);
```

## Pricing

- Free: 3,000 emails/month (100/day)
- Pro: $20/month = 50,000 emails/month
- Business: $80/month = 200,000 emails/month

For FAF TURBO, free tier should be plenty to start!

## Next Steps

After Resend is set up:
1. Create email templates in `$lib/emails/`
2. Update Stripe webhook to send emails
3. Test license generation flow
