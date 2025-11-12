import ServicesBest from "../components/ServicesBest";

export default function Services({dataLayanan}) {
    return (
        <section className="w-full bg-orange-100">
            <div className="w-full p-20 flex justify-center items-start cursor-default">
                <div className="w-4/12 pe-10">
                    <ServicesBest />
                </div>
                <div className="w-full ps-10 border-l border-gray-400">
                    <h1 className="text-5xl text-orange-500 mb-10">Layanan Percetakan</h1>
                    <div className="w-full grid grid-cols-3 gap-4">
                        {dataLayanan.map(({judul, link, gambar, bintang, keterangan, online}, index) => (
                            <a href={`/layanan-${link}`} key={index} className="w-full bg-white rounded-2xl p-5 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-black/20 hover:shadow-xl">
                                <img
                                    src={`./layanan/${gambar}`}
                                    alt={judul}
                                    className="w-full rounded-xl shadow-black/20 shadow-md mb-2"
                                />
                                <h1 className="text-center font-bold">{judul}</h1>
                                <div className="w-full flex justify-center items-center gap-1">
                                    <i className="bi-star-fill text-lg text-orange-400"></i>
                                    <i className="bi-star-fill text-lg text-orange-400"></i>
                                    <i className="bi-star-fill text-lg text-orange-400"></i>
                                    <i className="bi-star-fill text-lg text-orange-400"></i>
                                    <i className="bi-star-fill text-lg text-orange-400"></i>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}