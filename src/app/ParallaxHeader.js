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

  return (
    <div
      className="bg-[url('/header.jpg')] bg-cover bg-center bg-fixed"
      style={{
        backgroundPositionY: `${-offset * 0.4}px`,
        transition: 'background-position 0.1s',
      }}
    >
      <div className="bg-black/25 min-h-[220px] sm:min-h-[320px] md:min-h-[344px] flex items-center justify-center">
        <div
          className={`w-11/12 sm:w-3/4 md:w-1/2 text-center text-white text-2xl sm:text-4xl md:text-5xl font-semibold px-2 sm:px-4 ${koHo.variable}`}
        >
          Selamat Datang di Pelayanan Terpadu Satu Pintu (PTSP) Kementerian UMKM
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
