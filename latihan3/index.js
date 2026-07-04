// latihan 3 easy

// Soal satu
// // Buat sebuah array yang berisi nama 5 buah.
// let buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Melon"];
// let soal1 = 'Soal 1: Buat sebuah array yang berisi nama 5 buah.';
// console.log(soal1);
// console.log(buah.join(' - '));

// // Soal dua
// // tampilkan tanpa mengetik angkanya secara langsung. 10 | 50
// let angka1 = [10, 20, 30, 40, 50];
// let soal2 = 'Soal 2: tampilkan tanpa mengetik angkanya secara langsung. 10 | 50';
// console.log(soal2);
// console.log(angka1[0], angka1[4]);

// // Soal tiga
// // Tambahkan "Kuning" ke akhir array.
// let warna = ["Merah", "Hijau", "Biru"];
// let soal3 = 'Soal 3: Tambahkan "Kuning" ke akhir array.';
// console.log(soal3);
// warna.push('kuning');
// console.log(warna.join(' - '));

// // Soal empat
// // Tambahkan "Mie Ayam" di awal array.
// let makanan = ["Bakso", "Sate", "Nasi Goreng"];
// let soal4 = 'Soal 4: Tambahkan "Mie Ayam" di awal array.';
// console.log(soal4);
// makanan.unshift('Mie Ayam');
// console.log(makanan.join(' - '));

// // Soal lima
// // Hapus elemen terakhir.
// let hewan = ["Kucing", "Anjing", "Kelinci"];
// let soal5 = 'Soal 5: Hapus elemen terakhir.';
// console.log(soal5);
// hewan.pop();
// console.log(hewan.join(' - '));

// // Soal enam
// // Gunakan for untuk menampilkan seluruh isi array.
// let angka2 = [5, 10, 15, 20, 25];
// let soal6 = 'Soal 6: Gunakan for untuk menampilkan seluruh isi array.';
// console.log(soal6);

// for (let i = 0; i < angka2.length; i++) {
//     console.log(angka2[i]);
// }

// // Soal tujuh
// // Gunakan forEach() sehingga output menjadi
// let nama = ["Andi", "Budi", "Caca"];
// let soal7 = 'Soal 7: Gunakan forEach() sehingga output menjadi';
// console.log(soal7);
// nama.forEach(function (e) {
//     console.log('halo ' + e);
// });

// // Soal delapan
// // Gunakan map() agar menghasilkan array baru
// let angka3 = [2, 4, 6, 8];
// let soal8 = 'Soal 8: Gunakan map() agar menghasilkan array baru';
// console.log(soal8);

// let angka3Baru = angka3.map(function (x) {
//     return x * 2;
// });
// console.log(angka3Baru.join(' - '));

// // Soal sembilan
// // Gunakan filter() sehingga hanya angka di atas 15 yang tersisa.
// let angka4 = [12, 7, 25, 18, 30];
// let soal9 = 'Soal 9: Gunakan filter() sehingga hanya angka di atas 15 yang tersisa.';
// console.log(soal9);

// console.log(angka4.filter(function (e) {
//     angka4.sort((a, b) => a - b);
//     return e > 15;
// }));

// // Soal sepuluh
// // Cari "Mangga" menggunakan find().
// let buah2 = ["Apel", "Jeruk", "Mangga", "Melon"];
// let soal10 = 'Soal 10: Cari "Mangga" menggunakan find().';
// console.log(soal10);

// console.log(buah2.find(function (e) {
//     return e === "Mangga";
// }));

// latihan 3 medium

// Soal satu
// Hitung total seluruh nilai menggunakan perulangan.
let soal1 = 'Soal 1: Hitung total seluruh nilai menggunakan perulangan.';
let nilai = [80, 90, 70, 60, 100];
console.log(soal1);

let total = 0;
for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];
}
console.log('Total nilai:', total);

// Soal dua
// Naikkan seluruh harga sebesar 10 % menggunakan map().
let soal2 = 'Soal 2: Naikkan seluruh harga sebesar 10 % menggunakan map().';
let harga = [5000, 10000, 7500];
console.log(soal2);

let hargaBaru = harga.map(function (x) {
    return x * 1.1;
});
console.log('Harga baru:', hargaBaru.join(' - '));

// Soal tiga
// Buat array baru yang hanya berisi angka genap.
let soal3 = 'Soal 3: Buat array baru yang hanya berisi angka genap.';
let angka1 = [1, 3, 5, 8, 10, 13];
console.log(soal3);

let angkaGenap = angka1.filter(function (e) {
    return e % 2 === 0
})
console.log('Angka genap:', angkaGenap.join(' - '))

// Soal empat
// Urutkan nama dari A sampai Z.
let soal4 = 'Soal 4: Urutkan nama dari A sampai Z.';
let nama = ["Rina", "Budi", "Andi", "Caca"];
console.log(soal4);

nama.sort()
console.log('Nama setelah diurutkan:', nama.join(' - '));

// Soal lima
// Urutkan dari yang terbesar ke yang terkecil.
let soal5 = 'Soal 5: Urutkan dari yang terbesar ke yang terkecil.';
let angka2 = [9, 2, 15, 4, 7];
console.log(soal5);

angka2.sort((a, b) => b - a);
console.log('Angka setelah diurutkan:', angka2.join(' - '));

// Soal enam
// Buat program yang menghasilkan output
let soal6 = 'Soal 6: Buat program yang menghasilkan output';
let produk = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Printer"
];
console.log(soal6);

for (let i = 0; i < produk.length; i++) {
    console.log(`${i + 1}. ${produk[i]}`);
}