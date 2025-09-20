import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { EMAILJS_CONFIG } from '../../config/emailjs-config';

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map(input => [input, ''])
);

const emailjsConfig = {
  serviceId: EMAILJS_CONFIG.SERVICE_ID,
  templateId: EMAILJS_CONFIG.TEMPLATE_ID,
  accessToken: EMAILJS_CONFIG.PUBLIC_KEY,
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    // Prepare email data
    const emailData = {
      form_name: form.name,
      to_name: config.html.fullName,
      from_email: form.email,
      to_email: EMAILJS_CONFIG.GMAIL_EMAIL,
      message: form.message,
      subject: 'New Contact Form Submission - Portfolio',
      reply_to: form.email,
    };

    emailjs
      .send(emailjsConfig.serviceId, emailjsConfig.templateId, emailData, emailjsConfig.accessToken)
      .then(
        () => {
          setLoading(false);
          alert(
            'Thank you! I have received your message and will get back to you as soon as possible.'
          );

          setForm(INITIAL_STATE);
        },
        error => {
          setLoading(false);
          console.error('EmailJS Error:', error);
          alert(
            'Sorry, there was an error sending your message. Please try again or contact me directly at ' +
              EMAILJS_CONFIG.GMAIL_EMAIL
          );
        }
      );
  };

  return (
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
  );
};

export default SectionWrapper(Contact, 'contact');
