//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama  API es zamanli bir cok isi yapiyor mus izlenimi  gosterir. Disa bagimli olan heryerde asecron kullanmak mantikli 

//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//!  Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir. biz api lar sayesinde biliyoruz

//* Senkron
//* ------------------------------------------------

// console.log("ASYNC INTRO")

// const delay = (waitingTime) => {
// const startTime = new Date().getTime()

// while(new Date().getTime () < startTime + waitingTime)
// {
//     ;
// }
// }
// console.log("Hello");


// console.time("gecikme")
// delay (4000)
// console.timeEnd("gecikme")
//   //? blocking code - senkron

// alert("blocked")  //? blocking kode
// console.log("hi");


//* Asenkron (setTimeout())

// setTimeout(() => {

//     console.log("Whats up?");
//  },1000) // 
// console.time("timer")
// setTimeout(() => {

// console.log("Im fine");
// console.timeEnd("timer")

// }, 3000)
// console.log("Start");
 

//**** asenkron (setInterval), clearInterval */
 //?? setInterval periyodik zaman araligi olusturmak icin kullanilabilir.
 //? clearInterval yardimyla surekli devam interval pasif hala getirilir
let count= 0
const sec1 = setInterval(( ) => {

    console.log(++count);

    if(count > 10 ) {

        clearInterval(sec1)
    }
} , 1000)