import icon3 from "/icon3.png";
import logo from "/logo-no-bg.png";
import digitalPrinting from "/digital-printing.png";
import Qna from "../components/Qna"
import { NavLink } from "react-router-dom";

export default function Home({dataApp, dataPembayaran, dataLayanan}) {
  return (
    <section className="w-full">
      <div className="w-full p-20 flex justify-center items-center gap-10 cursor-default">
        <div className="w-6/12 flex justify-center items-center">
          <img
            src={digitalPrinting}
            alt="Hanami Printing"
            className="w-[90%]"
          />
        </div>
        <div className="w-6/12 flex flex-col justify-center items-start gap-5">
          <h3 className="w-full text-orange-500 font-bold text-2xl">
            HANAMI PRINTING
          </h3>
          <h1 className="w-full font-bold text-6xl">
            Tempat Percetakan Murah Di Gorontalo
          </h1>
          <p className="w-full text-justify">
            Kami menerima jasa percetakan digital untuk pembuatan dokumen,
            sticky notes, brosur marketing, media promosi, buku tahunan dan lain
            sebagainya dengan harga terjangkau dan kualitas cetak terbaik.
          </p>
          <a
            href={dataApp.links.whatsapp}
            target="_blank"
            className="flex justify-center items-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-white text-lg shadow-black/30 shadow-md hover:bg-orange-500 transition-all duration-300"
          >
            <i className="bi-whatsapp"></i>
            <span>Hubungi Kami</span>
          </a>
        </div>
      </div>
      <div className="w-full px-20 py-10 bg-orange-700 flex justify-center items-start gap-5 shadow-black/20 shadow-lg cursor-default">
        <div className="w-3/12 p-5 bg-white/25 text-white rounded-xl shadow-black/30 shadow-md flex justify-center items-start gap-3 hover:scale-110 transition-all duration-300">
          <i className="bi-whatsapp text-xl"></i>
          <div className="w-full h-30">
            <h1 className="font-bold text-lg">Pesan Percetakan Online</h1>
            <p>
              Pemesanan dapat melalui WhatsApp kami. Silahkan klik tombol
              "Hubungi Kami".
            </p>
          </div>
        </div>
        <div className="w-3/12 p-5 bg-white/25 text-white rounded-xl shadow-black/30 shadow-md flex justify-center items-start gap-3 hover:scale-110 transition-all duration-300">
          <i className="bi-person-fill-check text-xl"></i>
          <div className="w-full h-30">
            <h1 className="font-bold text-lg">Profesional</h1>
            <p>Pemesanan akan ditangani secara profesional.</p>
          </div>
        </div>
        <div className="w-3/12 p-5 bg-white/25 text-white rounded-xl shadow-black/30 shadow-md flex justify-center items-start gap-3 hover:scale-110 transition-all duration-300">
          <i className="bi-hourglass-split text-xl"></i>
          <div className="w-full h-30">
            <h1 className="font-bold text-lg">Proses Cepat</h1>
            <p>
              Proses pesanan lebih cepat dengan hasil maksimal hingga sampai ke
              tangan Anda.
            </p>
          </div>
        </div>
        <div className="w-3/12 p-5 bg-white/25 text-white rounded-xl shadow-black/30 shadow-md flex justify-center items-start gap-3 hover:scale-110 transition-all duration-300">
          <i className="bi-journal-bookmark-fill text-xl"></i>
          <div className="w-full h-30">
            <h1 className="font-bold text-lg">Bergaransi</h1>
            <p>
              Hasil cetakan berkualitas dengan menggunakan bahan terbaik dan
              mesin canggih.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full text-center px-20 py-15">
        <h1 className="text-center text-4xl font-bold text-orange-500 mb-10">
          LAYANAN KAMI
        </h1>
        <div className="w-full flex flex-wrap justify-center items-start">
          {dataLayanan.map(({judul, link, gambar, bintang, keterangan, online}, index) => (
            <NavLink to={`/layanan/${link}`} key={index} className="w-3/12 p-5 cursor-pointer hover:scale-105 transition-all duration-300">
              <img
                src={`./layanan/${gambar}`}
                alt={judul}
                className="w-full rounded-xl shadow-black/20 shadow-md mb-2"
              />
              <h1 className="text-center font-bold text-xl">{judul}</h1>
              <div className="w-full flex justify-center items-center">
                <i className="bi-star-fill text-lg text-orange-400"></i>
                <i className="bi-star-fill text-lg text-orange-400"></i>
                <i className="bi-star-fill text-lg text-orange-400"></i>
                <i className="bi-star-fill text-lg text-orange-400"></i>
                <i className="bi-star-fill text-lg text-orange-400"></i>
              </div>
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/layanan"
          className="inline-block mt-10 rounded-md bg-orange-600 px-4 py-2 text-white text-lg shadow-black/20 shadow-md hover:bg-orange-500 transition-all duration-300"
        >
          <span>Selengkapnya</span>
          <i className="bi-arrow-right ms-2"></i>
        </NavLink>
      </div>
      <div className="w-full px-20 py-10 bg-gray-800 flex justify-between items-center gap-5 shadow-black/20 shadow-lg">
        <div className="flex flex-col justify-center items-start text-white">
          <h1 className="font-bold text-4xl">
            Hanami Printing solusi kebutuhan cetak Anda.
          </h1>
          <h1 className="font-bold text-4xl">Punya pertanyaan?</h1>
        </div>
        <a
          href={dataApp.links.whatsapp}
          target="_blank"
          className="flex justify-center items-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-white text-lg shadow-black/30 shadow-md hover:bg-orange-500 hover:animate-bounce transition-all duration-300"
        >
          <i className="bi-whatsapp"></i>
          <span>Hubungi Kami</span>
        </a>
      </div>
      <div className="w-full px-20 py-15 bg-orange-100">
        <div className="flex justify-center items-start gap-5">
          <div className="w-3/12 h-70 p-5 bg-white rounded-xl shadow-black/20 shadow-md flex flex-col justify-between items-center">
            <h1 className="text-center font-bold text-orange-500 text-xl mb-2">Kwitansi & Nota</h1>
            <p className="mb-3 text-center">
              Kami menyediakan jasa cetak kwitansi & nota secara kostum sesuai
              keinginan Anda. Menggunakan kertas premium dan hasil cetak yang
              prima.
            </p>
            <a
              href={dataApp.links.whatsapp}
              target="_blank"
              className="flex justify-center items-center gap-2 rounded-md bg-orange-600 px-3 w-full py-2 text-white text-lg shadow-black/30 shadow-md hover:bg-orange-500 transition-all duration-300"
            >
              <i className="bi-whatsapp"></i>
              <span>Pesan Sekarang</span>
            </a>
          </div>
          <div className="w-3/12 h-70 p-5 bg-white rounded-xl shadow-black/20 shadow-md flex flex-col justify-between items-center">
            <h1 className="text-center font-bold text-orange-500 text-xl mb-2">Brosur & Pamflet</h1>
            <p className="mb-3 text-center">Tunjukan produk dan layanan usaha Anda dalam bentuk brosur, pamflet, kartu nama dan serahkan jasa cetaknya kepada Hanami Printing.</p>
            <a
              href={dataApp.links.whatsapp}
              target="_blank"
              className="flex justify-center items-center gap-2 rounded-md bg-orange-600 px-3 w-full py-2 text-white text-lg shadow-black/30 shadow-md hover:bg-orange-500 transition-all duration-300"
            >
              <i className="bi-whatsapp"></i>
              <span>Pesan Sekarang</span>
            </a>
          </div>
          <div className="w-3/12 h-70 p-5 bg-white rounded-xl shadow-black/20 shadow-md flex flex-col justify-between items-center">
            <h1 className="text-center font-bold text-orange-500 text-xl mb-2">Buku Menu</h1>
            <p className="mb-3 text-center">Buat buku menu resto Anda lebih menarik lagi dengan jasa cetak buku menu dari Kami, menjamin hasil cetak berkualitas dengan harga terjangkau.</p>
            <a
              href={dataApp.links.whatsapp}
              target="_blank"
              className="flex justify-center items-center gap-2 rounded-md bg-orange-600 px-3 w-full py-2 text-white text-lg shadow-black/30 shadow-md hover:bg-orange-500 transition-all duration-300"
            >
              <i className="bi-whatsapp"></i>
              <span>Pesan Sekarang</span>
            </a>
          </div>
        </div>
      </div>
      <Qna dataApp={dataApp} dataPembayaran={dataPembayaran} dataLayanan={dataLayanan} />
    </section>
  );
}
