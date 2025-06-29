import { KoHo } from 'next/font/google';
import PropTypes from 'prop-types';
import './globals.css';
import Header from './header';
import Footer from './footer';

const koHo = KoHo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-koho',
});

export const metadata = {
  title: 'PTSP | Kementerian UMKM',
  description: 'PTSP Kementerian UMKM - Aplikasi Pelayanan Terpadu Satu Pintu',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${koHo.variable} bg-white text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
