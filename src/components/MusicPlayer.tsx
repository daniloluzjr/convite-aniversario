'use client';

import React, { useRef, useState, useEffect } from 'react';

interface MusicPlayerProps {
  src?: string;
  startHidden?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  src = '/music.mp3',
  startHidden = true,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visible, setVisible] = useState(!startHidden);

  useEffect(() => {
    const handleStart = () => {
      setVisible(true);
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(e => console.log('Audio autoplay prevented:', e));
      }
    };

    window.addEventListener('bunti:start-music', handleStart);
    return () => window.removeEventListener('bunti:start-music', handleStart);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log('Audio play error:', e));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
        className={`fixed right-5 bottom-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 bg-[var(--enc-accent)] text-white ${
          visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
        }`}
      >
        {isPlaying ? (
          <div className="flex items-center gap-[3px] h-5">
            <span className="w-[3px] bg-white rounded-full animate-music-wave-0" />
            <span className="w-[3px] bg-white rounded-full animate-music-wave-1" />
            <span className="w-[3px] bg-white rounded-full animate-music-wave-2" />
            <span className="w-[3px] bg-white rounded-full animate-music-wave-3" />
          </div>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 ml-0.5">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
      </button>
    </>
  );
};
