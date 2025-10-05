import z from "zod";

/**
 * Comprehensive application settings schema with validation and type safety.
 *
 * Features:
 * - Environment-based defaults for URLs
 * - Enhanced validation rules with min/max constraints
 * - Authentication and security settings
 * - Performance and caching configuration
 * - Error handling and logging options
 * - GDPR-compliant privacy settings
 * - Developer tools and debugging options
 *
 * Usage:
 * ```typescript
 * import { validateSettings, getDefaultSettings, Settings } from './settings';
 *
 * // Validate user input
 * const result = validateSettings(userInput);
 * if (result.success) {
 *   console.log('Valid settings:', result.data);
 * }
 *
 * // Get default settings
 * const defaults = getDefaultSettings();
 *
 * // Merge custom settings
 * const customSettings = mergeSettings(defaults, { theme: 'dark' });
 * ```
 */

// Environment-based default URLs
const getDefaultAppUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
};

const getDefaultImageUrl = () => {
  return (
    process.env.NEXT_PUBLIC_APP_IMAGE || `${getDefaultAppUrl()}/og-image.jpg`
  );
};

const settings = z.object({
  // Theme and appearance settings
  theme: z.enum(["light", "dark", "system"]).default("system"),
  locale: z
    .enum(["en", "es", "fr", "de", "ja", "zh", "pt", "ru", "ar"])
    .default("en"),

  // App metadata (enhanced validation)
  appTitle: z.string().min(1).max(100).default("Next.js Starter"),
  appDescription: z
    .string()
    .min(1)
    .max(200)
    .default("A modern Next.js application"),
  appKeywords: z
    .array(z.string().min(1).max(50))
    .min(1)
    .max(10)
    .default(["Next.js", "React", "Tailwind CSS"]),
  appUrl: z.string().url().default(getDefaultAppUrl),
  appImage: z.string().url().default(getDefaultImageUrl),
  appFavicon: z.string().url().optional(),

  // Enhanced social media links
  appTwitter: z.string().url().optional(),
  appGithub: z.string().url().optional(),
  appLinkedin: z
    .object({
      username: z.string().optional(),
      url: z.string().url().optional(),
    })
    .optional(),
  appInstagram: z.string().url().optional(),
  appYouTube: z.string().url().optional(),
  appDiscord: z.string().url().optional(),

  // Author information
  appAuthor: z
    .object({
      name: z.string().min(1).max(100).optional(),
      email: z.string().email().optional(),
      bio: z.string().max(500).optional(),
      avatar: z.string().url().optional(),
    })
    .optional(),

  // Navigation and layout
  showHeader: z.boolean().default(true),
  showFooter: z.boolean().default(true),
  showBreadcrumb: z.boolean().default(true),
  showSidebar: z.boolean().default(false),

  // Content settings (enhanced)
  postsPerPage: z.number().int().min(5).max(100).default(10),
  maxContentWidth: z
    .enum(["sm", "md", "lg", "xl", "2xl", "full"])
    .default("lg"),
  excerptLength: z.number().int().min(50).max(500).default(150),

  // Feature flags (expanded)
  enableDarkModeToggle: z.boolean().default(true),
  enableSearch: z.boolean().default(true),
  enableComments: z.boolean().default(false),
  enableAnalytics: z.boolean().default(false),
  enablePWA: z.boolean().default(false),
  enableSitemap: z.boolean().default(true),
  enableRSS: z.boolean().default(false),

  // Authentication & Security (NEW)
  authEnabled: z.boolean().default(true),
  requireEmailVerification: z.boolean().default(false),
  passwordMinLength: z.number().int().min(6).max(128).default(8),
  sessionTimeout: z.number().int().min(300).max(86400).default(3600), // 5 minutes to 24 hours
  maxLoginAttempts: z.number().int().min(3).max(20).default(5),
  enableTwoFactor: z.boolean().default(false),
  allowedDomains: z.array(z.string().min(1)).optional(),

  // SEO and metadata (enhanced)
  robotsAllowed: z.boolean().default(true),
  defaultMetaImage: z.string().url().optional(),
  metaRobots: z
    .enum([
      "index,follow",
      "noindex,nofollow",
      "index,nofollow",
      "noindex,follow",
    ])
    .default("index,follow"),
  structuredDataEnabled: z.boolean().default(true),

  // Performance & Caching (NEW)
  enableImageOptimization: z.boolean().default(true),
  lazyLoadImages: z.boolean().default(true),
  enableServiceWorker: z.boolean().default(false),
  cacheTTL: z.number().int().min(60).max(86400).default(3600), // 1 minute to 24 hours
  compressionEnabled: z.boolean().default(true),
  cdnEnabled: z.boolean().default(false),

  // Error Handling (NEW)
  errorReportingEnabled: z.boolean().default(true),
  logLevel: z.enum(["error", "warn", "info", "debug"]).default("error"),
  enableErrorBoundary: z.boolean().default(true),
  showErrorDetails: z.boolean().default(false),

  // Contact information (enhanced)
  contactEmail: z.string().email().optional(),
  supportEmail: z.string().email().optional(),
  businessHours: z.string().max(200).optional(),

  // API settings (enhanced)
  apiBaseUrl: z.string().url().optional(),
  apiTimeout: z.number().int().min(1000).max(60000).default(10000),
  apiRetries: z.number().int().min(0).max(10).default(3),
  rateLimitPerMinute: z.number().int().min(10).max(10000).default(1000),

  // Storage settings (enhanced)
  enableLocalStorage: z.boolean().default(true),
  enableSessionStorage: z.boolean().default(true),
  enableIndexedDB: z.boolean().default(false),
  storageQuota: z.number().int().min(1).max(1000).default(50), // MB

  // Date and time (enhanced)
  timezone: z.string().default("UTC"),
  dateFormat: z
    .enum(["MM/dd/yyyy", "dd/MM/yyyy", "yyyy-MM-dd", "dd MMM yyyy"])
    .default("MM/dd/yyyy"),
  timeFormat: z.enum(["12h", "24h"]).default("12h"),

  // Animation and motion (enhanced)
  enableAnimations: z.boolean().default(true),
  animationDuration: z.enum(["fast", "normal", "slow"]).default("normal"),
  reducedMotion: z.boolean().default(false),

  // Privacy settings (enhanced)
  enableCookieConsent: z.boolean().default(true),
  enablePrivacyPolicy: z.boolean().default(true),
  dataRetentionDays: z.number().int().min(30).max(3650).default(365), // GDPR compliance
  analyticsTracking: z.enum(["none", "minimal", "full"]).default("minimal"),

  // Development & Debugging (enhanced)
  debugMode: z.boolean().default(false),
  enableDevTools: z.boolean().default(false),
  logRocketAppId: z.string().optional(),
  sentryDsn: z.string().url().optional(),

  // Advanced features
  enableMultiTenancy: z.boolean().default(false),
  enableABTesting: z.boolean().default(false),
  enableFeatureFlags: z.boolean().default(false),
  customCSS: z.string().optional(),
  customJS: z.string().optional(),
});

// Utility functions for better developer experience
export const validateSettings = (data: unknown) => {
  return settings.safeParse(data);
};

export const getDefaultSettings = (): Settings => {
  return settings.parse({});
};

export const mergeSettings = (
  baseSettings: Partial<Settings>,
  overrides: Partial<Settings>,
): Settings => {
  return settings.parse({ ...baseSettings, ...overrides });
};

export const getSettingsField = <K extends keyof Settings>(
  key: K,
): Settings[K] => {
  const defaults = getDefaultSettings();
  return defaults[key];
};

// Type helpers
export type SettingsInput = z.input<typeof settings>;
export type SettingsOutput = z.output<typeof settings>;

export type Settings = z.infer<typeof settings>;

export const settingsSchema = settings;
