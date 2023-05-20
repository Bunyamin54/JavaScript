// console.log("Hello World");

// const arr = [100, "CV", false];

// console.log(arr);

// const colors = ["Red", "Green", "Blue"];
// console.log(colors[0]);
// console.log(colors[colors.length - 1]);  //!son eleman
// console.log(colors[colors.length - 2]); //* sondan ikinciye ulasim
// console.log(colors[-1]); // ! undefined

// //*Arrays is ARRay
// const colors = ["Red", "Green", "Blue"];
// console.log(typeof colors);

// console.log(Array.isArray(colors)); //*true
// console.log(colors instanceof Array); //* true

// const variables = "1";
// console.log(Array.isArray(1));
// //?String immutable - degistirilemez
// let str = "Brown";
// console.log(str[0]);
// str[0] = "b";
// console.log(str); //* imuttubale oldugu icin kale almadi

// //* Array ile mutable yapabilir degistirebilirz
// const colors = ["Red", "Green", "Yellow"];
// colors[1] = "black";
// console.log(colors);
// colors[3] = "White";
// console.log(colors);

// let c = "Pink";
// colors[4] = c;
// // console.log(colors);
// //! istenmeyen yontem koseli kullnmak burda ekleme cikarma islemlerini methodlar ile yapmak onemlidir.
// // const colors = ["Red", "Green", "Yellow"];
// // colors[6] = 2;
// // console.log(colors.length);
// // console.log(colors[3]);

// // colors[100] = "pink";
// // console.log(colors);
// //* primitivler
// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);
// a = 6;
// console.log(b);

//! non-primitivler

// let arr1 = [1, 2, "three", false];
// const arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// arr1[0] = 0;
// console.log(arr1);
// console.log(arr2);

// const c = [];
// console.log(c);
// console.log(Boolean(c));

// const d = [];
// console.log(c == d); //* false cunku referans farkli

// console.log(arr1 == arr2); //? true cunku adresler ayni

// arr1 = ["four"];

// arr2 = ["four"];

//* Array methods
// ! slice

// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];

// const cls = colors.slice();

// console.log(colors);
// console.log(cls);

// colors[0] = "black";
// console.log(colors);
// console.log(cls);

// console.log(colors.slice(2, 4)); //* blue , yellow
// console.log(colors.slice(-2));
// console.log(colors.slice(2));
// console.log(colors.slice(8)); //* limit disi
// console.log(colors.slice(-3, -1));

// //! push() metosu - dizinin sonuna yeni element ekler.

// const arr = ["red", "blue"];
// console.log(arr.length); //* burda uzunluk 2

// let c = "White";
// arr.push("orange", 2023, c); //! yeni rengi ekledi.

// console.log(arr.length); // ? lengt ozelligi uzunlugu bize verir.
// arr.push(2023); //* bu sekilde de olur
// console.log(arr);

// const car = ["Audi", "Bmw"];

// const car2 = ["Ford", "Tesla"];

// car.push(car2);
// car.push(...car2);

// console.log(car[2][1]); //* birden fazla ic ice methodlar

// //? pop() methodu  - icersindeki elemani siler sildigini dondurur.

// const car = ["Audi", "Bmw"];

// console.log(car.pop());

// const silinen = car.pop();
// console.log(silinen);

// console.log(car.pop());

//? unsshift() method ekleme methodu ilk siraya ekler son uzunlugu dondurur

// const car = ["Audi", "Bmw"];

// car.unshift("ford", "tesla"); //! yeni eklenen arrayi ilk baslangic satira ekler. uzunluguda goruruz.
// console.log(car);

// const colors = ["green", "blue"];

// console.log(colors.unshift("yellow", "purpel"));

// console.log(colors);

// //?shift() methodu sadece basdakini siler
// const colors = ["green", "blue"];
// console.log(colors.shift()); //* ilk elemani siler sildigi degeri dondurur.
// console.log(colors);

// *splice() methodu   ekleme-silme-degistirme yapabiliyoruz.

// const colors = ["Red", "Green", "Blue", "Yellow", "Brown"];

// console.log(colors.splice(2, 1)); //*2. indexe git 1 eleman sil
// console.log(colors); //* iki parametre alir
// console.log(colors.splice(2));
// console.log(colors);

// //*element ekleme

// console.log(colors.splice(2, 0, "white", "pink")); //* 2. index git sifir 0 eleman sil white ekle. silmedigi icin bos array doner sonuc

// console.log(colors);

// //* element degistirme
// console.log(colors.splice(3, 2, "black", "pink")); //* 3 e git 2 eleman sil yerine yeni elemanlari ekle silinenler array olarak doner
// console.log(colors);

// const arr1 = ["red", "blue", "purple"];
// const removed = arr1.splice(0, 0, "yellow");
// console.log(arr1);
// console.log(removed);

//! concat() method  - ilave etme method
// let color1 = ["red", "green"];
// const color2 = ["blue", "orange"];
// const color3 = [10, true];
// const joinedArray = color1.concat(color2, color3);

// const destr = color1.push(...color2, ...color3); //! ... nokta kullanilarak eklenir toplama islemi gibi dusunulebilir.
// console.log(destr);
// console.log(color1);

// color1 = color1.concat(color2, "black", 2);
// console.log(color1);

// ! indexOf() and lastIndexOf()

//* reverse() method // orginal array i degistirir

//* join method // stringleri  orjinal array bozulmaz. array i stringe cevirir.

// const arr = ["C", "l", "a", "r", "u", "s", "w", "a", "y"];

// console.log(arr.join()); // C,l,a,r,u,s,w,a,y

// console.log(arr.join("")); // Clarusway

// console.log(arr.join("-")); // C-l-a-r-u-s-w-a-y
// console.log(arr);

//! sort() method onemli stringe gore calsiyor.
//* a-b veya b-a formulunu koyarsak ona gore siralar.

//* includes() methods  var mi yok mu ?

//? Nested Arrays
const arr = [1, true, [3, "Red", 5], [6, 7, 8]];

console.log(arr.length);
console.log(arr[0]); // 1

console.log(arr[2]); // [3, 'Red', 5]

console.log(arr[2][0]); // 3
console.log(arr[2][1]); // Red
console.log(arr[2][2]); // 5

console.log(arr[3]); // [ 6, 7, 8 ]
