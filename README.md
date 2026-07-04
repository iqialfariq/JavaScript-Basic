# 🧠 Penjelasan JavaScript
<p align="justify">
JavaScript (disingkat JS) adalah bahasa pemrograman yang digunakan terutama untuk membuat halaman web menjadi dinamis dan interaktif, bekerja bersama HTML (struktur) dan CSS (desain). JavaScript dibuat oleh Brendan Eich pada tahun 1995 saat ia bekerja di Netscape Communications.
ada 2 cara untuk menyimpan file javascript internal js dan external js.
</p>

---

- **Internal JavaScript** 📎
  <p align="justify">
  Menyisipkan isi code javascript di dalam tag <script>...</script> pada html.
  </p>
  
  ```html
    <script>
        function sapa() {
          alert("Halo semua, ini dari internal JS!");
        }
    </script>
  ```
  
  ---

- **External JavaScript** 📎
  <p align="justify">
  Menyisipkan src"..." di dalam tag <script>...</script> pada html.
  </p>
  
  ```html
    <script src="script.js"></script>
  ```

---

## 🔄 Penjelasan Fungsi Interaksi

```
alert (Digunakan untuk menampilkan pesan sederhana).
cara menggunakan | alert('pesan');

prompt (Digunakan untuk meminta input teks dari pengguna).
cara menggunakan | prompt('pesan');

confirm (Digunakan untuk meminta konfirmasi dari pengguna).
cara menggunakan | confirm('pesan');

console.log (Digunakan untuk menampilkan pesan atau nilai ke console. Biasanya digunakan untuk debuging).
cara menggunakan | console.log('pesan');

```

---

### 📝 Penjelasan Variabel
<p align="justify"> 
Variabel adalah wadah untuk menyimpan data yang bisa digunakan dan dimanipulasi dalam program. Dengan variabel, kita bisa memberi nama pada sebuah nilai agar mudah dipanggil kembali.
Ada 3 cara untuk mendeklarasikan variable yaitu:
</p>

```
var
  - Scope: Fungsi (function-scoped). Tidak terbatas pada blok {}.
  - Reassign: Bisa diubah nilainya.
  - Redeclare: Bisa dideklarasikan ulang dalam scope yang sama.
  - Hoisting: Di-hoist ke atas, tapi nilainya undefined sampai dieksekusi.
```

```
let
  - Scope: Blok (block-scoped), hanya berlaku di dalam {}.
  - Reassign: Bisa diubah nilainya.
  - Redeclare: Tidak bisa dideklarasikan ulang dalam scope yang sama.
  - Hoisting: Di-hoist, tapi tidak bisa diakses sebelum deklarasi 'temporal dead zone'.
```

```
const
  - Scope: Blok (block-scoped).
  - Reassign: Tidak bisa diubah nilainya setelah deklarasi.
  - Redeclare: Tidak bisa dideklarasikan ulang.
  - Hoisting: Sama seperti let, ada 'temporal dead zone'.
```

---

## 🧩 Penjelasan Tipe Data
<p align="justify"> 
Tipe data JavaScript memiliki dua kategori yaitu: Primitive types dan Non-primitive (Reference) types.
</p>


### 📌 Tipe Data Primitive Types

  ---
  
- **Number** 📎
  <p align="justify">  
  Number adalah tipe data primitif yang digunakan untuk merepresentasikan angka, baik bilangan bulat (integer) maupun bilangan pecahan (floating point). Semua angka di JavaScript (kecuali BigInt) disimpan
  dalam format 64-bit floating point (IEEE 754).
  </p>
  
  ```
  istilah penting dalam number:
   	- Integer → bilangan bulat, contoh: 10, -5. maksimal 15 digit.
   	- Floating Point → bilangan desimal, contoh: 3.14, -0.5 maksimal 17 digit dibelakang koma.
   	- Exponential Notation → penulisan angka dengan pangkat 10, contoh: 2e3 → 2000.
   	- Infinity / -Infinity → hasil dari pembagian dengan nol atau angka terlalu besar.
   	- NaN (Not-a-Number) → hasil operasi matematika yang tidak valid, contoh: 0/0.
  ```
  
  ---
  
