import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import fs from 'fs/promises';
import path from 'path';

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

async function ensureDataDir() {
    const dataDir = path.join(process.cwd(), 'data');
    try {
        await fs.access(dataDir);
    } catch {
        await fs.mkdir(dataDir, { recursive: true });
    }
}

async function loadSubscribers(): Promise<any[]> {
    try {
        const data = await fs.readFile(SUBSCRIBERS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

async function saveSubscribers(subscribers: any[]) {
    await ensureDataDir();
    await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
}

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { email, source, version } = await request.json();

        // Basic validation
        if (!email || !email.includes('@')) {
            return json({ error: 'Invalid email address' }, { status: 400 });
        }

        // Load existing subscribers
        const subscribers = await loadSubscribers();

        // Check if already subscribed
        const existing = subscribers.find(sub => sub.email === email);
        if (existing) {
            return json({
                message: 'Already subscribed',
                subscribed: true
            });
        }

        // Add new subscriber
        subscribers.push({
            email,
            source: source || 'unknown',
            version: version || 'unknown',
            subscribedAt: new Date().toISOString(),
            ip: request.headers.get('x-forwarded-for') || 'unknown'
        });

        // Save
        await saveSubscribers(subscribers);

        // Log for monitoring
        console.log(`New subscriber: ${email} from ${source} v${version}`);

        return json({
            message: 'Successfully subscribed',
            subscribed: true
        });

    } catch (error) {
        console.error('Subscribe error:', error);
        return json({
            error: 'Failed to subscribe'
        }, { status: 500 });
    }
};

export const GET: RequestHandler = async () => {
    // Simple stats endpoint (protect in production)
    try {
        const subscribers = await loadSubscribers();
        return json({
            total: subscribers.length,
            sources: subscribers.reduce((acc, sub) => {
                acc[sub.source] = (acc[sub.source] || 0) + 1;
                return acc;
            }, {} as Record<string, number>)
        });
    } catch {
        return json({ total: 0, sources: {} });
    }
};