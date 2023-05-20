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
