// FOR & WHILE

// WHILE

// let i = 0
// WHILE ( i < 10 ) >> CONDITIONAL
// MAKA AKAN LOOPING TERUS
// i++ // i = 0 ++ 1 ++ 2 ++ 3

// let angka = 0

// while (angka < 10) { // KETIKA ANGKANYA JADI 10 WHILE AKAN MENJADI FALSE
//   console.log(Hai aku adalah angka ${angka});
//   angka++
// }

// FOR

// for (1; 2; 3) >> 
// 1. NILAI AWAL
// 2. CONDITION
// 3. INCREMENT

// for (let i = 0; i < 10; i++) 
// MELAKUKAN LOOPING 

// for (let angka = 0; angka < 10; angka++) {
//   console.log(Hai aku adalah angka ${angka});
// }

// INCREMENT ++
// DECREMENT --

// let i = 10
// while (i > 0) { // TRUE
//   console.log(i);
//   i--
// }
// console.log(i); // FALSE

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// INDEX KE []

// let binatang = "jerapah";

// console.log(binatang[0]);
// console.log(binatang[1]);
// console.log(binatang[2]);
// console.log(binatang[3]);
// console.log(binatang[4]);
// console.log(binatang[5]);
// console.log(binatang[6]);

// for (let i = binatang.length - 1; i >= 0; --i) {
//   console.log(binatang[i]);
// }`
// i++ post-increment
// ++i pre-increment

let a1;
let i1 = 1;
a1 = i1++;
console.log(a1)
console.log(i1)

let a2;
let i2 = 1;
a2 = ++i2;
console.log(a2);
console.log(i2);

//post-increment: a = i++ itu sama seperti a = i; i = i + 1;
//pre-increment: a = ++i itu sama seperti i = 1 + i; a = i;
/*
Pada post-increment, variabel a akan mengambil nilai i lalu variabel i ditambah 1. Sedangkan pada pre-increment variabel i akan ditambah satu terlebihdahulu, kemudian diisi ke variabel a
*/

/*
KESIMPULAN
Jadi posisi simbol ++ menentukan kapan nilai variabel akan ditambah.

Bila ditulis di depan, maka akan ditambah dulu. Sedangkan bila ditulis di belakang akan ditambah belakangan.
*/

// FOR LOOP 2

// CARA PENAMBAHAN DI STRING

// const a = "jer"
// const b = "a"
// const c = "pah"

// console.log(a+b+c+" "+a+b+c);

// FOR 
// FOR ( 1, 2, 3 )
// 1. NILAI AWAL ( let i = 0 )
// 2. CONDITION ( TRUE / FALSE )
// 3. INCREMENT ( ++ / --)

// for (let i = 0; i < data.length; i++) {
// if (data == ?) {
// 
// } else {
//  
// }
// }

// // CASE 1 
// // MENGHITUNG HURUF
// const binatang = "jerapah"
// const huruf = "a"
// let detekHuruf = 0

// // BINATANG.LENGTH = 7
// for (let i = 0; i < binatang.length; i++) {
//   if (binatang[i] == huruf) {
//     console.log('HURUF TERDETEKSI');
//     detekHuruf++ // detekHuruf = detekHuruf + 1
//   } else {
//     console.log('HURUF TIDAK TERDETEKSI')
//   }
// }

// console.log(detekHuruf);

// // CASE 2
// // MENGGANTI HURUF VOKAL

// // +=  ++  angka = angka + 1

// const kata = "JAVASCRIPT IS SO COOOOOOOOOL" // "h$ll$ w$rld"
// const kataPengganti = "$"
// let hasil = ""

// for (let i = 0; i < kata.length; i++) {
//   if (kata[i] == 'a'  kata[i] == 'i'  kata[i] == 'u'  kata[i] == 'e'  kata[i] == 'o' ||
//       kata[i] == 'A'  kata[i] == 'I'  kata[i] == 'U'  kata[i] == 'E'  kata[i] == 'O'
//   ) {
//     hasil += kataPengganti
//   } else {
//     hasil += kata[i]
//   }
// }

// console.log(hasil);

// CASE 3
// DETECT ANGKA GANJIL ATAU GENAP ATAU ERROR

// const angka = "56aq"
// let ganjil = 0
// let genap = 0
// let hurufVokal = 0
// let hurufNonVokal = 0

// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] % 2 == 1) {
//     ganjil ++
//   } else if (angka[i] % 2 == 0) {
//     genap ++
//   } else {
//     if (
//       angka[i] == 'a'  angka[i] == 'i'  angka[i] == 'u'  angka[i] == 'e'  angka[i] == 'o' ||
//       angka[i] == 'A'  angka[i] == 'I'  angka[i] == 'U'  angka[i] == 'E'  angka[i] == 'O') {
//         hurufVokal ++
//         } else {
//         hurufNonVokal ++
//         }
//   }
// }

// console.log(`ANGKA GANJIL ADA ${ganjil}, ANGKA GENAP ADA ${genap}, HURUF VOKAL = ${hurufVokal}, HURUF NON VOKAL = ${hurufNonVokal}`);

