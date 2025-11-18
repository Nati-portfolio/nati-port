"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase, SplitText);

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    CustomEase.create('hop', '0.9, 0, 0.1, 1');

    const createSplit = (selector: string, type: 'lines', className: string) => {
      return SplitText.create(selector, {
        type: type,
        [type + 'Class']: className,
        mask: type,
      });
    };

    // Only split copy lines; header will be a simple "NE" element
    const splitPreloaderCopy = createSplit('.preloader-copy p', 'lines', 'line');
    const lines = splitPreloaderCopy.lines as HTMLElement[];

    // Set initial positions for copy lines
    gsap.set(lines, { yPercent: 100 });
    // Set initial state for header (NE)
    gsap.set('.preloader-header span', { yPercent: 0, scale: 1 });

    // Create main timeline (shorter durations)
    const tl = gsap.timeline({
      delay: 0.15,
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Progress bar animation (shortened)
    tl.to('.progress-bar', {
      scaleX: 1,
      duration: 2,
      ease: 'power3.inOut',
    })
      .set('.progress-bar', { transformOrigin: 'right' })
      .to('.progress-bar', {
        scaleX: 0,
        duration: 0.6,
        ease: 'power3.in',
      });

    // Copy text slides up (shorter)
    tl.to(
      lines,
      {
        yPercent: 0,
        duration: 1.2,
        ease: 'hop',
        stagger: 0.08,
      },
      '-=2'
    );

    // Header (NE) animate to smaller centered badge
    tl.to('.preloader-header', {
      y: '2rem',
      scale: 0.45,
      duration: 0.9,
      ease: 'hop',
    }, '-=1');

    // Copy text slides out (shorter)
    tl.to(
      lines,
      {
        y: '-125%',
        duration: 1.1,
        ease: 'hop',
        stagger: 0.08,
      },
      '-=0.8'
    );

    // Preloader clips away (shorter)
    tl.to(
      '.preloader',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 1.50,
        ease: 'hop',
      },
      '-=0.4'
    );

    // Cleanup
    return () => {
      tl.kill();
      splitPreloaderCopy.revert();
    };
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 w-screen h-screen bg-black overflow-hidden z-[9999] preloader"
      style={{ 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }}
      ref={preloaderRef}
    >
      <div 
        className="progress-bar absolute top-0 left-0 w-full h-[7px] bg-white"
        style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
        ref={progressBarRef}
      />

      <div 
        className="preloader-copy absolute bottom-20 left-1/2 -translate-x-1/2 w-full px-4 md:px-0 text-white md:w-[80%]"
        ref={copyRef}
      >
        <p className="font-agdasima uppercase text-center text-[0.8rem] font-medium px-4 lg:px-0">
          Product Manager & Technical Leader Building data-driven products with people-first leadership
        </p>
      </div>

      <div className="preloader-header fixed w-full flex justify-center items-center z-[10000] translate-y-[60vh] origin-top md:translate-y-[50vh]">
        <span 
          className="uppercase text-white font-agdasima text-[3.5rem] font-semibold leading-[0.9] block md:text-[4rem]"
        >
          NE
        </span>
      </div>
    </div>
  );
};

export default Preloader;
