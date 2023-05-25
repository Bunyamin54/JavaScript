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

const araclar = ["bmw", "merso", "ferrari", "rover", "lambo"];
