// object
// membuat object
// Object literal
let mahasiswa1 = {
    nama: 'galih',
    umur: 23,
    email: 'galih@example.com',
    jurusan: 'informatika',
}

let mahasiswa2 = {
    nama: 'budi',
    umur: 22,
    email: 'budi@example.com',
    jurusan: 'sistem informasi',
}

// Function declaration
function buatObjectMahasiswa(nama, umur, email, jurusan) {
    let mahasiswa = {}
    mahasiswa.nama = nama;
    mahasiswa.umur = umur;
    mahasiswa.email = email;
    mahasiswa.jurusan = jurusan;
    return mahasiswa;
}

let mahasiswa3 = buatObjectMahasiswa('nova', 21, 'nova@example.com', 'teknik komputer');

// Constructor
function Mahasiswaaa(nama, umur, email, jurusan) {
    this.nama = nama;
    this.umur = umur;
    this.email = email;
    this.jurusan = jurusan;
}

let Mahasiswaaa1 = new Mahasiswaaa('erik', 20, 'erik@example.com', 'teknik informatika');

// Keyword this

// Contoh satu
// function halo() {
//     console.log(this);
//     console.log('halo');
// }

// this.halo();

// Contoh dua
// let obj = { a: 10, nama: 'galih' };
// obj.halo = function () {
//     console.log(this);
//     console.log('halo')
// }

// obj.halo();

// Contoh tiga
function halo() {
    console.log(this);
    console.log('halo');
}

// new halo();
let obj1 = new halo();
let obj2 = new halo();