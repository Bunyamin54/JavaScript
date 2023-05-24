//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

//*  key - value var
console.log("******* Objects *********");

//* . notasyonu  car.brand = "togg"
//* clg(car.model)
// const car = {
//   brand: "mercedes",
//   model: "2020",
//   engine: 2000,
//   speed: 5,
// };
// console.log(car.model);

//! object literea, en cok tercih edilen yontem
// * reed method

const car = {
  brand: "Mercedes",
  model: 2020,
  engine: 2000,
  speed: 5,
  color: ["pink", "black", "blue", "green"],
};

console.log(car);
console.log(car.engine);
console.log(car.color[0]);

console.log(car.color);
car.color.forEach((c) => console.log(c));
//! write method
// //? objenin degerini degistirme (write)

car.speed = 7;
car.color = "Morcivert";
car.class = "E";

console.log(car);

// * Square Bracket yontemi

console.log("ENGINE", car["engine"]);

console.log("ENGINE:", car["engine"]); //? objeAdi["keyAdi"]

// const myKey = prompt(
//   "Araba ile ilgili Neyi ogrenmek istersiniz: speed, color,engine ..."
// );

// alert(car[myKey]);

//* object (classindan new operaotoru ile)

const myCar = new Object();
myCar.brand = "BMW";
myCar.model = 2023;
myCar.speed = 7;

console.log(myCar.speed);
console.log(myCar.brand);

console.log(myCar);
//* ---------------------------------------------------------
//* 3- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------
//! bir kere yaz new operatoru ile seri uretim icin bu yapi object constructuru yapsisi deniliyor.
function Personel(id, name, age, salary) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.salary = salary;
}

const person1 = new Personel("123345456", "Ahmet Can", 33, 30000);
const person2 = new Personel("124859045", "Hasan Kelek", 35, 10000);

console.log(person1);
