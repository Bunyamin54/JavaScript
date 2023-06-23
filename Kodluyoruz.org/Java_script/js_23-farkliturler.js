let user ={userName: "hakanyalcinkaya", isActive: true}

localStorage.setItem('userInfo', JSON.stringify(user)) //* stringe cevirmek icin JSON Stringgify ozelligini kullaniriz

let userInfo = localStorage.getItem('userInfo') //* bilgiyi al
userInfo = JSON.parse(userInfo)


console.log(userInfo)