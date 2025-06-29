import Image from 'next/image';
import ParallaxHeader from './ParallaxHeader';
import { KoHo } from 'next/font/google';

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

export default function Home() {
  return (
    <div>
      <main>
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
      </main>
    </div>
  );
}
