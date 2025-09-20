# Email Setup Guide for Portfolio Contact Form

This guide will help you set up Gmail SMTP with EmailJS for the contact form.

## Prerequisites

1. Gmail account: `uzairf2580@gmail.com`
2. Gmail App Password: `atnqvxlgvtpdgrxn` (already provided)
3. EmailJS account (free)

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Gmail Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail" as the service
4. Enter your Gmail credentials:
   - **Email**: `uzairf2580@gmail.com`
   - **Password**: `atnqvxlgvtpdgrxn` (use the app password, not your regular password)
5. Click "Create Service"
6. Note down the **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template Name**: `template_contact`

**Subject**: `New Contact Form Submission - Portfolio`

**Content**:
```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{form_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<hr>
<p><em>This message was sent from your portfolio contact form.</em></p>
```

4. Set the **To Email** to: `uzairf2580@gmail.com`
5. Set the **From Name** to: `{{form_name}}`
6. Set the **Reply To** to: `{{from_email}}`
7. Save the template
8. Note down the **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Public Key

1. Go to "Account" in EmailJS dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update Configuration

Update the `src/config/email.ts` file with your actual EmailJS credentials:

```typescript
export const emailConfig = {
  emailjs: {
    serviceId: 'service_xxxxx', // Replace with your actual service ID
    templateId: 'template_xxxxx', // Replace with your actual template ID
    publicKey: 'xxxxxxxxxxxxx' // Replace with your actual public key
  }
};
```

## Step 6: Test the Form

1. Start the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your Gmail inbox for the test email

## Troubleshooting

- **Authentication Error**: Make sure you're using the Gmail App Password, not your regular password
- **Service Not Found**: Double-check the Service ID in your configuration
- **Template Not Found**: Double-check the Template ID in your configuration
- **Invalid Public Key**: Verify the Public Key is correct

## Security Notes

- Never commit your actual EmailJS credentials to version control
- The Gmail App Password is already configured and should work
- EmailJS handles the SMTP connection securely

## Alternative: Direct SMTP (Advanced)

If you prefer to use direct SMTP instead of EmailJS, you would need to:
1. Set up a backend server (Node.js/Express)
2. Use nodemailer with Gmail SMTP
3. Handle CORS and security properly

The EmailJS approach is recommended for frontend-only applications.
