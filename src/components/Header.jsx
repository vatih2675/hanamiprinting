import { NavLink } from "react-router-dom";
import { useState } from "react";
import icon from "/icon.png";
import icon1 from "/icon1.png";
import icon2 from "/icon2.png";
import icon3 from "/icon3.png";
import logo from "/logo.png";

export default function Header({dataApp}) {
  const [pathUrl, setPathUrl] = useState(window.location.pathname)
  const [menuSmall, setMenuSmall] = useState(false);
  function changePathUrl() {
    setPathUrl(window.location.pathname);
  }

  function openMenuSmall() {
    setMenuSmall(!menuSmall);
  }

  // console.log(panpm run devthUrl)
  return (
    <header className="w-full bg-white">
      <div className="w-full px-3 sm:px-20 py-1 hidden sm:flex justify-between items-center text-xs">
        <a
          href={dataApp.links.maps}
          target="_blank"
          className="hover:text-orange-500 transition-all duration-300 flex justify-center items-center gap-1"
        >
          <i className="bi-geo-alt-fill text-lg"></i>
          <span className="sm:inline-block hidden">{dataApp.alamat}</span>
          {/* <span className="inline-block sm:hidden">{dataApp.alamat}</span> */}
        </a>
        <div className="flex justify-center items-center gap-3 sm:gap-5">
          <a
            href={dataApp.links.facebook}
            target="_blank"
            className="flex justify-center items-center gap-1 hover:text-orange-500 transition-all duration-300"
          >
            <i className="bi-facebook text-lg"></i>
            <span className="sm:inline-block hidden">Facebook</span>
          </a>
          <a
            href={dataApp.links.instagram}
            target="_blank"
            className="flex justify-center items-center gap-1 hover:text-orange-500 transition-all duration-300"
          >
            <i className="bi-instagram text-lg"></i>
            <span className="sm:inline-block hidden">Instagram</span>
          </a>
          <a
            href={dataApp.links.tiktok}
            target="_blank"
            className="flex justify-center items-center gap-1 hover:text-orange-500 transition-all duration-300"
          >
            <i className="bi-tiktok text-lg"></i>
            <span className="sm:inline-block hidden">TikTok</span>
          </a>
          <a
            href={dataApp.links.olshopin}
            target="_blank"
            className="flex justify-center items-center gap-1 hover:text-orange-500 transition-all duration-300"
          >
            <i className="bi-shop text-lg"></i>
            <span className="sm:inline-block hidden">Hanami Printing</span>
          </a>
        </div>
      </div>
      <div className="relative w-full flex justify-between items-center border-y border-gray-200 px-3 sm:px-20 py-1 sm:py-5">
        <img
          onClick={() => (window.location.href = "/")}
          src={logo}
          alt="Hanami Printing"
          className="w-40 sm:w-70 cursor-pointer"
        />
        <div className="hidden sm:flex justify-center items-center gap-10">
          <NavLink
            to={"/"}
            onClick={changePathUrl}
            className={`transition-all duration-300 ${
              window.location.pathname == "/"
                ? "text-orange-500 font-bold cursor-default pointer-events-none"
                : "hover:text-orange-500 cursor-pointer"
            }`}
          >
            Beranda
          </NavLink>
          <NavLink
            to={"layanan"}
            onClick={changePathUrl}
            className={`transition-all duration-300 ${
              window.location.pathname == "/layanan"
                ? "text-orange-500 font-bold cursor-default pointer-events-none"
                : "hover:text-orange-500 cursor-pointer"
            }`}
          >
            Layanan
          </NavLink>
          <NavLink
            to={"tentang-kami"}
            onClick={changePathUrl}
            className={`transition-all duration-300 ${
              window.location.pathname == "/tentang-kami"
                ? "text-orange-500 font-bold cursor-default pointer-events-none"
                : "hover:text-orange-500 cursor-pointer"
            }`}
          >
            Tentang Kami
          </NavLink>
          <NavLink
            to={"kontak"}
            onClick={changePathUrl}
            className={`transition-all duration-300 ${
              window.location.pathname == "/kontak"
                ? "text-orange-500 font-bold cursor-default pointer-events-none"
                : "hover:text-orange-500 cursor-pointer"
            }`}
          >
            Kontak
          </NavLink>
          {/* <NavLink
            to={"blog"}
            onClick={changePathUrl}
            className={`transition-all duration-300 ${menu=="blog" ? "text-orange-500 font-bold cursor-default pointer-events-none" : "hover:text-orange-500 cursor-pointer"}`}
          >
            Blog
          </NavLink> */}
        </div>
        <i
          className={`bi-list sm:hidden cursor-pointer text-lg hover:text-orange-500 hover:rotate-90 transition-all duration-300 ${
            menuSmall ? "rotate-90 text-orange-500" : ""
          }`}
          onClick={openMenuSmall}
        ></i>
        <div
          className={`flex-col justify-center items-center absolute bg-white top-7 right-7 text-sm border border-gray-200 rounded-lg shadow-black/10 shadow-md ${
            menuSmall ? "flex sm:hidden" : "hidden"
          }`}
        >
          <NavLink
            to={"/"}
            onClick={changePathUrl}
            className={`transition-all duration-300 text-start w-full px-3 py-1 border-b border-gray-200 ${
              window.location.pathname == "/"
                ? "text-orange-500 font-bold cursor-default pointer-events-none"
                : "hover:text-orange-500 cursor-pointer"
            }`}
          >
            Beranda
          </NavLink>
          <NavLink
            to={"layanan"}
            onClick={changePathUrl}
            className={`transition-all duration-300 text-start w-full px-3 py-1 border-b border-gray-200 ${
              window.location.pathname == "/layanan"
                ? "text-orange-500 font-bold cursor-default pointer-events-none"
                : "hover:text-orange-500 cursor-pointer"
            }`}
          >
            Layanan
          </NavLink>
          <NavLink
            to={"tentang-kami"}
            onClick={changePathUrl}
            className={`transition-all duration-300 text-start w-full px-3 py-1 border-b border-gray-200 ${
              window.location.pathname == "/tentang-kami"
                ? "text-orange-500 font-bold cursor-default pointer-events-none"
                : "hover:text-orange-500 cursor-pointer"
            }`}
          >
            Tentang Kami
          </NavLink>
          <NavLink
            to={"kontak"}
            onClick={changePathUrl}
            className={`transition-all duration-300 text-start w-full px-3 py-1 ${
              window.location.pathname == "/kontak"
                ? "text-orange-500 font-bold cursor-default pointer-events-none"
                : "hover:text-orange-500 cursor-pointer"
            }`}
          >
            Kontak
          </NavLink>
        </div>
      </div>
    </header>
  );
}
