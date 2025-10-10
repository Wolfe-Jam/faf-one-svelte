/**
 * 💨 FAF TURBO - License Validation
 *
 * Like GitHub's Copilot validation:
 * - Checks if license key is valid
 * - Verifies Stripe subscription status
 * - Returns tier info
 */

import type { Handler, HandlerEvent } from '@netlify/functions';

interface ValidationRequest {
  key: string;
}

interface ValidationResponse {
  valid: boolean;
  tier?: 'TURBO' | 'LEGENDS';
  message?: string;
  expiresAt?: string;
}

export const handler: Handler = async (event: HandlerEvent) => {

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { key }: ValidationRequest = JSON.parse(event.body || '{}');

    if (!key) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          valid: false,
          message: 'License key required'
        } as ValidationResponse)
      };
    }

    // Validate format
    if (!key.startsWith('FAF-') || key.split('-').length !== 5) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          valid: false,
          message: 'Invalid license key format'
        } as ValidationResponse)
      };
    }

    // TODO: Real validation
    // 1. Look up key in database
    // 2. Get associated Stripe subscription ID
    // 3. Check subscription status with Stripe API
    // 4. Return validation result

    // For now, mock validation
    const mockLicense = {
      key,
      tier: key.includes('LEGEND') ? 'LEGENDS' as const : 'TURBO' as const,
      valid: true,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days
    };

    return {
      statusCode: 200,
      body: JSON.stringify({
        valid: mockLicense.valid,
        tier: mockLicense.tier,
        message: 'License valid',
        expiresAt: mockLicense.expiresAt
      } as ValidationResponse)
    };

  } catch (error) {
    console.error('License validation error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        valid: false,
        message: 'Validation service error'
      } as ValidationResponse)
    };
  }
};
