/**
 * 🏎️💨 FAF TURBO - Analyze Endpoint
 *
 * Like GitHub Copilot's backend:
 * - Receives workflow files from CLI
 * - Runs Universal Intelligence Pattern on SERVER
 * - Returns .faf files
 *
 * Intelligence lives HERE (can't be stolen from CLI)
 */

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { findLicenseByKey, updateLastValidated } from '$lib/license-store';
import { generateFafFromAny } from '$lib/turbo/universal-intelligence-generator.js';
import { promises as fs } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';
import yaml from 'yaml';

interface AnalyzeRequest {
    licenseKey: string;
    fileContent: string;
    fileName: string;
    fileType?: 'n8n' | 'openai' | 'make' | 'opal' | 'auto';
}

interface AnalyzeResponse {
    success: boolean;
    fafContent?: string;
    score?: number;
    pattern?: string;
    error?: string;
    message?: string;
}

/**
 * Validate license and check if active
 */
async function validateLicense(key: string): Promise<{ valid: boolean; message?: string }> {
    if (!key || !key.startsWith('FAF-')) {
        return { valid: false, message: 'Invalid license key format' };
    }

    try {
        const license = await findLicenseByKey(key);

        if (!license) {
            return { valid: false, message: 'License key not found' };
        }

        if (license.status !== 'active') {
            return { valid: false, message: `License is ${license.status}. Please renew at faf.one/pricing` };
        }

        // Update last validated timestamp
        await updateLastValidated(key);

        return { valid: true };
    } catch (error) {
        console.error('License validation error:', error);
        return { valid: false, message: 'License validation failed' };
    }
}

/**
 * 🏎️ TURBO INTELLIGENCE (Server-Side)
 *
 * Runs the Universal Intelligence Pattern on the server
 * Source code protected - not exposed in npm package
 */
async function analyzeWithTURBO(
    fileContent: string,
    fileName: string,
    fileType?: string
): Promise<{ fafContent: string; score: number; pattern: string }> {

    // Create temporary file for processing
    // (TURBO intelligence expects file paths, not content strings)
    const tempDir = tmpdir();
    const tempFilePath = join(tempDir, `turbo-${Date.now()}-${fileName}`);

    try {
        // Write content to temp file
        await fs.writeFile(tempFilePath, fileContent, 'utf-8');

        // Run Universal Intelligence Pattern
        const fafContent = await generateFafFromAny(tempFilePath);

        // Parse the generated .faf to extract score
        const parsed = yaml.parse(fafContent);
        const score = parsed?.scores?.faf_score || parsed?.faf_score || 85;
        const pattern = parsed?.architecture?.pattern || 'Universal Intelligence Pattern';

        return {
            fafContent,
            score,
            pattern
        };

    } finally {
        // Clean up temp file
        try {
            await fs.unlink(tempFilePath);
        } catch (error) {
            // Ignore cleanup errors
            console.warn('Failed to clean up temp file:', tempFilePath);
        }
    }
}

/**
 * POST /api/turbo-analyze
 *
 * Called by faf-turbo CLI to analyze workflows
 */
export const POST: RequestHandler = async ({ request }) => {
    try {
        const body: AnalyzeRequest = await request.json();

        // Validate inputs
        if (!body.licenseKey) {
            return json({
                success: false,
                error: 'License key required'
            } as AnalyzeResponse, { status: 401 });
        }

        if (!body.fileContent || !body.fileName) {
            return json({
                success: false,
                error: 'File content and name required'
            } as AnalyzeResponse, { status: 400 });
        }

        // Validate license
        const licenseCheck = await validateLicense(body.licenseKey);

        if (!licenseCheck.valid) {
            return json({
                success: false,
                error: 'Invalid or expired license',
                message: licenseCheck.message
            } as AnalyzeResponse, { status: 403 });
        }

        // Analyze with TURBO (server-side intelligence)
        const result = await analyzeWithTURBO(
            body.fileContent,
            body.fileName,
            body.fileType
        );

        return json({
            success: true,
            fafContent: result.fafContent,
            score: result.score,
            pattern: result.pattern,
            message: 'Analysis complete'
        } as AnalyzeResponse);

    } catch (error) {
        console.error('❌ TURBO analyze error:', error);

        return json({
            success: false,
            error: 'Analysis failed',
            message: error instanceof Error ? error.message : 'Unknown error'
        } as AnalyzeResponse, { status: 500 });
    }
};
