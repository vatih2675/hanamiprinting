import icon from "/icon3.png";

export default function About({dataApp}) {
    return (
      <section className="w-full bg-orange-100 cursor-default">
        <div className="w-full">
          <div className="relative w-full p-3 sm:p-20">
            <h1 className="text-3xl sm:text-5xl font-bold text-orange-500 my-10 text-center">
              Tentang Hanami Printing
            </h1>
            <img
              src={icon}
              alt="Hanami Printing"
              className="absolute mx-auto left-0 right-0 -bottom-10 sm:-bottom-15 w-20 sm:w-30 rounded-full shadow-black/20 shadow-lg"
            />
          </div>
          <div className="w-full px-3 py-10 sm:px-20 sm:py-20 flex flex-col sm:flex-row justify-center items-start bg-white gap-3 sm:gap-10">
            <div className="w-full">
              <h1 className="text-center sm:text-start mt-5 sm:mt-0 text-2xl sm:text-4xl text-orange-500 mb-3 sm:mb-10">
                Percetakan Murah di Gorontalo
              </h1>
              <p className="text-xs sm:text-base text-justify text-gray-600 mb-3 sm:mb-5">
                Hanami Printing adalah sebuah tempat percetakan yang berdiri
                sejak tahun 2025. Sebagai usaha yang bergerak di bidang
                percetakan, Hanami Printing memiliki berbagai macam layanan yang
                dapat memenuhi kebutuhan cetak dan desain dari pelanggan.
              </p>
              <p className="text-xs sm:text-base text-justify text-gray-600">
                Selain itu, Hanami Printing juga memberikan layanan konsultasi
                desain dan cetak kepada pelanggan yang membutuhkan. Layanan ini
                bertujuan untuk membantu pelanggan dalam memilih desain dan
                jenis cetak yang tepat sesuai dengan kebutuhan dan tujuan bisnis
                mereka.
              </p>
            </div>
            <div className="w-full">
              <p className="text-xs sm:text-base text-justify text-gray-600 mb-3 sm:mb-5">
                Sejak didirikan, Hanami Printing telah melayani berbagai
                pelanggan dari berbagai macam industri, seperti perusahaan,
                pemerintahan, pendidikan, dan individu. Dalam memenuhi kebutuhan
                pelanggan, Hanami Printing selalu berusaha memberikan hasil yang
                terbaik dengan kualitas cetak dan desain yang baik serta tepat
                waktu.
              </p>
              <p className="text-xs sm:text-base text-justify text-gray-600 mb-3 sm:mb-5">
                Dalam menjalankan usahanya, Hanami Printing juga selalu berupaya
                untuk memperhatikan lingkungan sekitar. Oleh karena itu, Hanami
                Printing menggunakan teknologi dan bahan yang ramah lingkungan
                dalam proses produksi cetaknya.
              </p>
              <p className="text-xs sm:text-base text-justify text-gray-600 mb-3 sm:mb-5">
                Dengan pengalaman dan keahlian dalam bidang percetakan, Hanami
                Printing terus berupaya untuk mengembangkan bisnisnya agar dapat
                memberikan layanan yang lebih baik dan memuaskan pelanggan.
                Selain itu, Hanami Printing juga mengutamakan kepercayaan dan
                kepuasan pelanggan sebagai prioritas utama dalam menjalankan
                usahanya.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-3 sm:px-20 py-5 sm:py-10 bg-gray-800 flex justify-between items-center gap-5 shadow-black/20 shadow-lg">
          <div className="flex flex-col justify-center items-start text-white">
            <h1 className="font-bold text-xs sm:text-4xl">
              Hanami Printing solusi kebutuhan Anda.
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
        <div className="w-full p-20 grid grid-cols-2 gap-10 overflow-scroll hidden">
          <div className="w-full text-center px-20 flex flex-col justify-center items-center gap-3">
            <img
              src={icon}
              alt="Testimoni"
              className="w-full mx-auto rounded-3xl"
            />
            <div className="w-full flex justify-center items-center gap-1">
              <i className="bi-star-fill text-lg text-orange-400"></i>
              <i className="bi-star-fill text-lg text-orange-400"></i>
              <i className="bi-star-fill text-lg text-orange-400"></i>
              <i className="bi-star-fill text-lg text-orange-400"></i>
              <i className="bi-star-fill text-lg text-orange-400"></i>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              accusantium officiis inventore sint! Quos nulla blanditiis
              architecto est facilis iste!
            </p>
            <div className="flex justify-center items-center gap-3">
              <img src={icon} alt="Pelanggan" className="w-15 rounded-full" />
              <div className="flex flex-col justify-start items-start">
                <p className="font-bold">Nama Pelanggan</p>
                <p>Pemilik Usaha</p>
              </div>
            </div>
          </div>
          <div className="w-full text-center px-20 flex flex-col justify-center items-center gap-3">
            <img
              src={icon}
              alt="Testimoni"
              className="w-full mx-auto rounded-3xl"
            />
            <div className="w-full flex justify-center items-center gap-1">
              <i className="bi-star-fill text-lg text-orange-400"></i>
              <i className="bi-star-fill text-lg text-orange-400"></i>
              <i className="bi-star-fill text-lg text-orange-400"></i>
              <i className="bi-star-fill text-lg text-orange-400"></i>
              <i className="bi-star-fill text-lg text-orange-400"></i>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              accusantium officiis inventore sint! Quos nulla blanditiis
              architecto est facilis iste!
            </p>
            <div className="flex justify-center items-center gap-3">
              <img src={icon} alt="Pelanggan" className="w-15 rounded-full" />
              <div className="flex flex-col justify-start items-start">
                <p className="font-bold">Nama Pelanggan</p>
                <p>Pemilik Usaha</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}