'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

import PropTypes from 'prop-types';

function HamburgerIcon({ menuOpen, setMenuOpen, pathname, scrolled }) {
  const barClass = (extra) =>
    `absolute left-0 w-5 h-0.5 rounded transition-all duration-200 ${
      pathname === '/documentation' && !scrolled ? 'bg-sky-900' : 'bg-white'
    } ${extra}`;

  return (
    <button
      className="sm:hidden mr-2 focus:outline-none"
      aria-label="Buka menu"
      onClick={() => setMenuOpen((open) => !open)}
    >
      <span className="block w-5 h-5 relative">
        <span
          className={barClass(`${menuOpen ? 'rotate-45 top-2' : 'top-1'}`)}
        ></span>
        <span
          className={barClass(`${menuOpen ? 'opacity-0 top-2' : 'top-2'}`)}
        ></span>
        <span
          className={barClass(`${menuOpen ? '-rotate-45 top-2' : 'top-3'}`)}
        ></span>
      </span>
    </button>
  );
}

HamburgerIcon.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  scrolled: PropTypes.bool.isRequired,
};

function DesktopNav({ linkTextColor, pathname }) {
  return (
    <nav className="hidden sm:flex space-x-4">
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
}

DesktopNav.propTypes = {
  linkTextColor: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

function MobileNav({ menuOpen, setMenuOpen, pathname }) {
  if (!menuOpen) return null;
  return (
    <div className="sm:hidden fixed inset-0 z-50">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Tutup overlay"
        className="absolute inset-0 bg-transparent"
        tabIndex={0}
        onClick={() => setMenuOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setMenuOpen(false);
          }
        }}
        style={{ cursor: 'pointer' }}
      ></button>
      {/* Sidebar */}
      <nav className="absolute top-0 left-0 h-full w-64 bg-zinc-900 shadow-lg flex flex-col py-6 px-6 animate-slide-in">
        <button
          className="self-end mb-6 text-white text-2xl focus:outline-none"
          aria-label="Tutup menu"
          onClick={() => setMenuOpen(false)}
        >
          &times;
        </button>
        <Link
          href="/"
          className={`py-2 mb-2 ${pathname === '/' ? 'font-bold' : ''} text-white hover:text-gray-400`}
          onClick={() => setMenuOpen(false)}
        >
          Beranda
        </Link>
        <Link
          href="/documentation"
          className={`py-2 mb-2 ${pathname === '/documentation' ? 'font-bold' : ''} text-white hover:text-gray-400`}
          onClick={() => setMenuOpen(false)}
        >
          Dokumentasi
        </Link>
      </nav>
      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}

MobileNav.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
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

  // Extract link text color to avoid nested ternary
  let linkTextColor = '';
  if (pathname === '/') {
    linkTextColor = 'text-white';
  } else if (scrolled) {
    linkTextColor = 'text-white';
  } else {
    linkTextColor = 'text-sky-900';
  }

  // Fungsi pencarian sederhana (bisa diganti sesuai kebutuhan)
  // const handleSearchClick = () => {
  //   const query = prompt('Cari apa?');
  //   if (query) {
  //     // Contoh: redirect ke halaman pencarian atau filter konten
  //     window.location.href = `/search?q=${encodeURIComponent(query)}`;
  //   }
  // };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black bg-opacity-90' : 'bg-transparent'
      }`}
      id="site-header"
    >
      <div className="w-full px-6 flex justify-between items-center p-2">
        <div className="flex items-center space-x-2">
          <HamburgerIcon
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            pathname={pathname}
            scrolled={scrolled}
          />
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className={imageClassName}
          />
          <span className={`text-xl ${spanTextColor} hidden sm:inline`}>
            PTSP KUMKM
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <DesktopNav linkTextColor={linkTextColor} pathname={pathname} />
          <button
            className={`ml-2 transition inline-flex bg-transparent p-0 shadow-none
    ${pathname === '/documentation' && !scrolled ? 'text-sky-900' : 'text-white hover:text-gray-300'}`}
            aria-label="Cari"
            type="button"
            // onClick={handleSearchClick}
          >
            <FiSearch className="w-5 h-5" />{' '}
            {/* Feather icon: lebih outline/tidak berisi */}
          </button>
        </div>
        <MobileNav
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          pathname={pathname}
        />
      </div>
    </header>
  );
}

export default Header;
