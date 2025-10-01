# SPA Routing Fix - October 1, 2025

## The Problem

**Direct URL access to routes was returning 404**, while navigation from within the site worked perfectly.

Example:
- ✅ Works: Navigate to `/68-minutes` from homepage
- ❌ Failed: Direct access to `https://www.faf.one/68-minutes`

This was discovered during **live Hacker News traffic** - critical timing!

## Root Cause

The site uses SvelteKit with `@sveltejs/adapter-static` in SPA mode:

```js
// svelte.config.js
adapter: adapter({
  fallback: 'index.html',  // SPA mode
  // ...
})
```

In SPA mode, SvelteKit builds a single `index.html` and handles all routing client-side. When users navigate within the app, the router works perfectly. But when accessing a URL directly, Vercel's server needs to know to serve `index.html` for all routes.

**The `vercel.json` was missing the SPA fallback configuration.**

## The Solution

Updated `vercel.json` to properly handle SPA routing:

```json
{
  "outputDirectory": "build",
  "buildCommand": "npm run build",
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### How It Works

1. `{ "handle": "filesystem" }` - First, check if the requested path is an actual file (images, CSS, JS, etc.)
2. `{ "src": "/(.*)", "dest": "/index.html" }` - If no file exists, serve `index.html` and let SvelteKit's client-side router handle it

This ensures:
- Static assets are served directly
- All routes fall back to `index.html`
- SvelteKit router takes over from there

## Timeline

- **11:25am** - Created `/68-minutes` route (commit `614459d`)
- **12:35pm** - Multiple redeploy attempts, still 404 on direct access
- **12:54pm** - Diagnosed issue: missing SPA fallback in `vercel.json`
- **12:55pm** - Applied fix (commit `437a239`, improved in `0586481`)

## Testing

After deployment completes:

1. ✅ Direct URL access: `https://www.faf.one/68-minutes`
2. ✅ Client-side navigation: Homepage → `/68-minutes`
3. ✅ Static assets load: Images, CSS, JavaScript
4. ✅ All other routes work on direct access

## Key Commits

- `614459d` - Created `/68-minutes` page
- `437a239` - First fix attempt with `rewrites`
- `0586481` - **Final fix** with proper `routes` config

## Prevention

For future SvelteKit SPA deployments on Vercel:

**Always include this in `vercel.json`:**

```json
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

Or use the Vercel adapter instead: `@sveltejs/adapter-vercel`

---

**Status**: Fixed and deployed
**Priority**: CRITICAL (live on HN)
**Impact**: All SPA routes now work on direct access
