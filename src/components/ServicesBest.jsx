import { NavLink } from "react-router-dom";
import { dataLayanan } from "../constants/Data";

export default function ServicesBest() {
    return (
        <>
            <div className="w-full mb-10 hidden">
                <h1 className="text-3xl text-orange-500 mb-3">Cari Layanan</h1>
                <form action="#" method="post" className="w-full flex justify-center-itams-center gap-1">
                    <input type="text" className="bg-white w-full px-3 py-2 border-1 border-gray-300 rounded-lg focus:outline-none focus:shadow-black/10 focus:shadow-md transition-all duration-300" placeholder="Cari produk / layanan ..." />
                    <button className="w-fit flex justify-center items-center px-3 py-2 text-white bg-orange-500 hover:bg-orange-400 cursor-pointer hover:shadow-black/10 hover:shadow-md transition-all duration-300 rounded-lg"><i className="bi-search me-1"></i>Cari</button>
                </form>
            </div>
            <div className="w-full mb-10">
                <h1 className="text-3xl text-orange-500 mb-3">Layanan Unggulan</h1>
                <div className="w-full flex flex-col justify-center items-center">
                    {dataLayanan.map(({judul, link, gambar, bintang, keterangan, online}, index) => (
                        <NavLink key={index} to={`/layanan-${link}`} className={`w-full p-2 flex justify-center items-center gap-2 border-b border-gray-300 hover:bg-white/25 transition-all duration-300 `}>
                            <img src={`../layanan/${gambar}`} alt={judul} className="w-3/12 rounded-md" />
                            <div className="w-full flex flex-col justify-center items-start">
                                <h1 className="font-bold">{judul}</h1>
                                <div className="w-full flex justify-start items-center gap-1">
                                    <i className="bi-star-fill text-lg text-orange-400"></i>
                                    <i className="bi-star-fill text-lg text-orange-400"></i>
                                    <i className="bi-star-fill text-lg text-orange-400"></i>
                                    <i className="bi-star-fill text-lg text-orange-400"></i>
                                    <i className="bi-star-fill text-lg text-orange-400"></i>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="w-full mb-10">
                <h1 className="text-3xl text-orange-500 mb-3">Tag Layanan</h1>
            </div>
        </>
    )
}