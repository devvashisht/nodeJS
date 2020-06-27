const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { demandOption } = require('yargs')

//customized yargs version 
yargs.version('1.1.0')
//console.log(process.argv)
// create add command 
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "note body",
            demandOption: 'true',
            type: 'string'
        }
    },
    handler (argv) {
        notes.addnotes(argv.title, argv.body)
    }
})
//add, remove, read, list
//

// Create remove command 

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command 

yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler () {
        notes.listNotes()
    }
})

// Create read command 

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            description: "Read a note",
            demandOption : true,
            type : 'string'
        }
    },
    handler (argv) {
       notes.readNote(argv.title)
    }
})
//console.log(yargs.argv)
yargs.parse()