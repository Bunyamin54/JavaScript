//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

const car = {
  brand: "BMW",
  model: 2020,
  engine: 2000,
  colors: ["pink", "blue"],
};

// //? 1.Yontem (. notasyon)
// const brand = car.brand
// console.log(brand)

// //? 2.Yontem (square bracket)
// console.log(car["model"])

// //? 3. Destructure
// const { brand: name, engine, colors } = car //? object destr.
// console.log(engine, colors, name)

// const { model } = car
// console.log(model)

// //* EXAMPLE: NESTED
// const cars = {
//   car1: {
//     name: "BMW",
//     model: 1990,
//     engine: 1.6,
//   },
//   car2: {
//     name: "Mercedes",
//     model: 2022,
//     engine: 2.0,
//   },
//   car3: ["anadol", "togg", "devrim"],
//   car4: "kağnı",
// };

// let { car1, car2, car4, car3 } = cars; //? 1 seviye destr.
// console.log(car2, car4);

// const { name: c1Name, model: c1Model } = car1; //? 2 seviye dest.
// const { name: c2Name, model: c2Model } = car2;
// console.log(c2Name, c2Model);

// //? Alternativly
// const {
//   car1: { nameCar1, modelCar1, engineCar1 },
//   car2: { nameCar2, modelCar2, engineCar2 },
// } = cars;

// //* Example
// const team = [
//   {
//     name: "Josh",
//     surname: "Barry",
//     job: "developer",
//     age: 30,
//   },
//   {
//     name: "Rihanna",
//     surname: "Barry",
//     job: "tester",
//     age: 45,
//   },
//   {
//     name: "Hazel",
//     surname: "Nut",
//     job: "team lead",
//     age: 40,
//   },
// ];
// //? hepsi squardee olabilir veya nokta da kullanilabilirdi.
// team.forEach((t) => {
//   console.log("NAME:", t.name);
//   console.log("SURNAME:", t.surname);
//   console.log("JOB:", t["job"]);
//   console.log("AGE:", t["age"]);
// });
// //? DESTR
// //? daha dinamik ve temiz bir yapi alttaki yapi
// team.forEach(() => {
//   const { name, surname, job, age } = person;
//   console.log("NAME:", name);
//   console.log("SURNAME:", surname);
//   console.log("JOB", job);
//   console.log("AGE", age);
//   console.log("*******************");
// });

// const getProduct = () => {
//   return {
//     id: "123",
//     pName: "NIKE",
//     price: 300,
//     stock: 1000,
//   };
// };

// console.log(getProduct());

// let { pName, price } = getProduct();
// console.log("PRODUCT NAME:", pName, "PRICE:", price);

// stock = stock - 100;
// console.log("REMAINING STOCK:", stock);

// * Destructuring ARRAY

// const names = ["Ahmet", "Mehmet", "ismet", "Saffet"];
// //* klasik method
// const ismet = names[2];
// console.log(ismet);

// //*Destructuring ARRAY  sira onemli
// const [ahmo, , ismo, safo] = names;
// console.log(ahmo, ismo, safo);
// //* sira onemli

//! rest (...) geri kalanlar yada ac dok anlamindan operatoru
//? rest operatoru kullanici tarafindan girilen degerleri dizi icerisinde konumlandirir.
//! bi diz veya obje dek idegerleri geri kalanlari

// const araclar = ["bmw", "merso", "ferrari", "rover", "lambo"];

// const [araba1, araba2, ...geriKalanlar] = araclar;
// console.log(araba1);
// console.log(geriKalanlar);

// //! array de sira ve sayi onemli .

// const kisi = {
//   ad: "canan",
//   soyad: "cano",
//   yas: 33,
//   meslek: "tester",
// };

// const { meslek, yas, ...isim } = kisi;
// console.log(meslek);
// console.log(isim);

//! bir fonksiyonun argumanlarini diziye cevirmek

// const topla = (a, b) => a + b;

//* REST: Object

// const kisi = {
//   ad: "Canan",
//   soyad: "Cano",
//   yas: 33,
//   meslek: "tester",
// };

// const { meslek, yas, ...isim } = kisi;

// console.log(meslek, yas);
// console.log(isim);
// console.log(kisi);

// //! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

// const topla = (a, b) => a + b;

// console.log("SONUC:", topla(2, 5, 10, 4));

// //? REST (...) ile non-iterable olan sayilari iterable hale (diziye)
// //? cevirmiş olduk.

// const toplaminiAl = (...sayilar) => {
//   console.log(sayilar);
//   return sayilar.reduce((t, v) => t + v, 0);
// };
// console.log("SONUC:", toplaminiAl(2, 5, 10, 4, 6, 8));

// const ucanAraclar = ["drone", "heli", "ucak"];
// const karaAraclari = ["tir", "araba", "kamyonet", "bisiklet"];

// const tasitlar = [ucanAraclar, karaAraclari];
// console.log(tasitlar);

// console.log(tasitlar[0][1]);
// //? nested ic ice yapi var .
// //! Spred methodu
// //* concatination yapmak isteriz ise yarar ama Spred methodu daha uygun

// const tasitlar1 = [...ucanAraclar, ...karaAraclari];
// console.log(tasitlar1);

// const cumle = "Olmak ya da olmamak";

// const karakterler = [...cumle];
// console.log(karakterler);
// console.log(cumle);

// //! Math.m
// console.log("MAX:", Math.max(1, 3, 4, -1, 6));
// const rakamlar = [23, 45, 66, 77, 12, -1];
// console.log("MIN:", Math.min(...rakamlar));

//? Array Copy

// const myNumbers = [4, 5, 6];
// const herNumber = [1, 2, 3, ...myNumbers];
// const hisNumbers = [...herNumber];

// console.log(herNumber, myNumbers);
// console.log(hisNumbers);

// hisNumbers.push(7);
// myNumbers.push(77);

// console.log("MY:", myNumbers);
// console.log("HER:", herNumber);
// console.log("HIS:", hisNumbers);

// //* sig kopyalama
// const theirNumbers = hisNumbers;

// theirNumbers.push(8);
// console.log(theirNumbers, hisNumbers);

//? Object copying

const firstObj = { a: 1, b: 2, c: 3 };
const secondObj = { a: 2, d: 3, c: 4 };

const copiedFirstObj = { ...firstObj };
console.log(copiedFirstObj);

copiedFirstObj.a = 44; //! nestid olmadigi icin dip coppy gibi davranir. ikisi bagimsizdir
console.log(copiedFirstObj, firstObj);

const combinedObjs = { ...firstObj, ...secondObj };

console.log(combinedObjs);
//? spred operatoru ile objeler birlestirilebilir
