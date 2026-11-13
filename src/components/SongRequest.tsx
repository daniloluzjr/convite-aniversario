'use client';

import React, { useState } from 'react';

export const SongRequest: React.FC = () => {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!song.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-x-clip px-[22px] py-14 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="font-display text-[1.375rem] leading-[1.25] tracking-[0.02em] text-[var(--enc-ink)] sm:text-2xl">
          Pide tu canción
        </h2>
        <span
          aria-hidden="true"
          className="enc-sprig block mx-auto mt-3 w-36 text-[var(--enc-accent)] sm:w-40"
          style={{ aspectRatio: '552 / 200' }}
        />

        <p className="mt-3 text-[0.92rem] leading-[1.65] text-[var(--enc-muted)]">
          Recomiéndanos las mejores canciones que no pueden faltar o las que te ponen a bailar.
        </p>

        {submitted ? (
          <div className="enc-card mx-auto mt-6 p-6">
            <p className="font-display text-lg text-[var(--enc-ink)]">
              ¡Gracias por tus recomendaciones!
            </p>
            <p className="mt-1 text-xs text-[var(--enc-muted)]">
              &quot;{song}&quot; {artist && `de ${artist}`} se ha agregado a la lista.
            </p>
            <button
              type="button"
              onClick={() => {
                setSong('');
                setArtist('');
                setSubmitted(false);
              }}
              className="enc-button-outline mt-4 text-xs"
            >
              Recomendar otra canción
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
            <input
              type="text"
              required
              placeholder="Nombre de la canción *"
              value={song}
              onChange={e => setSong(e.target.value)}
              className="enc-field"
            />
            <input
              type="text"
              placeholder="Artista o grupo (opcional)"
              value={artist}
              onChange={e => setArtist(e.target.value)}
              className="enc-field"
            />
            <div className="mt-4">
              <button type="submit" className="enc-button w-full cursor-pointer">
                Recomendar
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
