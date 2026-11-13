import React from 'react';

export const ParallaxSection: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: '65vh',
        clipPath: 'inset(0)',
      }}
    >
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/event-media/ad7ac166-cf67-457d-81d4-33655db6c1b0.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </section>
  );
};
