// reCAPTCHA Configuration
// Get your keys from: https://www.google.com/recaptcha/admin

export const RECAPTCHA_CONFIG = {
  // Site Key (public key) - used in frontend
  SITE_KEY: process.env.NODE_ENV === 'production' 
    ? 'YOUR_PRODUCTION_SITE_KEY' // Replace with your actual production site key
    : '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // Test key for development
  
  // Secret Key (private key) - used in backend
  SECRET_KEY: process.env.NODE_ENV === 'production'
    ? 'YOUR_PRODUCTION_SECRET_KEY' // Replace with your actual production secret key
    : '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe', // Test secret for development
};

// Instructions:
// 1. Go to https://www.google.com/recaptcha/admin
// 2. Create a new site
// 3. Choose reCAPTCHA v2 ("I'm not a robot" Checkbox)
// 4. Add your domain (e.g., uzairportfolio.tech)
// 5. Get your Site Key and Secret Key
// 6. Replace the production keys above
// 7. Add RECAPTCHA_SECRET_KEY to your Vercel environment variables
