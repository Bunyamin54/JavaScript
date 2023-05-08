// // * ===============================================
// // *                  KARAR YAPILARI
// // * ===============================================

// console.log("****** CONDITIONS *******");

// // const calismaSuresi = prompt("Calisma süresi:")
// // let maas = prompt("Maasini giriniz:")

// //? 2 kosullu
// // if (calismaSuresi >= 10) {
// //   // maas = Math.trunc(maas * 1.1)
// //   maas = Math.round(maas * 1.1)
// //   console.log("Zamli maasiniz:", maas)
// //   console.log(`Zamli maasiniz: ${maas}`)
// // } else {
// //   console.log("Uzgunuz maasinaza zam yapamayirouz", maas)
// // }
// // console.log("Güle güle")

// //? Tek kosullu
// // if (calismaSuresi >= 10) {
// //   maas = Math.round(maas * 1.1)
// //   console.log(`Zamli maasiniz: ${maas}`)
// // }
// // console.log("Güle güle")

// //? Cok kosullu
// const grade = prompt("Please enter your grade:");

// let result = null;
// // let result = ""
// if (grade < 0) {
//   console.log("Grade can not be smaller than zero");
// } else if (grade < 40) {
//   result = "FF";
// } else if (grade <= 50) {
//   result = "DD";
// } else if (grade <= 65) {
//   result = "CC";
// } else if (grade <= 89) {
//   result = "BB";
// } else if (grade <= 100) {
//   result = "AA";
// } else {
//   console.log("Grade can not be bigger than 100");
// }

// if (result != null) {
//   console.log(`Your score:${result}`);
// }
// //? Kısa yol
// if (result) {
//   console.log(`Your score:${result}`);
// }

// //? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
// //? yazdiriniz.

// const n1 = +prompt("Num1:");
// const n2 = +prompt("Num2:");
// const n3 = +prompt("Num3:");

// //* 1.YONTEM
// //? nested if
// // if (n1 > n2) {
// //   if (n1 > n3) {
// //     console.log("Biggest:", n1)
// //   }
// // }

// //? kosullarin logical operatorler yardimiyla birleştirilmesi
// if (n1 >= n2 && n1 >= n3) {
//   console.log("Biggest:", n1);
// } else if (n2 > n1 && n2 > n3) {
//   console.log("Biggest:", n2);
// } else if (n3 > n1 && n3 > n2) {
//   console.log("Biggest:", n3);
// }

// //* 2.YONTEM
// let biggest = n1;

// if (n2 >= biggest) {
//   biggest = n2;
// }
// if (n3 >= biggest) {
// //   biggest = n3;
// // }
// // console.log(`${biggest} is biggest`);

// //? Ternary   tek satirlik islemler icin tercih ediliyor.

// const grade1 = prompt("Please enter your grade:");

// grade1 >= 50 ? console.log("Succeed") : console.log("Failed");
// const score = grade1 >= 50 ? "Passed" : "Failed"; //? ternary sytac bu sekilde yanlis olanda yazilmasi gerekir.

//? kosul - sonra ? sonra durum 1 -sonra durum 2
//? tek durumlu kosullandirmada mecburen else yapisi (: ve sonrasi kullanilmak zorundadir.)

const speed = 110;

speed > 120
  ? console.log("Speedy")
  : speed >= 90
  ? console.log("Normal")
  : console.log("Low Speed");

if (speed > 120) {
  console.log("Speedy");
} else if (speed >= 90) {
  console.log("normal");
} else {
  console.log(" Low Speed");
}
