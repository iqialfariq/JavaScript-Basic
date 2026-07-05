# 🧠 Penjelasan JavaScript
<p align="justify">
JavaScript (disingkat JS) adalah bahasa pemrograman yang digunakan terutama untuk membuat halaman web menjadi dinamis dan interaktif, bekerja bersama HTML (struktur) dan CSS (desain). JavaScript dibuat
oleh Brendan Eich pada tahun 1995 saat ia bekerja di Netscape Communications. ada 2 cara untuk menyimpan file javascript internal js dan external js.
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

## 📝 Penjelasan Variabel
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

  ```
  1. Instance Method (dipanggil dari angkanya)
  ```
  ```js
  toFixed() → Mengatur jumlah angka di belakang koma.
  
  const price = 12500.567; // Harga awal.
  const result = price.toFixed(2); // Ubah menjadi 2 angka desimal.
  
  console.log(result); // "12500.57"
  ```
  ```js
  toString() → Mengubah number menjadi string.
  
  const number = 123; // Angka awal.
  const result = number.toString(); // Ubah number menjadi string.
  
  console.log(result); // "123"
  console.log(typeof result); // "string"
  ```
  ```js
  toExponential() → Mengubah ke bentuk notasi ilmiah.
  
  const num = 5000; // Angka awal.
  const result = num.toExponential(2); // Tampilkan 2 digit di belakang koma.
  
  console.log(result); // "5.00e+3"
  console.log(typeof result); // "string"
  ```
  ```js
  toPrecision() → Menentukan jumlah digit signifikan.
  
  const num = 123.4567; // Angka awal.
  
  const result1 = num.toPrecision(3); // Tampilkan 3 digit signifikan.
  const result2 = num.toPrecision(5); // Tampilkan 5 digit signifikan.
  
  console.log(result1); // "123"
  console.log(result2); // "123.46"
  console.log(typeof result1); // "string"
  ```
  ```js
  valueOf() → Mengembalikan nilai primitif number.
  
  const num = 100; // Angka awal.
  const result = num.valueOf(); // Ambil nilai aslinya.
  
  console.log(result); // 100
  console.log(typeof result); // "number"
  ```
  ```js
  toLocaleString() → Memformat angka sesuai format lokal.
  
  const money = 1500000; // Nominal uang.
  
  const indonesia = money.toLocaleString("id-ID"); // Format Indonesia.
  const america = money.toLocaleString("en-US"); // Format Amerika.
  
  console.log(indonesia); // "1.500.000"
  console.log(america); // "1,500,000"
  ```
  
  ```
  2. Static Method (dipanggil dari Number)
  ```
  ```js
  Number.isInteger() → Digunakan untuk mengecek apakah sebuah nilai merupakan bilangan bulat (integer).
  
  const quantity = 5; // Jumlah barang.
  
  // Jika quantity adalah bilangan bulat, tampilkan "Jumlah barang valid".
  if (Number.isInteger(quantity)) {
    console.log("Jumlah barang valid");
  // Jika bukan bilangan bulat, tampilkan "Jumlah barang harus bilangan bulat".
  } else {
    console.log("Jumlah barang harus bilangan bulat");
  }
  
  // Output:
  // Jumlah barang valid
  ```
  ```js
  Number.isNaN() → Digunakan untuk mengecek apakah suatu nilai adalah NaN (Not a Number).

  const age = Number("dua puluh"); // Mengubah input menjadi number.

  // Jika age bernilai NaN, tampilkan pesan error.
  if (Number.isNaN(age)) {
    console.log("Masukkan umur berupa angka");
  // Jika bukan NaN, berarti input berupa angka.
  } else {
    console.log("Umur valid");
  }
  
  // Output:
  // Masukkan umur berupa angka
  ```
  ```js
  Number.isFinite() → Digunakan untuk mengecek apakah suatu nilai merupakan angka yang valid, yaitu bukan NaN, Infinity, atau -Infinity.

  const result = 100 / 0; // Hasilnya adalah Infinity.

  // Jika result merupakan angka yang valid, tampilkan "Hasil valid".
  if (Number.isFinite(result)) {
    console.log("Hasil valid");
  // Jika result bukan angka yang valid (NaN atau Infinity), tampilkan "Hasil tidak valid".
  } else {
    console.log("Hasil tidak valid");
  }
  
  // Output:
  // Hasil tidak valid
  ```
  ```js
  Number.parseInt() → Digunakan untuk mengubah string menjadi bilangan bulat (integer).

  const width = "300px"; // Nilai lebar dalam bentuk string.
  
  // Mengambil angka di awal string dan mengabaikan karakter setelahnya.
  const result = Number.parseInt(width);
  
  console.log(result);
  
  // Output:
  // 300
  ```
  ```js
  Number.parseFloat() → Digunakan untuk mengubah string menjadi angka desimal (floating point).

  const weight = "65.5kg"; // Nilai berat dalam bentuk string.
  
  // Mengambil angka desimal di awal string dan mengabaikan karakter setelahnya.
  const result = Number.parseFloat(weight);
  
  console.log(result);
  
  // Output:
  // 65.5
  ```
  
  ---
  
