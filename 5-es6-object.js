// Object property shorthand
const  name  = "Dev"
const userAge = 54
const user = {
    name,
    age: userAge,
    location : 'dadri'
}
//console.log(user)

// Object destructuring 
const product = {
    label :' red notebok',
    price : 3,
    stock:200,
    saleprice: undefined,
    rating :40
}

//const label = product.label
//const stock = product.stock

//const {label: productLabel,stock,rating = 5} = product // detructuring
// diferent name
//console.log(productLabel,rating) // destructuing

const transaction = (type,{label,stock}) => {
console.log(type,label,stock)
}
 transaction('order',product) 