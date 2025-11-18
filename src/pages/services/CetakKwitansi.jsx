import { NavLink } from "react-router-dom";
import ServicesBest from "../../components/ServicesBest";

export default function CetakKwitansi({dataApp}) {
    return (
      <section className="w-full bg-orange-100">
        <div className="w-full p-3 sm:p-20 flex justify-center items-start cursor-default">
          <div className="w-4/12 hidden sm:inline-block pe-10 border-r border-gray-400">
            <ServicesBest />
          </div>
          <div className="w-full sm:ps-10">
            <div className="flex justify-start items-center w-full gap-2 mb-5 sm:mb-10 text-xl sm:text-3xl">
              <NavLink
                to="/layanan"
                className="text-xl sm:text-3xl hover:text-orange-500 transition-all duration-300"
              >
                <i className="bi-arrow-left me-2"></i>Layanan
              </NavLink>
              <span>/</span>
              <h1 className="text-xl sm:text-3xl text-orange-500 font-bold">
                Cetak Kwitansi
              </h1>
            </div>
            <div className="w-full bg-white rounded-xl p-3 sm:p-5 shadow-black/10 shadow-lg mb-5">
              <div className="w-full flex justify-between items-center mb-3 sm:mb-5">
                <h3 className="text-orange-500 font-bold text-xl">
                  Cetak Kwitansi
                </h3>
                <div className="w-fit text-xs sm:text-lg flex justify-center items-center gap-1">
                  <i className="bi-star-fill text-orange-400"></i>
                  <i className="bi-star-fill text-orange-400"></i>
                  <i className="bi-star-fill text-orange-400"></i>
                  <i className="bi-star-fill text-orange-400"></i>
                  <i className="bi-star-fill text-orange-400"></i>
                </div>
              </div>
              <div className="relative flex justify-center items-start gap-3 sm:gap-5">
                <img
                  src="../layanan/cetak-kwitansi.png"
                  alt=""
                  className="w-3/12 sm:w-4/12 rounded-xl shadow-black/10 shadow-lg"
                />
                <div className="w-full">
                  <p className="text-xs sm:text-base text-justify">
                    Cetak Kwitansi untuk kebutuhan usaha / instansi Anda dan
                    bisa di kostum sesuai keinginan Anda.
                  </p>
                </div>
                <a
                  href={dataApp.links.whatsapp}
                  target="_blank"
                  className="absolute w-fit flex justify-center items-center gap-2 rounded-lg bg-orange-600 px-2 sm:px-3 py-1 sm:py-2 text-white text-xs sm:text-sm shadow-black/20 shadow-md hover:bg-orange-500 transition-all duration-300 bottom-0 right-0"
                >
                  <i className="bi-whatsapp"></i>
                  <span>Pesan Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}