- **String** 📎
  <p align="justify">  
  Tipe data String di JavaScript adalah tipe data primitif yang digunakan untuk menyimpan teks, yaitu kumpulan karakter. String bisa berupa huruf, angka, simbol, atau bahkan emoji, selama diapit oleh
  tanda kutip tunggal ('...'), tanda kutip ganda ("..."), atau template literal dengan backtick (`...`).
  </p>
  
  ```
  macam-macam escape caracter yaitu:
  \0 → karakter null.
  \' → ' (kutip satu).
  \" → " (kutip dua).
  \\ → \ (BackSlace satu).
  \n → baris baru.
  \t → tab.
  \b → backspace.
  \uXXXX → Unicode.
  ```
  
  ```
  1. Method Pencarian (Searching)
  ```
  ```js
  includes() → Mengecek apakah string mengandung teks tertentu.

  const email = "user@gmail.com"; // Email yang akan diperiksa.

  // Cek apakah email mengandung "@gmail.com".
  const result = email.includes("@gmail.com");
  
  console.log(result);
  
  // Output:
  // true
  ```
  ```js
  startsWith() → Mengecek apakah string diawali dengan teks tertentu.

  const fileName = "photo.png"; // Nama file yang akan diperiksa.

  // Cek apakah nama file diawali dengan "photo".
  const result = fileName.startsWith("photo");
  
  console.log(result);
  
  // Output:
  // true
  ```
  ```js
  endsWith() → Mengecek apakah string diakhiri dengan teks tertentu.

  const fileName = "photo.png"; // Nama file yang akan diperiksa.

  // Cek apakah nama file diakhiri dengan ".png".
  const result = fileName.endsWith(".png");
  
  console.log(result);
  
  // Output:
  // true
  ```
  ```js
  indexOf() → Mencari posisi kemunculan pertama suatu teks.

  const sentence = "Saya sedang belajar JavaScript."; // Kalimat yang akan diperiksa.

  // Cari posisi pertama kata "belajar".
  const result = sentence.indexOf("belajar");
  
  console.log(result);
  
  // Output:
  // 12
  ```
  ```js
  lastIndexOf() → Mencari posisi kemunculan terakhir suatu teks.
  
  const sentence = "JavaScript itu seru. Saya suka JavaScript."; // Kalimat yang akan diperiksa.

  // Cari posisi terakhir kata "JavaScript".
  const result = sentence.lastIndexOf("JavaScript");
  
  console.log(result);
  
  // Output:
  // 33
  ```
  ```js
  search() → Mencari posisi teks menggunakan string atau Regular Expression (RegExp).

  const sentence = "Saya sedang belajar JavaScript."; // Kalimat yang akan diperiksa.

  // Cari posisi kata "belajar".
  const result = sentence.search("belajar");
  
  console.log(result);
  
  // Output:
  // 12 
  ```
  
  ```
  2. Method Mengambil Sebagian String (Extracting)
  ```
  ```js
  slice() → Mengambil sebagian string berdasarkan indeks.

  const text = "Belajar JavaScript"; // Teks yang akan diambil sebagian.

  // Ambil teks mulai dari indeks ke-8 sampai sebelum indeks ke-18.
  const result = text.slice(8, 18);
  
  console.log(result);
  
  // Output:
  // JavaScript
  ```
  ```js
  substring() → Mengambil sebagian string tanpa menerima indeks negatif.

  const text = "Belajar JavaScript"; // Teks yang akan diambil sebagian.

  // Ambil teks mulai dari indeks ke-8 sampai sebelum indeks ke-18.
  const result = text.substring(8, 18);
  
  console.log(result);
  
  // Output:
  // JavaScript
  ```
  ```js
  at() → Mengambil karakter berdasarkan indeks (mendukung indeks negatif).

  const text = "JavaScript"; // Teks yang akan diperiksa.

  // Ambil karakter pada indeks ke-4.
  const result = text.at(4);
  
  console.log(result);
  
  // Output:
  // S
  ```
  ```js
  charAt() → Mengambil satu karakter berdasarkan indeks.

  const text = "JavaScript"; // Teks yang akan diperiksa.

  // Ambil karakter pada indeks ke-4.
  const result = text.charAt(4);
  
  console.log(result);
  
  // Output:
  // S
  ```
  
  ```
  3. Method Mengubah Isi String (Manipulation)
  ```
  ```js
  replace() → Mengganti kemunculan pertama teks yang cocok.

  const sentence = "Saya suka Java, Java itu menyenangkan."; // Kalimat yang akan diubah.

  // Ganti kemunculan pertama "Java" menjadi "JavaScript".
  const result = sentence.replace("Java", "JavaScript");
  
  console.log(result);
  
  // Output:
  // Saya suka JavaScript, Java itu menyenangkan.
  ```
  ```js
  replaceAll() → Mengganti semua teks yang cocok.

  const sentence = "Java itu seru. Java mudah dipelajari."; // Kalimat yang akan diubah.
  
  // Ganti semua kata "Java" menjadi "JavaScript".
  const result = sentence.replaceAll("Java", "JavaScript");
  
  console.log(result);
  
  // Output:
  // JavaScript itu seru. JavaScript mudah dipelajari.
  ```
  ```js
  concat() → Menggabungkan dua atau lebih string.

  const firstName = "Risqi"; // Nama depan.
  const lastName = "Alfariq"; // Nama belakang.
  
  // Gabungkan nama depan dan nama belakang.
  const result = firstName.concat(" ", lastName);
  
  console.log(result);
  
  // Output:
  // Risqi Alfariq
  ```
  ```js
  repeat() → Mengulang string sebanyak jumlah tertentu.

  const text = "⭐"; // Karakter yang akan diulang.

  // Ulangi karakter sebanyak 5 kali.
  const result = text.repeat(5);
  
  console.log(result);
  
  // Output:
  // ⭐⭐⭐⭐⭐
  ```
  
  ```
  4. Method Mengubah Huruf (Case Conversion)
  ```
  ```js
  toUpperCase() → Mengubah semua huruf menjadi kapital.

  const name = "risqi alfariq"; // Nama pengguna.

  // Ubah semua huruf menjadi kapital.
  const result = name.toUpperCase();
  
  console.log(result);
  
  // Output:
  // RISQI ALFARIQ
  ```
  ```js
  toLowerCase() → Mengubah semua huruf menjadi kecil.

  const email = "USER@GMAIL.COM"; // Email pengguna.

  // Ubah semua huruf menjadi kecil.
  const result = email.toLowerCase();
  
  console.log(result);
  
  // Output:
  // user@gmail.com
  ```
  
  ```
  5. Method Menghapus Spasi (Trimming)
  ```
  ```js
  trim() → Menghapus spasi di awal dan akhir string.

  const username = "  risqi  "; // Username dengan spasi.

  // Hapus spasi di awal dan akhir string.
  const result = username.trim();
  
  console.log(result);
  
  // Output:
  // "risqi"
  ```
  ```js
  trimStart() → Menghapus spasi di awal string.

  const username = "  risqi"; // Username dengan spasi di awal.

  // Hapus spasi di awal string.
  const result = username.trimStart();
  
  console.log(result);
  
  // Output:
  // "risqi"
  ```
  ```js
  trimEnd() → Menghapus spasi di akhir string.

  const username = "risqi  "; // Username dengan spasi di akhir.

  // Hapus spasi di akhir string.
  const result = username.trimEnd();
  
  console.log(result);
  
  // Output:
  // "risqi"
  ```
  
  ```
  6. Method Memisahkan String (Split)
  ```
  ```js
  split() → Memisahkan string menjadi array berdasarkan pemisah tertentu.

  const fruits = "Apel,Jeruk,Mangga"; // Data dalam bentuk string.

  // Pisahkan string menjadi array berdasarkan tanda koma.
  const result = fruits.split(",");
  
  console.log(result);
  
  // Output:
  // ["Apel", "Jeruk", "Mangga"]
  ```
  
  ```
  7. Method Konversi
  ```
  ```js
  valueOf() → Mengembalikan nilai asli (primitive value) dari string.

  const text = "JavaScript"; // String awal.

  // Ambil nilai asli dari string.
  const result = text.valueOf();
  
  console.log(result);
  console.log(typeof result);
  
  // Output:
  // JavaScript
  // string
  ```
  ```js
  toString() → Mengembalikan string itu sendiri.

  const text = "JavaScript"; // String awal.

  // Ubah nilai menjadi string.
  const result = text.toString();
  
  console.log(result);
  console.log(typeof result);
  
  // Output:
  // JavaScript
  // string
  ```
  
  ```
  8. Method Static (String)
  ```
  ```js
  String.fromCharCode() → Membuat string dari kode karakter Unicode.

  const result = String.fromCharCode(65); // Kode Unicode untuk huruf "A".

  console.log(result);
  
  // Output:
  // A
  ```
  ```js
  String.fromCodePoint() → Membuat string dari Unicode code point (mendukung karakter modern seperti emoji).

  const result = String.fromCodePoint(0x1F600); // Unicode code point untuk emoji 😀.

  console.log(result);
  
  // Output:
  // 😀
  ```
  ```js
  String.raw() → Membuat string mentah tanpa memproses karakter escape pada template literal.

  const result = String.raw`C:\Users\Risqi\Documents`;

  console.log(result);
  
  // Output:
  // C:\Users\Risqi\Documents
  ```

  ---

