import Aplikasi from "./main/Aplikasi";
import Hero from "./main/Hero";

export default function Main() {
  return (
    <section className="w-full h-full bg-white border-6 border-orange-800 rounded-4xl overflow-auto shadow-lg shadow-black/50">
      <Hero />
      <Aplikasi />
    </section>
  );
}
