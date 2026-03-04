import { lynkid } from "../../constants/Data";
import { formatAngka, linkAksesOpen } from "../../constants/Function";

export default function ProdukDigital() {
  return (
    <div id="produk-digital" className="w-full h-full cursor-default p-5">
      <h1 className="text-center font-black text-orange-800 text-xl sm:text-3xl mb-5 uppercase">
        PRODUK DIGITAL
      </h1>
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-start sm:gap-0 gap-3">
        {lynkid.map(({ title, price, link, checkout }, index) => (
          <div key={index} className="w-full sm:w-6/12 sm:p-2">
            <div
              onClick={() => linkAksesOpen(link)}
              className="w-full border-2 border-orange-800 rounded-lg sm:rounded-2xl flex justify-between items-center p-2 sm:p-3 cursor-pointer transition-all duration-300 hover:bg-orange-50 hover:shadow-md shadow-black/20"
            >
              <div className="flex justify-start items-center gap-1 sm:gap-2">
                <i className="bi-list"></i>
                <span className="sm:text-base text-xs">{title}</span>
              </div>
              <span className="bg-orange-800 text-[0.7rem] sm:text-xs px-2 py-1 rounded-md text-white">
                {formatAngka(price)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
