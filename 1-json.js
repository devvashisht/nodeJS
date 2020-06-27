const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'dev'
// }

// const bookJson = JSON.stringify(book)

// fs.writeFileSync('1-json.json',bookJson)
//binary data
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson =  dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log("retruun as binary : dataButer",dataBuffer)
// console.log("convered to string via tostring : string ",dataJson)
// console.log("converted to object via parseobject",data)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user =  JSON.parse(dataJSON)
user.title =  'The monk who lost his ferrari'
user.author =  'Robin sharma'
fs.writeFileSync('1-json.json',JSON.stringify(user))
