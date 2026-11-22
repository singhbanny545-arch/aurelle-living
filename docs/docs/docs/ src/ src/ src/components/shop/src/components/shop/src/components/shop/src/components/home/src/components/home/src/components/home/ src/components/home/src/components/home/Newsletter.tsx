import React, { useState, type FormEvent } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      setStatus('error');
      return;
    }

    // Demo-only subscription confirmation.
    // Connect a backend or email marketing service for real subscriptions.
    setStatus('success');
    setEmail('');
  };

  return (
    <section
      id="newsletter"
      className="bg-[#292822] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 block text-[10px] font-medium uppercase tracking-[0.35em] text-[#C3A98B]">
            A Note from AURELLE
          </span>

          <h2 className="font-serif text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
            Beautiful Things,
            <span className="block italic text-[#C3A98B]">
              Delivered Occasionally.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/60">
            Join our mailing list for thoughtful inspiration,
            new collection announcements and a closer look
            at the world of AURELLE LIVING.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setStatus('idle');
              }}
              placeholder="Enter your email address"
              autoComplete="email"
              required
              className="min-h-14 flex-1 border border-white/25 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-white/40 transition-colors focus:border-[#C3A98B]"
            />

            <button
              type="submit"
              className="min-h-14 bg-white px-8 text-[10px] font-medium uppercase tracking-[0.2em] text-[#292822] transition-colors duration-300 hover:bg-[#C3A98B]"
            >
              Subscribe →
            </button>
          </form>

          {status === 'error' && (
            <p
              role="alert"
              className="mt-5 text-xs text-red-300"
            >
              Please enter a valid email address.
            </p>
          )}

          {status === 'success' && (
            <p
              role="status"
              className="mt-5 text-xs text-[#C3A98B]"
            >
              Thank you for your interest in AURELLE LIVING.
            </p>
          )}

          <p className="mt-6 text-[9px] leading-6 tracking-[0.12em] text-white/40">
            BY SUBSCRIBING, YOU AGREE TO RECEIVE OCCASIONAL
            EMAIL UPDATES. YOU CAN UNSUBSCRIBE AT ANY TIME.
          </p>

          <div className="mx-auto mt-16 h-px max-w-xs bg-white/15" />

          <p className="mt-8 font-serif text-2xl tracking-[0.2em] text-white">
            AURELLE
          </p>

          <p className="mt-2 text-[8px] uppercase tracking-[0.35em] text-[#C3A98B]">
            Living, Beautifully.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
