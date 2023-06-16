let userName = "Hakan"
const DOMAIN = "kodluyoruz.org"

let email = userName + " @ " + DOMAIN
console.log("Merhaba", userName, "sitemize hosgeldin", "mail adresin", email);

// * template literates yontemi   ${} ile daha fazla bilgi tutabiliriz sistemimizde

let info = `Merhaba ${userName} sitemize hosgeldin.
 mail adresin ${ email},mail adresinin uzunlugi${email.length}
 borcunuz ${ (2 + 3) * 5} tl
 gunun saat bilgisi ${new Date().getHours()}
`
console.log(info);