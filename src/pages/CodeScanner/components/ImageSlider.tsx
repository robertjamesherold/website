import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Component } from '@/components';
import { Icon } from '@/assets/icons';
import type { ResponsiveSource, ThemedSource } from '@/components/ResponsiveImage';

type SliderImage = ResponsiveSource | ThemedSource;

const COPIES = 3;
const TRANSITION_MS = 500;

const getSlidesVisible = () =>
  typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)').matches ? 2 : 1;

/**
 * Infinite, responsive image carousel. Each slide is a `ResponsiveImg`, so it
 * gets the full srcSet and (for themed sources) light/dark switching for free.
 */
export const ImageSlider = ({
  images,
  alt = 'Screenshot',
}: {
  images: SliderImage[];
  alt?: string;
}) => {
  const [slidesVisible, setSlidesVisible] = useState(getSlidesVisible);
  const [index, setIndex] = useState(images.length);
  const [animating, setAnimating] = useState(true);
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Three copies so the track can scroll past either end before snapping back.
  const trackImages = Array.from({ length: COPIES }, () => images).flat();

  useLayoutEffect(() => {
    const measure = () => {
      const visible = getSlidesVisible();
      setSlidesVisible(visible);
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth / visible);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const next = () => { setAnimating(true); setIndex((i) => i + 1); };
  const prev = () => { setAnimating(true); setIndex((i) => i - 1); };

  // When we reach a cloned edge, jump back to the matching middle slide without
  // animation so the loop feels seamless.
  const handleTransitionEnd = () => {
    if (index >= images.length * 2) {
      setAnimating(false);
      setIndex((i) => i - images.length);
    } else if (index < images.length) {
      setAnimating(false);
      setIndex((i) => i + images.length);
    }
  };

  useEffect(() => {
    if (!animating) {
      const id = requestAnimationFrame(() => setAnimating(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animating]);

  return (
    <div className="relative mt-16 sm:mt-20">
      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translate3d(-${index * slideWidth}px, 0, 0)`,
            transition: animating ? `transform ${TRANSITION_MS}ms ease` : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {trackImages.map((image, i) => (
            <div key={i} className="shrink-0 px-3 lg:px-4" style={{ width: slideWidth }}>
              <Component.ResponsiveImg
                image={image}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={alt}
                loading={i < slidesVisible ? 'eager' : 'lazy'}
                className="rounded-md w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Vorheriges Bild"
        className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 shadow-md flex items-center justify-center text-text-1 transition"
      >
        <Icon.ArrowLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Nächstes Bild"
        className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 shadow-md flex items-center justify-center text-text-1 transition"
      >
        <Icon.ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};
