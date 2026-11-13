import React from 'react';

export const DressCodeSection: React.FC = () => {
  return (
    <section className="relative overflow-x-clip enc-paper px-[22px] py-14 text-center">
      <img
        src="/themes/encanto/sprig-b.webp"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute z-0 h-auto select-none -right-7 -bottom-3 w-20"
        style={{ transform: 'rotate(14deg)' }}
      />

      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="font-display text-[1.375rem] leading-[1.25] tracking-[0.02em] text-[var(--enc-ink)] sm:text-2xl">
          Código de vestimenta
        </h2>
        <span
          aria-hidden="true"
          className="enc-sprig block mx-auto mt-3 w-36 text-[var(--enc-accent)] sm:w-40"
          style={{ aspectRatio: '552 / 200' }}
        />
      </div>

      <div className="mx-auto flex max-w-md items-start justify-center gap-6 sm:gap-10">
        {/* Mujeres */}
        <div className="flex flex-1 flex-col items-center gap-3">
          <span
            aria-hidden="true"
            className="block h-36 bg-[var(--enc-accent)] sm:h-44"
            style={{
              aspectRatio: '700 / 975',
              maskImage: 'url(/themes/encanto/icon-dresses.webp)',
              WebkitMaskImage: 'url(/themes/encanto/icon-dresses.webp)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
          <h3 className="enc-label text-[var(--enc-ink)]">Mujeres</h3>
          <p className="text-[0.8rem] leading-[1.55] whitespace-pre-line text-[var(--enc-muted)]">
            Formal, vestido largo{'\n'}
            <span className="font-semibold text-rose-800">NO BLANCO</span>
          </p>
        </div>

        {/* Hombres */}
        <div className="flex flex-1 flex-col items-center gap-3">
          <span
            aria-hidden="true"
            className="block h-36 bg-[var(--enc-accent)] sm:h-44"
            style={{
              aspectRatio: '700 / 1201',
              maskImage: 'url(/themes/encanto/icon-suit.webp)',
              WebkitMaskImage: 'url(/themes/encanto/icon-suit.webp)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
            }}
          />
          <h3 className="enc-label text-[var(--enc-ink)]">Hombres</h3>
          <p className="text-[0.8rem] leading-[1.55] whitespace-pre-line text-[var(--enc-muted)]">
            Formal{'\n'}
            Traje y corbata
          </p>
        </div>
      </div>

      {/* Reserved Colors Swatches */}
      <div className="mx-auto mt-9 flex max-w-xs flex-col items-center gap-3">
        <div className="flex flex-wrap justify-center gap-3">
          <span
            title="Blanco reservado"
            className="h-8 w-8 rounded-full border border-[var(--enc-ink)]/15 shadow-inner"
            style={{ backgroundColor: '#f1ecf2' }}
          />
          <span
            title="Nude reservado"
            className="h-8 w-8 rounded-full border border-[var(--enc-ink)]/15 shadow-inner"
            style={{ backgroundColor: '#e6dfca' }}
          />
        </div>
        <p className="enc-label max-w-[16rem] whitespace-pre-line text-[var(--enc-muted)]">
          Colores Blancos y Nude son exclusivos para la novia.
        </p>
      </div>
    </section>
  );
};
