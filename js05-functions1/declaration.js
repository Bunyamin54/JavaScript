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
function yazdirParametre(message, name) {
  console.log(message, name);
}

yazdirParametre("Hei", "FS15");
yazdirParametre("Salut", "FS16");
yazdirParametre("Kalimera", "FS17");
