// * veri turunu ogrenmek icin typeof

let price = 111
let strinPrice ="111"
let hasPassword = true

console.log(
" Price :",
typeof(price));


console.log(
    " StringPrice:",
    typeof(strinPrice));

    
console.log(
    " HasPassword :",
    typeof(hasPassword));
    

    // * stringi metinsel bilgileri int ve floata donusturmek
    
    let number1 = "11"


    number1 =parseInt(number1)
    console.log("number1:", parseInt(number1), typeof(number1));

     
    let number2 = "11px"


    number2 =parseInt(number2)
    console.log("number2:", (number2), typeof(number2));


    let number3 = "11"


    number3 =(number3)
    console.log("number3:", (number3), typeof(number3));

    // * parsInt degiskenin icindeki number donsuturur.  rakamsal degeri alir icerisinden rakam ile baslar ise

// * number sadece sayi ve baska karakter yokse ceviriyor

let number4 = "11.1"


number4 =parseFloat(number4)
console.log("number4:", (number4), typeof(number4));


// * number veri tipinden stringe donusturmek
// * toString yontemi ile numberi stringe ceviririz.
let number5 = 55

number5 = number5.toString()
console.log(number5, typeof(number5));
