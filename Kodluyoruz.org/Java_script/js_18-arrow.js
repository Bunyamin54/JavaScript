function hello (firsName) {

    console.log(`${firsName}`)
}


hello ("java script")


const helloFunc1 = (firsName) => {console.log(`${firsName}`)
}
helloFunc1("helloFunc1")

const helloFunc2 = firsName => console.log(`${firsName}`)
helloFunc2("hellofunc2")

//* birden fazla paramtre

const helloFunc3 = (firsName, lastName) => console.log(`${firsName} ${lastName}`)
helloFunc3("hellofunc3" ,"lastName")


//* birden fazla paramtrede suslu parantez kullaniriz

const helloFunc4 = (firsName, lastName) =>  {
    
    let info = `${firsName} ${lastName}`
    console.log(info)
    return info
}

helloFunc4 ("hellofunc4", "Other info")