'use client';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { KoHo } from 'next/font/google';

const koHo = KoHo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-koho',
});

export default function ParallaxHeader() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallaxY = offset * 0.4;

  return (
    <div className="relative min-h-[220px] sm:min-h-[320px] md:min-h-[344px] overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/header.jpg')] bg-cover bg-bottom"
        style={{
          transform: `translateY(${parallaxY}px)`,
          transition: 'transform 0.1s',
          zIndex: 0,
        }}
      />
      <div className="relative z-10 bg-black/25 w-full h-full flex items-center justify-center min-h-[220px] sm:min-h-[320px] md:min-h-[344px]">
        <div
          className={`w-11/12 sm:w-3/4 text-center text-white text-2xl sm:text-4xl md:text-5xl font-semibold px-2 sm:px-4 ${koHo.variable}`}
        >
          Selamat Datang
          <br />
          Di Pelayanan Terpadu Satu Pintu
          <br />
          Kementerian UMKM
        </div>
      </div>
    </div>
  );
}
ParallaxHeader.propTypes = {
  koHo: PropTypes.shape({
    variable: PropTypes.string,
  }),
};
