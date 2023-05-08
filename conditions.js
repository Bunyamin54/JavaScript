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
  console.log("Uzgunuz maasiniza zam yapamiyoruz.");
}
