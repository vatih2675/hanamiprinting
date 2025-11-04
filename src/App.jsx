import { useState } from 'react'
import icon from '/icon.png'
import icon1 from "/icon1.png";
import icon2 from "/icon2.png";
import icon3 from "/icon3.png";
import logo from "/logo.png";
import instagramIcon from "/instagram-icon.png";
import facebookIcon from "/facebook-icon.svg";
import tiktokIcon from "/tiktok-icon.png";
import alloBankLogo from "/pembayaran/AlloBank.png";
import bcaLogo from "/pembayaran/BCA.svg";
import danaLogo from "/pembayaran/Dana.svg";
import gopayLogo from "/pembayaran/GoPay.svg";
import muamalatLogo from "/pembayaran/Muamalat.jpg";
import ovoLogo from "/pembayaran/OVO.svg";
import seaBankLogo from "/pembayaran/SeaBank.svg";
import shopeePayLogo from "/pembayaran/ShopeePay.svg";

function App() {
  const produk = "https://olshopin.com/t/hanamiprinting";
  const whatsapp = "https://wa.me/message/DLRPWPFGCTXOD1";
  const lokasi = "https://maps.app.goo.gl/9yvJHcHYZRYbYBJn9";
  const facebook = "http://www.facebook.com/hanamiprinting";
  const instagram = "http://www.instagram.com/hanamiprinting.id";
  const tiktok = "http://www.tiktok.com/@hanamiprinting.id";

  return (
    <section className="mx-auto w-6/12 flex flex-col gap-5 justify-center items-center h-full overflow-auto p-5 bg-white/50 shadow-2xl">
      <img
        src={icon3}
        alt="Hanami Printing"
        className="w-35 rounded-xl shadow-xl"
      />
      <div className="flex flex-col justify-center items-center cursor-default">
        <h1 className="font-bold m-0 text-orange-500 text-4xl">
          HANAMI PRINTING
        </h1>
        <span>Melayani segala kebutuhan cetakan Anda!</span>
      </div>
      <div className="my-5 w-full flex justify-evenly items-center">
        <a
          href={produk}
          target="_blank"
          className="bi bi-boxes flex justify-center items-center w-25 h-25 text-5xl rounded-xl shadow-md bg-white hover:bg-orange-300 transition-all duration-300 hover:scale-120 cursor-pointer text-orange-300 hover:text-white"
          title="Produk"
        ></a>
        <a
          href={whatsapp}
          target="_blank"
          className="bi bi-whatsapp flex justify-center items-center w-25 h-25 text-5xl rounded-xl shadow-md bg-white hover:bg-orange-300 transition-all duration-300 hover:scale-120 cursor-pointer text-orange-300 hover:text-white"
          title="WhatsApp"
        ></a>
        <a
          href={lokasi}
          target="_blank"
          className="bi bi-geo-alt-fill flex justify-center items-center w-25 h-25 text-5xl rounded-xl shadow-md bg-white hover:bg-orange-300 transition-all duration-300 hover:scale-120 cursor-pointer text-orange-300 hover:text-white"
          title="Lokasi"
        ></a>
      </div>
      <div className="w-full flex flex-col justify-center items-center cursor-default">
        <h1 className="font-bold mb-1 text-orange-500">Ikuti Toko Kami :</h1>
        <div className="mx-auto flex justify-center items-center gap-3">
          <a
            href={instagram}
            target="_blank"
            className="w-10 h-10 bg-white shadow-md rounded-full flex justify-center items-center transition-all duration-300 hover:scale-120"
            title="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" className="w-5" />
          </a>
          <a
            href={facebook}
            target="_blank"
            className="w-10 h-10 bg-white shadow-md rounded-full flex justify-center items-center transition-all duration-300 hover:scale-120"
            title="Facebook"
          >
            <img src={facebookIcon} alt="Facebook" className="w-5" />
          </a>
          <a
            href={tiktok}
            target="_blank"
            className="w-10 h-10 bg-white shadow-md rounded-full flex justify-center items-center transition-all duration-300 hover:scale-120"
            title="Tiktok"
          >
            <img src={tiktokIcon} alt="Tiktok" className="w-5" />
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center cursor-default">
        <h1 className="font-bold mb-1 text-orange-500">Channel Pembayaran :</h1>
        <div className="mx-auto flex flex-wrap justify-center items-center gap-1 cursor-pointer">
          <div
            className="h-8 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-120"
            title="Dana - 0895708460123"
          >
            <img src={danaLogo} alt="Dana" className="h-full" />
          </div>
          <div
            className="h-8 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-120"
            title="OVO - 0895708460123"
          >
            <img src={ovoLogo} alt="OVO" className="h-full" />
          </div>
          <div
            className="h-8 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-120"
            title="Gopay - 0895708460123"
          >
            <img src={gopayLogo} alt="Gopay" className="h-full" />
          </div>
          <div
            className="h-8 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-120"
            title="ShopeePay - 0895708460123"
          >
            <img src={shopeePayLogo} alt="ShopeePay" className="h-full" />
          </div>
          <div
            className="h-8 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-120"
            title="BCA - 7975625991"
          >
            <img src={bcaLogo} alt="BCA" className="h-full" />
          </div>
          <div
            className="h-8 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-120"
            title="Muamalat - 8110077620"
          >
            <img src={muamalatLogo} alt="Muamalat" className="h-full" />
          </div>
          <div
            className="h-8 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-120"
            title="Sea Bank - 901849225983"
          >
            <img src={seaBankLogo} alt="Sea Bank" className="h-full" />
          </div>
          <div
            className="h-8 bg-white shadow-md rounded-full p-2 transition-all duration-300 hover:scale-120"
            title="Allo Bank - 0895708460123"
          >
            <img src={alloBankLogo} alt="Allo Bank" className="h-full" />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between items-start w-full">
      </div> */}
    </section>
  );
}

export default App
