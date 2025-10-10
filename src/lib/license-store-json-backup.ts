import fs from 'fs/promises';
import path from 'path';
import type { License } from './license-generator';

const LICENSES_FILE = path.join(process.cwd(), 'data', 'licenses.json');

async function ensureDataDir() {
    const dataDir = path.join(process.cwd(), 'data');
    try {
        await fs.access(dataDir);
    } catch {
        await fs.mkdir(dataDir, { recursive: true });
    }
}

/**
 * Load all licenses from storage
 */
export async function loadLicenses(): Promise<License[]> {
    try {
        const data = await fs.readFile(LICENSES_FILE, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

/**
 * Save licenses to storage
 */
async function saveLicenses(licenses: License[]) {
    await ensureDataDir();
    await fs.writeFile(LICENSES_FILE, JSON.stringify(licenses, null, 2));
}

/**
 * Store a new license
 */
export async function storeLicense(license: License): Promise<void> {
    const licenses = await loadLicenses();
    licenses.push(license);
    await saveLicenses(licenses);
    console.log(`✅ License stored: ${license.key} for ${license.email}`);
}

/**
 * Find license by key
 */
export async function findLicenseByKey(key: string): Promise<License | null> {
    const licenses = await loadLicenses();
    return licenses.find(l => l.key === key) || null;
}

/**
 * Find license by email
 */
export async function findLicenseByEmail(email: string): Promise<License | null> {
    const licenses = await loadLicenses();
    return licenses.find(l => l.email === email) || null;
}

/**
 * Find license by Stripe subscription ID
 */
export async function findLicenseBySubscription(subscriptionId: string): Promise<License | null> {
    const licenses = await loadLicenses();
    return licenses.find(l => l.stripeSubscriptionId === subscriptionId) || null;
}

/**
 * Update license status (e.g., on subscription cancel)
 */
export async function updateLicenseStatus(
    subscriptionId: string,
    status: License['status']
): Promise<void> {
    const licenses = await loadLicenses();
    const license = licenses.find(l => l.stripeSubscriptionId === subscriptionId);

    if (license) {
        license.status = status;
        if (status === 'canceled') {
            license.expiresAt = new Date().toISOString();
        }
        await saveLicenses(licenses);
        console.log(`✅ License ${license.key} status updated to: ${status}`);
    }
}

/**
 * Get active licenses count by tier
 */
export async function getLicenseStats(): Promise<Record<string, number>> {
    const licenses = await loadLicenses();
    return licenses
        .filter(l => l.status === 'active')
        .reduce((acc, l) => {
            acc[l.tier] = (acc[l.tier] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
}
