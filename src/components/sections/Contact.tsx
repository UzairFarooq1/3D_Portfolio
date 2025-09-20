import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import SuccessPopup from '../atoms/SuccessPopup';
import { RECAPTCHA_CONFIG } from '../../config/recaptcha';

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map(input => [input, ''])
);

// API endpoint for sending emails
const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://www.uzairportfolio.tech'
    : 'http://localhost:3001';

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();

    // Check if CAPTCHA is completed
    if (!captchaValue) {
      alert('Please complete the CAPTCHA verification.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          captcha: captchaValue,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage(
          'Thank you! I have received your message and will get back to you as soon as possible.'
        );
        setShowSuccessPopup(true);
        setForm(INITIAL_STATE);
        setCaptchaValue(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        throw new Error(data.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      alert(
        'Sorry, there was an error sending your message. Please try again or contact me directly at uzairf2580@gmail.com'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SuccessPopup
        isVisible={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        message={successMessage}
      />
      <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="bg-black-100 flex-[0.75] rounded-2xl p-8"
        >
          <Header useMotion={false} {...config.contact} />

          <form
            // @ts-expect-error
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            {Object.keys(config.contact.form).map(input => {
              const { span, placeholder } =
                config.contact.form[input as keyof typeof config.contact.form];
              const Component = input === 'message' ? 'textarea' : 'input';

              return (
                <label key={input} className="flex flex-col">
                  <span className="mb-4 font-medium text-white">{span}</span>
                  <Component
                    type={input === 'email' ? 'email' : 'text'}
                    name={input}
                    value={form[`${input}`]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                    {...(input === 'message' && { rows: 7 })}
                  />
                </label>
              );
            })}

            {/* reCAPTCHA */}
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_CONFIG.SITE_KEY}
                onChange={handleCaptchaChange}
                theme="dark"
              />
            </div>

            <button
              type="submit"
              className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-tertiary p-8 rounded-2xl mb-8 w-full max-w-md">
              <h3 className="text-white text-xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-purple-300 font-semibold mr-3">📧</span>
                  <span className="text-white">uzairf2580@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-300 font-semibold mr-3">📱</span>
                  <span className="text-white">+254 791 495274</span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-300 font-semibold mr-3">💼</span>
                  <a
                    href="https://linkedin.com/in/uzair-farooq-6830751b4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-300 font-semibold mr-3">🐙</span>
                  <a
                    href="https://github.com/UzairFarooq1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-300 font-semibold mr-3">🌐</span>
                  <a
                    href="https://uzairportfolio.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    uzairportfolio.tech
                  </a>
                </div>
              </div>
            </div>
            <EarthCanvas />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
