const fs = require('fs')
const chalk = require('chalk')
const getNotes =  () => {
    return "Your notes..."
}

const addNotes =  (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(
    //      (note) =>  note.title === title
    // )
    const  duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note Added'))
    } else {
        console.log(chalk.red.inverse(" note title taken"))
    }
}

const removeNote =  (title)=> {
    const notes = loadNotes()
    const notesTokeep = notes.filter(
         (note) => 
             note.title !== title
        
    )
    if (notes.length > notesTokeep.length) {
        console.log(chalk.green.inverse('note removed'))
        saveNotes(notesTokeep)
    }
    else {
        console.log(chalk.red.inverse('no note found'))
    }
}

const listNotes =  (title)=> {
    console.log(chalk.inverse('Your  notes'))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
        
    });
  //  return  notes
}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title == title )
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    } else {
console.log(chalk.red.inverse('note not found'))
    }
}
const saveNotes =  (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes =  ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
module.exports = {
    getNotes: getNotes,
    addnotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}