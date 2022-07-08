// TIPE ARRAY
// Array adalah variable non primitif ( string, boolean, number ), Array merupakah variable referensi / komposit yang pada dasarnya
// arraynya digunakan untuk menyimpan sekumpulan data2 primitif atau kita juga bisa menyimpan data referensi lainnya.

// KENAPA KITA HARUS MENGGUNAKAN ARRAY ?
// Array digunakan untuk mempermudah pengolahan data, sehingga kita gak perlu susah2 declare variable terus - terusan
// Jadi kita gak tesesat kalo misalkan kita lagi "BUNTU" nyari nama variablenya apa

// PERBEDAAN ARRAY DAN DATA PRIMITIF

// // DATA PRIMITIF
// const binatang1 = "Jerapah";
// const binatang2 = "Badak";
// const binatang3 = "Beruang";

// // ARRAY
// const sekumpulanBinatang = [ binatang1, binatang2, binatang3 ] // << DINAMAKAN SEBAGAI ARRAY
// console.log(sekumpulanBinatang);

// // CARA DECLARE LAINNYA DARI ARRAY
// const sekumpulanBinatang = [ "Jerapah", "Badak", "Beruang" ]
// console.log(sekumpulanBinatang);

// // DATA DI DALAM BISA BEDA BEDA ( number, boolean, string )
// const kumpulanAngkaDanNama = [ "Budi", 18, "Putri", 16, "Ririn", 20 ]
// console.log(kumpulanAngkaDanNama);



// CARA MEMANGGIL ARRAY

// const kata = ['N', 'E', 'N', 'E', 'K'];
// console.log(kata[4]);

// const sekumpulanAngka = [1, 2, 3, 4, 5]
// console.log(sekumpulanAngka[0]);
// console.log(sekumpulanAngka[4]);
// const sekumpulanMusim = ["Semi", "Panas", "Gugur", "Salju"]
// console.log(sekumpulanMusim[0][2]);
// console.log(sekumpulanMusim[3][2]);



// // CASE 1
// // AYAM
// const huruf = [ "AIUEO", "BCDFGHJKLMNPQRTVWXYZ"]
// console.log(huruf[0][0]+huruf[1][18]+huruf[0][0]+huruf[1][9]);

// // CASE 2
// const muridDanNilainya = [ "Putra", 80, "Budi", 50, "Adi", 100, "Gigi", 90 ]
// // BUAT CONSOLE LOG YANG MENAMPILKAN NAMA DAN NILAINYA ( AKAN ADA 3 CONSOLE LOG )
// // SELALU ADA NAMA DAN NILAI MURID, DAN PENEMPATANNYA TIDAK ACAK

// // console.log(muridDanNilainya[0], 'dan nilainya', muridDanNilainya[1]);
// // console.log(muridDanNilainya[2], 'dan nilainya', muridDanNilainya[3]);
// // console.log(muridDanNilainya[4], 'dan nilainya', muridDanNilainya[5]);

// for (let i = 0; i < muridDanNilainya.length; i+= 2) {
//   console.log(Nama siswa = ${muridDanNilainya[i]}, dan nilainya adalah = ${muridDanNilainya[i+1]});
// }

// // CASE 3

// const binatang = [ "Ayam", "Bebek", "Kelinci", "Kura kura" ]

// // BUAT CONSOLE LOG YANG MENAMPILKAN SETIAP BINATANG DAN JUMLAH HURUF VOKAL YANG BINATANG TERSEBUT MILIKI (FOR)

// for (let i = 0; i < binatang.length; i++) {
//   let jumlahHurufVokal = 0
//   for (let j = 0; j < binatang[i].length; j++) {
//     if (
//       binatang[i][j] == 'A' || binatang[i][j] == 'a'
//        binatang[i][j] == 'E'  binatang[i][j] == 'e'
//        binatang[i][j] == 'U'  binatang[i][j] == 'u'
//        binatang[i][j] == 'I'  binatang[i][j] == 'i'
//        binatang[i][j] == 'O'  binatang[i][j] == 'o'
//     ) {
//       jumlahHurufVokal++
//     }
//   }
//   console.log(Binatang ${binatang[i]} memiliki huruf vokal sebanyak ${jumlahHurufVokal} di dalamnya);
// }`

