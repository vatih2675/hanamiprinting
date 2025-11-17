import { NavLink } from "react-router-dom";
import logoWhite from "/logo-white.png";

export default function Footer({dataApp,dataLayanan, dataPembayaran}) {
  return (
    <footer className="w-full text-white bg-orange-700 px-0 sm:px-20 py-0 sm:py-10">
      <div className="w-full flex flex-wrap sm:flex-nowrap justify-center items-start sm:gap-15 mb-10">
        <div className="sm:w-3/12 w-6/12 py-3 ps-3 pe-5 sm:p-0">
          <img src={logoWhite} alt="Hanami Printing" className="w-full" />
          <p className="w-full text-xs text-justify cursor-default">
            {dataApp.alamat}
          </p>
          <div className="flex flex-col justify-start items-start my-5 sm:my-10">
            <a
              href={dataApp.links.whatsapp}
              target="_blank"
              className="flex justify-start items-center gap-1 hover:text-orange-300 transition-all duration-300"
            >
              <i className="bi-whatsapp sm:text-lg text-base"></i>
              <span className="text-sm sm:text-base">{dataApp.telepon}</span>
            </a>
            <a
              href={dataApp.links.olshopin}
              target="_blank"
              className="flex justify-start items-center gap-1 hover:text-orange-300 transition-all duration-300"
            >
              <i className="bi-shop sm:text-lg text-base"></i>
              <span className="text-sm sm:text-base">
                Hanami Printing Official Store
              </span>
            </a>
            <a
              href={`mailto:${dataApp.links.email}`}
              target="_blank"
              className="flex justify-start items-center gap-1 hover:text-orange-300 transition-all duration-300"
            >
              <i className="bi-envelope-at sm:text-lg text-base"></i>
              <span className="text-sm sm:text-base">
                {dataApp.links.email}
              </span>
            </a>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h1 className="font-bold sm:text-lg text-base cursor-default">
              Ikuti Toko Kami :
            </h1>
            <div className="flex justify-start items-center gap-3 sm:gap-7 mt-2">
              <a
                href={dataApp.links.facebook}
                target="_blank"
                className="hover:text-orange-300 hover:scale-120 transition-all duration-300"
              >
                <i className="bi-facebook text-xl sm:text-3xl"></i>
              </a>
              <a
                href={dataApp.links.instagram}
                target="_blank"
                className="hover:text-orange-300 hover:scale-120 transition-all duration-300"
              >
                <i className="bi-instagram text-xl sm:text-3xl"></i>
              </a>
              <a
                href={dataApp.links.tiktok}
                target="_blank"
                className="hover:text-orange-300 hover:scale-120 transition-all duration-300"
              >
                <i className="bi-tiktok text-xl sm:text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="sm:w-3/12 w-6/12 py-3 pe-3 ps-5 sm:p-0">
          <h1 className="mb-2 sm:mb-5 font-bold text-lg sm:text-2xl">
            LAYANAN
          </h1>
          <ul className="w-full list-disc ms-5 sm:text-base text-xs">
            {dataLayanan.map(
              ({ judul, link, gambar, bintang, keterangan, online }, index) => (
                <li
                  key={index}
                  className="w-full hover:text-orange-300 transition-all duration-300 cursor-pointer"
                >
                  <NavLink to={`/layanan/${link}`} className="w-full">
                    {judul}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="sm:w-6/12 w-full py-3 sm:px-0 sm:py-0 px-3 sm:p-0 cursor-default sm:mt-0 mt-5">
          <h1 className="mb-2 sm:mb-5 font-bold text-lg sm:text-2xl sm:text-start text-center w-full">
            METODE PEMBAYARAN
          </h1>
          <div className="w-full flex flex-wrap justify-around items-center gap-1 sm:gap-5">
            <span
              className="font-bold text-base sm:text-xl flex justify-center items-center hover:scale-110 transition-all duration-300"
              title="Tunai"
            >
              <i className="bi-cash-coin text-xl sm:text-3xl me-1"></i>Tunai
            </span>
            {dataPembayaran.map(({ title, akun, image }, index) => (
              <img
                key={index}
                src={`../pembayaran/white/${image}`}
                alt={title}
                title={`${title} - ${akun}`}
                className="h-4 sm:h-7 hover:scale-110 transition-all duration-300"
              />
            ))}
          </div>
          <iframe
            src={dataApp.links.geo}
            className="w-full h-60 sm:h-80 mt-5 sm:mt-10 rounded-xl shadow-black/20 shadow-xl"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="w-full text-xs sm:text-base flex justify-center sm:pb-0 pb-5 sm:justify-start items-center gap-3 cursor-default">
        <h1 className="border-r border-white pe-3">
          Copyright <i className="bi-c-circle"></i> 2025
        </h1>
        <a
          href="/"
          className="font-bold hover:text-orange-300 transition-all duration-300"
        >
          花見 Hanami Printing
        </a>
      </div>
      <a
        href={dataApp.links.whatsapp}
        target="_blank"
        className="fixed flex justify-center items-center gap-2 bottom-5 right-5 rounded-full bg-green-600 px-2 sm:px-4 py-1 sm:py-2 animate-bounce text-white sm:text-xl shadow-black/30 shadow-md hover:bg-green-500 transition-all duration-300"
      >
        <i className="bi-whatsapp"></i>
        <span className="hidden sm:inline-block">Hubungi Kami</span>
      </a>
    </footer>
  );
}
