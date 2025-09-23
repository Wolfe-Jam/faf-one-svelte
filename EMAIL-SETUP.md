# Email Capture Setup Options

## Current Status
The email form shows success but **doesn't send actual emails**. It only saves to browser localStorage.

## Quick Setup Options (Choose One):

### 1. Formspree (5 minutes)
- Go to https://formspree.io
- Sign up (free tier = 50 submissions/month)
- Create a form, get your form ID
- Replace `YOUR_FORM_ID` in EmailCapture.svelte
- Emails will be forwarded to your email address

### 2. ConvertKit (Best for launches)
- Sign up at https://convertkit.com
- Create a form/landing page
- Get your form ID from the embed code
- Use their API or embed their form directly

### 3. Netlify Forms (If deploying to Netlify)
Just add `netlify` attribute to the form:
```html
<form netlify name="founders">
```

### 4. Quick Vercel API Route
Create `/api/subscribe` endpoint that forwards to your email.

## To Retrieve Current Local Emails
Open browser console and run:
```javascript
JSON.parse(localStorage.getItem('faf-subscribers'))
```

## For Immediate Testing
The current setup saves emails locally. You can:
1. Submit emails on the form
2. Check browser console for saved emails
3. Export them manually

**Note**: No actual emails are sent until you connect one of the services above.