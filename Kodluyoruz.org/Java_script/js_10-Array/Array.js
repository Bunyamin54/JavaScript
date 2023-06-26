// let domain = "kodluyoruz"


// let isActive = false
// let items = [15, 25, 30, isActive, domain]

// console.log(items)

// let emtyArray = []  //* bos liste

// console.log(items.length)

// document.querySelector('#info').innerHTML = items.length //* ekreana yazdirmak istersek.


// items [0]

// console.log(items[0])  //* ilk elemana ulasma

// console.log(items [items.length -1])

// console.log(typeof(items)) //* objekt olarak cikiyor

// console.log(Array.isArray(items))  

//  * hangileri isArray

// console.log(Array.isArray([]))
// console.log(Array.isArray(1))
// console.log(Array.isArray(true))

// console.log(items[Math.floor(items.length/2)]) //* ortadaki elemana ulastik 30

// ** sone eleman eklemek
// let items = [10, 20, 30, 40]
// console.log(items)

// items.push (50)  //* sona eklemek

// console.log(items)

// items.unshift (5)  //* basa eklemek
// console.log(items)

// items.pop(50)  //* son daki elemani silmek
// console.log(items)

// items.shift (5)
// console.log(items)  //* ilk elemani cikarmak listeden


// ? Arryin icerisndeki bilgiyi degistirmek

// items [0]  = 90  //* 0 . elemani degistirdik

// console.log(items)

// items[items.length-1] = 1000 //* sonuncu elemani degistirmek
// console.log(items)

//  * Array icinde array eklemek

// let items = [1, 2 ,3 ,4 ,5]

// let femaleUsers = ["Ayse", "Hulya" , "Merve"]
// let maleUsers = ["Ahmet", "Hasan", " Mehmet"]

// items.unshift(femaleUsers)  //*  basa ekleme

// console.log(items)

// items.push(maleUsers)  //* sona ekleme

// console.log(items)

// console.log(items.length) //* arraylar oge gibi tutluyor


// * ilk ogeye ulasmak
// console.log(items[0].length)
// console.log(items[0][0])

// let newsItems =items.splice(1, 5) //*posisyon verme ve ogelere ayrimak
// console.log(newsItems)

// console.log(items)

// * array icewrsindeki ogenin index bilgisini bulmak
// items.unshift("lorem")
// items.push("ipsum")

// console.log(items.indexOf("ipsum"))

// * Array kopyalamak

// let copyItems = items
// console.log(items)

// copyItems.pop()  //* son ogeyi cikarmak bu yontemle kopy yapilamaz
// console.log(copyItems)

// copyItems = items.slice()  //* kopyalama yapar

// console.log(copyItems)

// let es6Items = [...items]  //* .... spread methodu eklemek yapar

// console.log(es6Items)


// * birden fazla arrayi birlestirmek  Spread methodu  ...

// let allUsers = [...femaleUsers, ...maleUsers]

// console.log(allUsers)

// * stringe cevirmek  toString veya join

// console.log(allUsers.toString())

// console.log(allUsers.join( " --- ")) //* join yontemi ile icerisine birsey atamak


// * splice eklemek

// allUsers.splice(allUsers.length -1, 0, "Melisa")

// console.log(allUsers)

// allUsers.splice(Math.floor (allUsers.length / 2), 0, "Lorem")  //* bir ogeyi index bilgisine gore eklemek.
