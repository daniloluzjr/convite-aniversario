'use client';

import React, { useState, useEffect } from 'react';

interface CountdownSectionProps {
  targetDate?: string;
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const CountdownSection: React.FC<CountdownSectionProps> = ({
  targetDate = '2027-06-20T00:00:00+00:00',
  title = '¡Ya casi!',
  ctaLabel = 'Confirmar asistencia',
  ctaHref = '#rsvp',
}) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    function calculate() {
      const difference = Math.max(0, new Date(targetDate).getTime() - Date.now());
      const totalSeconds = Math.floor(difference / 1000);
      setTimeLeft({
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      });
    }

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
  ];

  return (
    <section className="relative overflow-x-clip enc-paper-bg px-[22px] py-14 text-center">
      <img
        src="/themes/encanto/sprig.webp"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute z-0 h-auto select-none -left-5 top-3 w-24"
        style={{ transform: 'scaleX(-1) rotate(-8deg)' }}
      />

      <div className="enc-torn-top mx-auto w-full max-w-xs px-8 pt-10 pb-9">
        <p className="enc-label text-[var(--enc-muted)]">{title}</p>
        <span
          aria-hidden="true"
          className="enc-sprig mx-auto mt-3 w-14 opacity-80"
          style={{ aspectRatio: '552 / 200' }}
        />

        <div className="mt-4 flex flex-col items-center gap-3">
          {units.map((unit, idx) => (
            <div key={unit.label} className="flex flex-col items-center">
              {idx > 0 && <span className="mb-3 block h-px w-10 bg-[var(--enc-line)]" />}
              <span className="font-display text-[2.75rem] leading-none tabular-nums text-[var(--enc-ink)]">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="enc-label mt-1 text-[var(--enc-muted)]">{unit.label}</span>
            </div>
          ))}
        </div>

        <div className="enc-seal mx-auto mt-7 w-12" />
      </div>

      <div className="mt-7">
        <a href={ctaHref} className="enc-button-outline">
          {ctaLabel}
        </a>
      </div>
    </section>
  );
};
