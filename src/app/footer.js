import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-sky-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
                <div className="text-yellow-300 font-semibold">Email Kami</div>
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
                  Ingin mendapatkan info terkini seputar Kementerian UMKM? Ikuti
                  kanal resmi Whatsapp channel kami{' '}
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
      <div className="bg-gray-100 border-t border-gray-300 py-6">
        <div className="max-w-6xl mx-auto flex">
          <div className="flex items-center space-x-2">
            <span
              className="text-md text-gray-700 italic"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              Created by Humas dan Informasi Publik Kementerian UMKM
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
