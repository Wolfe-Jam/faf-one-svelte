/**
 * FAF-ONE TypeScript Type Definitions
 * 10/10 Svelte 5 + TypeScript Strict Mode
 */

// ============================================================
// Component Props Types
// ============================================================

export interface HeroProps {
	shouldAnimate?: boolean;
	showScorePopup?: boolean;
	initialScore?: number;
}

export interface HeroStatsProps {
	animated?: boolean;
}

export interface HeroTestimonialsProps {
	animated?: boolean;
}

export interface HeroQuotesProps {
	isVisible: boolean;
}

export interface HeroPathwaysProps {
	codeTyped: string;
	codeText: string;
}

export interface HeroScorePopupProps {
	show: boolean;
	score: number;
}

export interface HeroBadgesProps {
	animated?: boolean;
}

export interface HeroPartnersProps {
	animated?: boolean;
}

// ============================================================
// Risk Assessment Types
// ============================================================

export interface RiskSliderProps {
	value: number;
	min: number;
	max: number;
	label: string;
	helpText?: string;
	color?: 'orange' | 'cyan' | 'green' | 'gray';
	showPercentage?: boolean;
	unit?: string;
	disabled?: boolean;
}

export interface ComparisonCardProps {
	title: string;
	before: ComparisonValue;
	after: ComparisonValue;
	type?: 'duration' | 'cost' | 'percentage';
}

export interface ComparisonValue {
	value: number;
	label: string;
	color?: string;
}

export interface QualityIndicatorProps {
	quality: number;
}

export interface ImpactDisplayProps {
	multiplier: number;
	delayDays: number;
}

export interface ContextPreviewProps {
	percentage: number;
}

// ============================================================
// Navigation & Layout Types
// ============================================================

export interface NavigationLink {
	href: string;
	label: string;
	icon?: string;
	external?: boolean;
}

export interface SideNavSection {
	title: string;
	links: NavigationLink[];
}

// ============================================================
// Form & Input Types
// ============================================================

export interface EmailCaptureProps {
	placeholder?: string;
	buttonText?: string;
	onSubmit?: (email: string) => void | Promise<void>;
}

export interface CheckoutButtonProps {
	email?: string;
	variant?: 'primary' | 'secondary';
	price?: number;
	productName?: string;
	disabled?: boolean;
}

// ============================================================
// Data Types
// ============================================================

export interface ProjectMetrics {
	duration: number; // weeks
	cost: number; // total cost
	successRate: number; // percentage
	aiContext: number; // percentage
}

export interface RiskAssessment {
	baseRisk: number;
	contextFactor: number;
	actualWeeks: number;
	actualCost: number;
	delayDays: number;
	costOverrun: number;
	successRate: number;
	riskLevel: RiskLevel;
}

export interface RiskLevel {
	level: 'Low' | 'Medium' | 'High' | 'Critical';
	color: string;
}

// ============================================================
// Animation & UI State Types
// ============================================================

export interface AnimationConfig {
	duration: number;
	delay?: number;
	easing?: string;
	fillMode?: 'forwards' | 'backwards' | 'both';
}

export interface ScrollRevealConfig {
	threshold?: number;
	delay?: number;
	duration?: number;
	once?: boolean;
}

// ============================================================
// API Response Types
// ============================================================

export interface ApiResponse<T> {
	success: boolean;
	data?: T;
	error?: string;
	message?: string;
}

export interface DownloadStats {
	total: number;
	weekly: number;
	daily: number;
	lastUpdated: string;
}

// ============================================================
// Utility Types
// ============================================================

export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Nullable<T> = T | null;

export type AsyncFunction<T = void> = () => Promise<T>;

// ============================================================
// Store Types
// ============================================================

export interface AppState {
	user: UserState | null;
	theme: ThemeState;
	animations: AnimationState;
}

export interface UserState {
	email?: string;
	preferences: UserPreferences;
}

export interface UserPreferences {
	animationsEnabled: boolean;
	theme: 'light' | 'dark' | 'auto';
	visitCount: number;
	lastVisit: string;
}

export interface ThemeState {
	mode: 'light' | 'dark';
	primaryColor: string;
	accentColor: string;
}

export interface AnimationState {
	enabled: boolean;
	reducedMotion: boolean;
	lastAnimated: number;
}

// ============================================================
// Event Types
// ============================================================

export interface CustomEvents {
	'score:update': { score: number };
	'animation:complete': { element: string };
	'form:submit': { formId: string; data: Record<string, unknown> };
	'navigation:change': { from: string; to: string };
}

// ============================================================
// Constants
// ============================================================

export const ANIMATION_COOLDOWN = 30 * 60 * 1000; // 30 minutes

export const FAF_COLORS = {
	orange: '#FF6B35',
	cream: '#FFF8F0',
	black: '#1A1A1A',
	white: '#FFFFFF',
	cyan: '#00d4d4',
	green: '#00C851',
	gray: '#999999',
} as const;

export const RISK_THRESHOLDS = {
	low: 90,
	medium: 70,
	high: 50,
	critical: 0,
} as const;