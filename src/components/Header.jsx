import { NavLink } from "react-router-dom";
import { useState } from "react";
import icon from "/icon.png";
import icon1 from "/icon1.png";
import icon2 from "/icon2.png";
import icon3 from "/icon3.png";
import logo from "/logo.png";

export default function Header({dataApp}) {
  const [pathUrl, setPathUrl] = useState(window.location.pathname)
  function changePathUrl(){
    setPathUrl(window.location.pathname)
  }

  // console.log(panpm run devthUrl)
  return (
    <header className="w-full bg-white">
      <div className="w-full px-20 py-1 flex justify-between items-center text-xs">
        <a
          href={dataApp.links.maps}
          target="_blank"
          className="hover:text-orange-500 transition-all duration-300 flex justify-center items-center gap-1"
        >
          <i className="bi-geo-alt-fill text-lg"></i>
          <span>{dataApp.alamat}</span>
        </a>
        <div className="flex justify-center items-center gap-5">
          <a
            href={dataApp.links.facebook}
            target="_blank"
            className="flex justify-center items-center gap-1 hover:text-orange-500 transition-all duration-300"
          >
            <i className="bi-facebook text-lg"></i>
            <span>Facebook</span>
          </a>
          <a
            href={dataApp.links.instagram}
            target="_blank"
            className="flex justify-center items-center gap-1 hover:text-orange-500 transition-all duration-300"
          >
            <i className="bi-instagram text-lg"></i>
            <span>Instagram</span>
          </a>
          <a
            href={dataApp.links.tiktok}
            target="_blank"
            className="flex justify-center items-center gap-1 hover:text-orange-500 transition-all duration-300"
          >
            <i className="bi-tiktok text-lg"></i>
            <span>TikTok</span>
          </a>
          <a
            href={dataApp.links.olshopin}
            target="_blank"
            className="flex justify-center items-center gap-1 hover:text-orange-500 transition-all duration-300"
          >
            <i className="bi-shop text-lg"></i>
            <span>Hanami Printing</span>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-between items-center border-y border-gray-200 px-20 py-5">
        <img onClick={() => window.location.href = "/"} src={logo} alt="Hanami Printing" className="w-70 cursor-pointer" />
        <div className="flex justify-center items-center gap-10">
          <NavLink
            to={"/"}
            onClick={changePathUrl}
            className={`transition-all duration-300 ${window.location.pathname=="/" ? "text-orange-500 font-bold cursor-default pointer-events-none" : "hover:text-orange-500 cursor-pointer"}`}
          >
            Beranda
          </NavLink>
          <NavLink
            to={"layanan"}
            onClick={changePathUrl}
            className={`transition-all duration-300 ${window.location.pathname=="/layanan" ? "text-orange-500 font-bold cursor-default pointer-events-none" : "hover:text-orange-500 cursor-pointer"}`}
          >
            Layanan
          </NavLink>
          <NavLink
            to={"tentang-kami"}
            onClick={changePathUrl}
            className={`transition-all duration-300 ${window.location.pathname=="/tentang-kami" ? "text-orange-500 font-bold cursor-default pointer-events-none" : "hover:text-orange-500 cursor-pointer"}`}
          >
            Tentang Kami
          </NavLink>
          <NavLink
            to={"kontak"}
            onClick={changePathUrl}
            className={`transition-all duration-300 ${window.location.pathname=="/kontak" ? "text-orange-500 font-bold cursor-default pointer-events-none" : "hover:text-orange-500 cursor-pointer"}`}
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
      </div>
    </header>
  );
}
