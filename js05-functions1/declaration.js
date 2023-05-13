// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **");

//!Declaration  (Fonksiyonun tanimlanmasi.)

function yazdirMerhaba() {
  //   alert("Merhaba FS14");
  console.log("Merhaba FS14");
}
yazdirMerhaba(); //!invoke call
yazdirMerhaba(); //!invoke call
yazdirMerhaba(); //!invoke call

//*  ornek  parametre
//* js de camelCase kullanilir.
//! argument veya parameter listesi parameterin bir siniri yok.cok uzun olmasi kullanisligini azaltir fonksiyonun.
function yazdirParametre(message, name = "cohort14") {
  console.log(message, name);
}

yazdirParametre("Hei", "FS15");
yazdirParametre("Salut", "FS16");
yazdirParametre("Kalimera", "FS17");
yazdirParametre("Selam");
yazdirParametre("Hei Hei");

//*ornek2

function calculate(name, yob) {
  const age = 2023 - yob;
  console.log(`${name} is ${age} years old`);
  return age;

  //! hersey btince return yapilir. return break gibi davranir
  //* return alt programdan ana programa paket gonderiyoruz.
  //? new Date (). getFullYear()
}

console.log(calculate("Ahmet", 1990));
calculate("Suleyman", 1980);
//! new Date - sistem tarihi ve saatini verir.
