let userName = "Hakan"
const DOMAIN = "kodluyoruz.org"

let email = userName + " @ " + DOMAIN
console.log("Merhaba", userName, "sitemize hosgeldin", "mail adresin", email);

// * template literates yontemi   ${} ile daha fazla bilgi tutabiliriz sistemimizde

let info = `Merhaba ${userName} sitemize hosgeldin . mail adresin ${ email},mail adresinin uzunlugi${email.length}
`

console.log(info);