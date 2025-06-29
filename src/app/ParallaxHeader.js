'use client';
import React, { useEffect, useState } from 'react';

export default function ParallaxHeader({ koHo }) {
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
        backgroundPositionY: `${-offset * 0.4}px`, // gunakan minus di sini
        transition: 'background-position 0.1s',
      }}
    >
      <div className="bg-black/25 h-86 top-0 flex items-center justify-center">
        <div className="w-1/2 text-center text-white text-5xl font-semibold">
          Selamat Datang di Pelayanan Terpadu Satu Pintu (PTSP) Kementerian UMKM
        </div>
      </div>
    </div>
  );
}
