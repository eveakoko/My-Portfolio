import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Eve Nicole',
          from_email: form.email,
          to_email: 'evenicoleakoko@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col px-4 md:px-8">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen w-full object-cover"
        />

        <div className="contact-container bg-opacity-90 p-6 md:p-10 rounded-xl shadow-lg w-full max-w-lg">
          <h3 className="head-text mt-7 text-center text-white text-3xl">Let's talk</h3>
          <p className="text-lg text-gray-300 mt-3 text-center leading-relaxed">
            Whether you want to launch a new website, optimize an existing one, or bring a fresh idea to life, I’m here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col space-y-6"
          >
            <label className="space-y-2">
              <span className="field-label text-sm text-gray-400">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input px-4 py-3 rounded-md w-full bg-gray-700 text-white"
                placeholder="ex., name"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label text-sm text-gray-400">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input px-4 py-3 rounded-md w-full bg-gray-700 text-white"
                placeholder="ex., name@gmail.com"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label text-sm text-gray-400">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input px-4 py-3 rounded-md w-full bg-gray-700 text-white"
                placeholder="How can I assist?..."
              />
            </label>

            <button
              className="field-btn px-6 py-3 rounded-md bg-blue-600 text-white font-semibold flex justify-center items-center gap-2 hover:bg-blue-700 disabled:bg-gray-600"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
