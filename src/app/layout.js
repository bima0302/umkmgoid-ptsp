import { KoHo } from 'next/font/google';
import './globals.css';
import Header from './header';
import Footer from './footer';
import Image from 'next/image';
import ParallaxHeader from './ParallaxHeader';
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const koHo = KoHo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-koho',
});

const cards = [
  {
    title: 'PPID',
    image: '/ppid.png',
    link: 'https://ppid.umkm.go.id/',
  },
  {
    title: 'SP4N-LAPOR!',
    image: '/lapor.png',
    link: 'https://lapor.go.id/',
  },
  {
    title: 'SIAP UMKM',
    image: '/siap-umkm.png',
    link: 'https://siap.umkm.go.id/',
  },
  {
    title: 'Pojok Baca',
    image: '/pojok-baca.png',
    link: 'https://pojokbaca.kemenkopukm.go.id/',
  },
  {
    title: 'Survei Kepuasan Masyarakat',
    image: '/survei.png',
    link: 'https://skm.kemenkopukm.go.id/',
  },
  {
    title: 'Website Kementerian UMKM',
    image: '/website.png',
    link: 'https://www.umkm.go.id/',
  },
];

export const metadata = {
  title: 'PTSP | Kementerian UMKM',
  description: 'PTSP Kementerian UMKM - Aplikasi Pelayanan Terpadu Satu Pintu',
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={`${koHo.variable} bg-white text-white`}>
        <Header />
        <ParallaxHeader koHo={koHo} />
        <div className="bg-sky-900 h-32 w-full flex items-center justify-center text-white text-2xl font-semibold">
          Hai, ada yang bisa kami bantu?
        </div>
        <div className="bg-gray-100 py-12">
          <div className="bg-gray-100 pb-12 w-full flex items-center justify-center text-black">
            Pilih Layanan sesuai kebutuhanmu
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {cards.map((card) => (
              <a
                key={card.title}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow rounded p-4 flex flex-col items-center"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={150}
                  className="object-contain"
                />
                <h3 className="mt-4 font-semibold text-2xl text-blue-950 text-center">
                  {card.title}
                </h3>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-sky-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-yellow-400 text-3xl font-bold mb-6">
                Yang sering ditanyakan
              </h2>
              <ol className="space-y-4 list-decimal list-outside pl-6">
                <li>
                  Bagaimana struktur organisasi Kementerian UMKM?
                  <br />
                  <span>
                    Struktur organisasi Kementerian UMKM dapat dilihat{' '}
                    <button
                      type="button"
                      className="underline font-semibold text-white hover:text-yellow-300 cursor-pointer bg-transparent border-none p-0"
                      aria-label="Struktur organisasi Kementerian UMKM (tidak ada tautan)"
                      disabled
                    >
                      DI SINI
                    </button>
                  </span>
                </li>
                <li>
                  Berapa biaya pelayanan di Kementerian UMKM?
                  <br />
                  <span>
                    Kementerian UMKM menyediakan pelayanan publik dan informasi
                    publik <strong>secara gratis (bebas biaya)</strong> segala
                    biaya yang timbul dari proses pengadaan ataupun perekaman
                    ditanggung oleh penerima layanan.
                  </span>
                </li>
                <li>
                  Apa program strategis Kementerian UMKM?
                  <br />
                  <span>
                    Program strategis Kementerian UMKM dapat dilihat{' '}
                    <button
                      type="button"
                      className="underline font-semibold text-white hover:text-yellow-300 cursor-pointer bg-transparent border-none p-0"
                      aria-label="Program strategis Kementerian UMKM (tidak ada tautan)"
                      disabled
                    >
                      DI SINI
                    </button>
                  </span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-4">
              <Image
                src="/menteri.jpg"
                alt="Menteri UMKM"
                width={600}
                height={400}
                className="rounded shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-white text-sky-900 py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-end md:items-end space-y-4">
              <div className="relative w-52 h-52 rounded shadow-lg overflow-hidden">
                <Image
                  src="/qr.png"
                  alt="QR Code Lapor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="flex flex-col text-sky-900 text-3xl font-bold mb-6">
                Untuk bantuan lebih cepat, silakan masuk ke akun Lapor Anda.
              </h2>
              <ol className="space-y-4">
                <li>
                  Masuk ke akun SP4N-Lapor untuk mendapatkan jawaban atas
                  keluhan dan aspirasi Anda. Silakan scan QR code melalui kamera
                  ponsel Anda.
                </li>
              </ol>
              <a
                href="https://wa.me/62811380280"
                className="bg-sky-900 hover:bg-sky-800 text-white py-1 px-15 rounded inline-block mt-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp Khusus Teks
              </a>
            </div>
          </div>
        </div>

        <div className="bg-sky-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-yellow-400 text-3xl font-bold mb-6">
                Permohonan Informasi dan Pengaduan
              </h2>
              <ol className="space-y-4">
                <li>
                  Kami terbuka untuk Anda!
                  <br />
                  <span>
                    Sampaikan permohonan informasi atau pengaduan Anda dengan
                    menekan tombol di bawah ini. Kami berkomitmen untuk melayani
                    sepenuh hati.
                  </span>
                  <a
                    href="https://ppid.umkm.go.id/layanan-informasi/?p=UXZrM3NJdnlhanNqVlpQbnJqTGFWQT09&c=ZFZwMnRZd2Zhak1USnJXOEw3VVljdz09&n=UzdPZnE0bFBVdGFLdXdxVkFvOHQzQT09"
                    className="bg-white hover:bg-gray-300 text-sky-900 py-1 w-full items-center text-center rounded inline-block mt-6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ajukan Permohonan
                  </a>
                </li>
                <li>
                  <div className="text-yellow-300 font-semibold">
                    Email Kami
                  </div>
                  <span>
                    Kirimkan Pertanyaanmu ke <strong>ppid@umkm.co.id</strong>.
                  </span>
                </li>
                <li>
                  <div className="text-yellow-300 font-semibold">
                    Apa program strategis Kementerian UMKM?
                  </div>

                  <span>
                    Lebih nyaman lewat telepon? kami siap dihubungi melalui:{' '}
                    <strong>106</strong>.
                  </span>
                </li>
                <li>
                  <div className="text-yellow-300 font-semibold">
                    Whatsapp Channel
                  </div>
                  <span>
                    Ingin mendapatkan info terkini seputar Kementerian UMKM?
                    Ikuti kanal resmi Whatsapp channel kami{' '}
                    <a
                      href="https://www.whatsapp.com/channel/0029Vb5ZVaZ8aKvIhXtode1Y"
                      className="underline font-semibold text-white hover:text-yellow-300 cursor-pointer bg-transparent border-none p-0"
                      aria-label="Whatsapp Channel Resmi Kementerian UMKM"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DI SINI
                    </a>
                    {'.'}
                  </span>
                </li>
                <li>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/kementerianumkm/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-2 hover:bg-yellow-300 transition"
                    >
                      <FaInstagram className="h-5 w-5 text-gray-100 hover:text-sky-900" />
                    </a>
                    <a
                      href="https://web.facebook.com/kementerianumkm?_rdc=1&_rdr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-2 hover:bg-yellow-300 transition"
                    >
                      <FaFacebook className="h-5 w-5 text-gray-100 hover:text-sky-900" />
                    </a>
                    <a
                      href="https://x.com/kementerianumkm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-2 hover:bg-yellow-300 transition"
                    >
                      <FaXTwitter className="h-5 w-5 text-gray-100 hover:text-sky-900" />
                    </a>
                    <a
                      href="https://www.youtube.com/@KitaUMKM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/20 p-2 hover:bg-yellow-300 transition"
                    >
                      <FaYoutube className="h-5 w-5 text-gray-100 hover:text-sky-900" />
                    </a>
                  </div>
                </li>
              </ol>
            </div>

            <div className="flex flex-col items-center md:items-start space-y-4">
              <h2 className="text-white text-3xl font-bold">
                Pelayanan Terpadu Satu Pintu
              </h2>
              <h3 className="text-white text-lg font-semibold mb-4">
                Kementerian UMKM
              </h3>
              <ol className="space-y-4">
                <li>
                  Jam operasional:
                  <br />
                  <span>Senin - Kamis, 07:30 - 16:00</span>
                  <br />
                  <span>Jumat, 07:30 - 16:30</span>
                </li>
                <li>
                  <span>
                    Jl. Gatot Subroto No. Kav. 94, Pancoran, Kec. Pancoran, Kota
                    Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12780.
                  </span>
                  <div className="mt-4">
                    <iframe
                      title="Lokasi Kementerian UMKM"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.025557377516!2d106.836333!3d-6.241833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTQnMzAuNiJTIDEwNsKwNTAnMTAuOCJF!5e0!3m2!1sid!2sid!4v1719830000000!5m2!1sid!2sid"
                      width="100%"
                      height="250"
                      style={{ border: 0, borderRadius: '12px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
