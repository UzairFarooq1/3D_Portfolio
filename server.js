import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Gmail SMTP configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'uzairf2580@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'atnqvxlgvtpdgrxn',
  },
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, message, captcha } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, and message are required',
      });
    }

    // Verify CAPTCHA
    if (!captcha) {
      return res.status(400).json({
        success: false,
        error: 'Please complete the CAPTCHA verification',
      });
    }

    // Verify CAPTCHA with Google
    const captchaSecret =
      process.env.RECAPTCHA_SECRET_KEY || '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'; // Test secret
    const captchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${captchaSecret}&response=${captcha}`,
    });

    const captchaData = await captchaResponse.json();
    if (!captchaData.success) {
      return res.status(400).json({
        success: false,
        error: 'CAPTCHA verification failed. Please try again.',
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER || 'uzairf2580@gmail.com',
      to: process.env.GMAIL_USER || 'uzairf2580@gmail.com',
      subject: 'New Contact Form Submission - Portfolio',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from your portfolio contact form.</em></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        This message was sent from your portfolio contact form.
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
