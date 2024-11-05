import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_e3oe5sk',
        'template_bj1bytp',
        e.currentTarget,
        'p15lwjRo4RRsjDpMc'
      );
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-current focus:outline-none dark:bg-zinc-800 bg-gray-100 text-black dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-current focus:outline-none dark:bg-zinc-800 bg-gray-100 text-black dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-current focus:outline-none dark:bg-zinc-800 bg-gray-100 text-black dark:text-white"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50"
      >
        <Send size={20} />
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 dark:text-red-400 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
};

export default ContactForm;