- **Boolean** 📎
  <p align="justify">  
  Tipe data Boolean di JavaScript adalah salah satu tipe data primitif yang hanya memiliki dua nilai: true atau false. Boolean biasanya digunakan untuk logika, pengambilan keputusan, dan kondisi dalam
  program.
  </p>
  
  ```
  Operator Logika yang Menghasilkan Boolean:
  AND && → bernilai true jika kedua kondisi benar.
  OR || → bernilai true jika salah satu kondisi benar.
  NOT ! → membalik nilai Boolean.
  ```
  
  ```
  1. Method Boolean
  ```
  ```js
  toString() → Digunakan untuk mengubah nilai boolean menjadi string.

  const isLogin = true; // Status login pengguna.

  // Ubah nilai boolean menjadi string.
  const result = isLogin.toString();
  
  console.log(result);
  console.log(typeof result);
  
  // Output:
  // "true"
  // "string"
  ```
  ```js
  valueOf() → Digunakan untuk mengambil nilai asli dari boolean.

  const isLogin = true; // Status login pengguna.

  // Ambil nilai asli dari boolean.
  const result = isLogin.valueOf();
  
  console.log(result);
  console.log(typeof result);
  
  // Output:
  // true
  // "boolean"
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


### 📌 Tipe Data Non Primitive Types

  ---
  
- **Function** 📎
  <p align="justify">  
  Function di JavaScript adalah sebuah blok kode yang bisa dipanggil berulang kali untuk menjalankan tugas tertentu. Jadi, daripada menulis ulang kode yang sama, kita bungkus dalam function lalu tinggal
  memanggilnya kapan saja.
  </p>

  ```
  Konsep Utama Function:
  - Deklarasi: Membuat function dengan nama tertentu.
  - Parameter: Nilai yang kita masukkan ke function agar bisa diproses.
  - Return value: Hasil yang dikembalikan oleh function setelah dijalankan.
  - Pemanggilan (call): Menjalankan function dengan menuliskan namanya.
  ```
  
  - **Function Declaration** 📎
    ```js
    // Berikan inisialisasi nama pada function
    function tambah(a, b) {
    // Kembalikan nilai nya lalu berikan kondisi nya
      return a + b;
    }
      
    // pemanggilan function menggunakan nama function itu sendiri
    console.log(tambah(5, 7)); // Output: 12
    ```

  - **Function Expression** 📎
    ```js
    // Berikan inisialisasi pada variabel
    const kali = function(a, b) {
    // Kembalikan nilai nya lalu berikan kondisi nya
      return a * b;
    };
      
    // pemanggilan function menggunakan nama function itu sendiri
    console.log(kali(4, 6)); // Output: 24
    ```
    
  ```
  1. Method Pemanggilan Function (Function Invocation)
  ```
  ```js
  call() → Memanggil function dengan this dan argumen satu per satu.
  
  function greet(city) {
    console.log(`Halo, saya ${this.name} dari ${city}`);
  }
  
  const person = {
    name: "Risqi",
  };
  
  // Panggil function dengan this mengacu ke object person.
  greet.call(person, "Bandung");
  
  // Output:
  // Halo, saya Risqi dari Bandung
  ```
  ```js
  apply() → Memanggil function dengan this dan argumen dalam bentuk array.

  function greet(city, country) {
    console.log(`Halo, saya ${this.name} dari ${city}, ${country}`);
  }
  
  const person = {
    name: "Risqi",
  };
  
  // Panggil function dengan this mengacu ke object person.
  greet.apply(person, ["Bandung", "Indonesia"]);
  
  // Output:
  // Halo, saya Risqi dari Bandung, Indonesia
  ```
  
  ```
  2. Method Binding Function
  ```
  ```js
  bind() → Membuat function baru dengan nilai this yang sudah ditentukan.

  function greet() {
    console.log(`Halo, saya ${this.name}`);
  }
  
  const person = {
    name: "Risqi",
  };
  
  // Buat function baru dengan this mengacu ke object person.
  const sayHello = greet.bind(person);
  
  // Jalankan function yang sudah dibuat.
  sayHello();
  
  // Output:
  // Halo, saya Risqi
  ```
  
  ```
  3. Method Warisan dari Object (Jarang dibahas)
  ```
  ```js
  toString() → Mengembalikan source code function dalam bentuk string.
  
  function greet() {
    return "Halo, JavaScript!";
  }
  
  // Ubah function menjadi string yang berisi source code.
  const result = greet.toString();
  
  console.log(result);
  
  // Output:
  // function greet() {
  //   return "Halo, JavaScript!";
  // }
  ```
  ```js
  valueOf() → Mengembalikan nilai asli dari function.
  
  function greet() {
    return "Halo, JavaScript!";
  }
  
  // Ambil referensi asli dari function.
  const result = greet.valueOf();
  
  console.log(result === greet);
  
  // Output:
  // true
  ```
  ```js
  hasOwnProperty() → Mengecek apakah function memiliki properti sendiri.
  
  function greet() {}
  
  // Tambahkan properti baru ke dalam function.
  greet.version = "1.0";
  
  // Cek apakah function memiliki properti "version".
  const result = greet.hasOwnProperty("version");
  
  console.log(result);
  
  // Output:
  // true
  ```
  
  ---

- **Array** 📎
  <p align="justify">  
  Array pada JavaScript adalah struktur data yang digunakan untuk menyimpan sekumpulan nilai dalam satu variabel, dengan urutan tertentu dan indeks yang dimulai dari 0. Jadi, alih-alih membuat banyak
  variabel untuk setiap data, kita bisa mengelompokkan semuanya dalam satu array.
  </p>

  ```
  Karakteristik Array:
  - Kumpulan data: Bisa berisi banyak nilai sekaligus.
  - Indeks: Elemen pertama berada di indeks 0, elemen kedua di 1, dan seterusnya.
  - Dinamis: Ukuran array bisa bertambah atau berkurang sesuai kebutuhan.
  - Heterogen: Bisa menyimpan berbagai tipe data (string, number, object, bahkan array lain).
  - Terurut: Data disusun berdasarkan urutan indeks.
  ```
  
  - **Cara Menuliskan Array** 📎
    ```js
    // Membuat array dengan cara literal (paling umum)
    let buah = ["apel", "jeruk", "mangga"];
    // Array ini berisi 3 elemen string: "apel", "jeruk", "mangga"
    // Index dimulai dari 0 → buah[0] = "apel", buah[1] = "jeruk", buah[2] = "mangga"
    ```
  
  ```
  1. Menambah & Menghapus Elemen
  ```
  ```js
  push() → menambah elemen di akhir array.

  const fruits = ["Apel", "Jeruk"]; // Array awal.

  // Tambahkan elemen ke akhir array.
  fruits.push("Mangga");
  
  console.log(fruits);
  
  // Output:
  // ["Apel", "Jeruk", "Mangga"]
  ```
  ```js
  pop() → menghapus elemen terakhir.

  const fruits = ["Apel", "Jeruk", "Mangga"]; // Array awal.

  // Hapus elemen terakhir dari array.
  fruits.pop();
  
  console.log(fruits);
  
  // Output:
  // ["Apel", "Jeruk"]
  ```
  ```js
  unshift() → menambah elemen di awal array.

  const fruits = ["Jeruk", "Mangga"]; // Array awal.

  // Tambahkan elemen ke awal array.
  fruits.unshift("Apel");
  
  console.log(fruits);
  
  // Output:
  // ["Apel", "Jeruk", "Mangga"]
  ```
  ```js
  shift() → menghapus elemen pertama.

  const fruits = ["Apel", "Jeruk", "Mangga"]; // Array awal.

  // Hapus elemen pertama dari array.
  fruits.shift();
  
  console.log(fruits);
  
  // Output:
  // ["Jeruk", "Mangga"]
  ```
  ```js
  splice() → menambah, menghapus, atau mengganti elemen di posisi tertentu.

  const fruits = ["Apel", "Jeruk", "Mangga"]; // Array awal.

  // Hapus 1 elemen mulai dari indeks ke-1.
  fruits.splice(1, 1);
  
  console.log(fruits);
  
  // Output:
  // ["Apel", "Mangga"]
  ```
  ```js
  slice() → menyalin sebagian array (tidak mengubah array asli).

  const fruits = ["Apel", "Jeruk", "Mangga", "Anggur"]; // Array awal.

  // Salin elemen dari indeks ke-1 sampai sebelum indeks ke-3.
  const result = fruits.slice(1, 3);
  
  console.log(result);
  console.log(fruits);
  
  // Output:
  // ["Jeruk", "Mangga"]
  // ["Apel", "Jeruk", "Mangga", "Anggur"]
  ```

  ```
  2. Mencari & Mengecek Elemen
  ```
  ```js
  indexOf() → mencari indeks pertama dari elemen tertentu.

  const fruits = ["Apel", "Jeruk", "Mangga"]; // Array awal.

  // Cari indeks dari elemen "Jeruk".
  const result = fruits.indexOf("Jeruk");
  
  console.log(result);
  
  // Output:
  // 1
  ```
  ```js
  lastIndexOf() → mencari indeks terakhir dari elemen tertentu.

  const fruits = ["Apel", "Jeruk", "Mangga", "Jeruk"]; // Array awal.

  // Cari indeks terakhir dari elemen "Jeruk".
  const result = fruits.lastIndexOf("Jeruk");
  
  console.log(result);
  
  // Output:
  // 3
  ```
  ```js
  includes() → mengecek apakah elemen ada di array.

  const fruits = ["Apel", "Jeruk", "Mangga"]; // Array awal.

  // Cek apakah array memiliki elemen "Jeruk".
  const result = fruits.includes("Jeruk");
  
  console.log(result);
  
  // Output:
  // true  
  ```
  ```js
  find() → mengembalikan elemen pertama yang cocok dengan kondisi.

  const numbers = [10, 20, 30, 40, 50]; // Array awal.

  // Cari angka pertama yang lebih besar dari 25.
  const result = numbers.find((number) => number > 25);
  
  console.log(result);
  
  // Output:
  // 30
  ```
  ```js
  findIndex() → mengembalikan indeks dari elemen yang cocok.

  const numbers = [10, 20, 30, 40, 50]; // Array awal.

  // Cari indeks dari angka pertama yang lebih besar dari 25.
  const result = numbers.findIndex((number) => number > 25);
  
  console.log(result);
  
  // Output:
  // 2
  ```
  ```js
  every → mengecek apakah semua elemen benar bernilai true dan false jika ada satu yang salah.

  const numbers = [10, 20, 30, 40]; // Array awal.

  // Cek apakah semua angka lebih besar dari 5.
  const result = numbers.every((number) => number > 5);
  
  console.log(result);
  
  // Output:
  // true
  ```
  ```js
  some → mengecek apakah ada satu elemen benar bernilai true dan false jika semua elemen salah.
  
  const numbers = [10, 20, 30, 40]; // Array awal.

  // Cek apakah ada angka yang lebih besar dari 35.
  const result = numbers.some((number) => number > 35);
  
  console.log(result);
  
  // Output:
  // true
  ```
  
  ```
  3. Transformasi & Iterasi
  ```
  ```js
  map() → membuat array baru dengan hasil transformasi tiap elemen.

  const numbers = [1, 2, 3, 4]; // Array awal.

  // Kalikan setiap elemen dengan 2.
  const result = numbers.map((number) => number * 2);
  
  console.log(result);
  
  // Output:
  // [2, 4, 6, 8]
  ```
  ```js
  forEach() → menjalankan fungsi untuk setiap elemen (tidak menghasilkan array baru).

  const numbers = [1, 2, 3, 4]; // Array awal.

  // Jalankan fungsi untuk setiap elemen.
  numbers.forEach((number) => {
    console.log(number * 2); // Menampilkan hasil perkalian tiap elemen.
  });
  
  // Output:
  // 2
  // 4
  // 6
  // 8
  ```
  ```js
  filter() → membuat array baru berisi elemen yang lolos kondisi.

  const numbers = [10, 20, 30, 40, 50]; // Array awal.

  // Ambil angka yang lebih besar dari 25.
  const result = numbers.filter((number) => number > 25);
  
  console.log(result);
  
  // Output:
  // [30, 40, 50]
  ```
  ```js
  reduce() → menggabungkan semua elemen menjadi satu nilai (misalnya jumlah total).

  const numbers = [10, 20, 30, 40]; // Array awal.

  // Jumlahkan semua elemen dalam array.
  const result = numbers.reduce((total, number) => total + number, 0);
  
  console.log(result);
  
  // Output:
  // 100
  ```
  ```js
  sort() → mengurutkan elemen.

  const numbers = [40, 10, 30, 20]; // Array awal.

  // Urutkan dari kecil ke besar.
  numbers.sort((a, b) => a - b);
  
  console.log(numbers);
  
  // Output:
  // [10, 20, 30, 40]
  ```
  ```js
  reverse() → membalik urutan elemen.

  const fruits = ["Apel", "Jeruk", "Mangga"]; // Array awal.

  // Balik urutan elemen array.
  fruits.reverse();
  
  console.log(fruits);
  
  // Output:
  // ["Mangga", "Jeruk", "Apel"]
  ```
  
  ```
  4. Utility & Lainnya
  ```
  ```js
  concat() → menggabungkan dua atau lebih array.

  const fruits1 = ["Apel", "Jeruk"]; // Array pertama.
  const fruits2 = ["Mangga", "Anggur"]; // Array kedua.
  
  // Gabungkan dua array menjadi satu.
  const result = fruits1.concat(fruits2);
  
  console.log(result);
  
  // Output:
  // ["Apel", "Jeruk", "Mangga", "Anggur"]
  ```
  ```js
  join() → menggabungkan elemen menjadi string dengan separator tertentu.
  
  const fruits = ["Apel", "Jeruk", "Mangga"]; // Array awal.

  // Gabungkan elemen dengan tanda koma.
  const result = fruits.join(", ");
  
  console.log(result);
  
  // Output:
  // "Apel, Jeruk, Mangga"
  ```
  ```js
  flat() → meratakan array bersarang (nested array).

  const numbers = [1, [2, 3], [4, [5, 6]]]; // Array bersarang.

  // Ratakan array sampai 1 level.
  const result = numbers.flat();
  
  console.log(result);
  
  // Output:
  // [1, 2, 3, 4, [5, 6]]
  ```
  ```js
  isArray() → mengecek apakah suatu variabel adalah array.

  const fruits = ["Apel", "Jeruk", "Mangga"]; // Array
  const text = "Hello JavaScript"; // String
  
  // Cek apakah fruits adalah array.
  const result1 = Array.isArray(fruits);
  
  // Cek apakah text adalah array.
  const result2 = Array.isArray(text);
  
  console.log(result1);
  console.log(result2);
  
  // Output:
  // true
  // false
  ```
  ```js
  toString() → mengubah array menjadi string.

  const fruits = ["Apel", "Jeruk", "Mangga"]; // Array awal.

  // Ubah array menjadi string (dipisahkan koma otomatis).
  const result = fruits.toString();
  
  console.log(result);
  
  // Output:
  // "Apel,Jeruk,Mangga"
  ```
    
  ---

- **Object** 📎
  <p align="justify">  
  object adalah struktur data yang menyimpan pasangan key dan value. Object bisa berisi property (data) dan method (fungsi), sehingga dapat merepresentasikan sesuatu yang kompleks seperti mobil, pengguna,
  atau produk. Cara membuat object secara umum ada 6 yaitu:
  </p>
  
  - **Object Literal** 📎
    <p align="justify">
      Digunakan untuk data sederhana & statis.
    </p>
    
    ```js
    const mobil = {
      brand: "Toyota",
      model: "Supra",
      tahun: 2024,
      warna: "Merah"
    };
    
    console.log(mobil.brand); // Toyota
    console.log(mobil["tahun"]); // Supra

  ---

  - **Keyword New Object()** 📎
    <p align="justify">
        Digunakan untuk gaya lama dan library / framework jadul.
    </p>
    
    ```js
    // bikin object kosong dulu
    const person = new Object();
    
    // tambahin property manual
    person.nama = "Dani";
    person.umur = 25;
    person.kota = "Jakarta";
    
    console.log(person);
    // { nama: 'Dani', umur: 25, kota: 'Jakarta' }

  ---
    
  - **Constructor Function** 📎
    <p align="justify">
        Digunakan untuk buat banyak object dengan struktur sama.
    </p>
    
    ```js
    // Constructor Function
    function Mahasiswa(nama, jurusan) {
      this.nama = nama;
      this.jurusan = jurusan;
      this.sapa = function() {
        return `Halo, saya ${this.nama} dari jurusan ${this.jurusan}`;
      };
    }
    
    // bikin object baru dari constructor
    const mhs1 = new Mahasiswa("Dani", "Informatika");
    const mhs2 = new Mahasiswa("Dina", "Desain");
    
    console.log(mhs1.sapa()); // Halo, saya Dani dari jurusan Informatika
    console.log(mhs2.sapa()); // Halo, saya Dina dari jurusan Desain

  ---

  - **Class (ES6)** 📎
    <p align="justify">
        Digunakan untuk buat banyak object dengan pola sama dan lebih modern.
    </p>
    
    ```js
    // Definisi Class
    class Mahasiswa {
      constructor(nama, jurusan) {
        this.nama = nama;
        this.jurusan = jurusan;
      }
    
      // Method di dalam class
      sapa() {
        return `Halo, saya ${this.nama} dari jurusan ${this.jurusan}`;
      }
    }
    
    // Membuat object dari class
    const mhs1 = new Mahasiswa("Dani", "Informatika");
    const mhs2 = new Mahasiswa("Dina", "Desain");
    
    console.log(mhs1.sapa()); // Halo, saya Dani dari jurusan Informatika
    console.log(mhs2.sapa()); // Halo, saya Dina dari jurusan Desain

  ---

  - **Object.create()** 📎
    <p align="justify">
        Digunakan untuk buat object dengan prototype custom tanpa class.
    </p>
    
    ```js
    const hewan = {
      bisaBergerak: true,
      makan() {
        return "Hewan sedang makan";
      }
    };
    
    // bikin object baru dengan prototype dari hewan
    const kucing = Object.create(hewan);
    kucing.nama = "Kitty";
    
    console.log(kucing.nama);          // Kitty
    console.log(kucing.bisaBergerak);  // true (warisan dari hewan)
    console.log(kucing.makan());       // Hewan sedang makan

  ---

  - **Factory Function** 📎
    <p align="justify">
        Digunakan untuk buat object tanpa ribet pakai new.
    </p>
    
    ```js
    // Factory Function
    function buatMahasiswa(nama, jurusan) {
      return {
        nama: nama,
        jurusan: jurusan,
        sapa() {
          return `Halo, saya ${this.nama} dari jurusan ${this.jurusan}`;
        }
      };
    }
    
    // bikin object baru dari factory function
    const mhs1 = buatMahasiswa("Dani", "Informatika");
    const mhs2 = buatMahasiswa("Dina", "Desain");
    
    console.log(mhs1.sapa()); // Halo, saya Dani dari jurusan Informatika
    console.log(mhs2.sapa()); // Halo, saya Dina dari jurusan Desain

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
   	+ → penjumlahan.
   	- → pengurangan.
   	* → perkalian.
   	/ → pembagian.
   	% → modulus (sisa bagi).
   	** → pangkat.
  ```

  ---

