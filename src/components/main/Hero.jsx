import logo from "/images/hanami-putih.png";
import tiktokIcon from "/images/tiktok-icon.png";
import instagramIcon from "/images/instagram-icon.png";
import facebookIcon from "/images/facebook-icon.svg";

export default function Hero() {
  return (
    <div id="hero" className="w-full h-full bg-linear-to-t from-orange-300 to-orange-600 flex sm:flex-row flex-col justify-center items-center overflow-hidden cursor-default pointer-events-none mb-5">
      <div className="w-full h-full p-2 sm:p-5 flex sm:flex-col flex-wrap sm:flex-nowrap justify-center sm:justify-evenly sm:gap-0 gap-3 items-center sm:items-end text-white font-black sm:text-4xl text-shadow-black/20 text-shadow-lg">
        <p>Fotocopy</p>
        <p>Jilid</p>
        <p>Laminating</p>
        <p>Jersey</p>
        <p>Playstation</p>
        <p>Website Dev</p>
      </div>
      <div className="w-full h-full p-5 sm:p-10 flex flex-col justify-center items-center text-white font-black text-shadow-black/20 text-shadow-lg">
        <img src={logo} alt="" />
        <span className="text-4xl">085175178456</span>
        <span className="text-xl">Sipatana, Kota Gorontalo</span>
        <div className="w-full ps-15 sm:ps-5 flex justify-start items-center gap-2 font-bold mt-1 sm:mt-2">
          <img src={facebookIcon} alt="Facebook" className="w-8" />
          <span>@hanamiprinting</span>
        </div>
        <div className="w-full ps-15 sm:ps-5 flex justify-start items-center gap-2 font-bold mt-1 sm:mt-2">
          <img src={instagramIcon} alt="instagram" className="w-8" />
          <span>@hanamiprinting.id</span>
        </div>
        <div className="w-full ps-15 sm:ps-5 flex justify-start items-center gap-2 font-bold mt-1 sm:mt-2">
          <img src={tiktokIcon} alt="tiktok" className="w-8" />
          <span>@hanamiprinting.id</span>
        </div>
      </div>
      <div className="w-full h-full p-5 flex sm:flex-col justify-center sm:justify-evenly items-center sm:items-start flex-wrap sm:flex-nowrap text-white font-black sm:font-bold sm:gap-0 gap-3 text-shadow-black/20 text-shadow-lg">
        <p>Cetak Dokumen</p>
        <p>Cetak Foto / Passphoto</p>
        <p>Cetak Undangan</p>
        <p>Cetak Label Undangan</p>
        <p>Cetak Stiker</p>
        <p>Cetak Amplop</p>
        <p>Cetak Kop Surat</p>
        <p>Cetak ID Card</p>
        <p>Cetak Buku Tulis</p>
        <p>Cetak Nota</p>
        <p>Cetak Kwitansi</p>
        <p>Cetak Buku Yassin</p>
        <p>Cetak Brosur / Pamflet</p>
        <p>Cetak Poster / Buku Menu</p>
      </div>
    </div>
  );
}
