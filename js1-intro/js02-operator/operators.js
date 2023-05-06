console.log("Js dosyası bağlandı.");
//?         🔥🔥🔥       Operators           🔥🔥🔥

//! Atama Operatörü, Aritmetiksel Operatörler,Artırma ve Azaltma Operatörü, Karşılaştırma Operatörleri ve Logical(Mantıksal) Operatörler

var deneme = 5;
varDeneme = 6;

let myVar = 5;

const myVar1 = 6;

//+ Aritmetiksel Operatörler

// +,-,*,/,%
//! + operatörü
// const num1 = 10;
// const num2 = 69;

// const toplam = num1 + num2; // num1 ve num2 operand , + operator olark adlandırılıyor.

// console.log(toplam);

// const msg1 = "Hello";
// const msg2 = "World!";

// const mesaj = msg1 + msg2;
// console.log(mesaj);

// const firstName = "Koray";
// const lastName = "Koksal";
// console.log(firstName, lastName); // consoleda virgül ile değişkenleri yazdırırken virgül boşluk karakateri gibi davranır.
// const fullName = firstName + " " + lastName; //? + operatörü String Concatenation işlemini de yapar.
// console.log(fullName);

// //! Template Literals (Es6 ile gelen bir özellik)
// // `merhaba``${değişken} ${değişken2}`;
// // `merhaba` hem string tanımlaması yapabiliriz hem de string içinde değişkenlerimizi `${değişken}` şeklinde yazabiliriz. + yerine daha dinamik bir şekilde stringlerimizi concatenate edebiliriz.

// const fullName2 = `${firstName} ${lastName}`;
// console.log(fullName2);

// const num3 = "6";
// const num4 = "7";
// console.log(num3 + num4); // 67
// console.log(num3 + 7); // 67. js otomatik tip dönüşümü yaparak buradaki ifadeyi de concatenat etti.
// console.log(7 + num3); // + operatorunde string değişken üstün gelir ve dönmüşümü stringe yapar. 76 çıktısını verdi.
// console.log(typeof (7 + num3)); // string

//! - operatörü

const x = 55;
const y = 44;

console.log(x - y); // 11

const myNum = "1";
console.log(x - myNum); // 54. - operatöründe string değişkeni numbera çevirir.
const yourNum = "one";
console.log(x - yourNum); // NaN (Not a Number)
//? String ifadeyi number a dönüştürmeye çalışıyor ama bu mümkün olmadığı için dönüştüremiyor ve bu nedenle işlemin sonucunu NaN döndürüyor.matematiksel olarak belirsiz veya tanımsız bir değeri temsil eder.
