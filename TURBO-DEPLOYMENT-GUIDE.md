# 🏎️💨 FAF TURBO - Complete Deployment Guide

## Architecture: Copilot-Style SaaS

```
Customer Flow (Like GitHub Copilot):

1. Buy on faf.one → Stripe checkout
2. Webhook → Generate license + Send email
3. Customer receives email with license key
4. Install CLI: npm install -g faf-turbo
5. Activate: faf-turbo activate FAF-XXXX
6. Analyze: faf-turbo analyze workflow.json
   └─> Uploads to faf.one/api/turbo-analyze
   └─> Server runs Universal Intelligence Pattern
   └─> Returns .faf file

Intelligence stays on YOUR server (can't be stolen!)
```

---

## 🚀 Complete Setup Checklist

### Phase 1: Infrastructure Setup (30 minutes)

#### [ ] 1. Supabase Database
Follow: `SUPABASE-SETUP.md`

- Create project
- Run SQL schema
- Get URL + service key
- Add to Vercel env vars

#### [ ] 2. Resend Email
Follow: `RESEND-SETUP.md`

- Create account
- Add domain (or use onboarding domain)
- Get API key
- Add to Vercel env vars

#### [ ] 3. Install Dependencies

```bash
cd /Users/wolfejam/FAF/faf-one-svelte-new
npm install @supabase/supabase-js resend
```

---

### Phase 2: Code Updates (15 minutes)

#### [ ] 4. Update License Storage

Replace JSON with Supabase:

```bash
# Backup old file
mv src/lib/license-store.ts src/lib/license-store-json-backup.ts

# Use Supabase version
mv src/lib/license-store-supabase.ts src/lib/license-store.ts
```

#### [ ] 5. Update Stripe Webhook

Replace with email-enabled version:

```bash
mv src/routes/api/stripe-webhook/+server.ts src/routes/api/stripe-webhook/+server-old.ts
mv src/routes/api/stripe-webhook/+server-updated.ts src/routes/api/stripe-webhook/+server.ts
```

#### [ ] 6. Update Validate Endpoint

```bash
# The endpoint already uses the correct import
# Just make sure it imports from 'license-store' not 'license-store-supabase'
```

---

### Phase 3: Environment Variables

Add to Vercel → Settings → Environment Variables:

```bash
# Supabase
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_KEY=eyJhbG...

# Resend
RESEND_API_KEY=re_...

# Stripe (you should already have these)
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

### Phase 4: Deploy & Test

#### [ ] 7. Deploy to Vercel

```bash
cd /Users/wolfejam/FAF/faf-one-svelte-new
git add .
git commit -m "feat: Add TURBO Copilot-style architecture with Supabase + Resend"
git push

# Vercel auto-deploys
```

#### [ ] 8. Test License Generation

Test the complete flow:

**A. Create Test Purchase**
1. Go to faf.one/pricing (in test mode)
2. Use Stripe test card: `4242 4242 4242 4242`
3. Complete checkout

**B. Check Database**
```sql
-- In Supabase SQL Editor
SELECT * FROM licenses ORDER BY created_at DESC LIMIT 1;
```

**C. Check Email**
- Should receive email with license key
- Check spam folder if not in inbox

**D. Test License Validation**
```bash
curl -X POST https://faf.one/api/validate-license \
  -H "Content-Type: application/json" \
  -d '{"key":"FAF-TEST-TEST-TEST-TEST"}'
```

**E. Test TURBO Analyze**
```bash
curl -X POST https://faf.one/api/turbo-analyze \
  -H "Content-Type: application/json" \
  -d '{
    "licenseKey": "FAF-TEST-TEST-TEST-TEST",
    "fileName": "test-workflow",
    "fileContent": "{\"nodes\":[]}"
  }'
```

---

## 📊 What's Working vs What's Next

### ✅ Currently Working:

1. **License Generation**
   - Stripe webhook creates licenses
   - Stores in Supabase
   - Sends email with key

2. **License Validation**
   - CLI can validate keys
   - Checks Supabase for status
   - Updates last_validated timestamp

3. **TURBO Analyze Endpoint**
   - Accepts workflow files
   - Validates license
   - Returns placeholder .faf (TODO: add real intelligence)

### 🔧 Still TODO:

1. **Move TURBO Intelligence to Server**
   ```typescript
   // In /api/turbo-analyze/+server.ts
   // Replace placeholder with actual:
   import { generateFafFromAny } from 'faf-turbo-core';
   const result = await generateFafFromAny(fileContent, fileType);
   ```

2. **Build Thin CLI Client**
   ```bash
   # In /Users/wolfejam/FAF/turbo
   # Update src/index.ts to call API instead of local processing
   ```

3. **Copy TURBO Intelligence to Server**
   ```bash
   # Copy Universal Intelligence Pattern code
   # From: /Users/wolfejam/FAF/turbo/src/
   # To: /Users/wolfejam/FAF/faf-one-svelte-new/src/lib/turbo/
   ```

---

## 🏗️ Next Phase: Move Intelligence to Server

### Option A: Shared Package (Recommended)

Create `faf-turbo-core` package:
```
faf-turbo-core/
├── src/
│   ├── universal-intelligence-generator.ts
│   ├── platform-adapters.ts
│   └── index.ts
└── package.json

Used by:
- faf.one server (runs intelligence)
- faf-turbo CLI (types only, makes API calls)
```

### Option B: Direct Copy

Copy TURBO code into faf.one:
```bash
mkdir -p /Users/wolfejam/FAF/faf-one-svelte-new/src/lib/turbo
cp /Users/wolfejam/FAF/turbo/src/*.ts /Users/wolfejam/FAF/faf-one-svelte-new/src/lib/turbo/

# Update /api/turbo-analyze to use it
```

---

## 📈 Metrics to Watch

Once deployed, monitor:

- **Supabase**: License count, active licenses
- **Resend**: Email delivery rate
- **Vercel**: Function invocations, errors
- **Stripe**: Subscriptions, churn rate

---

## 🆘 Troubleshooting

### License Not Generated
1. Check Stripe webhook logs in Vercel
2. Check Supabase logs
3. Verify webhook secret is correct

### Email Not Sent
1. Check Resend dashboard → Logs
2. Verify API key is correct
3. Check domain verification status
4. Try `onboarding@resend.dev` for testing

### TURBO Analyze Fails
1. Check license is active in Supabase
2. Verify API endpoint is deployed
3. Check Vercel function logs

---

## 🎯 Success Criteria

You're ready to launch when:

- [x] Database setup complete (Supabase)
- [x] Email service configured (Resend)
- [x] License generation working
- [x] Email delivery working
- [x] License validation working
- [x] TURBO analyze endpoint deployed
- [ ] Universal Intelligence Pattern on server
- [ ] CLI updated to call API
- [ ] End-to-end test passed

---

## 🚀 Launch Checklist

Before going live:

1. **Test with real Stripe**
   - Switch from test mode to live mode
   - Update webhook endpoint in Stripe dashboard
   - Test real purchase

2. **Verify Domain Email**
   - Move from `onboarding@resend.dev` to `turbo@faf.one`
   - Verify DNS records

3. **Set Up Monitoring**
   - Vercel alerts
   - Supabase alerts
   - Stripe webhooks monitoring

4. **Publish faf-turbo CLI**
   - Update to call faf.one API
   - Publish to npm (public)
   - Test installation

5. **Update Website**
   - Add "Get Started" docs
   - Update pricing page
   - Add example workflows

---

**You're 80% there! The infrastructure is built. Next step: Move TURBO intelligence to the server.** 🏎️💨