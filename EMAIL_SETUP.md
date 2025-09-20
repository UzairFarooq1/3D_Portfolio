# Email Setup Instructions

## Gmail SMTP Configuration

This portfolio now uses Gmail SMTP instead of EmailJS for sending contact form emails.

### Setup Steps

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the generated password

3. **Environment Variables**:
   Create a `.env` file in the root directory with:
   ```
   GMAIL_USER=uzairf2580@gmail.com
   GMAIL_APP_PASSWORD=your_app_password_here
   PORT=3001
   ```

4. **Running the Application**:
   - Start the backend server: `npm run server`
   - Start the frontend: `npm run dev`
   - Or run both together: `npm run dev:full`

### How It Works

- The contact form sends data to `/api/send-email` endpoint
- The server uses Nodemailer with Gmail SMTP to send emails
- Emails are sent from your Gmail account to yourself
- The sender's email is set as the reply-to address

### Troubleshooting

- Make sure the Gmail app password is correct
- Ensure 2FA is enabled on your Gmail account
- Check that the server is running on port 3001
- Verify CORS is properly configured for your domain