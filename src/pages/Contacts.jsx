import spanduk from "/spanduk.png";

export default function Contacts({dataApp}) {
    return (
      <section className="w-full cursor-default">
        <div className="relative w-full cursor-default">
          <img src={spanduk} alt="Spanduk" className="w-full" />
          <div className="absolute w-full left-0 right-0 top-0 bottom-0 bg-white/85 flex justify-center items-center">
            <h1 className="font-black text-3xl sm:text-5xl text-orange-500">
              Kontak Kami
            </h1>
          </div>
        </div>
        <div className="relative w-full p-3 sm:p-20 bg-gray-100">
          <h1 className="text-center sm:text-start text-xl sm:text-3xl text-orange-500 mb-1 sm:mb-3">
            Solusi Cetak Terbaik hanya Hanami Printing
          </h1>
          <p className="w-full text-justify text-xs sm:text-base mb-3 sm:mb-5">
            Kami siap membantu Anda dengan segala kebutuhan cetak, mulai dari
            konsultasi hingga penyelesaian pesanan. Oleh karena itu, jangan ragu
            untuk menghubungi kami jika ada pertanyaan atau ingin memesan
            layanan melalui kontak dibawah ini.
          </p>
          <div className="w-full h-full flex flex-col sm:flex-row justify-center items-start gap-3">
            <div className="w-full sm:w-5/12 h-full bg-white p-3 sm:p-5 border border-gray-200 rounded-xl shadow-black/10 shadow-lg">
              <h1 className="text-orange-500 text-center sm:text-start font-bold mb-1 sm:mb-3">
                Pesan Langsung
              </h1>
              <div className="flex flex-col justify-start items-center sm:items-start gap-1 text-xs sm:text-base">
                <a
                  href={dataApp.links.whatsapp}
                  target="_blank"
                  className="flex justify-start items-center gap-1 hover:text-orange-500 transition-all duration-300"
                >
                  <i className="bi-whatsapp"></i>
                  <span>{dataApp.telepon}</span>
                </a>
                <a
                  href={`mailto:${dataApp.links.email}`}
                  target="_blank"
                  className="flex justify-start items-center gap-1 hover:text-orange-500 transition-all duration-300"
                >
                  <i className="bi-envelope-at"></i>
                  <span>{dataApp.links.email}</span>
                </a>
              </div>
              <h1 className="text-orange-500 text-center sm:text-start font-bold mt-5 sm:mt-10 mb-1 sm:mb-3">
                Toko Online & Media Sosial
              </h1>
              <div className="flex flex-col justify-start items-center sm:items-start gap-1 text-xs sm:text-base">
                <a
                  href={dataApp.links.olshopin}
                  target="_blank"
                  className="flex justify-start items-center gap-1 hover:text-orange-500 transition-all duration-300"
                >
                  <i className="bi-shop"></i>
                  <span>Hanami Printing Official Store</span>
                </a>
                <a
                  href={dataApp.links.facebook}
                  target="_blank"
                  className="flex justify-start items-center gap-1 hover:text-orange-500 transition-all duration-300"
                >
                  <i className="bi-facebook"></i>
                  <span>@hanamiprinting</span>
                </a>
                <a
                  href={dataApp.links.instagram}
                  target="_blank"
                  className="flex justify-start items-center gap-1 hover:text-orange-500 transition-all duration-300"
                >
                  <i className="bi-instagram"></i>
                  <span>@hanamiprinting.id</span>
                </a>
                <a
                  href={dataApp.links.tiktok}
                  target="_blank"
                  className="flex justify-start items-center gap-1 hover:text-orange-500 transition-all duration-300"
                >
                  <i className="bi-tiktok"></i>
                  <span>@hanamiprinting.id</span>
                </a>
              </div>
            </div>
            <div className="w-full bg-white p-3 sm:p-5 border border-gray-200 rounded-xl shadow-black/10 shadow-lg">
              <h1 className="text-orange-500 text-center sm:text-start font-bold mb-1 sm:mb-3">
                Toko Offline
              </h1>
              <div className="w-full flex flex-col justify-start items-center sm:items-start text-xs sm-text-base gap-1">
                <a
                  href={dataApp.links.map}
                  target="_blank"
                  className="w-full text-center sm:text-justify hover:text-orange-500 transition-all duration-300 cursor-pointer mb-1"
                >
                  {dataApp.alamat}
                </a>
                <iframe
                  src={dataApp.links.geo}
                  className="w-full h-51 border border-gray-200 rounded-xl shadow-black/10 shadow-xl"
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}