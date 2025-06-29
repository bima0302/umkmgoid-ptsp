'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'
      }`}
      id="site-header"
    >
      <div className="w-full px-6 flex justify-between items-center p-2">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
          <span className="text-xl text-white">PTSP KUMKM</span>
        </div>
        <nav className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Beranda
          </Link>
          <Link href="/" className="text-white hover:text-gray-300">
            Dokumentasi
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
