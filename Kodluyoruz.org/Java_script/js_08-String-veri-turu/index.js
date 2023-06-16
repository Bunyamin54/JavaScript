let email= "hakanyalcinkaya@gmail.com"

let firstName = "Hakan"
let lastName = "Yalcinkaya"
// *  onemli bir yapi tipi length.
console.log(email.length);
console.log(firstName[0]);
console.log(firstName.charAt(1)); //* ilk bilgisine ulasmak icin ve sifrdan baslar

// * buyuk kucuk harf
firstName = firstName.toUpperCase()
console.log(firstName);

firstName= firstName.toLowerCase()
console.log(firstName);

// * string icerisindeki bilgi aratmak icin search 

console.log(email.search("@"));
console.log(email[15]); //* olmayan birsey aratirsan -1 sonucu getirir

//* Slice methodu  belli biryere kadar olani almak
console.log(email.slice(1,10));

console.log(email.slice(15)); //* @gmail.com

let DOMAIN = email.slice(email.search("@") +1)
console.log(DOMAIN);

console.log(DOMAIN.slice(0,DOMAIN.indexOf ('.')));

// * Biglgiyi degistir  replace  methods

email  = email.replace('gmail.com', 'kodluyoruz.org')

console.log(email);

// ** istedigim bilgi var mi  includes methodu

console.log(email.includes("@"));
console.log(email.includes("dddd"));

