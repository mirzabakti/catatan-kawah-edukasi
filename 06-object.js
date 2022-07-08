// DATA TYPE REFERENCE
// What is Object?
// What is differences between array and object?

// Array
// >> Prural >> [] >> index: value >> Single Type >> Sequence
// Object
// >> Singular >> {} >> key: value >> Multiple Type >> Un-Sequence

const books = ["science", "sociology", "math"];
//                0           1           2

const book = {
  name: "science", //string
  weight: 400, //number
  isNew: false, //boolean
  contents: ["gravity", "relativity"], //array
  author: {
    name: "Albert Einstein",
    year: 1945,
  }, // object
  borrow: (name) => console.log("Is Borrowed by " + name), // function
};

// book.borrow('Mukti');

// Call Array (index type number)
// console.log(books[0], books[1], books[2]);

// Call Object (index type string)
// console.log(book['isNew'], book['author']);

// The other way to call object
// console.log(book.author.year, book.contents[1]);

// const key = 'name';
// console.log(book[key]);

// How to reassign in object
// book.name = 'Scientific';
// book.contents.push('solar system');
// book.author.isDead = true;

// console.log(book);

// is Object same with array?
// const newBook = book;
// book.name = 'Scientific';
// newBook.name = 'Scientific';
// console.log(book, 'BOOK');
// console.log(newBook, 'NEW BOOK');

// How to copy object?
// 1. Looping
// 2. Destructuring
// const newBook = { ...book };
// book.name = 'Scientific';
// newBook.name = 'Scientific';

// console.log(book, 'BOOK');
// console.log(newBook, 'NEW BOOK');

// Additional
// 1. Can we change the key?? // NO
// Key >> (Added, Deleted)

// How to delete key?
// delete books.isNew;
// console.log(book);

// 2. can we convert the value??
// book.weight += book.weight * 0.1;
// console.log(book);

// 3. Object at function
// function reAssignObject(obj, key, value) {
//   obj[key] = value;
// person['age'] = 21
//   return obj;
// }

// const person = {
//   name: 'Danu',
//   age: 20,
// };

// console.log(reAssignObject(person, 'age', 21));

// 4. Destructuring Mode
// Array
const laptops = ["asus", "mac", "lenovo"];

// Basic
// const laptop1 = laptops[0];
// const laptop2 = laptops[1];
// const laptop3 = laptops[2];
// console.log(laptop1, laptop2, laptop3);

// Destructuring
const [laptop1, laptop2, laptop3] = laptops;
// console.log(laptop1, laptop2, laptop3);

// Object
const laptop = {
  merk: "lenovo",
  ram: 16,
  price: 12000000,
  isNew: true,
};

// Basic
// const merk = laptop.merk;
// const price = laptop.price;
// console.log(merk, price);

// Destructuring
// const { isNew, ram } = laptop;
// console.log(isNew, ram);
// Can we loop a object? >> Yes, we can
const person = {
  name: "Mukti",
  age: 24,
  isGraduate: true,
};

person.isMarried = false;
// console.log(person);

for (let key in person) {
  // console.log(key, 'KEY');
  // console.log(person[key], 'VALUE');
}

// Is important to loop a object? >> No, it is

// Story telling
const { name, age, isGraduate } = person;
// console.log(Hello ${name} with ${age} years old.);

// Array and Object
// 1. Get All Key
const allKey = Object.keys(person);
// console.log(allKey);
// 2. Get All Value
const allValue = Object.values(person);
// console.log(allValue);
// 3. Get Both Key and Value
const allEntry = Object.entries(person);
// console.log(allEntry);

// Build-in Function
// function? ()
// .push() .pop() .unshift() .shift()
// .toSting() .toUpperCase() .toLowerCase()
// Number() String() Boolean()
// isNaN()

// Not Build-in function
// typeof
// length

// Other (Object)
// Object Math console
// ARRAY OF OBJECT
const people = [
  {
    name: "Mukti",
    age: 24,
    isMarried: false,
  },
  {
    name: "Aji",
    age: 26,
    isMarried: true,
  },
  {
    name: "Guno",
    age: 23,
    isMarried: true,
  },
];

// push pop unshift shift
people.push({
  name: "Rony",
  age: 28,
  isMarried: false,
});
// console.log(people);

// Array Of Object >> JSON
// Array  >> Data
// Object >> Detail
for (let i = 0; i < people.length; i++) {
  const { name, age, isMarried } = people[i];

  // console.log(
  //   Hi ${name} with ${age} years old and was ${isMarried ? '' : 'not'} married
  // );
}

// Sorting
function sorting(arrays, key, sortBy) {
  const Arr = [...arrays];

  for (let i = 1; i < Arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sortBy === "asc") {
        if (Arr[i][key] < Arr[j][key]) {
          let x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }
      } else if (sortBy === "desc") {
        if (Arr[i][key] > Arr[j][key]) {
          let x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }
      }
    }
  }

  return Arr;
}

function filtering(arr, key) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase().includes(key) && arr[i].age < 25) {
      res.push(arr[i]);
    }
  }

  return res;
}

// console.log(sorting(filtering(people, 'o'), 'isMarried'));
console.log(sorting(filtering(people, "o"), "name", "asc"));
// console.log(people);

// function sorting(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[i] < arr[j]) {
//         let x = arr[i];
//         arr[i] = arr[j];
//         arr[j] = x;
//       }
//     }
//   }

//   return arr;
// }

let num = [1, 7, 2, 8, 3, 4, 5, 0, 9];
//  i == 1
// 7 < 1 // No
// [1, 7, 2, 8, 3, 4, 5, 0, 9]

// i == 2
// 2 < 1 // No
// 2 < 7 // Yes >> [1, 2, 7, 8, 3, 4, 5, 0, 9]
// [1, 2, 7, 8, 3, 4, 5, 0, 9]

// i == 3
// 8 < 1 // No
// 8 < 2 // No
// 8 < 7 // No
// [1, 2, 7, 8, 3, 4, 5, 0, 9]

// i == 4
// 3 < 1 // No
// 3 < 2 // No
// 3 < 7 // Yes >> [1, 2, 3, 8, 7, 4, 5, 0, 9]
// 7 < 8 // Yes >> [1, 2, 3, 7, 8, 4, 5, 0, 9]
// [1, 2, 3, 7, 8, 4, 5, 0, 9]

// Clean Code >> DRY (Don't Repeat Yourself)
