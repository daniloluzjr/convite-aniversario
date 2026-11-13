import React from 'react';

export const LocationsSection: React.FC = () => {
  return (
    <section className="relative overflow-x-clip mx-auto max-w-md px-[22px] py-14 text-center">
      <img
        src="/themes/encanto/sprig-b.webp"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute z-0 h-auto select-none -left-5 bottom-1 w-24"
        style={{ transform: 'scaleX(-1) rotate(-18deg)' }}
      />

      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="font-display text-[1.375rem] leading-[1.25] tracking-[0.02em] text-[var(--enc-ink)] sm:text-2xl">
          Ubicaciones
        </h2>
        <span
          aria-hidden="true"
          className="enc-sprig block mx-auto mt-3 w-36 text-[var(--enc-accent)] sm:w-40"
          style={{ aspectRatio: '552 / 200' }}
        />
      </div>

      <div className="flex flex-col gap-6">
        {/* Ceremonia */}
        <div className="enc-tile flex flex-col items-center gap-2 px-9 py-9">
          <p className="font-display text-base text-[var(--enc-accent)] italic">Ceremonia</p>
          <h3 className="font-display text-[1.3rem] leading-tight text-[var(--enc-ink)]">
            Templo de San Agustín
          </h3>
          <p className="text-[0.8rem] leading-[1.55] whitespace-pre-line text-[var(--enc-muted)]">
            Allende 53. Colonia Centro
          </p>
          <div className="mt-1 flex items-center gap-2 text-[0.625rem] tracking-[0.2em] text-[var(--enc-muted)] uppercase">
            <span className="h-px w-3.5 bg-[var(--enc-line)]" />
            15:00
            <span className="h-px w-3.5 bg-[var(--enc-line)]" />
          </div>

          <div className="mt-4 flex flex-col w-full gap-2">
            <a
              href="https://maps.google.com/?q=Templo+de+San+Agustin+Allende+53+Colonia+Centro+Queretaro"
              target="_blank"
              rel="noopener noreferrer"
              className="enc-button-outline w-full"
            >
              Ver en Google Maps
            </a>
            <a
              href="https://waze.com/ul?q=Templo+de+San+Agustin+Queretaro"
              target="_blank"
              rel="noopener noreferrer"
              className="enc-button-outline w-full text-xs"
            >
              Abrir en Waze
            </a>
          </div>
        </div>

        {/* Recepción */}
        <div className="enc-tile flex flex-col items-center gap-2 px-9 py-9">
          <p className="font-display text-base text-[var(--enc-accent)] italic">Recepción</p>
          <h3 className="font-display text-[1.3rem] leading-tight text-[var(--enc-ink)]">
            Hacienda Vivorillas
          </h3>
          <p className="text-[0.8rem] leading-[1.55] whitespace-pre-line text-[var(--enc-muted)]">
            Carretera Queretaro Bernal S/n
          </p>
          <div className="mt-1 flex items-center gap-2 text-[0.625rem] tracking-[0.2em] text-[var(--enc-muted)] uppercase">
            <span className="h-px w-3.5 bg-[var(--enc-line)]" />
            17:00
            <span className="h-px w-3.5 bg-[var(--enc-line)]" />
          </div>

          <div className="mt-4 flex flex-col w-full gap-2">
            <a
              href="https://maps.google.com/?q=Hacienda+Vivorillas+Carretera+Queretaro+Bernal"
              target="_blank"
              rel="noopener noreferrer"
              className="enc-button-outline w-full"
            >
              Ver en Google Maps
            </a>
            <a
              href="https://waze.com/ul?q=Hacienda+Vivorillas"
              target="_blank"
              rel="noopener noreferrer"
              className="enc-button-outline w-full text-xs"
            >
              Abrir en Waze
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
