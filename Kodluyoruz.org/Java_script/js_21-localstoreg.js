localStorage.setItem('myCat', 'Kod Kedisi')

localStorage.getItem('myCat')

// * getItem getirir setItem atar - ve key value ilsikisi vardir.

localStorage.removeItem('myCat') //* remove ile de sileriz

let user= {userName :" Hakanyalcinkaya, isActive : true"}

localStorage.setItem('userInfo', JSON.stringify(user))

let userInfo= localStorage.getItem('userInfo')
console.log(userInfo)

JSON.parse(userInfo)

user.isActive
userInfo.isActive


// * objeyi stringe cevirmek icin JSON.stringify ozelligini kaullaniyoruz.
