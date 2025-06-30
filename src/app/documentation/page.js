export default function DokumentasiPage() {
  return (
    <div className="min-h-screen bg-white text-sky-900 pt-20">
      <div className="max-w-4xl mx-auto">
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
          <div className="flex flex-col items-end md:items-end space-y-4">
            <div className="relative w-120 h-80 rounded shadow-lg overflow-hidden">
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

          <div>
            <div className="relative w-120 h-80 rounded shadow-lg overflow-hidden">
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
      <div className="bg-sky-900 h-32 w-full flex items-center justify-center text-white">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-1 md:px-1">
          <a
            href="https://umkm.go.id/siaran-pers"
            className="bg-white hover:bg-gray-300 text-sky-900 py-1 px-4 w-full text-center rounded inline-block transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block' }}
          >
            Siaran Pers
          </a>
          <a
            href="https://umkm.go.id/warta-umkm"
            className="bg-white hover:bg-gray-300 text-sky-900 py-1 px-4 w-full text-center rounded inline-block transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block' }}
          >
            Warta UMKM
          </a>
          <a
            href="https://umkm.go.id/"
            className="bg-white hover:bg-gray-300 text-sky-900 py-1 px-4 w-full text-center rounded inline-block transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block' }}
          >
            Info Tips
          </a>
        </div>
      </div>
      <div className="bg-white h-140 w-full flex items-center justify-center text-white">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center px-1 md:px-1">
          <div>
            <iframe
              src="https://www.instagram.com/p/DFbzn4Fv-Z1/embed"
              className="w-full h-128 rounded"
              allow="encrypted-media"
              title="Instagram"
              frameBorder="0"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://www.instagram.com/p/DLWu5xmyBG9/embed"
              className="w-full h-128 rounded"
              allow="encrypted-media"
              title="Instagram"
              frameBorder="0"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://www.instagram.com/p/DKvnZKCJaIz/embed"
              className="w-full h-128 rounded"
              allow="encrypted-media"
              title="Instagram"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center">
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
      <div className="w-full max-w-6xl mx-auto my-12">
        <div className="w-full h-128 rounded shadow-lg overflow-hidden border border-gray-200">
          <iframe
            src="https://umkm.go.id/"
            title="Preview Website Kementerian UMKM"
            className="w-full h-full"
            frameBorder="0"
            loading="lazy"
          ></iframe>
        </div>
        <div className="items-center text-center m-12">
          <a
            href="https://wa.me/62811380280"
            className="bg-sky-900 hover:bg-sky-800 text-white py-1 px-15 rounded inline-block"
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
