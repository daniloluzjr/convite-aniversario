import React from 'react';

interface StorySectionProps {
  guestName?: string;
  passesCount?: number;
}

export const StorySection: React.FC<StorySectionProps> = ({
  guestName = 'Santiago Gutierrez Garcia',
  passesCount = 2,
}) => {
  return (
    <section className="relative overflow-x-clip px-[22px] py-14 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="font-display text-[1.375rem] leading-[1.25] tracking-[0.02em] text-[var(--enc-ink)] sm:text-2xl">
          ¡Nos vamos a casar!
        </h2>
        <span
          aria-hidden="true"
          className="enc-sprig block mx-auto mt-3 w-36 text-[var(--enc-accent)] sm:w-40"
          style={{ aspectRatio: '552 / 200' }}
        />

        <p className="font-script mt-2 mb-6 text-[1.75rem] leading-none text-[var(--enc-accent)]">
          Y sería un honor que pudieras acompañarnos
        </p>

        {/* Narrative Card */}
        <div className="enc-card mx-auto mb-8 px-10 py-9 text-left">
          <p className="text-[0.92rem] leading-[1.65] text-[var(--enc-muted)]">
            Cada uno de ustedes juega un papel único en nuestras vidas, Así que esperamos que puedas acompañarnos en este día tan importante que siempre atesoraremos.
          </p>
        </div>

        {/* Personalized Guest Ticket */}
        {guestName && (
          <div className="enc-ticket mx-auto px-9 pt-10 pb-16 text-center">
            <p className="enc-label text-[var(--enc-muted)]">Estás cordialmente invitado</p>
            <p className="font-names mt-2 text-[1.6rem] leading-tight tracking-[0.05em] text-[var(--enc-ink)]">
              {guestName}
            </p>
            <p className="mt-4 text-[0.9rem] text-[var(--enc-muted)]">
              Tenemos reservados <br />
              <span className="font-display text-3xl tabular-nums text-[var(--enc-ink)] font-semibold">
                {passesCount}
              </span>{' '}
              {passesCount === 1 ? 'pase' : 'pases'} para ti
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