//? LOOPING
//? Perulangan suatu block/statement
//* Perulangan proses dari sebuah code

// SYNTAX FOR (1, 2, 3)
// 1. DEFAULT VALUE (Nilai Awal)
// 2. CONDITION (Kondisi dan harus bernilai true agar dapat dijalankan)
// 3. INCREMENT/DECREMENT (Naik/Turun)

//TODO: NESTED LOOP

let alfabeth = 'ABCDE';

// 1. Semua Kamus
// res >> AA, AB, AC, AD, AE, BA, BB, BC, dst
// for (let i = 0; i < alfabeth.length; i++) {
//   for (let j = 0; j < alfabeth.length; j++) {
//     console.log(alfabeth[i] + alfabeth[j]);
//   }
// }

// 2. Tidak boleh ada huruf yang sama
// res >> tidak boleh (AA, BB, CC, DD, EE)
// for (let i = 0; i < alfabeth.length; i++) {
//   for (let j = 0; j < alfabeth.length; j++) {
//     if (alfabeth[i] != alfabeth[j]) {
//       console.log(alfabeth[i] + alfabeth[j]);
//     }
//   }
// }

// 3. Tidak ada huruf yang sama atau sebelumnya
// res >> AB, AC, AD, AE, BC, BD, BE, CD, CE, DE
// for (let i = 0; i < alfabeth.length; i++) {
//   for (let j = i + 1; j < alfabeth.length; j++) {
//     console.log(alfabeth[i] + alfabeth[j]);
//   }
// }

const word = 'abc';
// abcd >> aaaabbbbccccdddd
// abc >> aaabbbccc
// ab >> aabb
// a >> a

// const num = 123;
// mendapatkan nilai 123 + (1 + 2 + 3) = 123 + 6 = 129

// 1. Convert number menjadi string
// >> .toString()
// >> String
// >> concat ""

// 2. Convert string to number
// >> Number
// >> +(variable)
// >> parseInt / parseFloat

const str1 = num + '';
let jawaban = num;

for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);

  jawaban += +str1[i];
}
console.log(jawaban, '<<<<<< INI JAWABANNYA');
// Before coding => Buat analogi code

// kawa3h >> kawaaah
// a3 ==> me-looping a sebanyak 3

// javasc0ript >> javasript
// c0 ==> me-looping c sebanyak 0
// " 4" ==> me-looping " " sebanyak 4
// "4" ==> melooping "" sebanyak 4

// Selain itu tampilkan string
// let sentence = 'javasc0ript'; // String/
// let sentence = 'kawa3h edu3kasi'; // String
// let sentence = 'i lo5ve co1ding'; // String

// // 4. Variable pembantu
// let temp = '';

for (let i = 0; i < sentence.length; i++) {
  // 1.Log semua char
  // console.log(sentence[i]);

  // 2.mengeliminasi kombinasi huruf dan angka
  // detect huruf dan spasi
  const detectSpace = sentence[i] == ' ';
  const detectAlfabeth = +sentence[i];
  const detectSpaceAndAlfabeth = detectSpace || !detectAlfabeth;
  // detect angka di i
  const detectNum = +sentence[i] || sentence[i] == '0';
  // yang mau di deteksi adalah i + 1
  const detectNumAfter = +sentence[i + 1] || sentence[i + 1] == '0';

  // Jika sentence[i] string dan sentence[i+1] number
  if (detectSpaceAndAlfabeth && detectNumAfter) {
    // 3. Karena huruf dan angka maka kita looping
    for (let j = 0; j < +sentence[i + 1]; j++) {
      temp += sentence[i];
    }
    // Jika sentence[i] string dan sentence[i+1] bukan number
  } else if (detectSpaceAndAlfabeth && !detectNum) {
    temp += sentence[i];
  }
}

// log temp
console.log(temp, '<<<<<<');
// Your Code Here
let num = 2022; // Number

// 5. Variable Jawaban
let answer;

// 1. Buat infinite looping dan kodisi berhentinya
// 2. Buan kondisi seperti test case
// 3. i == num + 1 karena exlude bilangan di variablenya
for (let i = num + 1; i >= num; i++) {
  // console.log(i);
  // 4. Cek palindromenya
  // 4.1. Ubah number menjadi string
  const str = i.toString();
  let temp = '';

  // Reverse Looping
  for (let j = str.length - 1; j >= 0; j--) {
    temp += str[j];
  }

  // Break ketika string == reverse stringnya
  if (str == temp) {
    answer = i;
    break;
  }
}

console.log(answer);
let sentence = '    i     have a dream '; // String
let counter = 0;
let temp = '';
for (let i = 0; i < sentence.length; i++) {
  // Jika char bukan spasi
  if (sentence[i] != ' ') {
    temp += sentence[i];
  }

  // Jika char spasi atau di looping terakhir
  if (sentence[i] == ' ' || i == sentence.length - 1) {
    // cek apakah temp berisi sebuah kata
    if (temp.length) {
      console.log(temp);
      counter++;
      temp = '';
    }
  }
}

console.log(counter, '<<<<');