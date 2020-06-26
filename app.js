const chalk = require('chalk')
const yargs = require('yargs')
const getNotes =  require('./notes.js')

//customized yargs version 
yargs.version('1.1.0')
//console.log(process.argv)
// create add command 
yargs.command({
    command :  'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe: "note body",
            demandOption : 'true',
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title', argv.title)
        console.log('Body', argv.title)
    }
})
//add, remove, read, list
//

// Create remove command 

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Remving  the note')
    }
})

// Create list command 

yargs.command({
    command: 'list',
    describe: 'listing the notes',
    handler: function () {
        console.log('Listing the notes')
    }
})

// Create read command 

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('read  the note')
    }
})
//console.log(yargs.argv)
yargs.parse()