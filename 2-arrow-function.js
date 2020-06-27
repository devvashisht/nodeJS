// const square =  (x) => {
//      x*x
// } 

// const square =  (x) => x*x
// console.log(square(3))

const event = {
    name : 'BirthDay Party',
    guestList : ['Andrew', 'Dev', 'Vas'],
    printGuestLs  () {
       // const that = this

        console.log('Guest list for'+ this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending'+ this.name)
        });
    }
}
event.printGuestLs()