// Array Concept => Difference between data type reference and primitive?

console.log('qwerty' == 'qwerty'); // true
console.log([] == []); // false

// Naming variable in array (best practice)
// 1. using const
// 2. prural (jamak)
// 3. single type (satu jenis data type)

const animals = ['pig', 'dog', 'cat'];

// How to assign/reassingn
// 1. Direct Assign
animals[1] = 'duck';
animals[0] = 'pigeon';
animals[5] = 'dinosaur';
console.log(animals);

// 2. Methods
// a. Push
// b. Pop
// c. Unshift
// d. Shift

const queues = ['A', 'B', 'C', 'D'];
// Case 1: Ada seseorang yang datang dan ikut mengantre
// Kita dapat menggunakan method push (add latest entry)
queues.push('X', 'Y', 'Z');
console.log(queues, 'PUSH METHOD');

// Case 2: Ternyata karena terlalu lama si 'Z' memutuskan untuk pergi
// Kita dapat menggunakan method pop (delete latest entry)
queues.pop();
queues.pop();
queues.pop();
console.log(queues, 'POP METHOD');

// Case 3: Urutan pertama dipanggil
// Kita dapat menggunakan method shift (delete first entry)

queues.shift();
queues.shift();
queues.shift();
queues.shift();
console.log(queues, 'SHIFT METHOD');

// Case 4: Ada orang dengan prioritas khusus yang harus di dahulukan
// Kita dapat menggunakan method unshift (add first entry)

queues.unshift('P', 'R', 'S', 'T');
console.log(queues, 'UNSHIFT METHOD');

const laptops = ['asus', 'lenovo', 'mac', 'dell'];

// Build-in function Splice
// laptops.splice(2, 1);

// console.log(laptops);
const newLaptops = [];
for (let i = 0; i < laptops.length; i++) {
  console.log(laptops[i], i);
  if (i != 2) {
    newLaptops.push(laptops[i]);
  }
}
console.log(newLaptops);

console.log(alfabeths.push('X')); // return length
console.log(alfabeths.pop()); // return deleted entry
console.log(alfabeths.unshift('X')); // return length
console.log(alfabeths.shift()); // return deleted entry

// Hubungan string dengan array
// 1. Array => String
// .join(separator)
const alfabeths = ['A', 'B', 'C', 'D'];
console.log(alfabeths.join(''));

// 2. String => Array
// .split(separator)
// const str = 'abcdefg';
console.log(str.split('c'));

// NESTED ARRAY || ARRAY MULTIDIMENSIONAL

// eg.
const arrays = [
  ['snake', 'worm', 'eel'],
  ['chick', 'duck'],
  ['cow', 'sheep', 'pig'],
  ['crab'],
];

// How to call ?
console.log(arrays[0][2][2]);

// Can we use array's method in nested array?
arrays[2].push('horse');
arrays[0].unshift('fish');
arrays[1][1] = 'flamingo';
console.log(arrays);

// How to copy array?
// const arr1 = [1, 2, 3, 4, 5]; // saved in memory 1
const arr2 = []; // saved in memory 2

// 1. Looping
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i]);
}

arr2[0] = 0;

console.log('ARR 1 ==> ', arr1);
console.log('ARR 2 ==> ', arr2);

// 2. Desctructuring
// dilambangkan dengan ...
const arr1 = [1, 2, 3, 4, 5]; // saved in memory 1
const arr3 = [1, 2, 3, 4, 5]; // saved in memory 1
const arr2 = [...arr1, 9, ...arr3]; // saved in memory 2

arr2[4] = 8;

console.log('ARR 1 ==> ', arr1);
console.log('ARR 2 ==> ', arr2);
// What is differences between == and ===
const num = 1;
const str = '1';

// ==, value only
console.log(num == str);
// ===, value and type
console.log(num === 1);