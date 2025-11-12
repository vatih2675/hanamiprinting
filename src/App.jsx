import { BrowserRouter, href, NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Fotocopy from "./pages/services/Fotocopy";
import Jilid from "./pages/services/Jilid";
import Laminating from "./pages/services/Laminating";
import CetakDokumen from "./pages/services/CetakDokumen";
import CetakFotoPassphoto from "./pages/services/CetakFotoPassphoto";
import CetakUndangan from "./pages/services/CetakUndangan";
import CetakLabelUndangan from "./pages/services/CetakLabelUndangan";
import CetakSticker from "./pages/services/CetakSticker";
import CetakAmplop from "./pages/services/CetakAmplop";
import CetakKopSurat from "./pages/services/CetakKopSurat";
import CetakIdCard from "./pages/services/CetakIdCard";
import CetakAgenda from "./pages/services/CetakAgenda";
import CetakBukuTulis from "./pages/services/CetakBukuTulis";
import CetakNota from "./pages/services/CetakNota";
import CetakKwitansi from "./pages/services/CetakKwitansi";
import CetakBukuYassin from "./pages/services/CetakBukuYassin";
import CetakBrosur from "./pages/services/CetakBrosur";
import Jersey from "./pages/services/Jersey";
import Playstation from "./pages/services/Playstation";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { dataApp, dataPembayaran, dataLayanan } from "./constants/Data";

function App() {
  return (
    <BrowserRouter className="scroll-smooth">
      <Header dataApp={dataApp} />
      <Routes>
        <Route path={"/"} element={<Home dataApp={dataApp} dataPembayaran={dataPembayaran} dataLayanan={dataLayanan} />}  />
        <Route path={"/layanan"} element={<Services dataLayanan={dataLayanan} />}  />
        <Route path={"/layanan-fotocopy"} element={<Fotocopy dataApp={dataApp} />}  />
        <Route path={"/layanan-jilid"} element={<Jilid dataApp={dataApp} />}  />
        <Route path={"/layanan-laminating"} element={<Laminating dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-dokumen"} element={<CetakDokumen dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-foto-passphoto"} element={<CetakFotoPassphoto dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-undangan"} element={<CetakUndangan dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-label-undangan"} element={<CetakLabelUndangan dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-sticker"} element={<CetakSticker dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-amplop"} element={<CetakAmplop dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-kop-surat"} element={<CetakKopSurat dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-id-card"} element={<CetakIdCard dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-agenda"} element={<CetakAgenda dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-buku-tulis"} element={<CetakBukuTulis dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-nota"} element={<CetakNota dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-kwitansi"} element={<CetakKwitansi dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-buku-yassin"} element={<CetakBukuYassin dataApp={dataApp} />}  />
        <Route path={"/layanan-cetak-brosur-pamflet-poster-menu"} element={<CetakBrosur dataApp={dataApp} />}  />
        <Route path={"/layanan-kostum-jersey"} element={<Jersey dataApp={dataApp} />}  />
        <Route path={"/layanan-playstation"} element={<Playstation dataApp={dataApp} />}  />
        <Route path={"/tentang-kami"} element={<About dataApp={dataApp} />}  />
        <Route path={"/kontak"} element={<Contacts dataApp={dataApp} />}  />
      </Routes>
      <Footer dataApp={dataApp} dataLayanan={dataLayanan} dataPembayaran={dataPembayaran} />
    </BrowserRouter>
  );
}

export default App;
