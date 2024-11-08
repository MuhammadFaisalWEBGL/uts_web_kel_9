// buatElementHeader();
function buatElementHeader() {
    document.getElementById('header').innerHTML = `
    <div class="header p-3 bg-gradient-to-r from-lime-100 to-green-500">
    <!-- bagian navbar -->
            <nav class="flex capitalize gap-4 justify-between items-center">
                <div class="flex items-center justify-between w-[35%]">
                    <img src="../img/image.png" class="logo">
                    <ul class="gap-3 flex">
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
                                    <li><a class="dropdown-item" id="ruang_kelas" href="../fasilitas/ruang_kelas.html?aktif=ruang_kelas">ruang kelas</a></li>
                                    <li><a class="dropdown-item" id="kantin" href="../fasilitas/kantin.html?aktif=kantin">kantin</a></li>
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
                                    <li><a class="dropdown-item" id="perpus_digital" href="../layanan/perpus_digital.html?aktif=perpus_digital">perpustakaan digital</a></li>
                                    <li><a class="dropdown-item" id="jurnal" href="../layanan/jurnal.html?aktif=jurnal">jurnal</a></li>
                                    <li><a class="dropdown-item" id="e_learn" href="../layanan/e_learning.html?aktif=e_learn">e-learning</a></li>
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
                <div class="flex items-center gap-4">
                    <div class="flex justify-between rounded-md overflow-hidden">
                    <i class="bi p-1 bg-black cursor-pointer bi-search text-white"></i>
                        <input type="search" class="outline-none p-1" placeholder="cari">
                    </div>
                <div>kontak</div>
                <div class="indo"></div>
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
            // console.log('Induk elemen adalah <img>');
            induk.classList.add('aktif');
        } 
    }
}

window.onload = function() {
    // document.href.location = 'index.html?aktif=home'
    buatElementHeader();
    sorotTautanAktif();
};






document.querySelector('#footer').innerHTML = `
    <div class="flex justify-center items-center p-10 bg-gray-700">
        <div class="flex justigy-between gap-5 text-white  capitalize">
            <div>
                <ul>
                    <li>tentang STTC</li>
                    <li>Sejarah</li>
                    <li>Visi dan Misi</li>
                    <li>Struktur Organisasi</li>
                    <li>Tugas dan fungsi</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>penerimaan</li>
                    <li>sarjana</li>
                    <li>pertukaran mahasiwa</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>pendidikan </li>
                    <li>program studi</li>
                    <li>beasiswa</li>
                    <li>staf</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>kampus</li>
                    <li>aktifitas mahasiswa</li>
                    <li>jelajah</li>
                </ul>
            </div>
        </div>
    </div>`

function name(params) {
    
}