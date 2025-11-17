import icon3 from "/icon3.png";
import logo from "/logo-no-bg.png";
import digitalPrinting from "/digital-printing.png";
import Qna from "../components/Qna"
import { NavLink } from "react-router-dom";

export default function Home({dataApp, dataPembayaran, dataLayanan}) {
  return (
    <section className="w-full">
      <div className="w-full p-3 sm:p-20 flex flex-col sm:flex-row justify-center items-center gap-10 cursor-default">
        <div className="w-full sm:w-6/12 flex justify-center items-center">
          <img
            src={digitalPrinting}
            alt="Hanami Printing"
            className="w-[50%] sm:w-[90%]"
          />
        </div>
        <div className="w-full sm:w-6/12 flex flex-col justify-center items-start gap-1 sm:gap-5">
          <h3 className="w-full text-center sm:text-start text-orange-500 font-bold text-xl">
            HANAMI PRINTING
          </h3>
          <h1 className="w-full text-center sm:text-start font-bold text-2xl sm:text-6xl">
            Tempat Percetakan Murah Di Gorontalo
          </h1>
          <p className="w-full text-sm sm:text-base text-center sm:text-justify">
            Kami menerima jasa percetakan digital untuk pembuatan dokumen,
            sticky notes, brosur marketing, media promosi, buku tahunan dan lain
            sebagainya dengan harga terjangkau dan kualitas cetak terbaik.
          </p>
          <a
            href={dataApp.links.whatsapp}
            target="_blank"
            className="flex justify-center items-center gap-2 rounded-md bg-orange-600 px-2 sm:px-5 py-1 sm:py-3 text-white text-sm sm:text-lg shadow-black/30 shadow-md hover:bg-orange-500 transition-all duration-300 mx-auto sm:me-auto my-3 sm:my-0"
          >
            <i className="bi-whatsapp"></i>
            <span>Hubungi Kami</span>
          </a>
        </div>
      </div>
      <div className="w-full px-3 sm:px-20 py-3 sm:py-10 bg-orange-700 grid sm:grid-cols-4 grid-cols-2 gap-3 sm:gap-5 shadow-black/20 shadow-lg cursor-default">
        <div className="w-full p-3 sm:p-5 bg-white/25 text-white rounded-xl shadow-black/30 shadow-md flex justify-center items-start gap-3 hover:scale-110 transition-all duration-300">
          <i className="bi-whatsapp text-base sm:text-xl"></i>
          <div className="w-full h-35 sm:h-40">
            <h1 className="font-bold text-sm sm:text-lg">
              Pesan Percetakan Online
            </h1>
            <p className="sm:text-base text-xs">
              Pemesanan dapat melalui WhatsApp kami. Silahkan klik tombol
              "Hubungi Kami".
            </p>
          </div>
        </div>
        <div className="w-full p-3 sm:p-5 bg-white/25 text-white rounded-xl shadow-black/30 shadow-md flex justify-center items-start gap-3 hover:scale-110 transition-all duration-300">
          <i className="bi-person-fill-check text-base sm:text-xl"></i>
          <div className="w-full h-35 sm:h-40">
            <h1 className="font-bold text-sm sm:text-lg">Profesional</h1>
            <p className="sm:text-base text-xs">
              Pemesanan akan ditangani secara profesional.
            </p>
          </div>
        </div>
        <div className="w-full p-3 sm:p-5 bg-white/25 text-white rounded-xl shadow-black/30 shadow-md flex justify-center items-start gap-3 hover:scale-110 transition-all duration-300">
          <i className="bi-hourglass-split text-base sm:text-xl"></i>
          <div className="w-full h-35 sm:h-40">
            <h1 className="font-bold text-sm sm:text-lg">Proses Cepat</h1>
            <p className="sm:text-base text-xs">
              Proses pesanan lebih cepat dengan hasil maksimal hingga sampai ke
              tangan Anda.
            </p>
          </div>
        </div>
        <div className="w-full p-3 sm:p-5 bg-white/25 text-white rounded-xl shadow-black/30 shadow-md flex justify-center items-start gap-3 hover:scale-110 transition-all duration-300">
          <i className="bi-journal-bookmark-fill text-base sm:text-xl"></i>
          <div className="w-full h-35 sm:h-40">
            <h1 className="font-bold text-sm sm:text-lg">Bergaransi</h1>
            <p className="sm:text-base text-xs">
              Hasil cetakan berkualitas dengan menggunakan bahan terbaik dan
              mesin canggih.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full text-center px-3 sm:px-20 py-5 sm:py-15">
        <h1 className="text-center text-xl sm:text-4xl font-bold text-orange-500 mb-3 sm:mb-10">
          LAYANAN KAMI
        </h1>
        <div className="w-full flex flex-wrap justify-center items-start">
          {dataLayanan.map(
            ({ judul, link, gambar, bintang, keterangan, online }, index) => (
              <NavLink
                to={`/layanan/${link}`}
                key={index}
                className="w-4/12 sm:w-3/12 p-3 sm:p-5 cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <img
                  src={`./layanan/${gambar}`}
                  alt={judul}
                  className="w-full rounded-xl shadow-black/20 shadow-md mb-1 sm:mb-2"
                />
                <h1 className="text-center font-bold text-base sm:text-xl">
                  {judul}
                </h1>
                <div className="w-full flex justify-center items-center">
                  <i className="bi-star-fill text-xs sm:text-lg text-orange-400"></i>
                  <i className="bi-star-fill text-xs sm:text-lg text-orange-400"></i>
                  <i className="bi-star-fill text-xs sm:text-lg text-orange-400"></i>
                  <i className="bi-star-fill text-xs sm:text-lg text-orange-400"></i>
                  <i className="bi-star-fill text-xs sm:text-lg text-orange-400"></i>
                </div>
              </NavLink>
            )
          )}
        </div>
        <NavLink
          to="/layanan"
          className="inline-block mt-5 sm:mt-10 rounded-md bg-orange-600 px-2 sm:px-4 py-1 sm:py-2 text-white text-sm sm:text-lg shadow-black/20 shadow-md hover:bg-orange-500 transition-all duration-300"
        >
          <span>Selengkapnya</span>
          <i className="bi-arrow-right ms-2"></i>
        </NavLink>
      </div>
      <div className="w-full px-3 sm:px-20 py-5 sm:py-10 bg-gray-800 flex justify-between items-center gap-5 shadow-black/20 shadow-lg">
        <div className="flex flex-col justify-center items-start text-white">
          <h1 className="font-bold text-xs sm:text-4xl">
            Hanami Printing solusi kebutuhan cetak Anda.
          </h1>
          <h1 className="font-bold text-xs sm:text-4xl">Punya pertanyaan?</h1>
        </div>
        <a
          href={dataApp.links.whatsapp}
          target="_blank"
          className="flex justify-center items-center gap-2 rounded-md bg-orange-600 px-2 sm:px-5 py-1 sm:py-3 text-white text-xs sm:text-lg shadow-black/30 shadow-md hover:bg-orange-500 hover:animate-bounce transition-all duration-300"
        >
          <i className="bi-whatsapp"></i>
          <span className="inline-block">Hubungi Kami</span>
        </a>
      </div>
      <div className="w-full px-3 sm:px-20 py-5 sm:py-15 bg-orange-100">
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          <div className="w-full sm:w-3/12 h-80 sm:h-70 p-3 sm:p-5 bg-white rounded-xl shadow-black/20 shadow-md flex flex-col justify-between items-center">
            <h1 className="text-center font-bold text-orange-500 text-sm sm:text-xl mb-1 sm:mb-2">
              Kwitansi & Nota
            </h1>
            <p className="mb-1 sm:mb-3 text-center text-xs sm:text-base">
              Kami menyediakan jasa cetak kwitansi & nota secara kostum sesuai
              keinginan Anda. Menggunakan kertas premium dan hasil cetak yang
              prima.
            </p>
            <a
              href={dataApp.links.whatsapp}
              target="_blank"
              className="flex justify-center items-center gap-2 rounded-md bg-orange-600 px-2 sm:px-3 w-full py-1 sm:py-2 text-white text-xs sm:text-lg shadow-black/30 shadow-md hover:bg-orange-500 transition-all duration-300"
            >
              <i className="bi-whatsapp"></i>
              <span>Pesan Sekarang</span>
            </a>
          </div>
          <div className="w-full sm:w-3/12 h-80 sm:h-70 p-3 sm:p-5 bg-white rounded-xl shadow-black/20 shadow-md flex flex-col justify-between items-center">
            <h1 className="text-center font-bold text-orange-500 text-sm sm:text-xl mb-1 sm:mb-2">
              Brosur & Pamflet
            </h1>
            <p className="mb-1 sm:mb-3 text-center text-xs sm:text-base">
              Tunjukan produk dan layanan usaha Anda dalam bentuk brosur,
              pamflet, kartu nama dan serahkan jasa cetaknya kepada Hanami
              Printing.
            </p>
            <a
              href={dataApp.links.whatsapp}
              target="_blank"
              className="flex justify-center items-center gap-2 rounded-md bg-orange-600 px-2 sm:px-3 w-full py-1 sm:py-2 text-white text-xs sm:text-lg shadow-black/30 shadow-md hover:bg-orange-500 transition-all duration-300"
            >
              <i className="bi-whatsapp"></i>
              <span>Pesan Sekarang</span>
            </a>
          </div>
          <div className="w-full sm:w-3/12 h-80 sm:h-70 p-3 sm:p-5 bg-white rounded-xl shadow-black/20 shadow-md flex flex-col justify-between items-center">
            <h1 className="text-center font-bold text-orange-500 text-sm sm:text-xl mb-1 sm:mb-2">
              Buku Menu
            </h1>
            <p className="mb-1 sm:mb-3 text-center text-xs sm:text-base">
              Buat buku menu resto Anda lebih menarik lagi dengan jasa cetak
              buku menu dari Kami, menjamin hasil cetak berkualitas dengan harga
              terjangkau.
            </p>
            <a
              href={dataApp.links.whatsapp}
              target="_blank"
              className="flex justify-center items-center gap-2 rounded-md bg-orange-600 px-2 sm:px-3 w-full py-1 sm:py-2 text-white text-xs sm:text-lg shadow-black/30 shadow-md hover:bg-orange-500 transition-all duration-300"
            >
              <i className="bi-whatsapp"></i>
              <span>Pesan Sekarang</span>
            </a>
          </div>
        </div>
      </div>
      <Qna
        dataApp={dataApp}
        dataPembayaran={dataPembayaran}
        dataLayanan={dataLayanan}
      />
    </section>
  );
}
