// Manipulasi Array

// 1. Menambah isi array
// let arr = ['tegar', 'budi', 'siti', 'ania'];
// console.log(arr);

// 2. Menghapus isi array
// let arr = ['tegar', 'budi', 'siti', 'ania'];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// let arr = ['tegar', 'budi', 'siti', 'ania'];
// for (let i = 0; i < arr.length; i++) {
//     console.log('mahasiswa ke ' + (i + 1) + ': ' + arr[i]);
// }

// Method pada array

// Method .join()
// Digunakan untuk merapihkan isi array menjadi tersusun rapih
// let arr = ['tegar', 'budi', 'siti', 'ania'];
// console.log(arr.join(' - '));

// Method .length()
// Digunakan untuk mengecek panjang atau jumlah isi dari array
// let arr = ['tegar', 'budi', 'siti', 'ania'];
// console.log(arr.length);

// Method .push()
// Digunakan untuk menambahkan element baru di akhir array
// let arr = ['tegar', 'budi', 'siti', 'ania'];
// arr.push('dina');
// console.log(arr);

// Method .pop()
// Digunakan untuk menghapus element di akhir array
// let arr = ['tegar', 'budi', 'siti', 'ania'];

// arr.pop()
// arr.pop()
// console.log(arr)

// unshift
// Digunakan untuk menambahkan element di awal array
// let arr = ['tegar', 'budi', 'siti', 'ania'];
// arr.unshift('dina');
// console.log(arr);

// shift
// Digunakan untuk menghapus element di awal array
// let arr = ['tegar', 'budi', 'siti', 'ania'];
// arr.shift()
// console.log(arr)

// Splice
// Digunakan untuk menambahkan element di tengah array
// let arr = ['tegar', 'budi', 'siti', 'ania'];
// arr.splice(2, 0, 'dina', 'rani');
// console.log(arr);

// Slice
// Digunakan untuk mengambil sebagian dari array
// let arr = ['tegar', 'budi', 'siti', 'ania'];
// console.log(arr.slice(1, 3));

// ForEach
// // Digunakan untuk mengiterasi setiap element dalam array
// let angka = [1, 2, 3, 4, 5, 6, 7, 8]
// let nama = ['tegar', 'budi', 'siti', 'ania'];

// // angka.forEach(function (value) {
// //     console.log(value);
// // });
// nama.forEach(function (e, i) {
//     console.log('mahasiswa ke ' + (i + 1) + ': ' + e);
// })

// Map
// Digunakan untuk membuat array baru berdasarkan array yang ada
// let angka = [1, 2, 3, 4, 5, 6, 7, 8];
// let angka2 = angka.map(function (e) {
//     return e * 2;
// })

// console.log(angka2.join(' - '));

// Sort
// Digunakan untuk mengurutkan array
// let angka = [2, 4, 1, 3, 5, 6, 7, 8];

// angka.sort()
// console.log(angka.join(' - '));

// Filter
// Digunakan untuk menyaring element array yang berjumlah banyak
// let angka = [2, 4, 1, 3, 5, 6, 7, 8];
// let angka2 = angka.filter(function (x) {
//     // return x == 5;
//     return x > 3;
// })

// console.log(angka2.join(' - '));

// Find
// Digunakan untuk menyaring element array yang berjumlah satu
// atau element array pertama yang di temukan
// let angka = [2, 4, 1, 3, 5, 6, 7, 8];
// let angka2 = angka.find(function (x) {
//     return x > 1;
// })

// console.log(angka2);