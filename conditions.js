// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

console.log("****** CONDITIONS *******");

const calismaSuresi = prompt("Calisma suresi");
let maas = prompt("Maasinizi giriniz");

if (calismaSuresi >= 10) {
  maas = maas * 1.1;
  console.log("Zamli maasiniz", maas);
} else {
  S;
  console.log("Uzgunuz maasiniza zam yapamiyoruz.", maas);
}
console.log("Gule gule");

//? cok kosullu ornek

const grade = prompt("Please enter your grade:");
let result = ""

if (grade < 40) {
  result = "FF";
} else if (grade <= 50) {
  result = "DD";
} else if (grade <= 65) {
  result = "CC";
} else if =(grade <=89) {
    result ="BB"
} else {
    result = "AA"
}
