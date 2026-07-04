// Latihan 2 - Pengkondisian If Else
// let noAngkot = 1;
// let angkotBeroperasi = 6;
// let jmlhAngkot = 10;

// for (noAngkot; noAngkot <= jmlhAngkot; noAngkot++) {
//   // Kondisi Awal
//   if (noAngkot <= angkotBeroperasi) {
//     // Aksi 1
//     console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik");
//   } else {
//     // Aksi 2
//     console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi");
//   }
// }

// Latihan 2 - Pengkondisian Else If
// let noAngkot = 1;
// let angkotBeroperasi = 6;
// let jmlhAngkot = 10;

// for (noAngkot; noAngkot <= jmlhAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroperasi && noAngkot != 5) {
//     console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik");
//   } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
//     console.log("Angkot No. " + noAngkot + " Sedang melakukan lembur");
//   } else {
//     console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi");
//   }
// }

// Game Suwit: Gajah, Semut, Orang
// let player = prompt('masukan pilihanmu: gajah, semut, atau orang')

// let computer = Math.random();

// if (computer < 0.33) {
//   computer = "gajah";
// } else if (computer < 0.67) {
//   computer = "semut";
// } else {
//   computer = "orang";
// }

// let hasil =
//   // Operator ternary
//   (computer == player) ? "Kamu Seri!" :
//     (player == "gajah") ? (computer == "semut" ? "Kamu Kalah!" : "Kamu Menang!") :
//       (player == "semut") ? (computer == "orang" ? "Kamu Kalah!" : "Kamu Menang!") :
//         (player == "orang") ? (computer == "gajah" ? "Kamu Kalah!" : "Kamu Menang!") :
//           "Pilihan kamu tidak valid!";

// alert('kamu memilih ' + player + '\nkomputer memilih ' + computer + '\n' + hasil);