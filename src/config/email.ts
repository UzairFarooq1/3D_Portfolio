// Email configuration
export const emailConfig = {
  // Gmail SMTP settings
  gmail: {
    email: 'uzairf2580@gmail.com',
    appPassword: 'atnqvxlgvtpdgrxn',
    smtp: {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'uzairf2580@gmail.com',
        pass: 'atnqvxlgvtpdgrxn'
      }
    }
  },
  
  // EmailJS settings (replace with your actual EmailJS credentials)
  emailjs: {
    serviceId: 'service_gmail', // Replace with your actual EmailJS service ID
    templateId: 'template_contact', // Replace with your actual EmailJS template ID
    publicKey: 'your_emailjs_public_key' // Replace with your actual EmailJS public key
  }
};

// Email templates
export const emailTemplates = {
  contactForm: {
    subject: 'New Contact Form Submission - Portfolio',
    html: (data: { name: string; email: string; message: string }) => `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      <hr>
      <p><em>This message was sent from your portfolio contact form.</em></p>
    `,
    text: (data: { name: string; email: string; message: string }) => `
      New Contact Form Submission
      
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
      
      This message was sent from your portfolio contact form.
    `
  }
};
