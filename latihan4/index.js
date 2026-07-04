// latihan 4

// Soal satu
// Buatlah sebuah object bernama mahasiswa yang memiliki data berikut:
// nama: "Risqi"
// umur: 20
// jurusan: "Informatika"

let soal1 = 'Soal 1: Buatlah sebuah object bernama mahasiswa yang memiliki data berikut: nama: "dani", umur: 20, jurusan: "Informatika"'
let mahasiswa = {
    nama: 'Dani',
    umur: 20,
    jurusan: 'informatika'
}

console.log(soal1)
console.log(mahasiswa.nama)
console.log(mahasiswa.umur)
console.log(mahasiswa.jurusan)

// Soal dua
// Ubah nilai tahun menjadi 2025.
// Lalu tampilkan seluruh object.
let soal2 = 'Soal 2: Ubah nilai tahun menjadi 2025. Lalu tampilkan seluruh object.'
const mobil = {
    merk: "Toyota",
    tipe: "Avanza",
    tahun: 2022
};

console.log(soal2)
mobil.tahun = 2025
console.log(mobil)

// Soal tiga
// Tambahkan properti baru pada object berikut.
let soal3 = 'Soal 3: Tambahkan properti baru pada object berikut. (Tambahkan: processor: "Intel i5")'
const laptop = {
    merk: "Asus",
    ram: "8GB"
};

laptop.processor = "Intel i5";
console.log(soal3);
console.log(laptop);

// Soal empat
// Tambahkan sebuah method bernama info() yang ketika dipanggil menghasilkan
let soal4 = 'Tambahkan sebuah method bernama info() yang ketika dipanggil menghasilkan: nama dan gaji';
const karyawan = {
    nama: "Andi",
    gaji: 5000000
}

console.log(soal4)
karyawan.info = function () {
    console.log("Nama: " + this.nama);
    console.log("Gaji: " + this.gaji);
};

karyawan.info();

// Soal lima
// Buat method diskon(persen)
let soal5 = 'Soal 5: Buat method diskon(persen) yang menghitung diskon berdasarkan persentase';
const produk = {
    nama: "Mouse",
    harga: 150000,
    diskon: 0.2,
    HargaDiskon: function () {
        return this.harga - (this.harga * this.diskon);
    }
};

console.log(produk.HargaDiskon());

// Soal enam
// Tampilkan: Bandung, Jawa Barat
let soal6 = 'Soal 6: Tampilkan: Bandung, Jawa Barat';
const siswa = {
    nama: "Budi",
    alamat: {
        kota: "Bandung",
        provinsi: "Jawa Barat"
    }
}

console.log(soal6);
console.log(siswa.alamat.kota + ", " + siswa.alamat.provinsi);

// Soal tujuh
// Tambahkan data: kodePos: 40123, ke dalam object alamat.
let soal7 = 'Soal 7: Tambahkan data: kodePos: 40123, ke dalam object alamat.';
let identitas = {
    nama: "Budi",
    alamat: {
        kota: "Bandung",
        provinsi: "Jawa Barat",
    }
}
console.log(soal7);
identitas.alamat.kodePos = 40123;
console.log(Object.values(identitas));

// Soal delapan
// Tampilkan: Aldi : 80, Budi: 90, Caca: 75
let soal8 = 'Soal 8: Tampilkan: Aldi : 80, Budi: 90, Caca: 75';
const mahasiswa4 = [
    {
        nama: "Aldi",
        nilai: 80
    },
    {
        nama: "Budi",
        nilai: 90
    },
    {
        nama: "Caca",
        nilai: 75
    }
];
console.log(mahasiswa4[0].nama + ": " + mahasiswa4[0].nilai);
console.log(mahasiswa4[1].nama + ": " + mahasiswa4[1].nilai);
console.log(mahasiswa4[2].nama + ": " + mahasiswa4[2].nilai);

// Soal sembilan
// Hitung jumlah seluruh nilai.  Aldi : 80, Budi: 90, Caca: 75
let soal9 = 'Soal 9: Hitung jumlah seluruh nilai.  Aldi : 80, Budi: 90, Caca: 75';
const mahasiswa5 = [
    {
        nama: "Aldi",
        nilai: 80
    },
    {
        nama: "Budi",
        nilai: 90
    },
    {
        nama: "Caca",
        nilai: 75
    }
];

let total = 0;
for (let i = 0; i < mahasiswa5.length; i++) {
    total += mahasiswa5[i].nilai;
}
console.log(soal9);
console.log("Jumlah seluruh nilai: " + total);

// Soal sepuluh
// Cari mahasiswa yang memiliki nilai terbesar.
let soal10 = 'Soal 10: Cari mahasiswa yang memiliki nilai terbesar.';
const mahasiswa6 = [
    {
        nama: "Aldi",
        nilai: 80
    },
    {
        nama: "Budi",
        nilai: 90
    },
    {
        nama: "Caca",
        nilai: 75
    }
];

console.log(soal10);
console.log(mahasiswa6[1].nama + ": " + mahasiswa6[1].nilai);