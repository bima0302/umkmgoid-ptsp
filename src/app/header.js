'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  // Extract className for Image to avoid nested ternary
  let imageClassName = '';
  if (pathname !== '/' && !scrolled) {
    imageClassName = 'invert';
  }

  // Extract text color for span to avoid nested ternary
  let spanTextColor = '';
  if (pathname === '/') {
    spanTextColor = 'text-white';
  } else if (scrolled) {
    spanTextColor = 'text-white';
  } else {
    spanTextColor = 'text-sky-900';
  }

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'
      }`}
      id="site-header"
    >
      <div className="w-full px-6 flex justify-between items-center p-2">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className={imageClassName}
          />
          <span className={`text-xl ${spanTextColor}`}>PTSP KUMKM</span>
        </div>
        {/* Extract link text color to avoid nested ternary */}
        {(() => {
          let linkTextColor = '';
          if (pathname === '/') {
            linkTextColor = 'text-white';
          } else if (scrolled) {
            linkTextColor = 'text-white';
          } else {
            linkTextColor = 'text-sky-900';
          }
          return (
            <nav className="flex space-x-4">
              <Link
                href="/"
                className={`${linkTextColor} hover:text-gray-500 ${pathname === '/' ? 'font-bold' : ''}`}
              >
                Beranda
              </Link>
              <Link
                href="/documentation"
                className={`${linkTextColor} hover:text-gray-500 ${pathname === '/documentation' ? 'font-bold' : ''}`}
              >
                Dokumentasi
              </Link>
            </nav>
          );
        })()}
      </div>
    </header>
  );
}

export default Header;
