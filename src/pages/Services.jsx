import { NavLink } from "react-router-dom";
import ServicesBest from "../components/ServicesBest";

export default function Services({dataLayanan}) {
    return (
      <section className="w-full bg-orange-100">
        <div className="w-full p-3 sm:p-20 flex justify-center items-start cursor-default">
          <div className="w-4/12 pe-10 hidden sm:inline-block">
            <ServicesBest />
          </div>
          <div className="w-full sm:ps-10 sm:border-l border-gray-400">
            <h1 className="text-center sm:text-start text-3xl sm:text-5xl text-orange-500 mb-5 sm:mb-10">
              Layanan Hanami Printing
            </h1>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {dataLayanan.map(
                (
                  { judul, link, gambar, bintang, keterangan, online },
                  index
                ) => (
                  <NavLink
                    to={`/layanan/${link}`}
                    key={index}
                    className="w-full bg-white rounded-lg sm:rounded-2xl p-3 sm:p-5 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-black/20 hover:shadow-xl"
                  >
                    <img
                      src={`./layanan/${gambar}`}
                      alt={judul}
                      className="w-full rounded-md sm:rounded-xl shadow-black/20 shadow-md mb-2"
                    />
                    <h1 className="text-center text-sm sm:text-base font-bold">
                      {judul}
                    </h1>
                    <div className="w-full flex justify-center items-center gap-1">
                      <i className="bi-star-fill text-xs sm:text-lg text-orange-400"></i>
                      <i className="bi-star-fill text-xs sm:text-lg text-orange-400"></i>
                      <i className="bi-star-fill text-xs sm:text-lg text-orange-400"></i>
                      <i className="bi-star-fill text-xs sm:text-lg text-orange-400"></i>
                      <i className="bi-star-fill text-xs sm:text-lg text-orange-400"></i>
                    </div>
                  </NavLink>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    );
}