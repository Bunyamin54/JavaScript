// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Kullanıcıdan sayıyı alın
const number = parseInt(prompt("Bir sayı girin:"));

// Sayının asal olup olmadığını kontrol edin
if (isPrime(number)) {
  console.log(number + " bir asal sayıdır.");
} else {
  console.log(number + " bir asal sayı değildir.");
}

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// console.log("BYE");

// //? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
// //? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
// //? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let not = prompt("Lütfen 0-100 arasinda bir not giriniz:");

// // if (not < 0 || not > 100) {
// //   console.log("Not 0'dan küçük veya 100'den büyük olamaz")
// // }

// while (not < 0 || not > 100) {
//   console.log("Not 0'dan küçük veya 100'den büyük olamaz");
//   not = prompt("Lütfen 0-100 arasinda bir not giriniz:");
// }

// console.log("Notunuz:", not);
