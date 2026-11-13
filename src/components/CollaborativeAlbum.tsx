'use client';

import React, { useState, useRef } from 'react';

export const CollaborativeAlbum: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const reader = new FileReader();
    reader.onload = () => {
      setTimeout(() => {
        setPhotos(prev => [reader.result as string, ...prev]);
        setUploading(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }, 1000);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="px-6 py-16 text-center sm:py-20 enc-paper">
      <div className="mx-auto max-w-md">
        <h2 className="font-display text-[1.375rem] leading-[1.25] tracking-[0.02em] text-[var(--enc-ink)] sm:text-2xl">
          Álbum colaborativo
        </h2>
        <span
          aria-hidden="true"
          className="enc-sprig block mx-auto mt-3 w-36 text-[var(--enc-accent)] sm:w-40"
          style={{ aspectRatio: '552 / 200' }}
        />

        <p className="mt-3 text-[0.92rem] leading-[1.65] text-[var(--enc-muted)]">
          Nos encantaría contar con tus fotos. Las más divertidas, espontáneas e íntimas. Esas que solo tú puedes capturar.
        </p>

        <div className="mt-6">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="enc-button cursor-pointer disabled:opacity-50"
          >
            {uploading ? 'Subiendo foto...' : 'Subir una foto'}
          </button>
        </div>

        {success && (
          <p className="mt-3 text-xs font-semibold text-emerald-700">
            ¡Foto agregada al álbum con éxito!
          </p>
        )}

        {photos.length > 0 && (
          <div className="mt-8 grid grid-cols-3 gap-3">
            {photos.map((p, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-[6px] shadow-sm">
                <img src={p} alt="Tu foto" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
