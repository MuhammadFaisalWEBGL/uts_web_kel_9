// buatElementHeader();
function buatElementHeader() {
    document.getElementById('header').innerHTML = `
    <div class="header p-3 bg-gradient-to-r from-lime-100 to-green-500">
    <!-- bagian navbar -->
            <nav class="flex flex-col md:flex-row capitalize gap-4 justify-between items-center">
                <div class="flex flex-col md:flex-row items-center justify-between w-full md:w-[35%]">
                    <div class="flex items-center justify-between w-full md:w-auto">
                        <img src="../img/image.png" class="logo mb-4 md:mb-0 w-20 h-20 object-contain">
                        <!-- Hamburger menu untuk mobile -->
                        <button class="md:hidden text-2xl" id="menuToggle">
                            <i class="bi bi-list"></i>
                        </button>
                    </div>
                    
                    <!-- Menu navigasi yang dapat di-toggle -->
                    <ul class="hidden md:flex flex-col md:flex-row  gap-3 text-center w-full transition-all duration-300 ease-in-out" id="navMenu">
                        <li><a id="home" href="../home/index.html?aktif=home">home</a></li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profil
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" id="organisasi" href="../profil/organisasi.html?aktif=organisasi">Organisasi</a></li>
                                    <li><a class="dropdown-item" id="akreditasi" href="../profil/akreditasi.html?aktif=akreditasi">Akreditasi</a></li>
                                    <li><a class="dropdown-item" id="status" href="../profil/status_sttc.html?aktif=status">Status STTC</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fasilitas
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" id="mesjid" href="../fasilitas/mesjid.html?aktif=mesjid">mesjid</a></li>
                                    <li><a class="dropdown-item" id="aula" href="../fasilitas/aula.html?aktif=aula">aula</a></li>
                                    <li><a class="dropdown-item" id="lab" href="../fasilitas/lab.html?aktif=lab">lab komputer</a></li>
                                    <li><a class="dropdown-item" id="sarana" href="../fasilitas/sarana.html?aktif=sarana">sarana olahraga</a></li>
                                    <li><a class="dropdown-item" id="perpustakaan" href="../fasilitas/perpus.html?aktif=perpustakaan">perpustakaan</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Layanan
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" id="verifikasi" href="../layanan/verifikasi.html?aktif=verifikasi">verifikasi ijazah</a></li>
                                    <li><a class="dropdown-item" id="jurnal" href="../layanan/jurnal.html?aktif=jurnal">jurnal</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tautan
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" id="lpm" href="../tautan/lpm.html?aktif=lpm">LPPM</a></li>
                                    <li><a class="dropdown-item" id="upm" href="../tautan/upm.html?aktif=upm">UPM</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <!-- bagian pencarian -->
                <div class="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
                    <div class="flex justify-between rounded-md overflow-hidden">
                        <i class="bi p-1 bg-black cursor-pointer bi-search text-white"></i>
                        <input type="search" class="outline-none p-1" placeholder="cari">
                    </div>
                    <div class="cursor-pointer" id="kontak">kontak</div>
                        <div class="absolute bg-black/75 top-0 left-0 bottom-0 right-0 hidden z-20">
                            <div class="bg-gray-100 flex items-center justify-center w-full md:w-96 min-h-screen rounded-3xl top-7 left-[50%] translate-x-[-50%] absolute pt-9">
                                <i class="bi bi-x text-xl right-9 top-11 cursor-pointer absolute text-black hover:text-red-500" id="closeKontak"></i>
                                <div class="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
                                    <h1 class="text-xl md:text-2xl font-bold mb-6 text-center">Hubungi Admin</h1>
                                        <form action="mailto:admin@example.com" method="post" enctype="text/plain">
                                            <div class="mb-2">
                                                <label for="name" class="block text-gray-700 font-bold mb-1">Nama:</label>
                                                <input type="text" id="name" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                                            </div>
                                            <div class="mb-2">
                                                <label for="email" class="block text-gray-700 font-bold mb-1">Email:</label>
                                                <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                                            </div>
                                            <div class="mb-2">
                                                <label for="subject" class="block text-gray-700 font-bold mb-1">Subjek:</label>
                                                <input type="text" id="subject" name="subject" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                                            </div>
                                            <div class="mb-2">
                                                <label for="message" class="block text-gray-700 font-bold mb-1">Pesan:</label>
                                                <textarea id="message" name="message" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                                            </div>
                                            <div class="flex items-center justify-between">
                                                <input type="submit" value="Kirim" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid place-items-center gap-2 grid-cols-2 justify-center w-32">
                            
                            <button class="btn btn-primary capitalize">daftar</button>
                            <div class="indo"></div>
                        </div>
                </div>
            </nav>
        </div>
    `
}

function ambilParameterURL() {
    const stringQuery = window.location.search;
    const parameterURL = new URLSearchParams(stringQuery);
    console.log(parameterURL)
    const parameter = {};
    parameterURL.forEach((nilai, kunci) => {
        parameter[kunci] = nilai;
    });
    return parameter;
}

function sorotTautanAktif() {
    const parameter = ambilParameterURL();
    const tautanAktif = document.getElementById(parameter.aktif);
    const induk = tautanAktif.parentElement.parentElement.previousElementSibling
    if (tautanAktif) {
        tautanAktif.classList.add('aktif');
        if (induk.tagName.toLowerCase() !== 'img') {
            induk.classList.add('aktif');
        }
    }
}

window.onload = function () {
    buatElementHeader();
    sorotTautanAktif();

    const kontak = document.querySelector('#kontak');
    const closeKontak = document.querySelector('#closeKontak');
    const kontakModal = document.querySelector('#kontak').nextElementSibling;

    kontak.addEventListener('click', () => {
        kontakModal.classList.toggle('hidden');
    });

    closeKontak.addEventListener('click', () => {
        kontakModal.classList.add('hidden');
    });

    // Tambahkan event listener untuk toggle menu hamburger
    const menuToggle = document.querySelector('#menuToggle');
    const navMenu = document.querySelector('#navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('opacity-0');
        navMenu.classList.toggle('opacity-100');
        navMenu.classList.toggle('scale-95');
        navMenu.classList.toggle('scale-100');
    });
};

document.querySelector('#footer').innerHTML = `
    <div class="flex justify-center items-center p-6 md:p-10 bg-gray-700">
        <div class="flex flex-col md:flex-row justify-between gap-8 md:gap-12 text-white capitalize">
            <div class="text-center md:text-left">
                <ul class="space-y-2">
                    <li class="font-bold mb-2">tentang STTC</li>
                    <li>Sejarah</li>
                    <li>Visi dan Misi</li>
                    <li>Struktur Organisasi</li>
                    <li>Tugas dan fungsi</li>
                </ul>
            </div>
            <div class="text-center md:text-left">
                <ul class="space-y-2">
                    <li class="font-bold mb-2">penerimaan</li>
                    <li>sarjana</li>
                    <li>pertukaran mahasiwa</li>
                </ul>
            </div>
            <div class="text-center md:text-left">
                <ul class="space-y-2">
                    <li class="font-bold mb-2">pendidikan</li>
                    <li>program studi</li>
                    <li>beasiswa</li>
                    <li>staf</li>
                </ul>
            </div>
            <div class="text-center md:text-left">
                <ul class="space-y-2">
                    <li class="font-bold mb-2">kampus</li>
                    <li>aktifitas mahasiswa</li>
                    <li>jelajah</li>
                </ul>
            </div>
        </div>
    </div>`
