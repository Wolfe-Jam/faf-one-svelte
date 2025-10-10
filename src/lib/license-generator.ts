import { randomBytes, createHash } from 'crypto';

/**
 * 🏎️ FAF TURBO License Key Generator
 * Championship-grade license key system
 */

export interface License {
    key: string;
    email: string;
    tier: 'turbo' | 'teams' | 'enterprise';
    stripeCustomerId: string;
    stripeSubscriptionId: string;
    status: 'active' | 'canceled' | 'past_due';
    createdAt: string;
    expiresAt?: string; // null for active subscriptions
}

/**
 * Generate a secure license key
 * Format: FAF-XXXX-XXXX-XXXX-XXXX (20 chars)
 */
export function generateLicenseKey(): string {
    const bytes = randomBytes(10); // 10 bytes = 20 hex chars
    const hex = bytes.toString('hex').toUpperCase();

    // Format as FAF-XXXX-XXXX-XXXX-XXXX
    return `FAF-${hex.slice(0, 4)}-${hex.slice(4, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}`;
}

/**
 * Create license fingerprint for validation
 * Hash of: key + email + tier
 */
export function createLicenseFingerprint(license: License): string {
    const data = `${license.key}:${license.email}:${license.tier}`;
    return createHash('sha256').update(data).digest('hex').slice(0, 16);
}

/**
 * Validate license key format
 */
export function isValidKeyFormat(key: string): boolean {
    const pattern = /^FAF-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}$/;
    return pattern.test(key);
}

/**
 * Create new license from Stripe payment
 */
export function createLicense(
    email: string,
    tier: License['tier'],
    stripeCustomerId: string,
    stripeSubscriptionId: string
): License {
    return {
        key: generateLicenseKey(),
        email,
        tier,
        stripeCustomerId,
        stripeSubscriptionId,
        status: 'active',
        createdAt: new Date().toISOString()
    };
}

/**
 * Obfuscate license key for display
 * FAF-A1B2-C3D4-E5F6-G7H8 → FAF-****-****-****-G7H8
 */
export function obfuscateKey(key: string): string {
    if (!isValidKeyFormat(key)) return '****-****-****-****';
    const parts = key.split('-');
    return `${parts[0]}-****-****-****-${parts[4]}`;
}