- **String** 📎
  <p align="justify">  
  Tipe data String di JavaScript adalah tipe data primitif yang digunakan untuk menyimpan teks, yaitu kumpulan karakter. String bisa berupa huruf, angka, simbol, atau bahkan emoji, selama diapit oleh tanda
  kutip tunggal ('...'), tanda kutip ganda ("..."), atau template literal dengan backtick (`...`).
  </p>
  
  ```
  macam-macam escape caracter yaitu:
   	- \0 → karakter null.
   	- \' → ' (kutip satu).
   	- \" → " (kutip dua).
   	- \\ → \ (BackSlace satu).
   	- \n → baris baru.
   	- \t → tab.
   	- \b → backspace.
   	- \uXXXX → Unicode.
  ```
  
  ---

- **Boolean** 📎
  <p align="justify">  
  Tipe data Boolean di JavaScript adalah salah satu tipe data primitif yang hanya memiliki dua nilai: true atau false. Boolean biasanya digunakan untuk logika, pengambilan keputusan, dan kondisi dalam
  program.
  </p>
  
  ```
  Operator Logika yang Menghasilkan Boolean:
   	- AND (&&) → bernilai true jika kedua kondisi benar.
   	- OR (||) → bernilai true jika salah satu kondisi benar.
   	- NOT (!) → membalik nilai Boolean.
  ```

  ---

- **Null** 📎
  <p align="justify">  
  Null adalah sebuah nilai khusus dalam pemrograman yang menandakan bahwa sebuah variabel tidak memiliki nilai atau kosong. Biasanya dipakai dalam situasi di mana kita ingin menandai bahwa sebuah variabel
  belum memiliki nilai atau tidak ada data yang relevan.
  </p>

  ---

- **Undefined** 📎
  <p align="justify">  
  Undefined adalah tipe data primitif di JavaScript. Nilai ini muncul ketika sebuah variabel sudah dideklarasikan tetapi belum diberi nilai. Jadi, undefined berarti "variabel ada, tapi belum ada isi".
  </p>  

---

## 🔣 Penjelasan Operator
<p align="justify"> 
Operator adalah simbol khusus yang digunakan untuk melakukan operasi pada nilai atau variabel. JavaScript menyediakan berbagai jenis operator sesuai kebutuhan diantaranya ada 7 jenis yaitu:
</p>

- **Operator Aritmatika** 📎
  <p align="justify">  
  Digunakan untuk operasi matematika dasar.
  </p>
  
  ```
   	- + → penjumlahan.
   	- - → pengurangan.
   	- * → perkalian.
   	- / → pembagian.
   	- % → modulus (sisa bagi).
   	- ** → pangkat.
  ```

- **Operator Penugasan / Assignment** 📎
  <p align="justify">  
  Memberikan nilai ke variabel.
  </p>
  
  ```
   	- = → assignment dasar.
   	- += → tambah lalu assign.
   	- -= → kurang lalu assign.
   	- *= → kali lalu assign.
   	- /= → bagi lalu assign.
   	- %= → sisah bagi lalu assign.
  ```

- **Operator Perbandingan / Comparison** 📎
  <p align="justify">  
  Membandingkan dua nilai yang hasil nya Boolean true atau false.
  </p>
  
  ```
   	- == → dua sama dengan (longgar, cek nilai saja).
   	- === → tiga sama dengan (ketat, cek nilai & tipe data).
   	- != → tidak satu sama dengan (longgar, cek nilai saja).
   	- !== → tidak dua sama dengan (ketat, cek nilai & tipe data).
   	- > → lebih besar.
   	- < → lebih kecil.
   	- >= → lebih besar atau sama.
   	- <= → lebih kecil atau sama.
  ```

- **Operator Logika** 📎
  <p align="justify">  
  Dipakai untuk operasi boolean.
  </p>
  
  ```
   	- && → AND (kedua nya harus true).
   	- || → OR (salah satunya nya boleh true/false).
   	- ! → NOT (membalikan nilai true - false atau false - true).
  ```

- **Operator String** 📎
  <p align="justify">  
  Dipakai untuk menggabungkan string atau tuisan dan angka.
  </p>
  
  ```
   	- +
   	- +=
  ```

- **Operator Increment / Decrement** 📎
  <p align="justify">  
  Dipakai untuk melakukan tambah atau kurang secara singkat.
  </p>
  
  ```
   	- ++ → tambah 1.
   	- -- → kurang 1.
  ```

- **Unary Operator / typeof** 📎
  <p align="justify">  
  Operator yang bekerja pada satu operand saja.
  </p>
  
  ```
   	- +x → mengubah ke number.
   	- -x → negasi nilai.
   	- !x → logical NOT.
   	- typeof x → cek tipe data.
   	- delete obj.prop → hapus properti.
  ```

- **Operator Ternary / Conditional** 📎
  <p align="justify">  
  Operator yang bekerja pada tiga operand.
  </p>
  
  ```
  contoh:
   	- kondisi ? nilaiJikaTrue : nilaiJikaFalse
  ```

