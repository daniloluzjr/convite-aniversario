import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="enc-paper relative overflow-hidden">
      {/* Decorative sprig */}
      <img
        src="/themes/encanto/sprig.webp"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="pointer-events-none absolute z-0 h-auto select-none -right-5 bottom-0 w-24"
        style={{ transform: 'rotate(-8deg)' }}
      />

      <div className="relative flex flex-col items-center gap-3 px-[22px] pt-10 pb-10 text-center">
        <div className="relative mx-auto w-full max-w-xs">
          {/* Ribbon on card side */}
          <span
            aria-hidden="true"
            className="enc-ribbon-a pointer-events-none absolute z-[1] block select-none -bottom-[4.5rem] left-8 w-12"
          />

          <div className="enc-card relative z-[2] flex w-full flex-col items-center px-8 pt-2 pb-9">
            <p className="font-script mt-4 text-xl leading-tight text-[var(--enc-accent)]">
              © 2027 Todos los derechos reservados.
            </p>
          </div>
        </div>

        <div className="mt-2 text-xs tracking-widest">
          <div className="mb-6">
            <img
              src="/logo.png"
              alt="Bünt'i"
              width={182}
              height={100}
              className="mx-auto h-11 w-auto opacity-70"
            />
            <p className="mt-3 text-sm normal-case opacity-70">Desarrollado por</p>
            <a
              href="https://www.bunti.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm normal-case underline-offset-2 hover:underline opacity-80 font-medium"
            >
              www.bunti.com.mx
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
