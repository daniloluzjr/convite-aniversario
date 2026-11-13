import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <>
      {/* Framed Couple Portrait and Header */}
      <section
        className="relative flex flex-col items-center px-2 pt-2 text-center"
        style={{ backgroundColor: '#f1edea' }}
      >
        <div className="w-full max-w-[560px]">
          <div
            className="relative w-full [container-type:inline-size]"
            style={{ aspectRatio: '900 / 1719' }}
          >
            {/* Couple Image within frame cutout */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: '8.3%',
                top: '4.6%',
                width: '83%',
                height: '40.5%',
              }}
            >
              <img
                src="/event-media/11783198-09ae-480d-8bef-c620d2c8aaaa.jpg"
                alt="Ximena y Rafael"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Frame SVG/WebP overlay */}
            <span
              aria-hidden="true"
              className="enc-frame-img pointer-events-none absolute inset-0 select-none"
            />

            {/* Typography overlay */}
            <div
              className="absolute inset-x-0 flex flex-col items-center justify-start px-[10%]"
              style={{
                top: '65.5%',
                bottom: '3%',
              }}
            >
              <p
                className="enc-label whitespace-pre-line text-[var(--enc-muted)]"
                style={{ fontSize: '2.9cqw', lineHeight: 1.5 }}
              >
                NUESTRA BODA
              </p>

              <h1
                className="font-names mt-[1cqw] flex flex-wrap items-baseline justify-center gap-x-[2cqw] tracking-[0.05em] text-[var(--enc-ink)]"
                style={{
                  fontSize: 'calc(7.4cqw * var(--tf-names-scale, 1))',
                  lineHeight: 1.1,
                }}
              >
                <span className="whitespace-pre-line">Ximena</span>
                <span
                  className="font-script text-[var(--enc-accent)]"
                  style={{ fontSize: '1.1em' }}
                >
                  &
                </span>
                <span>Rafael</span>
              </h1>

              {/* Date Block */}
              <div
                className="mt-[1.6cqw] flex flex-col items-center text-[var(--enc-ink)]"
                style={{ width: '82%' }}
              >
                <span
                  className="enc-label"
                  style={{ fontSize: '2.9cqw', letterSpacing: '0.25em' }}
                >
                  junio
                </span>

                <div className="mt-[0.8cqw] flex items-center justify-center gap-[2.4cqw] w-full">
                  <div className="flex flex-1 flex-col gap-[0.7cqw]">
                    <span className="h-px w-full bg-[var(--enc-line)]" />
                    <span
                      className="enc-label text-[var(--enc-ink)]"
                      style={{ fontSize: '2.6cqw' }}
                    >
                      domingo
                    </span>
                    <span className="h-px w-full bg-[var(--enc-line)]" />
                  </div>

                  <span
                    className="font-display px-1"
                    style={{
                      fontSize: '11.5cqw',
                      lineHeight: 1,
                      fontVariantNumeric: 'lining-nums',
                    }}
                  >
                    20
                  </span>

                  <div className="flex flex-1 flex-col gap-[0.7cqw]">
                    <span className="h-px w-full bg-[var(--enc-line)]" />
                    <span
                      className="enc-label text-[var(--enc-ink)]"
                      style={{ fontSize: '2.6cqw' }}
                    >
                      3:00 PM
                    </span>
                    <span className="h-px w-full bg-[var(--enc-line)]" />
                  </div>
                </div>

                <span
                  className="enc-label mt-[0.8cqw]"
                  style={{ fontSize: '2.7cqw', letterSpacing: '0.3em' }}
                >
                  2027
                </span>
              </div>

              {/* Blessing subtitle text */}
              <p
                className="mt-[1.6cqw] whitespace-pre-line text-[var(--enc-muted)]"
                style={{
                  fontSize: '3.05cqw',
                  lineHeight: 1.45,
                  paddingRight: '2cqw',
                  paddingLeft: '2cqw',
                }}
              >
                Con la bendición de Dios y el amor inmenso que nos une, tenemos la alegría de compartir el momento más feliz de nuestras vidas, acompáñanos a crear este recuerdo inolvidable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blessing quote card */}
      <section className="enc-paper relative overflow-x-clip px-8 py-16 text-center">
        <img
          src="/themes/encanto/sprig-b.webp"
          alt=""
          aria-hidden="true"
          draggable="false"
          className="pointer-events-none absolute z-0 h-auto select-none -right-5 bottom-0 w-24"
          style={{ transform: 'rotate(-12deg)' }}
        />
        <div className="enc-card mx-auto flex max-w-sm flex-col items-center gap-4 px-8 py-12">
          <div className="enc-seal w-12" />
          <p className="font-display text-[1.4rem] leading-[1.55] whitespace-pre-line text-[var(--enc-ink)] italic md:text-2xl">
            Con la bendición de Dios y el amor inmenso que nos une, tenemos la alegría de compartir el momento más feliz de nuestras vidas.
          </p>
          <span
            aria-hidden="true"
            className="enc-sprig block mt-1 w-16 opacity-80"
            style={{ aspectRatio: '552 / 200' }}
          />
        </div>
      </section>
    </>
  );
};
