// contoh mendetect bilangan ganjil genap
let angka = 4;
if (angka % 2 == 0) {
  console.log(`${angka} merupakan bilangan genap`);
} else if (angka % 2 == 1) {
  console.log(`${angka} merupakan bilangan ganjil`);
} else {
  console.log(`?`);
}

// Intermediate IF and Nested IF //

// console.log('selamat malam semuanya');

// let a = "ayam"

// console.log(a);

// if (a == "ayam") {
//   a = "binatang"
// }

// console.log(`seekor ${a}`);

// // CASE 1

// let a = 5
// let b = 10
// let hasil

// if ((a + b) % 2 == 0) {
//   hasil = "genap"
// } else if ((a + b) % 2 == 1) {
//   hasil = "ganjil"
// } else {
//   hasil = "tidak valid"
// }

// console.log(hasil);

// // CASE 2

// let gender = 5;
// let errorMessage = "gender tidak valid"
// let myName

// if (gender == "male") {
//   console.log("nama saya adalah tono");
// } else if (gender == "female") {
//   console.log("nama saya adalah tina");
// } else {
//   console.log(errorMessage);
// }

// FLAGGING

// // NESTED IF //

// let binatang = "ayam";
// let makanan = "biji - bijian";

// if (binatang == "ayam" && makanan == "biji - bijian") {
//   if (makanan == "biji - bijian") {
//     console.log(`binatang adalah ${binatang}, dan makanannya adalah ${makanan}`);
//   }
// }

// // CASE 1 //

// let umur = 70
// let tahap

// if (umur <= 18) {
//   if (umur <= 10) {
//     tahap = "anak - anak"
//   } else {
//     tahap = "remaja"
//   }
// } else {
//   if (umur >= 65) {
//     tahap = "lansia"
//   } else {
//     tahap = "dewasa"
//   }
// }

// console.log(tahap);

// CASE 2

// let kodebaju = 3 // 1 / 2 / 3
// let merkbaju = "PRADA" // IMP / PRADA / GUCCI
// let qty = 5
// let harga

// if (kodebaju == 1) {
//   if (merkbaju == "IMP") {
//     harga = 5000
//   } else if (merkbaju == "PRADA") {
//     harga = 10000
//   } else if (merkbaju == "GUCCI") {
//     harga = 20000
//   } else {
//     harga = "HARGA TIDAK VALID"
//   }
// } else if (kodebaju == 2) {
//   if (merkbaju == "IMP") {
//     harga = 6000
//   } else if (merkbaju == "PRADA") {
//     harga = 12000
//   } else if (merkbaju == "GUCCI") {
//     harga = 24000
//   } else {
//     harga = "HARGA TIDAK VALID"
//   }
// } else if (kodebaju == 3) {
//   if (merkbaju == "IMP") {
//     harga = 7500
//   } else if (merkbaju == "PRADA") {
//     harga = 15000
//   } else if (merkbaju == "GUCCI") {
//     harga = 30000
//   } else {
//     harga = "HARGA TIDAK VALID"
//   }
// } else {
//   harga = "HARGA TIDAK VALID"
// }

// console.log(`anda memilih kode baju ${kodebaju} dengan merk ${merkbaju} sebanyak ${qty} dengan total harga Rp.${qty*harga}`);

// let kodebaju = 3 // 1 / 2 / 3
// let merkbaju = "PRADA" // IMP / PRADA / GUCCI
// let qty = 5
// let harga

// if (kodebaju == 1 && merkbaju == "IMP") {
//   harga = 5000
// } else if (kodebaju == 2 && merkbaju == "IMP") {
//   harga = 6000
// } else if (kodebaju == 3 && merkbaju == "IMP") {
//   harga = 7500
// } else if (kodebaju == 1 && merkbaju == "PRADA") {
//   harga = 10000
// } else if (kodebaju == 2 && merkbaju == "PRADA") {
//   harga = 12000
// } else if (kodebaju == 3 && merkbaju == "PRADA") {
//   harga = 15000
// } else if (kodebaju == 1 && merkbaju == "GUCCI") {
//   harga = 20000
// } else if (kodebaju == 2 && merkbaju == "GUCCI") {
//   harga = 24000
// } else if (kodebaju == 3 && merkbaju == "GUCCI") {
//   harga = 30000
// } else {
//   harga = "TIDAK VALID"
// }

// console.log(anda memilih kode baju ${kodebaju} dengan merk ${merkbaju} sebanyak ${qty} dengan total harga Rp.${qty*harga});

// TRULY && FALSY CONCEPT

// Boolean
let bool1 = true; // TRULY
let bool2 = false; // FALSY

// Number
let numb1 = 0; // FALSY => NaN
let numb2 = 9; // TRULY => Infinity

// String
let str1 = 'asdsadasd'; // TRULY
let str2 = ''; // FALSY

// undefined, null => FALSY

// Converting Value => !

if (!str2) {
  console.log('Code Akan Berjalan');
}
//TODO: TERNARY
/**
 *? SYNTAX IF
 * if (true condition) {
 *    action...
 * } else {
 *    action...
 * }
 *
 *? SYNTAX TERNARY
 * true condition ? action if true : action if false
 */

// Jika 1 kurang dari 2 maka tampilkan benar, jika tidak maka tampilkan salah

//* BASIC
// 1 > 2 ? console.log('benar') : console.log('salah');

//* eg. Nested Ternary
// 1 > 2
//   ? console.log('true 1')
//   : (2 > 3
//   ? console.log('true 2')
//   : console.log('false'));

//* eg2 Kinda Ternary
// let str = 'Mukti Aji Guno';

// 1 Simplify If Else Syntax
// str.length > 10 ? console.log('Terlalu Panjang') : console.log('OK');

// 2 Variable with ternary
// const answer = str.length > 10 ? 'Terlalu Panjang' : 'OK';
// console.log(answer);

// 3 Console with ternary
// console.log(str.length > 10 ? 'Terlalu Panjang' : 'OK');

// *eq3 One Value Ternary
//? What is difference of "undefined" and "null" ?

//* undefined => ada tapi tidak terdefinisikan
//* null => tidak ada

// let var1; // let var1 = undefined
// let var2 = null;

// 1 > 2 ? console.log('Benar') : null;
//TODO: SWITCH CASE
// Special condition

//* SYNTAX SWITCH CASE
/**
 * switch ( case ) {
 *    case [true case]:
 *      action
 *      break
 *    case [true case]:
 *      action
 *      break
 *    default (optional)
 *      action
 *      break
 * }
 */

let str = 'asdsadasd';

// In IF
if (str == 'Mukti') {
  console.log('yak benar');
} else {
  console.log('yak salah');
}

// IN Switch
switch (str) {
  case 'Mukti':
    console.log('yak benar');
    break;
  case 'Aji':
    console.log('yak benar');
    break;
  case 'Guno':
    console.log('yak benar');
    break;
  default:
    console.log('yak salah');
    break;
}