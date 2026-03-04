// import { useState } from 'react'
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./Style.css";
import Head from "./components/Head";
import Main from "./components/Main";
import Menu from "./components/Menu";
import { linkAkses, linkAksesOpen } from "./constants/Function";

function App() {
  return (
    <main className="w-full h-screen bg-linear-to-b from-orange-300 to-orange-600 p-3 flex sm:flex-row flex-col justify-center items-center scroll-smooth">
      <Head linkAkses={linkAkses} linkAksesOpen={linkAksesOpen} />
      <Main />
      <Menu />
    </main>
  );
}

export default App;
