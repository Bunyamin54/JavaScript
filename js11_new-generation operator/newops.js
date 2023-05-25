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
//? 1. yontem (. notasyonu)

const brand = car.brand;
console.log(brand);

//? 2. yontem (square bracket)
console.log(car["model"]);

//? 3. Destructure  // sart degiskenlerin ismi object destructure
const { brands, engine, colors } = car;
console.log(engine, colors, brands);
