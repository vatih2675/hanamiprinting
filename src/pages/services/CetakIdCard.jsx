import { NavLink } from "react-router-dom";
import ServicesBest from "../../components/ServicesBest";

export default function CetakIdCard({dataApp}) {
    return (
        <section className="w-full bg-orange-100">
            <div className="w-full p-20 flex justify-center items-start cursor-default">
                <div className="w-4/12 pe-10 border-r border-gray-400">
                    <ServicesBest />
                </div>
                <div className="w-full ps-10">
                    <div className="flex justify-start items-center w-full gap-2 mb-10 text-3xl">
                        <NavLink to="/layanan" className="text-3xl hover:text-orange-500 transition-all duration-300"><i className="bi-arrow-left me-2"></i>Layanan</NavLink>
                        <span>/</span>
                        <h1 className="text-3xl text-orange-500 font-bold">Cetak ID Card</h1>
                    </div>
                    <div className="w-full bg-white rounded-xl p-5 shadow-black/10 shadow-lg">
                        <div className="w-full flex justify-between items-center mb-5">
                            <h3 className="text-orange-500 font-bold text-xl">Cetak ID Card</h3>
                            <div className="w-fit flex justify-center items-center gap-1">
                                <i className="bi-star-fill text-lg text-orange-400"></i>
                                <i className="bi-star-fill text-lg text-orange-400"></i>
                                <i className="bi-star-fill text-lg text-orange-400"></i>
                                <i className="bi-star-fill text-lg text-orange-400"></i>
                                <i className="bi-star-fill text-lg text-orange-400"></i>
                            </div>
                        </div>
                        <div className="relative flex justify-center items-start gap-5">
                            <img src="../layanan/cetak-id-card.png" alt="" className="w-4/12 rounded-xl shadow-black/10 shadow-lg" />
                            <div className="w-full">
                                <p className="text-justify">Cetak ID Card sebagai personal branding Anda.</p>
                            </div>
                            <a href={dataApp.links.whatsapp} target="_blank" className="absolute w-fit flex justify-center items-center gap-2 rounded-lg bg-orange-600 px-3 py-2 text-white text-sm shadow-black/20 shadow-md hover:bg-orange-500 transition-all duration-300 bottom-0 right-0">
                                <i className="bi-whatsapp"></i>
                                <span>Pesan Sekarang</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}