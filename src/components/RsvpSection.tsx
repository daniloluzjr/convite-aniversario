'use client';

import React, { useState } from 'react';

interface RsvpSectionProps {
  guestName?: string;
  maxPasses?: number;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({
  guestName = 'Santiago Gutierrez Garcia',
  maxPasses = 2,
}) => {
  const [attending, setAttending] = useState<'yes' | 'no' | null>(null);
  const [passes, setPasses] = useState<number>(maxPasses);
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attending) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const passOptions = Array.from({ length: maxPasses }, (_, i) => i + 1);

  return (
    <section id="rsvp" className="enc-paper-bg relative overflow-x-clip px-[22px] py-14 scroll-mt-6">
      <div className="enc-card mx-auto max-w-md px-9 pt-11 pb-11 text-center">
        <span aria-hidden="true" className="enc-seal mx-auto block w-14" />

        <h2 className="font-display mt-3 text-[1.375rem] tracking-[0.02em] text-[var(--enc-ink)] sm:text-2xl">
          {submitted ? 'Confirmado' : 'Confirma tu asistencia'}
        </h2>

        {!submitted ? (
          <>
            <p className="mt-2 text-[0.85rem] whitespace-pre-line text-[var(--enc-muted)]">
              Por favor confirma tu asistencia máximo 15 días antes de la fecha del evento, de lo contrario entenderemos que no podrás acompañarnos.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
              {/* Nombre del invitado */}
              <div className="flex flex-col gap-1.5 text-left">
                <span className="enc-label">Nombre</span>
                <p className="py-1 text-left text-[var(--enc-ink)] font-medium">
                  {guestName}
                </p>
              </div>

              {/* Selector de pases */}
              <div className="flex flex-col gap-1.5 text-left">
                <span className="enc-label">Número de personas</span>
                <select
                  value={passes}
                  onChange={e => setPasses(Number(e.target.value))}
                  className="enc-field appearance-none cursor-pointer"
                >
                  {passOptions.map(p => (
                    <option key={p} value={p}>
                      {p} {p === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Botones de asistencia */}
              <div className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setAttending('yes')}
                  className={`flex-1 border px-2 py-3 text-center text-xs tracking-widest uppercase transition rounded-[8px] cursor-pointer ${
                    attending === 'yes'
                      ? 'border-[var(--enc-accent)] bg-[var(--enc-accent)] text-[var(--enc-ink-on-accent)] font-semibold shadow-sm'
                      : 'border-[var(--enc-line)] text-[var(--enc-muted)] hover:border-[var(--enc-accent)]'
                  }`}
                >
                  Sí, asistiré
                </button>
                <button
                  type="button"
                  onClick={() => setAttending('no')}
                  className={`flex-1 border px-2 py-3 text-center text-xs tracking-widest uppercase transition rounded-[8px] cursor-pointer ${
                    attending === 'no'
                      ? 'border-[var(--enc-accent)] bg-[var(--enc-accent)] text-[var(--enc-ink-on-accent)] font-semibold shadow-sm'
                      : 'border-[var(--enc-line)] text-[var(--enc-muted)] hover:border-[var(--enc-accent)]'
                  }`}
                >
                  No podré asistir
                </button>
              </div>

              {/* Detalles si asiste */}
              {attending === 'yes' && (
                <>
                  <div className="flex flex-col gap-1.5 text-left mt-2">
                    <span className="enc-label">Restricciones alimenticias / Alergias</span>
                    <input
                      type="text"
                      placeholder="Vegetariano, celíaco, etc. (opcional)"
                      value={dietaryNotes}
                      onChange={e => setDietaryNotes(e.target.value)}
                      className="enc-field"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <span className="enc-label">Mensaje para los novios</span>
                    <textarea
                      rows={2}
                      placeholder="Déjanos unas palabras... (opcional)"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="enc-field resize-none"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={!attending || submitting}
                className="enc-button mt-4 w-full cursor-pointer disabled:opacity-50"
              >
                {submitting ? 'Confirmando...' : 'Confirmar asistencia'}
              </button>
            </form>
          </>
        ) : (
          <div className="mt-4">
            <p className="font-names mt-2 text-[1.5rem] leading-tight tracking-[0.06em] text-[var(--enc-ink)]">
              {guestName}
            </p>
            <p className="mt-1 text-[0.95rem] text-[var(--enc-muted)]">
              {attending === 'yes'
                ? '¡Tu lugar ya está reservado! Nos dará enorme gusto verte.'
                : 'Lamentamos que no puedas acompañarnos, gracias por informarnos.'}
            </p>

            {attending === 'yes' && (
              <div className="mx-auto mt-4 flex flex-col items-center border-t border-b border-[var(--enc-hairline)] py-4">
                <span className="font-display text-4xl leading-none tabular-nums text-[var(--enc-ink)]">
                  {passes}
                </span>
                <span className="enc-label mt-1">
                  {passes === 1 ? 'lugar confirmado' : 'lugares confirmados'}
                </span>
              </div>
            )}

            <span className="mx-auto mt-5 block h-px w-[22px] bg-[var(--enc-line)]" />
            <p className="mt-4 text-[0.8rem] leading-[1.55] text-[var(--enc-muted)]">
              ¿Necesitas cambiar algo?
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="enc-button-outline mt-3 w-full cursor-pointer"
            >
              Modificar confirmación
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
