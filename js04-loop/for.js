// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****");

for (let i = 1; i <= 100; i++) {
  console.log("Cohort 14");
}
// break - donguyu kirar
// continue - donguyu teget gecer.

// for (let i = 1; 1 < 100; i++) {
//   console.log("FS14");
// }
// // ''
// degisken {$} icinde yazdirlir.
//? cont kullanmak forun icinde bizim faydamiza olur.

//!Math.random rastegele sayi atar, Math.round ile sayiyi yuvarlariz.
//? while da once kosul / sonra dongu ici / sonra artis ++

//! rakamli adetli durumlarda for sytaxdi best praktis
//? karmasik kosullarin iterasyonu icin while veya do while dongusu best practis sytax.

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ODEV1: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

//* NOT:
//* 1 ve kendisinden başka böleni olmayan sayılar ASAL sayılardır.
//* Eğer girilen sayı, herhangi bir sayıya tam bölünüyorsa diğer sayıları kontrol etmeye gerek yoktur. ASAL DEĞİL diyebiliriz.
//* break deyimi ile dongu bir koşul gerçekleştiğinde kırılabilir.

//* while dongusunu global yapmak faydalidir
console.log("****** WHILE *******");

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("BYE");

//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// if (not1 < 0 || not1 > 100) {
//   console.log("Not 0'dan küçük veya 100'den büyük olamaz")
// }

//! --------- WHILE -----------
let not1 = prompt("Lütfen 0-100 arasinda bir not giriniz:");

while (not1 < 0 || not1 > 100) {
  console.log("Not 0'dan küçük veya 100'den büyük olamaz");
  not1 = prompt("Lütfen 0-100 arasinda bir not giriniz:");
}
console.log("Notunuz:", not1);

//! ------  DO - WHILE -------
let not2;
do {
  not2 = prompt("Lütfen 0-100 arasinda bir not giriniz:");
  // if (not < 0 || not > 100) {
  //   alert("Not 0'dan küçük veya 100'den büyük olamaz")
  // }
} while (not2 < 0 || not2 > 100);
console.log("Notunuz:", not2);

//! ------  FOR -------
let not3 = prompt("Lütfen 0-100 arasinda bir not giriniz:");
for (; not3 < 0 || not3 > 100; ) {
  alert("Not 0'dan küçük veya 100'den büyük olamaz");
  not = prompt("Lütfen 0-100 arasinda bir not giriniz:");
}
console.log("Notunuz:", not3);
