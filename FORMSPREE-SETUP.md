# 🚀 Formspree Quick Setup (5 minutes)

## Step 1: Create Formspree Account
1. Go to https://formspree.io
2. Sign up with your email (free tier = 50 submissions/month)
3. Verify your email

## Step 2: Create Your Form
1. Click **"+ New Form"** button
2. Name it: **"FAF Founders Circle"**
3. Set your notification email (where you'll receive signups)
4. Click **"Create Form"**

## Step 3: Get Your Form ID
1. You'll see a URL like: `https://formspree.io/f/xnqwerty`
2. Copy the ID part: `xnqwerty` (yours will be different)

## Step 4: Add to Your Code
1. Open `src/lib/components/EmailCapture.svelte`
2. Find line 20: `const FORMSPREE_ID = 'YOUR_FORM_ID';`
3. Replace with your ID: `const FORMSPREE_ID = 'xnqwerty';`
4. Save the file

## Step 5: Test It
1. Go to your site
2. Submit a test email
3. Check your inbox - you should receive it!
4. Check Formspree dashboard for all submissions

## Features You Get
✅ Email notifications for each signup
✅ Dashboard with all submissions
✅ Export to CSV
✅ Spam protection
✅ Local backup (emails also save to localStorage)
✅ Works immediately, no server needed

## Backup System
Even with Formspree, emails are ALSO saved locally as backup.
To retrieve local backup:
```javascript
JSON.parse(localStorage.getItem('faf-subscribers'))
```

## Upgrading Later
When you hit 50+ signups/month, you can:
- Upgrade Formspree ($8/month for 250)
- Switch to ConvertKit/Mailchimp
- Build your own API endpoint

---
**Ready to launch in 5 minutes!** 🏎️