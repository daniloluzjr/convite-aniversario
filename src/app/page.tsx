'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { WelcomeEnvelope } from '@/components/WelcomeEnvelope';
import { HeroSection } from '@/components/HeroSection';
import { CountdownSection } from '@/components/CountdownSection';
import { StorySection } from '@/components/StorySection';
import { ParallaxSection } from '@/components/ParallaxSection';
import { GallerySection } from '@/components/GallerySection';
import { ItinerarySection } from '@/components/ItinerarySection';
import { LocationsSection } from '@/components/LocationsSection';
import { DressCodeSection } from '@/components/DressCodeSection';
import { GiftsSection } from '@/components/GiftsSection';
import { SocialSection } from '@/components/SocialSection';
import { CollaborativeAlbum } from '@/components/CollaborativeAlbum';
import { SongRequest } from '@/components/SongRequest';
import { RsvpSection } from '@/components/RsvpSection';
import { Footer } from '@/components/Footer';
import { MusicPlayer } from '@/components/MusicPlayer';

function InvitationContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') || '75a07af37ad0';

  // Customized for guest with code 75a07af37ad0
  const guestName = code === '75a07af37ad0' ? 'Santiago Gutierrez Garcia' : 'Invitado Especial';
  const passesCount = 2;

  return (
    <div className="theme-encanto min-h-screen relative overflow-x-hidden selection:bg-[var(--enc-accent)] selection:text-white">
      {/* Interactive Envelope with Opening Transition */}
      <WelcomeEnvelope
        coupleName1="Ximena"
        coupleName2="Rafael"
        dateLabel="20 de junio de 2027"
      />

      {/* Main Mobile-First Container (centered on desktop, native 390px-based responsiveness) */}
      <main className="mx-auto max-w-[560px] shadow-2xl relative bg-[var(--enc-bg)] min-h-screen">
        <HeroSection />
        <CountdownSection targetDate="2027-06-20T00:00:00+00:00" />
        <StorySection guestName={guestName} passesCount={passesCount} />
        <ParallaxSection />
        <GallerySection />
        <ItinerarySection />
        <LocationsSection />
        <DressCodeSection />
        <GiftsSection />
        <SocialSection />
        <CollaborativeAlbum />
        <SongRequest />
        <RsvpSection initialGuestName={guestName} defaultPasses={passesCount} />
        <Footer />
      </main>

      {/* Floating Audio Player with Equalizer */}
      <MusicPlayer src="/music.mp3" startHidden={true} />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f1edea]" />}>
      <InvitationContent />
    </Suspense>
  );
}
