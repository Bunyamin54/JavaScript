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

const myKey = prompt(
  "Araba ile ilgili Neyi ogrenmek istersiniz: speed, color,engine ..."
);

alert(car[myKey]);