---

## 🔀 Penjelasan Control Flow
<p align="justify"> 
Control flow pada JavaScript adalah cara mengatur urutan eksekusi kode. Secara default, kode dijalankan dari atas ke bawah, tetapi dengan control flow statements kita bisa membuat percabangan, perulangan,
dan penanganan error. Jenis Control Flow di JavaScrip ada 2 yaitu pengulangan dan pengkondisian.
</p>

- **For** 📎
  <p align="justify">  
  For loop di JavaScript adalah salah satu bentuk control flow yang digunakan untuk menjalankan blok kode berulang kali dengan jumlah yang sudah ditentukan.
  </p>
  
  ```js
  for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke-" + i);
  }

  Output:
    - Perulangan ke-1
    - Perulangan ke-2
    - Perulangan ke-3
    - Perulangan ke-4
    - Perulangan ke-5

- **While** 📎
  <p align="justify">  
  While loop di JavaScript adalah salah satu bentuk control flow yang digunakan untuk menjalankan blok kode berulang kali selama kondisi bernilai true.
  </p>
  
  ```js
  let i = 1;
  
  while (i <= 5) {
    console.log("Perulangan ke-" + i);
    i++;
  }
  
  Output:
    - Perulangan ke-1
    - Perulangan ke-2
    - Perulangan ke-3
    - Perulangan ke-4
    - Perulangan ke-5

- **Do While** 📎
  <p align="justify">  
  Do...While pada JavaScript adalah salah satu bentuk loop (perulangan) yang memastikan blok kode dijalankan setidaknya sekali, sebelum memeriksa kondisi.
  </p>
  
  ```js
  let i = 1;
  
  do {
    console.log("Perulangan ke-" + i);
    i++;
  } while (i <= 5);

  Output:
    - Perulangan ke-1
    - Perulangan ke-2
    - Perulangan ke-3
    - Perulangan ke-4
    - Perulangan ke-5

- **If** 📎
  <p align="justify">  
  If statement di JavaScript adalah salah satu bentuk control flow yang digunakan untuk membuat percabangan logika. Dengan if, kita bisa menjalankan kode tertentu hanya jika kondisi bernilai true.
  </p>
  
  ```js
  let umur = 20;
  
  if (umur >= 18) {
    console.log("Boleh masuk");
  }

  Output:
    - Boleh masuk

- **If Else** 📎
  <p align="justify">  
  If...Else di JavaScript adalah struktur control flow yang digunakan untuk membuat percabangan logika. Dengan ini, program bisa memilih jalur eksekusi berbeda tergantung apakah suatu kondisi bernilai
  true atau false.
  </p>
  
  ```js
  let umur = 16;
  
  if (umur >= 18) {
    console.log("Boleh masuk");
  } else {
    console.log("Belum cukup umur");
  }

  Output:
    - Belum cukup umur

- **If, Else If, Else** 📎
  <p align="justify">  
  If...Else If...Else di JavaScript adalah struktur control flow yang digunakan untuk membuat percabangan logika dengan banyak kondisi. Dengan ini, program bisa memilih jalur eksekusi berbeda tergantung
  hasil evaluasi kondisi.
  </p>
  
  ```js
  let nilai = 85;
  
  if (nilai >= 90) {
    console.log("Nilai A");
  } else if (nilai >= 75) {
    console.log("Nilai B");
  } else if (nilai >= 60) {
    console.log("Nilai C");
  } else {
    console.log("Nilai D");
  }

  Output:
    - Nilai B

- **Switch** 📎
  <p align="justify">  
  Switch statement di JavaScript adalah salah satu bentuk control flow yang digunakan untuk menangani percabangan dengan banyak kemungkinan nilai. Fungsinya mirip dengan if...else if...else, tetapi lebih
  rapi dan mudah dibaca ketika ada banyak kondisi yang bergantung pada satu variabel atau ekspresi.
  </p>
  
  ```js
  let hari = "Senin";
  
  switch (hari) {
    case "Senin":
      console.log("Hari kerja pertama");
      break;
    case "Selasa":
      console.log("Hari kerja kedua");
      break;
    case "Rabu":
      console.log("Hari kerja ketiga");
      break;
    case "Kamis":
      console.log("Hari kerja keempat");
      break;
    case "Jumat":
      console.log("Hari kerja terakhir");
      break;
    default:
      console.log("Hari libur");
  }

  Output:
    - Hari kerja pertama
