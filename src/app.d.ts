/// <reference types="@sveltejs/kit" />

/**
 * FAF-ONE Global Type Definitions
 * 10/10 Svelte 5 + TypeScript Strict Mode
 */

declare global {
	namespace App {
		interface Error {
			message: string;
			errorId?: string;
		}

		interface Locals {
			userid: string;
		}

		interface PageData {
			// Add page-specific data types here
		}

		interface Platform {
			// Add platform-specific types here
		}
	}

	// Custom window properties
	interface Window {
		// Analytics
		gtag?: (...args: any[]) => void;
		dataLayer?: any[];

		// FAF specific
		fafConfig?: {
			animationsEnabled: boolean;
			debugMode: boolean;
		};
	}

	// Environment variables
	namespace NodeJS {
		interface ProcessEnv {
			PUBLIC_SITE_URL: string;
			PUBLIC_API_URL?: string;
		}
	}
}

// Make TypeScript treat this as a module
export {};