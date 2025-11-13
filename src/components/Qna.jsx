import { useState } from "react"

export default function Footer({dataApp, dataLayanan, dataPembayaran}) {
    const [qna1, setQna1] = useState(false)
    const [qna2, setQna2] = useState(false)
    const [qna3, setQna3] = useState(false)
    const [qna4, setQna4] = useState(false)
    const [qna5, setQna5] = useState(false)
    const [qna6, setQna6] = useState(false)
    const [qna7, setQna7] = useState(false)
    const [qna8, setQna8] = useState(false)

    function showQna(index){
        if(index == 1){
            setQna1(!qna1)
            // setQna2(false)
            // setQna3(false)
            // setQna4(false)
            // setQna5(false)
            // setQna6(false)
            // setQna7(false)
            // setQna8(false)
        }else if(index == 2){
            // setQna1(false)
            setQna2(!qna2)
            // setQna3(false)
            // setQna4(false)
            // setQna5(false)
            // setQna6(false)
            // setQna7(false)
            // setQna8(false)
        }else if(index == 3){
            // setQna1(false)
            // setQna2(false)
            setQna3(!qna3)
            // setQna4(false)
            // setQna5(false)
            // setQna6(false)
            // setQna7(false)
            // setQna8(false)
        }else if(index == 4){
            // setQna1(false)
            // setQna2(false)
            // setQna3(false)
            setQna4(!qna4)
            // setQna5(false)
            // setQna6(false)
            // setQna7(false)
            // setQna8(false)
        }else if(index == 5){
            // setQna1(false)
            // setQna2(false)
            // setQna3(false)
            // setQna4(false)
            setQna5(!qna5)
            // setQna6(false)
            // setQna7(false)
            // setQna8(false)
        }else if(index == 6){
            // setQna1(false)
            // setQna2(false)
            // setQna3(false)
            // setQna4(false)
            // setQna5(false)
            setQna6(!qna6)
            // setQna7(false)
            // setQna8(false)
        }else if(index == 7){
            // setQna1(false)
            // setQna2(false)
            // setQna3(false)
            // setQna4(false)
            // setQna5(false)
            // setQna6(false)
            setQna7(!qna7)
            // setQna8(false)
        }else if(index == 8){
            // setQna1(false)
            // setQna2(false)
            // setQna3(false)
            // setQna4(false)
            // setQna5(false)
            // setQna6(false)
            // setQna7(false)
            setQna8(!qna8)
        }
    }

    return (
        <div className="w-full px-20 py-15">
            <div className="w-full border-b border-gray-300">
                <h1 className="w-full font-bold px-3 py-5 text-xl cursor-pointer hover:text-orange-600 transition-all duration-300" onClick={() => showQna(1)}><i className="bi-caret-right-fill me-3"></i>Apa itu percetakan?</h1>
                <div className={`mt-5 mb-10 w-full text-gray-600 cursor-default transition-all duration-300 ${qna1 ? "" : "hidden"}`}>
                    <p className="text-justify">Merupakan sebuah proses produksi yang hasil akhirnya sangat berguna untuk kehidupan kita sehari-hari dan juga sangat berguna untuk industri modern. Prosesnya melibatkan transfer tinta ke permukaan hasil cetak seperti kertas, kain, plastik, atau material lainnya untuk mencetak teks dan gambar. Ada beberapa metode percetakan yang sering digunakan saat ini, antara lain percetakan offset dan cetak digital. Masing-masing metode memiliki kelebihan dan kekurangan, serta aplikasi yang berbeda sesuai kebutuhan.</p>
                    <h1 className="w-full font-bold text-2xl my-3">Percetakan Offset</h1>
                    <p className="text-justify">Salah satu jenis cetak yang paling sering digunakan dalam industri percetakan besar. Proses nya harus melakukan pembuatan pelat cetak dari desain yang akan dicetak.</p>
                    <p className="text-justify">Pelat ini kemudian berfungsi untuk mentransfer tinta ke lembaran karet, yang akhirnya mencetak gambar ke permukaan media seperti kertas.</p>
                    <p className="text-justify">Kelebihan dari percetakan offset adalah kualitas cetakan berkualitas dan warna konsisten, terutama untuk cetakan dalam jumlah besar minimal ratusan hingga ribuan lembar.</p>
                    <p className="text-justify">Selain itu, biaya per cetakan menjadi lebih murah seiring dengan banyaknya jumlah cetakan. Namun, percetakan offset membutuhkan waktu persiapan yang lebih lama dan biaya awal yang lebih tinggi dibandingkan dengan metode cetak digital.</p>
                    <h1 className="w-full font-bold text-2xl my-3">Percetakan Digital</h1>
                    <p className="text-justify">Saat ini percetakan digital menggunakan teknologi printer digital untuk mencetak langsung dari file digital ke media cetak. Metode ini sangat fleksibel dan cocok untuk cetakan jumlah kecil atau bahkan satuan.</p>
                    <p className="text-justify">Salah satu keunggulan percetakan digital adalah kecepatan produksi yang tinggi karena tidak memerlukan pembuatan pelat cetak seperti pada offset. Hal ini membuatnya ideal untuk cetakan yang membutuhkan waktu pengerjaan cepat atau yang sering mengalami perubahan desain.</p>
                    <p className="text-justify">Namun, untuk cetakan dalam jumlah besar, biaya satuan cetak bisa lebih tinggi dibandingkan dengan offset.</p>
                </div>
            </div>
            <div className="w-full border-b border-gray-300">
                <h1 className="w-full font-bold px-3 py-5 text-xl cursor-pointer hover:text-orange-600 transition-all duration-300" onClick={() => showQna(2)}><i className="bi-caret-right-fill me-3"></i>Apa itu percetakan online?</h1>
                <div className={`mt-5 mb-10 w-full text-gray-600 cursor-default transition-all duration-300 ${qna2 ? "" : "hidden"}`}>
                    <p className="text-justify">Layanan percetakan yang dilakukan melalui situs web. Dengan percetakan online seperti Hanami Printing, Anda dapat memesan berbagai produk cetak dengan lebih mudah dan dapat mempersingkat waktu berharga Anda.</p>
                    <p className="text-justify">Anda bisa memesan melalui whatssapp produk percetakan seperti kartu nama, brosur, poster, banner, undangan dan lainnya tanpa perlu mengunjungi fisik toko Hanami Printing.</p>
                    <h1 className="w-full font-bold text-2xl my-3">Berikut proses pemesanan percetakan Online</h1>
                    <h3 className="w-full font-bold text-lg">Pemilihan Produk</h3>
                    <p className="text-justify mb-3">Anda dapat menentukan jenis produk apa yang akan dicetak dari katalog yang tersedia di situs web kami.</p>
                    <h3 className="w-full font-bold text-lg">Hubungi Kami</h3>
                    <p className="text-justify mb-3">Klik tombol WhatssApp di bawah untuk menghubungi kami.</p>
                    <h3 className="w-full font-bold text-lg">Unggah Desain</h3>
                    <p className="text-justify mb-3">Kirim file desain Anda melalui email kami. Jika ingin desain dari kami, Anda bisa melakukan panggilan dan mengirimkan contoh desain yang akan di buat.</p>
                    <h3 className="w-full font-bold text-lg">Kustomisasi</h3>
                    <p className="text-justify mb-3">Anda dapat menyesuaikan spesifikasi produk, seperti ukuran, jenis kertas, jumlah cetakan, dan pilihan finishing (seperti laminasi atau penjilidan).</p>
                    <h3 className="w-full font-bold text-lg">Proses Pembayaran</h3>
                    <p className="text-justify mb-3">Setelah semua detail produk dipilih, Anda akan melanjutkan ke proses pembayaran. Pembayaran biasanya dapat dilakukan melalui berbagai metode, termasuk transfer bank, atau layanan pembayaran online (lihat channel pembayaran yang kami sediakan dibawah).</p>
                    <h3 className="w-full font-bold text-lg">Produksi dan Pengiriman</h3>
                    <p className="text-justify mb-3">Setelah pembayaran selesai, tim Hanami Printing akan memproses pesanan Anda. Produk yang telah selesai dikerjakan kemudian dikirimkan ke alamat yang ditentukan oleh Anda.</p>
                    <h1 className="w-full font-bold text-2xl my-3">Keunggulan Percetakan Online</h1>
                    <h3 className="w-full font-bold text-lg">Kemudahan Akses</h3>
                    <p className="text-justify mb-3">Anda dapat memesan produk kami kapan saja dan dari mana saja selama memiliki akses internet. Sehingga Anda tidak perlu datang mengunjungi toko fisik Hanami Printing.</p>
                    <h3 className="w-full font-bold text-lg">Efisiensi Waktu</h3>
                    <p className="text-justify mb-3">Proses pemesanan yang cepat dan efisien, dari pemilihan produk hingga pembayaran, sehingga menghemat waktu Anda.</p>
                    <h3 className="w-full font-bold text-lg">Biaya Terjangkau</h3>
                    <p className="text-justify mb-3">Produk Hanami Printing memiliki harga yang kompetitif karena kami dapat menghemat biaya operasional dengan tidak memerlukan lokasi fisik yang besar.</p>
                </div>
            </div>
            <div className="w-full border-b border-gray-300">
                <h1 className="w-full font-bold px-3 py-5 text-xl cursor-pointer hover:text-orange-600 transition-all duration-300" onClick={() => showQna(3)}><i className="bi-caret-right-fill me-3"></i>Apa saja produk & layanan yang ada di Hanami Printing?</h1>
                <div className={`mt-5 mb-10 w-full text-gray-600 cursor-default transition-all duration-300 ${qna3 ? "" : "hidden"}`}>
                    <h1 className="w-full font-bold text-lg mt-3">Berikut adalah produk & layanan yang kami sediakan</h1>
                    {/* <h3 className="w-full font-bold text-lg">Produk</h3> */}
                    <div className="flex justify-start items-start gap-5">
                    <ul className="w-3/12 text-justify mb-3 list-disc ms-5">
                        <li>Fotocopy</li>
                        <li>Jilid</li>
                        <li>Laminating</li>
                        <li>Cetak Dokumen<span className="text-red-500">*</span></li>
                        <li>Cetak Foto & Passphoto<span className="text-red-500">*</span></li>
                        <li>Cetak Undangan<span className="text-red-500">*</span></li>
                        <li>Cetak Label Undangan<span className="text-red-500">*</span></li>
                        <li>Cetak Sticker<span className="text-red-500">*</span></li>
                        <li>Cetak Amplop<span className="text-red-500">*</span></li>
                    </ul>
                    <ul className="w-9/12 text-justify mb-3 list-disc ms-5">
                        <li>Cetak Kop Surat<span className="text-red-500">*</span></li>
                        <li>Cetak Agenda<span className="text-red-500">*</span></li>
                        <li>Cetak Buku Tulis<span className="text-red-500">*</span></li>
                        <li>Cetak Nota<span className="text-red-500">*</span></li>
                        <li>Cetak Kwitansi<span className="text-red-500">*</span></li>
                        <li>Cetak Buku Yassin<span className="text-red-500">*</span></li>
                        <li>Cetak Brosur / Pamflet / Poster / Buku Menu<span className="text-red-500">*</span></li>
                        <li>Jersey Kostum<span className="text-red-500">*</span></li>
                        <li>Rental Playstation</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="w-full border-b border-gray-300">
                <h1 className="w-full font-bold px-3 py-5 text-xl cursor-pointer hover:text-orange-600 transition-all duration-300" onClick={() => showQna(4)}><i className="bi-caret-right-fill me-3"></i>Bagaimana cara memesan?</h1>
                <div className={`mt-5 mb-10 w-full text-gray-600 cursor-default transition-all duration-300 ${qna4 ? "" : "hidden"}`}>
                    <div className="flex justify-center items-start gap-5">
                    <div className="w-full">
                        <p className="text-justify font-bold">Pemesanan dapat dilakukan secara online dengan menghubungi kami di :</p>
                        <div className="flex flex-col justify-start items-start w-full">
                        <a href={dataApp.links.olshopin} target="_blank" className="text-justify hover:text-orange-500 transition-all duration-300"><i className="bi-shop me-1"></i>Hanami Printing</a>
                        <a href={dataApp.links.whatsapp} target="_blank" className="text-justify hover:text-orange-500 transition-all duration-300"><i className="bi-whatsapp me-1"></i>085175178456</a>
                        <a href={dataApp.links.facebook} target="_blank" className="text-justify hover:text-orange-500 transition-all duration-300"><i className="bi-facebook me-1"></i>@hanamiprinting</a>
                        <a href={dataApp.links.instagram} target="_blank" className="text-justify hover:text-orange-500 transition-all duration-300"><i className="bi-instagram me-1"></i>@hanamiprinting.id</a>
                        <a href={dataApp.links.tiktok} target="_blank" className="text-justify hover:text-orange-500 transition-all duration-300"><i className="bi-tiktok me-1"></i>@hanamiprinting.id</a>
                        <a href={`mailto:${dataApp.links.email}`} target="_blank" className="text-justify hover:text-orange-500 transition-all duration-300"><i className="bi-envelope-at me-1"></i>hanamiprinting.official@gmail.com</a>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-justify font-bold">Anda juga dapat mengunjungi toko fisik kami :</p>
                        <div className="flex flex-col justify-start items-start w-full">
                        <a href={dataApp.links.maps} target="_blank" className="text-justify hover:text-orange-500 transition-all duration-300">{dataApp.alamat}</a>
                        <iframe
                            src={dataApp.links.geo}
                            className="w-full h-40 mt-3 rounded-xl shadow-black/20 shadow-xl"
                            // allowfullscreen=""
                            loading="lazy"
                            // referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-b border-gray-300">
                <h1 className="w-full font-bold px-3 py-5 text-xl cursor-pointer hover:text-orange-600 transition-all duration-300" onClick={() => showQna(5)}><i className="bi-caret-right-fill me-3"></i>Berapa lama waktu yang dibutuhkan untuk proses percetakan?</h1>
                <div className={`mt-5 mb-10 w-full text-gray-600 cursor-default transition-all duration-300 ${qna5 ? "" : "hidden"}`}>
                    <p className="text-justify">Waktu yang dibutuhkan untuk proses percetakan berbeda-beda tergantung pada jenis percetakan yang Anda pilih, jumlah yang ingin dicetak, dan kompleksitas desain.</p>
                    <h1 className="w-full font-bold text-2xl my-3">Berikut adalah perkiraan waktu untuk beberapa jenis percetakan yang umum</h1>
                    <h3 className="w-full font-bold text-lg">Digital Printing</h3>
                    <p className="text-justify mb-3">Proses digital printing biasanya lebih cepat dibandingkan metode percetakan lain karena tidak memerlukan pembuatan plat cetak. Waktu yang dibutuhkan biasanya antara 1-3 hari kerja. Digital printing cocok untuk cetakan dalam jumlah kecil dan hasil yang cepat, seperti kartu nama, pamflet, atau brosur.</p>
                    <h3 className="w-full font-bold text-lg">Offset Printing</h3>
                    <p className="text-justify mb-3">Offset printing memerlukan waktu lebih lama karena harus melakukan pembuatan plat cetak. Proses ini membutuhkan waktu antara 3-7 hari kerja. Offset printing lebih ekonomis untuk cetakan dalam jumlah besar, seperti majalah, buku, atau katalog.</p>
                    <h3 className="w-full font-bold text-lg">Large Format Printing</h3>
                    <p className="text-justify mb-3">Jenis percetakan ini digunakan untuk mencetak spanduk, banner, poster, atau material promosi lainnya dalam ukuran besar. Waktu yang dibutuhkan biasanya sekitar 2-5 hari kerja, tergantung pada ukuran dan jumlah pesanan.</p>
                    <h3 className="w-full font-bold text-lg">Percetakan Buku</h3>
                    <p className="text-justify mb-3">Waktu yang dibutuhkan untuk mencetak buku sangat dipengaruhi oleh jumlah halaman, kompleksitas desain, dan jumlah yang dicetak. Proses ini bisa memakan waktu antara 1-2 minggu. Percetakan buku sering kali memerlukan lebih lama waktu karena adanya proses tambahan seperti penjilidan dan finishing.</p>
                    <h3 className="w-full font-bold text-lg">Percetakan Kustom</h3>
                    <p className="text-justify mb-3">Untuk cetakan khusus seperti undangan, kartu nama, atau brosur dengan desain yang unik dan material spesial, waktu yang dibutuhkan biasanya antara 3-7 hari kerja. Proses ini bisa memakan waktu lebih lama jika dibuat dengan teknik khusus seperti emboss, foil stamping, atau die-cutting.</p>
                </div>
            </div>
            <div className="w-full border-b border-gray-300">
                <h1 className="w-full font-bold px-3 py-5 text-xl cursor-pointer hover:text-orange-600 transition-all duration-300" onClick={() => showQna(6)}><i className="bi-caret-right-fill me-3"></i>Bagaimana cara mengirim file desain cetak?</h1>
                <div className={`mt-5 mb-10 w-full text-gray-600 cursor-default transition-all duration-300 ${qna6 ? "" : "hidden"}`}>
                    <p className="text-justify">Untuk mengirim file desain cetak memerlukan beberapa langkah untuk memastikan file Anda siap dan dapat diterima dengan baik oleh desainer kami.</p>
                    <h1 className="w-full font-bold text-2xl my-3">Berikut adalah panduan lengkapnya</h1>
                    <ul className="list-decimal w-full ms-5">
                    <li className="font-bold text-lg">Kriteria File Desain</li>
                    <ul className="list-disc ms-5 mb-3">
                        <li className="text-justify"><span className="font-bold">Format File</span> - Pastikan file desain disimpan dalam format yang umum diterima seperti PDF, AI, Corel, atau PSD. Format PDF adalah yang paling umum karena mempertahankan kualitas dan kompatibilitas.</li>
                        <li className="text-justify"><span className="font-bold">Resolusi</span> - Pastikan resolusi gambar minimal 300 DPI (dots per inch) untuk memastikan hasil cetakan yang tajam dan jelas.</li>
                        <li className="text-justify"><span className="font-bold">Mode Warna</span> - Gunakan mode warna CMYK (<span className="text-black text-xs px-2 py-1 bg-cyan-400 rounded-full">Cyan</span>, <span className="text-black text-xs px-2 py-1 bg-pink-400 rounded-full">Magenta</span>, <span className="text-black text-xs px-2 py-1 bg-yellow-400 rounded-full">Yellow</span>, <span className="text-white text-xs px-2 py-1 bg-black rounded-full">Black</span>) karena ini adalah standar untuk percetakan. Mode warna RGB digunakan untuk layar digital dan tidak cocok untuk cetakan.</li>
                        <li className="text-justify"><span className="font-bold">Margin & Bleed</span> - Tambahkan bleed (umumnya 3mm) untuk desain yang mencapai tepi kertas. Ini mencegah adanya garis putih di tepi hasil cetakan. Juga pastikan ada margin aman di dalam desain agar teks dan elemen penting tidak terpotong.</li>
                        <li className="text-justify"><span className="font-bold">Embed Font & Link Images</span> - Pastikan semua font ter-embed atau diubah menjadi outline, dan semua gambar ter-link dengan benar dalam file desain.</li>
                    </ul>
                    <li className="font-bold text-lg">Periksa Kembali File</li>
                    <ul className="list-disc ms-5 mb-3">
                        <li className="text-justify"><span className="font-bold">Proofing</span> - Periksa kembali desain Anda untuk memastikan tidak ada kesalahan ejaan, gambar yang buram, atau elemen yang tidak pada tempatnya.</li>
                        <li className="text-justify"><span className="font-bold">Preflight Check</span> - Banyak software desain, seperti Adobe InDesign atau Illustrator, memiliki fitur preflight check untuk memastikan file siap cetak tanpa masalah teknis.</li>
                    </ul>
                    <li className="font-bold text-lg">Kompress File</li>
                    <p className="text-justify mb-3">Jika file desain berukuran besar, kompreslah dalam format ZIP atau RAR untuk memudahkan pengiriman dan menghindari korupsi file selama transfer.</p>
                    <li className="font-bold text-lg">Pilih Metode Pengiriman</li>
                    <ul className="list-disc ms-5 mb-3">
                        <li className="text-justify"><span className="font-bold">Email / WhatsApp</span> - Untuk file yang ukurannya kurang dari 25 MB, email atau whatsapp adalah metode pengiriman yang paling sederhana. Lampirkan file desain dan tambahkan pesan singkat yang menjelaskan spesifikasi cetak.</li>
                        <li className="text-justify"><span className="font-bold">Layanan Berbagi File</span> - Untuk file yang lebih besar, gunakan layanan berbagi file seperti Google Drive, Dropbox, atau WeTransfer. Unggah file desain Anda ke layanan tersebut dan bagikan tautannya dengan penyedia layanan percetakan.</li>
                    </ul>
                    <li className="font-bold text-lg">Konfirmasi Penerimaan</li>
                    <p className="text-justify mb-3">Setelah mengirim file, pastikan untuk mengonfirmasi ke kami, sehingga bisa memastikan telah menerima file tersebut dan dapat membukanya tanpa masalah.</p>
                    <li className="font-bold text-lg">Komunikasi Tambahan</li>
                    <p className="text-justify">Jika ada instruksi khusus mengenai cetakan, seperti jenis kertas, finishing, atau kuantitas, sertakan informasi ini dalam email atau catatan di layanan berbagi file.</p>
                    </ul>
                </div>
            </div>
            <div className="w-full border-b border-gray-300">
                <h1 className="w-full font-bold px-3 py-5 text-xl cursor-pointer hover:text-orange-600 transition-all duration-300" onClick={() => showQna(7)}><i className="bi-caret-right-fill me-3"></i>Apakah ada minimum jumlah order?</h1>
                <div className={`mt-5 mb-10 w-full text-gray-600 cursor-default transition-all duration-300 ${qna7 ? "" : "hidden"}`}>
                    <p className="text-justify">Jumlah minimum order untuk percetakan sangat berbeda-beda dan tergantung pada jenis percetakan yang ingin Anda gunakan.</p>
                    <h1 className="w-full font-bold text-2xl my-3">Berikut beberapa poin yang bisa membantu Anda mengetahui minimum jumlah order</h1>
                    <ul className="list-decimal w-full ms-5">
                    <li className="font-bold text-lg">Digital Printing</li>
                    <p className="text-justify">Tidak ada jumlah minimum order untuk digital printing. Sehingga sangat cocok untuk cetakan dalam jumlah kecil karena tidak memerlukan pembuatan plat cetak.</p>
                    <p className="text-justify mb-3">Keuntungan: cocok untuk pesanan kecil seperti kartu nama, pamflet, atau poster dalam jumlah sedikit.</p>
                    <li className="font-bold text-lg">Offset Printing</li>
                    <p className="text-justify">Offset printing memiliki jumlah minimum order karena biaya setup yang lebih tinggi, seperti pembuatan plat cetak. Jumlah minimum biasanya sekitar 500 hingga 1.000 lembar.</p>
                    <p className="text-justify mb-3">Keuntungan: lebih murah jika Anda ingin mencetak dalam jumlah banyak, seperti majalah, brosur, atau buku.</p>
                    <li className="font-bold text-lg">Large Format Printing</li>
                    <p className="text-justify">Untuk cetakan berukuran besar seperti spanduk, banner, atau poster, jumlah minimum order adalah 10 item.</p>
                    <p className="text-justify mb-3">Keuntungan: cocok untuk cetakan individual atau pesanan dalam jumlah terbatas.</p>
                    <li className="font-bold text-lg">Percetakan Kustom</li>
                    <p className="text-justify">Tergantung pada jenis dan kompleksitas produk. Undangan pernikahan, kartu nama dengan finishing khusus, atau produk dengan desain khusus mungkin memiliki jumlah minimum order tertentu untuk menutupi biaya produksi.</p>
                    <p className="text-justify mb-3">Keuntungan: memberikan kemudahaan dengan desain yang diinginkan.</p>
                    <li className="font-bold text-lg">Print on Demand</li>
                    <p className="text-justify">Beberapa layanan print on demand (POD) tidak memiliki jumlah minimum order, memungkinkan Anda mencetak satu item.</p>
                    </ul>
                </div>
            </div>
            <div className="w-full">
                <h1 className="w-full font-bold px-3 py-5 text-xl cursor-pointer hover:text-orange-600 transition-all duration-300" onClick={() => showQna(8)}><i className="bi-caret-right-fill me-3"></i>Bagaimana cara memastikan warna cetakan sesuai dengan desain?</h1>
                <div className={`mt-5 mb-10 w-full text-gray-600 cursor-default transition-all duration-300 ${qna8 ? "" : "hidden"}`}>
                    <p className="text-justify">Untuk memastikan warna cetakan sesuai dengan desain, ada beberapa langkah penting untuk mendapatkan hasil yang diinginkan.</p>
                    <h1 className="w-full font-bold text-2xl my-3">Berikut adalah beberapa caranya</h1>
                    <ul className="list-decimal w-full ms-5">
                    <li className="font-bold text-lg">Gunakan Mode Warna CMYK</li>
                    <p className="text-justify mb-3">Pastikan desain Anda dibuat dalam mode warna CMYK (Cyan, Magenta, Yellow, Black) karena CMYK adalah standar untuk percetakan. Sedangkan Mode RGB (Red, Green, Blue) digunakan untuk layar digital dan bisa menghasilkan warna yang berbeda saat dicetak. Jika desain Anda dibuat dalam mode RGB, konversikan ke CMYK sebelum mengirim file ke penyedia layanan percetakan.</p>
                    <li className="font-bold text-lg">Kalibrasi Monitor</li>
                    <p className="text-justify mb-3">Untuk mendapatkan hasil cetak sesuai keinginan, maka Anda harus melakukan kalibrasikan monitor secara berkala untuk memastikan warna yang Anda lihat di layar mendekati warna yang akan dicetak. Gunakan profil warna standar industri, seperti Adobe RGB atau sRGB, untuk memastikan konsistensi warna.</p>
                    <li className="font-bold text-lg">Gunakan Swatch & Pantone</li>
                    <p className="text-justify mb-3">Gunakan swatch atau contoh warna dari penyedia layanan percetakan untuk memilih warna yang sesuai. Gunakan sistem Pantone Matching System (PMS) untuk warna yang lebih presisi. Pantone memberikan kode warna spesifik yang dapat direproduksi secara konsisten dalam percetakan.</p>
                    <li className="font-bold text-lg">Soft Proofing & Hard Proofing</li>
                    <p className="text-justify mb-3">Gunakan fitur soft proofing dalam software desain untuk mensimulasikan bagaimana warna akan terlihat saat dicetak. Ini dapat membantu Anda memperkirakan hasil cetakan. Mintalah hard proof atau cetakan percobaan ke kami sebelum memesan dalam jumlah besar. Hard proof akan menunjukkan hasil warna yang lebih akurat daripada soft proofing.</p>
                    <li className="font-bold text-lg">Setting ICC Profile</li>
                    <p className="text-justify mb-3">ICC Profile: Gunakan ICC (International Color Consortium) profile yang disarankan oleh penyedia layanan percetakan untuk memastikan akurasi warna. ICC profile membantu mengelola warna dari layar ke cetakan.</p>
                    <li className="font-bold text-lg">Komunikasi dengan Penyedia Layanan Percetakan</li>
                    <p className="text-justify mb-3">Komunikasikan kebutuhan warna Anda dengan jelas kepada kami. Berikan detail spesifik tentang warna yang diinginkan dan referensi warna jika perlu.</p>
                    <li className="font-bold text-lg">Gunakan Kertas yang Tepat</li>
                    <p className="text-justify mb-3">Pilih kertas yang sesuai keinginan Anda, karena jenis kertas yang berbeda dapat mempengaruhi hasil warna. Kertas glossy, matte, atau uncoated akan menghasilkan warna yang berbeda. Mintalah sampel kertas untuk melihat bagaimana warna tampil di jenis kertas tertentu.</p>
                    <li className="font-bold text-lg">Periksa Ulang File Desain</li>
                    <p className="text-justify mb-3">Hindari penggunaan warna gradien yang kompleks jika Anda menginginkan hasil yang konsisten, karena gradien bisa sulit untuk dicetak dengan tepat.</p>
                    </ul>
                </div>
            </div>
        </div>
    )
}