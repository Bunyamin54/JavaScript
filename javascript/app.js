// confirm("emin misiniz");
// // alert kodu uygulamayi bloklar.

// console.warn("Bu bir uyaridir.");

// karar = confirm("Emin msiniz E/H");
// console.log(karar);

// console.warn("Bu bir uyarıdir");

// console.error("Eyvah hata olustu..");

//? ====================== Const ==============

console.log("APP JS RUNNING");

const pi = 3.14;
console.log(pi);
console.log(typeof pi);

const sayi1 = "3";
console.log(typeof sayi1);

//! caught SyntaxError: Missing initializer in const declaration (at app.js:27:7)
// const deneme; //? const ile tanimlanan degiskene baslangic degeri verilmelidir.
// console.log(deneme)

//! Uncaught TypeError: Assignment to constant variable.
const number1 = 5;
number1 = 7; //? const ile tanimlanan degiskene sonradan atama yapilamaz
