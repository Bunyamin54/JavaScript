// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **");

//!Declaration  (Fonksiyonun tanimlanmasi.)

function yazdirMerhaba() {
  //   alert("Merhaba FS14");
  console.log("Merhaba FS14");
}
yazdirMerhaba(); //!invoke call
yazdirMerhaba(); //!invoke call
yazdirMerhaba(); //!invoke call

//*  ornek  parametre
//* js de camelCase kullanilir.
//! argument veya parameter listesi parameterin bir siniri yok.cok uzun olmasi kullanisligini azaltir fonksiyonun.
function yazdirParametre(message, name = "cohort14") {
  console.log(message, name);
}

yazdirParametre("Hei", "FS15");
yazdirParametre("Salut", "FS16");
yazdirParametre("Kalimera", "FS17");
yazdirParametre("Selam");
yazdirParametre("Hei Hei");

//*ornek2

function calculate(name, yob) {
  const age = 2023 - yob;
  console.log(`${name} is ${age} years old`);
  return age;

  //! hersey btince return yapilir. return break gibi davranir
  //* return alt programdan ana programa paket gonderiyoruz.
  //? new Date (). getFullYear()
}

console.log(calculate("Ahmet", 1990));
calculate("Suleyman", 1980);
//! new Date - sistem tarihi ve saatini verir.

//* ornek 3

function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

const result1 = add(3, 5);
const result2 = add(5, 9);

console.log(result1, result2);

//? Console'dan girilen bir sayinin tek veya cift olddgunu
//? hesaplayan ve sonucu ana programa donduren kodu fonksiyonlar
//? ile yaziniz.

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}
//? Alternatif olarak
function isEvenOrOdd(num) {
  let result;
  if (num % 2 === 0) {
    result = "EVEN";
  } else {
    result = "ODD";
  }
  return result;
}

//? Alternatif olarak
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "EVEN" : "ODD";
}

const num = prompt("Please enter a number:");
console.log(`${num} is ${isEvenOrOdd(num)}`);
