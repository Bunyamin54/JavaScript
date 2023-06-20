console.log("JS Modules is running")
//? modul kullanimnda modul objesi this nesnesini gostermez.
//? named export (import) deniyor bu sisteme
console.log(this) // undefined

console.log(window)

import {CALISMA_SAATI, maas} from "./mymodule.js"
import {arttir, azalt} from "./mymodule.js"
 
//? export default  suslu kullanilmaz suslu parentezsiz
import selamVer from "./mymodule.js"

console.log(CALISMA_SAATI)
console.log(maas)
console.log(arttir(5))
console.log(azalt(5))
console.log(selamVer())