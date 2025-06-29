import Image from 'next/image';

export default function DokumentasiPage() {
  return (
    <div className="min-h-screen bg-white text-sky-900 py-20 px-4">
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
      <div className="bg-sky-900 h-32 w-full flex items-center justify-center text-white text-2xl font-semibold">
        Hai, ada yang bisa kami bantu?
      </div>
    </div>
  );
}
