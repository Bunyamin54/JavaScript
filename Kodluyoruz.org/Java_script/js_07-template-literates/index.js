let userName = "Hakan"
const DOMAIN = "kodluyoruz.org"

let email = userName + " @ " + DOMAIN
console.log("Merhaba", userName, "sitemize hosgeldin", "mail adresin", email);

// * template literates yontemi   ${} ile daha fazla bilgi tutabiliriz sistemimizde
// * yeni yazim tarzi 
let info = `Merhaba ${userName} sitemize hosgeldin.
 
Kisa isminiz: ${userName[0]}.
Mail adresin ${ email},mail adresinin uzunlugi${email.length}
Borcunuz ${ (2 + 3) * 5} tl
Gunun saat bilgisi ${new Date().getHours()}
`
console.log(info);