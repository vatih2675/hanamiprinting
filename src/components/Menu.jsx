export default function Menu() {
  return (
    <section className="w-fit h-fit bg-white/70 border-4 border-orange-800 ms-0 mt-3 sm:mt-0 sm:ms-3 rounded-full shadow-lg shadow-black/50 sm:px-2 px-4 sm:py-4 py-2">
      <div className="flex flex-row sm:flex-col justify-center items-center gap-4 text-xl text-orange-800">
        <a
          href="#hero"
          className="bi-house-fill cursor-pointer transition-all duration-300 hover:scale-120"
          title="Beranda"
        ></a>
        <a
          href="#produk-digital"
          className="bi-list cursor-pointer transition-all duration-300 hover:scale-120"
          title="Produk Digital"
        ></a>
      </div>
    </section>
  );
}
