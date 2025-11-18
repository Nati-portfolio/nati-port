"use client";

import { useState, useEffect } from 'react';
import Preloader from './Preloader';

interface PreloaderWrapperProps {
  children: React.ReactNode;
}

export default function PreloaderWrapper({ children }: PreloaderWrapperProps) {

  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Check if preloader has been shown in this session
    const hasSeenPreloader = sessionStorage.getItem('preloaderShown');

    if (hasSeenPreloader) {
      setShowPreloader(false);

    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloaderShown', 'true');
    setTimeout(() => {
      setShowPreloader(false);
      // Notify any listeners that the preloader has finished
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('preloaderComplete'));
      }
    }, 100);
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      {children}
    </>
  );
}
