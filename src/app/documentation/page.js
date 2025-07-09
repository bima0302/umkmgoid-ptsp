export default function DokumentasiPage() {
  return (
    <div className="min-h-screen bg-white text-sky-900 pt-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          Selamat datang di Laman Dokumentasi Kementerian UMKM!
        </h2>
        <p className="mb-4">
          Di sini, Anda bisa menemukan berbagai publikasi terkait program dan
          kebijakan untuk memajukan usaha Mikro, Kecil, dan Menengah (UMKM) di
          Indonesia.
        </p>
      </div>
      <div className="bg-white text-sky-900 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="relative w-full aspect-video rounded shadow-lg overflow-hidden max-w-xl">
              <iframe
                src="https://www.youtube.com/embed/UwLcmib6CPg"
                title="Video Dokumentasi Kementerian UMKM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="relative w-full aspect-video rounded shadow-lg overflow-hidden max-w-xl">
              <iframe
                src="https://www.youtube.com/embed/YmBG55_rKd0"
                title="Video Dokumentasi Kementerian UMKM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cyan-700 min-h-32 w-full flex items-center justify-center text-white px-2 py-6">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:gap-8 items-center px-2">
          <a
            href="https://umkm.go.id/siaran-pers"
            className="bg-sky-900 hover:shadow text-white py-2 px-4 w-full text-center rounded inline-block transition-all duration-200 text-base sm:text-lg shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Siaran Pers
          </a>
          <a
            href="https://umkm.go.id/warta-umkm"
            className="bg-sky-900 hover:shadow text-white py-2 px-4 w-full text-center rounded inline-block transition-all duration-200 text-base sm:text-lg shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Warta UMKM
          </a>
          <a
            href="https://umkm.go.id/"
            className="bg-sky-900 hover:shadow text-white py-2 px-4 w-full text-center rounded inline-block transition-all duration-200 text-base sm:text-lg shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Info Tips
          </a>
        </div>
      </div>
      <div className="bg-white w-full flex items-center justify-center text-white py-8">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center px-2">
          <div>
            <div className="relative w-full aspect-[3/4] rounded shadow-lg overflow-hidden">
              <iframe
                src="https://www.instagram.com/p/DFbzn4Fv-Z1/embed"
                className="w-full h-full rounded"
                allow="encrypted-media"
                title="Instagram"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          <div>
            <div className="relative w-full aspect-[3/4] rounded shadow-lg overflow-hidden">
              <iframe
                src="https://www.instagram.com/p/DLWu5xmyBG9/embed"
                className="w-full h-full rounded"
                allow="encrypted-media"
                title="Instagram"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          <div>
            <div className="relative w-full aspect-[3/4] rounded shadow-lg overflow-hidden">
              <iframe
                src="https://www.instagram.com/p/DKvnZKCJaIz/embed"
                className="w-full h-full rounded"
                allow="encrypted-media"
                title="Instagram"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center px-4">
        Yuk, <strong>kunjungi Instagram resmi @kementerianumkm!</strong>
        <br />
        <span>
          Dapatkan{' '}
          <strong>
            informasi terkini, kebijakan penting, dan capaian program
          </strong>{' '}
          yang berdampak langsung bagi masyarakat.
        </span>
      </div>
      <div className="w-full max-w-6xl mx-auto my-12 px-2">
        <div className="w-full aspect-video rounded shadow-lg overflow-hidden border border-gray-200">
          <iframe
            src="https://umkm.go.id/"
            title="Preview Website Kementerian UMKM"
            className="w-full h-full"
            frameBorder="0"
            loading="lazy"
          ></iframe>
        </div>
        <div className="items-center text-center mt-12 m-2">
          <a
            href="https://wa.me/62811380280"
            className="bg-sky-900 hover:shadow text-white w-full md:px-16 py-2 rounded inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp Khusus Teks
          </a>
        </div>
      </div>
    </div>
  );
}
