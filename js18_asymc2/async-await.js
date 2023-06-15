//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayi mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durdurulmasini saglar.
//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.

const getNews = async () => {
    const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e"
  
    const URL = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`
  
    try {
      const res = await fetch(URL)
      if (!res.ok) {
        throw new Error("News can not be fetched")
      }
      const data = await res.json()
      renderNews(data.articles)
    } catch (error) {
      console.log(error)
    }
  }
  
  const renderNews = (news) => {
    console.log(news)
  }
  
  window.addEventListener("load", () => {
    getNews()
  })
  
