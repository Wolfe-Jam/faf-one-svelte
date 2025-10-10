/**
 * 🏎️ Stripe Webhook Handler for FAF TURBO
 *
 * Updated to use:
 * - Supabase for license storage
 * - Resend for sending license emails
 *
 * Listens for:
 * - checkout.session.completed → Generate & email license
 * - customer.subscription.updated → Update license status
 * - customer.subscription.deleted → Mark license as canceled
 */

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { createLicense } from '$lib/license-generator';
import { storeLicense, updateLicenseStatus, findLicenseByEmail } from '$lib/license-store';
import { sendLicenseEmail } from '$lib/emails/send-license-email';

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const body = await request.text();
        const signature = request.headers.get('stripe-signature');

        if (!signature) {
            return json({ error: 'No signature' }, { status: 400 });
        }

        // In production, verify the webhook signature with Stripe SDK
        // For now, parse the event directly
        const event = JSON.parse(body);

        console.log(`📨 Webhook received: ${event.type}`);

        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object;

                // Extract customer info
                const email = session.customer_details?.email || session.customer_email;
                const customerId = session.customer;
                const subscriptionId = session.subscription;

                if (!email || !subscriptionId) {
                    console.error('❌ Missing email or subscription ID');
                    break;
                }

                // Check if license already exists
                const existing = await findLicenseByEmail(email);
                if (existing) {
                    console.log(`ℹ️ License already exists for ${email}`);
                    // Resend the existing license
                    await sendLicenseEmail(existing);
                    break;
                }

                // Determine tier from metadata or price
                const tier = session.metadata?.tier || 'turbo';

                // Generate license
                const license = createLicense(
                    email,
                    tier as any,
                    customerId,
                    subscriptionId
                );

                // Store license in Supabase
                await storeLicense(license);

                // Send email with license key
                const emailResult = await sendLicenseEmail(license);

                if (emailResult.success) {
                    console.log(`✅ License created and emailed: ${license.key} to ${email}`);
                } else {
                    console.error(`⚠️ License created but email failed: ${emailResult.error}`);
                    // License still created, just email failed
                    // Customer can contact support to resend
                }

                break;
            }

            case 'customer.subscription.updated': {
                const subscription = event.data.object;
                const status = subscription.status;

                // Map Stripe status to our status
                const licenseStatus =
                    status === 'active' ? 'active' :
                    status === 'past_due' ? 'past_due' :
                    'canceled';

                await updateLicenseStatus(subscription.id, licenseStatus);
                console.log(`✅ License status updated to: ${licenseStatus}`);
                break;
            }

            case 'customer.subscription.deleted': {
                const subscription = event.data.object;
                await updateLicenseStatus(subscription.id, 'canceled');
                console.log(`✅ License canceled for subscription: ${subscription.id}`);
                break;
            }

            default:
                console.log(`ℹ️ Unhandled event type: ${event.type}`);
        }

        return json({ received: true });

    } catch (error) {
        console.error('❌ Webhook error:', error);
        return json({ error: 'Webhook handler failed' }, { status: 500 });
    }
};
