// import { useState } from 'react'
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./Style.css";
import Head from "./components/Head";
import Main from "./components/Main";
import Menu from "./components/Menu";

function App() {
  return (
    <main className="w-full h-screen bg-orange-600 p-3 flex justify-center items-center">
      <Head />
      <Main />
      <Menu />
    </main>
  );
}

export default App;
