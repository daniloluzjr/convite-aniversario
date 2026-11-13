'use client';

import React, { useState } from 'react';

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const col1 = [
    { src: '/event-media/5ecadf1d-9914-4b47-a41f-682f97712983.jpg', tilt: '-1.2deg' },
    { src: '/event-media/325df4ea-5507-4696-ab1c-3dc73f0be420.jpg', tilt: '1.2deg' },
    { src: '/event-media/f2ac4633-43e3-41b5-93fb-cae0d168f094.jpg', tilt: '-1.2deg' },
  ];

  const col2 = [
    { src: '/event-media/31170c3b-4b09-490a-9e3e-81b14f38a97b.jpg', tilt: '1.2deg' },
    { src: '/event-media/1cdfe270-e013-41cd-b7fa-9d20db4a8e58.jpg', tilt: '-1.2deg' },
    { src: '/event-media/b5bcbce5-09d3-4f97-a01c-d30449612aad.jpg', tilt: '1.2deg' },
  ];

  return (
    <section className="relative overflow-x-clip px-[22px] py-14 text-center">
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="font-display text-[1.375rem] leading-[1.25] tracking-[0.02em] text-[var(--enc-ink)] sm:text-2xl">
          Galería
        </h2>
        <span
          aria-hidden="true"
          className="enc-sprig block mx-auto mt-3 w-36 text-[var(--enc-accent)] sm:w-40"
          style={{ aspectRatio: '552 / 200' }}
        />
      </div>

      <div className="mx-auto flex max-w-2xl gap-3">
        {/* Column 1 */}
        <div className="flex flex-1 flex-col gap-4">
          {col1.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(item.src)}
              className="enc-polaroid px-[7px] pt-[7px] pb-5 cursor-pointer transition-transform hover:scale-[1.02]"
              style={{ transform: `rotate(${item.tilt})` }}
            >
              <img
                src={item.src}
                alt="Foto"
                className="block w-full rounded-[4px] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-1 flex-col gap-4">
          {col2.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(item.src)}
              className="enc-polaroid px-[7px] pt-[7px] pb-5 cursor-pointer transition-transform hover:scale-[1.02]"
              style={{ transform: `rotate(${item.tilt})` }}
            >
              <img
                src={item.src}
                alt="Foto"
                className="block w-full rounded-[4px] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
        >
          <div className="relative max-w-lg max-h-[90vh]">
            <img
              src={activePhoto}
              alt="Enlarged"
              className="max-h-[85vh] w-auto rounded shadow-2xl"
            />
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -top-10 right-0 text-white text-lg font-bold px-3 py-1 bg-white/20 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
