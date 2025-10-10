import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { createLicense } from '$lib/license-generator';
import { storeLicense, updateLicenseStatus, findLicenseByEmail } from '$lib/license-store';

/**
 * 🏎️ Stripe Webhook Handler for FAF TURBO
 *
 * Listens for:
 * - checkout.session.completed → Generate & email license
 * - customer.subscription.updated → Update license status
 * - customer.subscription.deleted → Mark license as canceled
 */

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

                // Store license
                await storeLicense(license);

                // TODO: Send email with license key
                console.log(`🎉 License created: ${license.key} for ${email}`);

                // In production, trigger email here:
                // await sendLicenseEmail(license);

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
                break;
            }

            case 'customer.subscription.deleted': {
                const subscription = event.data.object;
                await updateLicenseStatus(subscription.id, 'canceled');
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
