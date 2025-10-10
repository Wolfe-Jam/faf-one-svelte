# 🏎️ Supabase Setup for FAF TURBO

## Quick Setup (5 minutes)

### 1. Create Supabase Project
1. Go to https://supabase.com
2. Sign up / Log in
3. Click "New Project"
4. Name: `faf-turbo-licenses`
5. Database Password: (generate strong password, save it!)
6. Region: Choose closest to your users
7. Wait 2 minutes for setup

### 2. Create Licenses Table

Go to SQL Editor and run this:

```sql
-- FAF TURBO Licenses Table
CREATE TABLE licenses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  tier TEXT NOT NULL CHECK (tier IN ('turbo', 'legends')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'past_due', 'canceled')),

  -- Stripe integration
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT UNIQUE,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  last_validated_at TIMESTAMPTZ,

  -- Metadata
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Indexes for fast lookups
CREATE INDEX idx_licenses_key ON licenses(key);
CREATE INDEX idx_licenses_email ON licenses(email);
CREATE INDEX idx_licenses_subscription ON licenses(stripe_subscription_id);
CREATE INDEX idx_licenses_status ON licenses(status);

-- Enable Row Level Security (optional for now)
ALTER TABLE licenses ENABLE ROW LEVEL SECURITY;

-- Policy: Service role can do everything (for server-side operations)
CREATE POLICY "Service role can do everything" ON licenses
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
```

### 3. Get Your Connection Details

1. Go to Project Settings → API
2. Copy these values:

```
Project URL: https://xxx.supabase.co
anon (public) key: eyJhbGc...
service_role key: eyJhbGc... (keep this SECRET!)
```

### 4. Add to Vercel Environment Variables

Go to Vercel dashboard → faf-one-svelte-new → Settings → Environment Variables

Add these:
```
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGc... (service_role key)
```

### 5. Install Supabase Client

```bash
cd /Users/wolfejam/FAF/faf-one-svelte-new
npm install @supabase/supabase-js
```

## Testing

After setup, test with:

```sql
-- Insert a test license
INSERT INTO licenses (key, email, tier, stripe_customer_id, stripe_subscription_id)
VALUES ('FAF-TEST-TEST-TEST-TEST', 'test@example.com', 'turbo', 'cus_test', 'sub_test');

-- Query it
SELECT * FROM licenses WHERE key = 'FAF-TEST-TEST-TEST-TEST';
```

## Free Tier Limits

- ✅ 500MB database
- ✅ 2GB bandwidth/month
- ✅ Unlimited API requests
- ✅ Perfect for 1000s of licenses

## Next Steps

After Supabase is set up:
1. Update `$lib/license-store.ts` to use Supabase
2. Test license generation
3. Deploy to Vercel
