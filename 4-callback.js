// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitute : 0,
//             longitude : 0
//         }
//       callback(data)
//     })

// }
//   geocode('Delhi',(data) => {
//       console.log(data)
//   })

const add = (a, b, callback) => {
setTimeout(() =>{
callback(a+b)
},2000)
}
add(1, 4, (sum) => {
    console.log(sum)
})

