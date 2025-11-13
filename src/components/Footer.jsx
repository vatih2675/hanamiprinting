import { NavLink } from "react-router-dom";
import logoWhite from "/logo-white.png";

export default function Footer({dataApp,dataLayanan, dataPembayaran}) {
  return (
    <footer className="w-full text-white bg-orange-700 px-20 py-10">
      <div className="w-full flex justify-center items-start gap-15 mb-10">
        <div className="w-3/12">
          <img src={logoWhite} alt="Hanami Printing" className="w-full" />
          <p className="w-full text-xs text-justify cursor-default">{dataApp.alamat}</p>
          <div className="flex flex-col justify-start items-start my-10">
            <a
              href={dataApp.links.whatsapp}
              target="_blank"
              className="flex justify-start items-center gap-1 hover:text-orange-300 transition-all duration-300"
            >
              <i className="bi-whatsapp text-lg"></i>
              <span>{dataApp.telepon}</span>
            </a>
            <a
              href={dataApp.links.olshopin}
              target="_blank"
              className="flex justify-start items-center gap-1 hover:text-orange-300 transition-all duration-300"
            >
              <i className="bi-shop text-lg"></i>
              <span>Hanami Printing Official Store</span>
            </a>
            <a
              href={`mailto:${dataApp.links.email}`}
              target="_blank"
              className="flex justify-start items-center gap-1 hover:text-orange-300 transition-all duration-300"
            >
              <i className="bi-envelope-at text-lg"></i>
              <span>{dataApp.links.email}</span>
            </a>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h1 className="font-bold text-lg cursor-default">
              Ikuti Toko Kami :
            </h1>
            <div className="flex justify-start items-center gap-7 mt-2">
              <a
                href={dataApp.links.facebook}
                target="_blank"
                className="hover:text-orange-300 hover:scale-120 transition-all duration-300"
              >
                <i className="bi-facebook text-3xl"></i>
              </a>
              <a
                href={dataApp.links.instagram}
                target="_blank"
                className="hover:text-orange-300 hover:scale-120 transition-all duration-300"
              >
                <i className="bi-instagram text-3xl"></i>
              </a>
              <a
                href={dataApp.links.tiktok}
                target="_blank"
                className="hover:text-orange-300 hover:scale-120 transition-all duration-300"
              >
                <i className="bi-tiktok text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-3/12">
          <h1 className="mb-5 font-bold text-2xl">LAYANAN</h1>
          <ul className="w-full list-disc ms-5">
            {dataLayanan.map(({judul, link, gambar, bintang, keterangan, online}, index) => (
                <li key={index} className="w-full hover:text-orange-300 transition-all duration-300 cursor-pointer">
                  <NavLink to={`/layanan/${link}`} className="w-full">{judul}</NavLink>
                </li>
            ))}
          </ul>
        </div>
        <div className="w-6/12 cursor-default">
          <h1 className="mb-5 font-bold text-2xl">METODE PEMBAYARAN</h1>
          <div className="w-full flex flex-wrap justify-around items-center gap-5">
            <span className="font-bold text-xl flex justify-center items-center hover:scale-110 transition-all duration-300" title="Tunai">
              <i className="bi-cash-coin text-3xl me-1"></i>Tunai
            </span>
            {dataPembayaran.map(({title, akun, image}, index) => (
              <img key={index} src={`../pembayaran/white/${image}`} alt={title} title={`${title} - ${akun}`} className="h-7 hover:scale-110 transition-all duration-300" />
            ))}
          </div>
          <iframe
            src={dataApp.links.geo}
            className="w-full h-80 mt-10 rounded-xl shadow-black/20 shadow-xl"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="w-full flex justify-start items-center gap-3 cursor-default">
        <h1 className="border-r border-white pe-3">Copyright <i className="bi-c-circle"></i> 2025</h1>
        <a href="/" className="font-bold hover:text-orange-300 transition-all duration-300">花見 Hanami Printing</a>
      </div>
      <a href={dataApp.links.whatsapp} target="_blank" className="fixed flex justify-center items-center gap-2 bottom-5 right-5 rounded-full bg-green-600 px-4 py-2 animate-bounce text-white text-xl shadow-black/30 shadow-md hover:bg-green-500 transition-all duration-300">
        <i className="bi-whatsapp"></i>
        <span>Hubungi Kami</span>
      </a>
    </footer>
  );
}
