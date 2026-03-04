import Aplikasi from "./main/Aplikasi";
import Hero from "./main/Hero";
import KebijakanPrivasi from "./main/KebijakanPrivasi";
import KetentuanLayanan from "./main/KetentuanLayanan";
import PengembalianDana from "./main/PengembalianDana";
import Pengiriman from "./main/Pengiriman";
import ProdukDigital from "./main/ProdukDigital";

export default function Main() {
  return (
    <section className="w-full h-full bg-white border-6 border-orange-800 rounded-4xl overflow-auto shadow-lg shadow-black/50">
      <Hero />
      {/* <Aplikasi /> */}
      <ProdukDigital />
      <KetentuanLayanan />
      <KebijakanPrivasi />
      <PengembalianDana />
      <Pengiriman />
    </section>
  );
}
