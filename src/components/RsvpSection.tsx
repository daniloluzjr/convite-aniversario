'use client';

import React, { useState } from 'react';

interface RsvpSectionProps {
  initialGuestName?: string;
  defaultPasses?: number;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({
  initialGuestName = '',
  defaultPasses = 2,
}) => {
  const [name, setName] = useState(initialGuestName);
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guests, setGuests] = useState<number>(defaultPasses);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome completo.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          guests: Number(guests),
          attending,
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar confirmação.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Ocorreu um erro ao enviar. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="enc-paper-bg relative overflow-x-clip px-[22px] py-14 scroll-mt-6">
      <div className="enc-card mx-auto max-w-md px-8 pt-11 pb-11 text-center">
        <span aria-hidden="true" className="enc-seal mx-auto block w-14" />

        <h2 className="font-display mt-3 text-[1.375rem] tracking-[0.02em] text-[var(--enc-ink)] sm:text-2xl">
          {submitted ? 'Presença Confirmada' : 'Confirma tu asistencia'}
        </h2>

        {!submitted ? (
          <>
            <p className="mt-2 text-[0.85rem] whitespace-pre-line text-[var(--enc-muted)]">
              Por favor confirma tu asistencia máximo 15 días antes de la fecha del evento, de lo contrario entenderemos que no podrás acompañarnos.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 text-left">
              {/* Campo Nome */}
              <div className="flex flex-col gap-1.5">
                <label className="enc-label" htmlFor="rsvp-name">
                  Nome Completo *
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  required
                  placeholder="Escreva seu nome completo"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="enc-field"
                />
              </div>

              {/* Botões de Presença */}
              <div className="flex flex-col gap-1.5">
                <span className="enc-label">¿Asistirás?</span>
                <div className="flex gap-3 mt-1">
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
              </div>

              {/* Campo Quantidade de Pessoas */}
              {attending === 'yes' && (
                <div className="flex flex-col gap-1.5">
                  <label className="enc-label" htmlFor="rsvp-guests">
                    Número de pessoas
                  </label>
                  <select
                    id="rsvp-guests"
                    value={guests}
                    onChange={e => setGuests(Number(e.target.value))}
                    className="enc-field appearance-none cursor-pointer bg-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'pessoa' : 'pessoas'}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Mensagem Opcional */}
              <div className="flex flex-col gap-1.5">
                <label className="enc-label" htmlFor="rsvp-message">
                  Mensagem aos noivos (opcional)
                </label>
                <textarea
                  id="rsvp-message"
                  rows={2}
                  placeholder="Deixe uma mensagem carinhosa..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="enc-field resize-none"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-rose-700 font-semibold text-center mt-1">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="enc-button mt-4 w-full cursor-pointer disabled:opacity-50 text-center justify-center"
              >
                {submitting ? 'Enviando confirmação...' : 'Confirmar Presença'}
              </button>
            </form>
          </>
        ) : (
          <div className="mt-4 text-center">
            <p className="font-names mt-2 text-[1.5rem] leading-tight tracking-[0.06em] text-[var(--enc-ink)]">
              {name}
            </p>
            <p className="mt-2 text-[0.95rem] text-[var(--enc-muted)]">
              {attending === 'yes'
                ? 'Sua presença foi confirmada e os noivos foram notificados por e-mail!'
                : 'Registramos sua resposta e os noivos foram informados. Sentiremos sua falta!'}
            </p>

            {attending === 'yes' && (
              <div className="mx-auto mt-4 flex flex-col items-center border-t border-b border-[var(--enc-hairline)] py-4">
                <span className="font-display text-4xl leading-none tabular-nums text-[var(--enc-ink)]">
                  {guests}
                </span>
                <span className="enc-label mt-1">
                  {guests === 1 ? 'pessoa confirmada' : 'pessoas confirmadas'}
                </span>
              </div>
            )}

            <span className="mx-auto mt-5 block h-px w-[22px] bg-[var(--enc-line)]" />
            <p className="mt-4 text-[0.8rem] leading-[1.55] text-[var(--enc-muted)]">
              Precisa alterar alguma informação?
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="enc-button-outline mt-3 w-full cursor-pointer text-xs"
            >
              Modificar resposta
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
