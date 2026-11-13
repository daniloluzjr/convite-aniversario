'use client';

import React, { useState } from 'react';

export const GiftsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const clabe = '123456789654123';

  const handleCopy = () => {
    navigator.clipboard.writeText(clabe);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative overflow-x-clip enc-paper mx-auto max-w-md px-[22px] py-14 text-center">
      <img
        src="/themes/encanto/sprig-b.webp"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute z-0 h-auto select-none -right-4 top-1 w-24"
        style={{ transform: 'rotate(-10deg)' }}
      />

      <div className="flex flex-col items-center text-center mb-4">
        <h2 className="font-display text-[1.375rem] leading-[1.25] tracking-[0.02em] text-[var(--enc-ink)] sm:text-2xl">
          Mesa de regalos
        </h2>
        <span
          aria-hidden="true"
          className="enc-sprig block mx-auto mt-3 w-36 text-[var(--enc-accent)] sm:w-40"
          style={{ aspectRatio: '552 / 200' }}
        />
      </div>

      <p className="mx-auto max-w-[18rem] text-[0.9rem] leading-[1.55] whitespace-pre-line text-[var(--enc-muted)]">
        Tu presencia sería nuestro mejor regalo, pero si deseas hacernos un regalo de corazón, te dejamos esta sugerencia:
      </p>

      {/* External Registries */}
      <div className="mt-8 flex flex-col gap-3">
        <a
          href="https://www.liverpool.com.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="enc-button-outline"
        >
          Liverpool
        </a>
        <a
          href="https://www.amazon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="enc-button-outline"
        >
          Amazon
        </a>
      </div>

      {/* Lluvia de sobres */}
      <div className="mx-auto mt-9 max-w-xs text-center">
        <svg
          viewBox="0 0 64 56"
          className="mx-auto h-14 w-16 text-[var(--enc-accent)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 26L20 13.6M24.1 10L32 3l7.9 7M44 13.6L58 26" />
          <path d="M20 35.5V12a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v23.5" />
          <path d="M25 17h14M25 22h8" />
          <path
            d="M38 24.5c-1.2-1.4-3.4-.3-2.5 1.3.5.9 2.5 2 2.5 2s2-1.1 2.5-2c.9-1.6-1.3-2.7-2.5-1.3z"
            strokeWidth="1.2"
          />
          <path d="M6 26v23a3 3 0 0 0 3 3h46a3 3 0 0 0 3-3V26" />
          <path d="M6 26l26 18 26-18" />
        </svg>

        <p className="mt-3 font-display text-lg leading-snug tracking-[0.04em] text-[var(--enc-ink)]">
          Lluvia de sobres
        </p>
        <p className="mt-2 whitespace-pre-line text-[0.9rem] leading-[1.55] text-[var(--enc-muted)]">
          También tendremos lluvia de sobres en el evento por si prefieres sumar kilómetros a nuestra luna de miel!
        </p>
      </div>

      {/* Bank Account Info */}
      <div className="enc-card-band mx-auto mt-9 max-w-sm px-8 py-9 text-left">
        <span className="enc-label block">
          O suma kilómetros a nuestra luna de miel directamente a nuestra cuenta:
        </span>
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-[var(--enc-hairline)] pt-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-[var(--enc-muted)] font-semibold">
              CLABE Interbancaria
            </p>
            <p className="font-mono text-base font-semibold tracking-wider text-[var(--enc-ink)] mt-0.5">
              {clabe}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="enc-button text-xs py-2 px-3 cursor-pointer"
          >
            {copied ? '¡Copiado!' : 'Copiar'}
          </button>
        </div>
      </div>
    </section>
  );
};
