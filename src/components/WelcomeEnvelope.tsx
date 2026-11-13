'use client';

import React, { useState } from 'react';

interface WelcomeEnvelopeProps {
  coupleName1: string;
  coupleName2: string;
  dateLabel: string;
  onOpen?: () => void;
}

export const WelcomeEnvelope: React.FC<WelcomeEnvelopeProps> = ({
  coupleName1,
  coupleName2,
  dateLabel,
  onOpen,
}) => {
  const [stage, setStage] = useState<'closed' | 'seal' | 'slide' | 'done'>('closed');

  if (stage === 'done') return null;

  const handleOpen = () => {
    // Notify audio player to play
    window.dispatchEvent(new Event('bunti:start-music'));
    if (onOpen) onOpen();

    setStage('seal');
    setTimeout(() => {
      setStage('slide');
    }, 750);
    setTimeout(() => {
      setStage('done');
    }, 2050);
  };

  const isFading = stage === 'seal' || stage === 'slide';
  const isSliding = stage === 'slide';

  return (
    <div
      className={`enc-env fixed inset-0 z-[60] overflow-hidden select-none transition-opacity duration-500 ${
        isFading ? 'enc-env-fading' : ''
      } ${isSliding ? 'enc-env-sliding' : ''}`}
      style={{ pointerEvents: stage === 'closed' ? 'auto' : 'none' }}
    >
      {/* Backing Paper Layer */}
      <div className="enc-env-backing absolute inset-0" />

      {/* Envelope Stage Container */}
      <div className="enc-env-stage">
        {/* Flap Bottom */}
        <div className="enc-env-bottom" />

        {/* Flap Top */}
        <div className="enc-env-top" />

        {/* Wax Seal */}
        <div className="enc-env-seal" />

        {/* Invitation Text */}
        <div className="enc-env-text">
          <h1
            className="font-names"
            style={{
              fontSize: 'calc(9.5cqw * var(--tf-names-scale, 1))',
              lineHeight: 1.12,
            }}
          >
            <span className="whitespace-pre-line">{coupleName1}</span>
            {coupleName2 && (
              <>
                <span
                  className="font-script block text-[var(--enc-accent)] my-1"
                  style={{ fontSize: '1.05em', lineHeight: 0.95 }}
                >
                  &
                </span>
                <span>{coupleName2}</span>
              </>
            )}
          </h1>
          {dateLabel && (
            <p className="enc-label mt-[3cqw]" style={{ fontSize: '2.6cqw' }}>
              {dateLabel}
            </p>
          )}
        </div>

        {/* Call to action button */}
        <div className="enc-env-action">
          <button
            type="button"
            onClick={handleOpen}
            className="enc-button cursor-pointer active:scale-95 transition-transform"
          >
            Ver invitación
          </button>
        </div>
      </div>
    </div>
  );
};
