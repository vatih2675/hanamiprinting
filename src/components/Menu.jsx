import { menu } from "../constants/Data";

export default function Menu() {
  return (
    <section className="w-fit h-fit bg-white/70 border-4 border-orange-800 ms-0 mt-3 sm:mt-0 sm:ms-3 rounded-full shadow-lg shadow-black/50 sm:px-2 px-4 sm:py-4 py-2">
      <div className="flex flex-row sm:flex-col justify-center items-center gap-4 text-xl text-orange-800">
        {menu.map(({ title, link, icon }, index) => (
          <a
            key={index}
            href={link}
            className={`${icon} cursor-pointer transition-all duration-300 hover:scale-120`}
            title={title}
          ></a>
        ))}
      </div>
    </section>
  );
}
