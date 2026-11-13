import React from 'react';

export const SocialSection: React.FC = () => {
  return (
    <section className="bg-[var(--enc-accent)] px-[22px] py-14 text-center text-[var(--enc-ink-on-accent)]">
      <div className="flex flex-col items-center gap-4">
        {/* Instagram Icon */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 opacity-90"
          aria-hidden="true"
        >
          <rect x="6" y="6" width="36" height="36" rx="10" />
          <circle cx="24" cy="24" r="8.5" />
          <circle cx="34.5" cy="13.5" r="1.6" fill="currentColor" stroke="none" />
        </svg>

        <p className="max-w-[16rem] text-[0.9rem] leading-[1.55] opacity-90">
          Comparte tus fotos con el hashtag:
        </p>

        <p className="font-display text-3xl leading-tight tracking-[0.02em]">
          #ximeyrafa
        </p>

        <span className="h-px w-20 bg-current opacity-40 mt-1" />
      </div>
    </section>
  );
};
