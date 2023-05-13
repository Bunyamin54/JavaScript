// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** EXPRESSION**");

//? Deklarasyon  once tanimlama sonra yazdirma faydalidir.

const yazdir = function (message) {
  console.log(message);
};

yazdir("Hallo FS14");

let oddEven = function (number) {
  return number % 2 === 0 ? "EVEN" : "ODD"; //* onemli bir kod
};

console.log(oddEven(24));
console.log(oddEven(23));

//* ARROW yontemi

const kareAl = (num) => num * num;

kareAl(4);
console.log("KARE:", kareAl(4));

const topla = (s1, s2) => s1 + s2;
console.log("TOPLA:", topla(4, 5));

//! birden fazla parameter parenteze () alinmali

//* x - prametre => arrow  - x*x govdesi  // Arrow funksjionlarin otomatik return ozelligi var

//*Arrow funksjunlar tek satirlik islevler icin daha elverisli.

const ciktiver = () => console.log("Merhaba");

ciktiver();

//! birden fazla satir da suslu{} kullanmak fayda var
//* suslu {} kullanildiginda otomatik return ozelligi kaybolur bizim retun yazmamiz gerekir
