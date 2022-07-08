// Javascript => Functional Programming

// FUNCTION
// Berfungsi untuk menampung part dari sebuah logic

// SYNTAX
// function name(params) {
//   return
// }

// Note:
// 1. Params lebih akan dianggap tidak ada
// 2. Params kurang akan dianggap undefined

// CALL
// console.log(penjumlahan);
// console.log(penjumlahan());

function penjumlahan(num1 = 0, num2 = 0) {
    const sum = num1 + num2;
  
    return sum;
  }
  
  // Case 1: normal
  // console.log(penjumlahan(1, 2));
  
  // Case 2: more params
  // console.log(penjumlahan(1, 2, 3));
  
  // Case 3: Less params
  // console.log(penjumlahan(1));
  
  // Case 4: non params
  // console.log(penjumlahan(null, 1));
  
  // CASE:
  // params [1, 2, 3, 4, 5, 6, 7, 8] >>
  // [
  //    [1, 3, 5, 7],
  //    [2, 4, 6, 8]
  // ]
  
  // function oddEvenSorter(arr = []) {
  //   const oddArr = [];
  //   const evenArr = [];
  
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 == 0) {
  //       oddArr.push(arr[i]);
  //     }
  
  //     if (arr[i] % 2 == 1) {
  //       evenArr.push(arr[i]);
  //     }
  //   }
  
  //   return [evenArr, oddArr];
  // }
  
  // console.log(oddEvenSorter([1, 2, 3, 4, 5, 6, 7, 8]));
  
  // function oddEvenDetector(num) {
  //   if (num % 2 == 0) {
  //     return 'ODD NUMBER';
  //   }
  
  //   if (num % 2 == 1) {
  //     return 'EVEN NUMBER';
  //   }
  // }
  // console.log(oddEvenDetector(12321421421412));
  
  // ARROW FUNCTION
  // const oddEvenDetector = (num) => {
  //   if (num % 2 == 0) {
  //     return 'ODD NUMBER';
  //   }
  
  //   if (num % 2 == 1) {
  //     return 'EVEN NUMBER';
  //   }
  // };
  // console.log(oddEvenDetector(12321421421412));
  
  // const booleanCheck = (params) => (Boolean(params) ? true : false);
  
  // console.log(booleanCheck(NaN));
  
  // let x = myFunction(4, 3);
  // console.log(x);
  
  // function myFunction(a, b) {
  //   return a * b;
  // }