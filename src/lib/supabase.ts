/**
 * 🏎️ Supabase Client for FAF TURBO
 *
 * Serverless database for license storage
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
    console.warn('⚠️ Supabase not configured. Set SUPABASE_URL and SUPABASE_SERVICE_KEY');
}

/**
 * Supabase client with service role (full access)
 * Use this for server-side operations only
 */
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

/**
 * Database types
 */
export interface LicenseRow {
    id: string;
    key: string;
    email: string;
    tier: 'turbo' | 'legends';
    status: 'active' | 'past_due' | 'canceled';
    stripe_customer_id: string | null;
    stripe_subscription_id: string | null;
    created_at: string;
    expires_at: string | null;
    last_validated_at: string | null;
    metadata: Record<string, any>;
}
