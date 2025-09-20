# Deployment Guide for Email Functionality

## For Vercel Deployment (Recommended)

### 1. Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy your project
vercel

# Set environment variables
vercel env add GMAIL_USER
vercel env add GMAIL_APP_PASSWORD
```

### 2. Environment Variables
Set these in your Vercel dashboard (Settings → Environment Variables):
- `GMAIL_USER`: uzairf2580@gmail.com
- `GMAIL_APP_PASSWORD`: your_gmail_app_password

### 3. Important Notes
- The API function is located at `api/send-email.js`
- Vercel will automatically detect and deploy it
- No `vercel.json` configuration needed
- Make sure to set environment variables in Vercel dashboard

### 4. Files Created
- `api/send-email.js` - Serverless function for email sending
- `api/package.json` - Dependencies for the API function
- `src/components/atoms/SuccessPopup.tsx` - Custom success popup

## For Netlify Deployment

### 1. Create Netlify Function
Create `netlify/functions/send-email.js` with the same content as `api/send-email.js`

### 2. Environment Variables
Set in Netlify dashboard:
- `GMAIL_USER`: uzairf2580@gmail.com
- `GMAIL_APP_PASSWORD`: your_gmail_app_password

## For Other Hosting Providers

### 1. Keep the Express Server
Use the `server.js` file and deploy it to:
- Heroku
- Railway
- DigitalOcean
- AWS EC2

### 2. Update API URL
Change the production URL in `src/components/sections/Contact.tsx` to your server's URL.

## Testing

### Local Development
```bash
# Start both frontend and backend
npm run dev:full

# Or start separately
npm run server  # Backend on port 3001
npm run dev     # Frontend on port 5173
```

### Production Testing
1. Deploy your changes
2. Test the contact form on your live site
3. Check that emails are received at uzairf2580@gmail.com

## Troubleshooting

### Common Issues
1. **404 Error**: Make sure the API endpoint is deployed correctly
2. **CORS Error**: Check that CORS headers are set in the serverless function
3. **Email Not Sending**: Verify Gmail app password is correct
4. **JSON Parse Error**: Ensure the API returns proper JSON, not HTML

### Gmail Setup
1. Enable 2-Factor Authentication
2. Generate App Password: Google Account → Security → 2-Step Verification → App passwords
3. Use the app password (not your regular password) in environment variables
