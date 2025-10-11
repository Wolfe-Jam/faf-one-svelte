/**
 * 🧪 Test Email Endpoint
 *
 * Send a test license email to verify:
 * - Resend DNS is verified
 * - turbo@faf.one sender works
 * - Email template renders correctly
 */

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { sendLicenseEmail } from '$lib/emails/send-license-email';
import type { License } from '$lib/license-generator';

export const GET: RequestHandler = async ({ url }) => {
    // Get test email from query param, or use default
    const testEmail = url.searchParams.get('email') || 'test@example.com';

    // Create a test license
    const testLicense: License = {
        key: 'FAF-ABCD-1234-EFAB-5678',
        email: testEmail,
        tier: 'turbo',
        status: 'active',
        stripeCustomerId: 'cus_test_12345',
        stripeSubscriptionId: 'sub_test_12345',
        createdAt: new Date().toISOString(),
        expiresAt: null,
        lastValidatedAt: null,
        metadata: {
            test: true,
            purpose: 'DNS verification test'
        }
    };

    // Send test email
    const result = await sendLicenseEmail(testLicense);

    if (result.success) {
        return json({
            success: true,
            message: `Test email sent to ${testEmail} from turbo@faf.one 🏎️💨`,
            licenseKey: testLicense.key,
            email: testEmail
        });
    } else {
        return json({
            success: false,
            error: result.error,
            message: 'Email send failed - check Resend domain verification',
            hint: 'Visit https://resend.com/domains and verify faf.one is verified'
        }, { status: 500 });
    }
};