- **Operator Penugasan / Assignment** 📎
  <p align="justify">  
  Memberikan nilai ke variabel.
  </p>
  
  ```
   	= → assignment dasar.
   	+= → tambah lalu assign.
   	-= → kurang lalu assign.
   	*= → kali lalu assign.
   	/= → bagi lalu assign.
   	%= → sisah bagi lalu assign.
  ```

  ---

- **Operator Perbandingan / Comparison** 📎
  <p align="justify">  
  Membandingkan dua nilai yang hasil nya Boolean true atau false.
  </p>
  
  ```
   	== → dua sama dengan (longgar, cek nilai saja).
   	=== → tiga sama dengan (ketat, cek nilai & tipe data).
   	!= → tidak satu sama dengan (longgar, cek nilai saja).
   	!== → tidak dua sama dengan (ketat, cek nilai & tipe data).
   	> → lebih besar.
   	< → lebih kecil.
   	>= → lebih besar atau sama.
   	<= → lebih kecil atau sama.
  ```

  ---

- **Operator Logika** 📎
  <p align="justify">  
  Dipakai untuk operasi boolean.
  </p>
  
  ```
   	&& → AND (kedua nya harus true).
   	|| → OR (salah satunya nya boleh true/false).
   	! → NOT (membalikan nilai true - false atau false - true).
  ```

  ---

- **Operator String** 📎
  <p align="justify">  
  Dipakai untuk menggabungkan string atau tuisan dan angka.
  </p>
  
  ```
   	+
   	+=
  ```

  ---

- **Operator Increment / Decrement** 📎
  <p align="justify">  
  Dipakai untuk melakukan tambah atau kurang secara singkat.
  </p>
  
  ```
   	++ → tambah 1.
   	-- → kurang 1.
  ```

  ---

- **Unary Operator / typeof** 📎
  <p align="justify">  
  Operator yang bekerja pada satu operand saja.
  </p>
  
  ```
   	+x → mengubah ke number.
   	-x → negasi nilai.
   	!x → logical NOT.
   	typeof x → cek tipe data.
   	delete obj.prop → hapus properti.
  ```

  ---

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
  
---
   
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

---
   
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
  
---
 
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

---
   
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

---
  
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

---
  
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
