import { linkAksesOpen } from "../constants/Function";
import logo from "/images/icon.png";

export default function Head() {
  return (
    <section className="sm:w-[20%] w-[85%] sm:h-[80%] h-[20%] bg-orange-800 border-l-4 border-t-4 border-r-4 sm:border-r-0 sm:border-b-4 border-white rounded-tl-4xl sm:rounded-tr-none rounded-tr-4xl sm:rounded-bl-4xl  p-2 sm:p-5 shadow-lg shadow-black/50 flex sm:flex-col justify-evenly items-center cursor-default">
      <img
        src={logo}
        alt="Hanami Printing"
        className="w-22 sm:w-30 border-4 border-orange-300 shadow-lg shadow-black/20 rounded-full"
      />
      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="font-black sm:text-lg">HANAMI PRINTING</h1>
        <span className="text-[0.65rem] sm:text-xs">
          hanamiprinting.official@gmail.com
        </span>
        <span
          onClick={() => linkAksesOpen("https://wa.me/message/DLRPWPFGCTXOD1")}
          className="text-[0.65rem] sm:text-xs cursor-pointer transition-all duration-300 hover:underline"
        >
          085175178456
        </span>
        <div className="w-full flex justify-evenly items-center text-white">
          <span
            onClick={() => linkAksesOpen("https://facebook.com/hanamiprinting")}
            className="bi-facebook text-xl sm:text-2xl cursor-pointer transition-all duration-300 hover:scale-120"
          ></span>
          <span
            onClick={() =>
              linkAksesOpen("https://instagram.com/hanamiprinting.id")
            }
            className="bi-instagram text-xl sm:text-2xl cursor-pointer transition-all duration-300 hover:scale-120"
          ></span>
          <span
            onClick={() =>
              linkAksesOpen("https://tiktok.com/@hanamiprinting.id")
            }
            className="bi-tiktok text-xl sm:text-2xl cursor-pointer transition-all duration-300 hover:scale-120"
          ></span>
        </div>
      </div>
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=https://wa.me/message/DLRPWPFGCTXOD1"
        alt="WhatsApp Hanami Printing"
        className="w-30 bg-white p-2 rounded-xl hidden sm:block"
      />
    </section>
  );
}
