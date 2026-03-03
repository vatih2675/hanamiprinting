// import { useState } from 'react'
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./Style.css";

function App() {
  return (
    <main className="w-full h-screen bg-orange-600 p-3 flex justify-center items-center">
      <section className="w-[20%] h-[80%] bg-orange-700 border-l-2 border-y-2 border-white rounded-l-4xl p-5 shadow-lg shadow-black/50">
        Head
      </section>
      <section className="w-full h-full bg-white border-6 border-orange-800 rounded-4xl p-5 overflow-hidden shadow-lg shadow-black/50">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ab
          ullam totam! Perspiciatis dolore dignissimos ipsam! Reprehenderit,
          explicabo distinctio est voluptatum quos quo omnis possimus quidem
          debitis aperiam veritatis consequuntur deleniti tempore cum corrupti
          natus eos illum odit tenetur iste ducimus minima commodi? Laborum
          incidunt debitis commodi accusamus aspernatur blanditiis!
        </p>
      </section>
      <section className="w-[4%] h-fit bg-orange-800 border-2 border-white ms-3 rounded-full shadow-lg shadow-black/50 p-2">
        <div className="flex flex-col justify-center items-center gap-4">
          <span>H</span>
          <span>M</span>
        </div>
      </section>
    </main>
  );
}

export default App;
