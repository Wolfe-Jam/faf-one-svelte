/**
 * 🏎️ License Storage with Supabase
 *
 * Replaces JSON file storage with serverless database
 */

import { supabase, type LicenseRow } from './supabase';
import type { License } from './license-generator';

/**
 * Convert License to database row
 */
function licenseToRow(license: License): Omit<LicenseRow, 'id' | 'created_at' | 'last_validated_at'> {
    return {
        key: license.key,
        email: license.email,
        tier: license.tier as 'turbo' | 'legends',
        status: license.status,
        stripe_customer_id: license.stripeCustomerId || null,
        stripe_subscription_id: license.stripeSubscriptionId || null,
        expires_at: license.expiresAt || null,
        metadata: license.metadata || {}
    };
}

/**
 * Convert database row to License
 */
function rowToLicense(row: LicenseRow): License {
    return {
        key: row.key,
        email: row.email,
        tier: row.tier,
        status: row.status,
        stripeCustomerId: row.stripe_customer_id || undefined,
        stripeSubscriptionId: row.stripe_subscription_id || undefined,
        createdAt: row.created_at,
        expiresAt: row.expires_at || undefined,
        metadata: row.metadata
    };
}

/**
 * Store a new license
 */
export async function storeLicense(license: License): Promise<void> {
    const row = licenseToRow(license);

    const { error } = await supabase
        .from('licenses')
        .insert(row);

    if (error) {
        console.error('❌ Error storing license:', error);
        throw new Error(`Failed to store license: ${error.message}`);
    }

    console.log(`✅ License stored: ${license.key} for ${license.email}`);
}

/**
 * Find license by key
 */
export async function findLicenseByKey(key: string): Promise<License | null> {
    const { data, error } = await supabase
        .from('licenses')
        .select('*')
        .eq('key', key)
        .single();

    if (error) {
        if (error.code === 'PGRST116') {
            // No rows returned
            return null;
        }
        console.error('❌ Error finding license:', error);
        throw new Error(`Failed to find license: ${error.message}`);
    }

    return data ? rowToLicense(data) : null;
}

/**
 * Find license by email
 */
export async function findLicenseByEmail(email: string): Promise<License | null> {
    const { data, error } = await supabase
        .from('licenses')
        .select('*')
        .eq('email', email)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

    if (error) {
        if (error.code === 'PGRST116') {
            return null;
        }
        console.error('❌ Error finding license by email:', error);
        throw new Error(`Failed to find license: ${error.message}`);
    }

    return data ? rowToLicense(data) : null;
}

/**
 * Find license by Stripe subscription ID
 */
export async function findLicenseBySubscription(subscriptionId: string): Promise<License | null> {
    const { data, error } = await supabase
        .from('licenses')
        .select('*')
        .eq('stripe_subscription_id', subscriptionId)
        .single();

    if (error) {
        if (error.code === 'PGRST116') {
            return null;
        }
        console.error('❌ Error finding license by subscription:', error);
        throw new Error(`Failed to find license: ${error.message}`);
    }

    return data ? rowToLicense(data) : null;
}

/**
 * Update license status
 */
export async function updateLicenseStatus(
    subscriptionId: string,
    status: License['status']
): Promise<void> {
    const updates: Partial<LicenseRow> = {
        status
    };

    if (status === 'canceled') {
        updates.expires_at = new Date().toISOString();
    }

    const { error } = await supabase
        .from('licenses')
        .update(updates)
        .eq('stripe_subscription_id', subscriptionId);

    if (error) {
        console.error('❌ Error updating license status:', error);
        throw new Error(`Failed to update license: ${error.message}`);
    }

    console.log(`✅ License for subscription ${subscriptionId} status updated to: ${status}`);
}

/**
 * Update last validated timestamp
 */
export async function updateLastValidated(key: string): Promise<void> {
    const { error } = await supabase
        .from('licenses')
        .update({ last_validated_at: new Date().toISOString() })
        .eq('key', key);

    if (error) {
        console.error('❌ Error updating last validated:', error);
    }
}

/**
 * Get active licenses count by tier
 */
export async function getLicenseStats(): Promise<Record<string, number>> {
    const { data, error } = await supabase
        .from('licenses')
        .select('tier')
        .eq('status', 'active');

    if (error) {
        console.error('❌ Error getting license stats:', error);
        return {};
    }

    return data.reduce((acc, row) => {
        acc[row.tier] = (acc[row.tier] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
}

/**
 * Load all licenses (for admin purposes)
 */
export async function loadLicenses(): Promise<License[]> {
    const { data, error } = await supabase
        .from('licenses')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('❌ Error loading licenses:', error);
        return [];
    }

    return data.map(rowToLicense);
}
