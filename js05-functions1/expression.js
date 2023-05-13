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
