import React from 'react';

export const ItinerarySection: React.FC = () => {
  return (
    <section className="enc-paper-bg relative overflow-x-clip py-14 text-center">
      {/* Side Lace Pattern */}
      <span
        aria-hidden="true"
        className="enc-lace-side pointer-events-none absolute top-0 bottom-0 left-0 w-[36%] max-w-[170px]"
      />

      {/* Sprig bottom right */}
      <img
        src="/themes/encanto/sprig.webp"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute z-0 h-auto select-none -right-3 -bottom-4 w-20"
        style={{ transform: 'scaleX(-1) rotate(-6deg)' }}
      />

      <div className="relative mx-auto max-w-xl pr-[22px] pl-[38%] sm:pl-[190px]">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="font-display text-[1.375rem] leading-[1.25] tracking-[0.02em] text-[var(--enc-ink)] sm:text-2xl">
            Itinerario
          </h2>
          <span
            aria-hidden="true"
            className="enc-sprig block mx-auto mt-3 w-36 text-[var(--enc-accent)] sm:w-40"
            style={{ aspectRatio: '552 / 200' }}
          />
        </div>

        <div className="mx-auto flex max-w-sm flex-col text-left">
          {/* Item 1: Ceremonia */}
          <div className="flex gap-4">
            <div className="flex flex-none flex-col items-center">
              <span className="flex h-11 w-11 flex-none items-center justify-center text-[var(--enc-copper)]">
                <span
                  aria-hidden="true"
                  className="enc-ico block h-8 w-8"
                  style={{
                    WebkitMaskImage: 'url(/themes/encanto/icons/icon-church.webp)',
                    maskImage: 'url(/themes/encanto/icons/icon-church.webp)',
                    aspectRatio: '240 / 389',
                  }}
                />
              </span>
              <span
                aria-hidden="true"
                className="my-1 w-px flex-1 border-l"
                style={{ borderColor: 'var(--enc-line)', minHeight: '2.5rem' }}
              />
            </div>
            <div className="flex-1 pb-8">
              <p className="enc-label text-[var(--enc-accent)]">15:00</p>
              <p className="font-display mt-0.5 text-xl leading-snug text-[var(--enc-ink)]">
                Ceremonia
              </p>
              <p className="mt-0.5 text-[0.82rem] text-[var(--enc-muted)]">San Agustín</p>
              <a
                href="https://maps.google.com/?q=Templo+de+San+Agustin+Allende+53+Colonia+Centro"
                target="_blank"
                rel="noopener noreferrer"
                className="enc-label mt-1 inline-block text-[var(--enc-accent)] hover:underline"
              >
                Ver ubicación
              </a>
            </div>
          </div>

          {/* Item 2: Coctel de bienvenida */}
          <div className="flex gap-4">
            <div className="flex flex-none flex-col items-center">
              <span className="flex h-11 w-11 flex-none items-center justify-center text-[var(--enc-copper)]">
                <span
                  aria-hidden="true"
                  className="enc-ico block h-8 w-8"
                  style={{
                    WebkitMaskImage: 'url(/themes/encanto/icons/icon-toast.webp)',
                    maskImage: 'url(/themes/encanto/icons/icon-toast.webp)',
                    aspectRatio: '240 / 240',
                  }}
                />
              </span>
              <span
                aria-hidden="true"
                className="my-1 w-px flex-1 border-l"
                style={{ borderColor: 'var(--enc-line)', minHeight: '2.5rem' }}
              />
            </div>
            <div className="flex-1 pb-8">
              <p className="enc-label text-[var(--enc-accent)]">17:00</p>
              <p className="font-display mt-0.5 text-xl leading-snug text-[var(--enc-ink)]">
                Coctel de bienvenida
              </p>
              <p className="mt-0.5 text-[0.82rem] text-[var(--enc-muted)]">Viborillas</p>
              <a
                href="https://maps.google.com/?q=Hacienda+Vivorillas+Carretera+Queretaro+Bernal"
                target="_blank"
                rel="noopener noreferrer"
                className="enc-label mt-1 inline-block text-[var(--enc-accent)] hover:underline"
              >
                Ver ubicación
              </a>
            </div>
          </div>

          {/* Item 3: Cena */}
          <div className="flex gap-4">
            <div className="flex flex-none flex-col items-center">
              <span className="flex h-11 w-11 flex-none items-center justify-center text-[var(--enc-copper)]">
                <span
                  aria-hidden="true"
                  className="enc-ico block h-8 w-8"
                  style={{
                    WebkitMaskImage: 'url(/themes/encanto/icons/icon-dinner.webp)',
                    maskImage: 'url(/themes/encanto/icons/icon-dinner.webp)',
                    aspectRatio: '240 / 240',
                  }}
                />
              </span>
              <span
                aria-hidden="true"
                className="my-1 w-px flex-1 border-l"
                style={{ borderColor: 'var(--enc-line)', minHeight: '2.5rem' }}
              />
            </div>
            <div className="flex-1 pb-8">
              <p className="enc-label text-[var(--enc-accent)]">18:30</p>
              <p className="font-display mt-0.5 text-xl leading-snug text-[var(--enc-ink)]">
                Cena
              </p>
              <p className="mt-0.5 text-[0.82rem] text-[var(--enc-muted)]">Viborillas</p>
            </div>
          </div>

          {/* Item 4: Fin del evento */}
          <div className="flex gap-4">
            <div className="flex flex-none flex-col items-center">
              <span className="flex h-11 w-11 flex-none items-center justify-center text-[var(--enc-copper)]">
                <svg
                  viewBox="0 0 44 44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M22 6.6c-8.7-.3-14.8 5.6-15.3 14.3-.5 8.3 5.2 14.9 13.6 15.6 8.9.7 15.7-5 16.3-13.7.5-7.9-3.9-13.9-11.2-15.6" />
                  <path d="M22 12.8c.1 3.4.2 6.5.5 9.5 2.2 1.4 4.1 2.6 5.9 3.5" />
                  <path d="M18.6 6.3c1.9-.3 3.6-.3 5.3.1" />
                </svg>
              </span>
            </div>
            <div className="flex-1">
              <p className="enc-label text-[var(--enc-accent)]">02:00</p>
              <p className="font-display mt-0.5 text-xl leading-snug text-[var(--enc-ink)]">
                Fin del evento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
