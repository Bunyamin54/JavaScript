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
// console.log(colors);
//! istenmeyen yontem koseli kullnmak burda ekleme cikarma islemlerini methodlar ile yapmak onemlidir.
const colors = ["Red", "Green", "Yellow"];
colors[6] = 2;
console.log(colors.length);
console.log(colors[3]);

colors[100] = "pink";
console.log(colors);
