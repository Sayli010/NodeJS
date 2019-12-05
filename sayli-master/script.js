const greetings = require('./script2');
//console.log(greetings.getNotes());

// console.log(process.argv);

const yargs = require('yargs');
yargs.version('1.1.0');
// const command = process.argv[2];
// if(command === 'add'){
//     console.log("Adding a new notes.");
// }else if (command === 'remove'){
//     console.log('Removing a note')
// }

yargs.command({
    command:"add",
    describe:'Adding a new notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        // console.log("Adding new notes");
        // console.log(`new notes title ${argv.title}`);
        // console.log(`new notes body ${argv.body}`);
        greetings.addNotes(argv.title,argv.body)
    }
})


yargs.command({
    command:"remove",
    describe:'Removeing notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log("Removeing notes");
        greetings.removeNotes(argv.title);
    }
})

yargs.command({
    command:"list",
    describe:' list all notes',
  
    handler:function(){
        console.log("List notes");
        greetings.listNotes();
    }
})

yargs.command({
    command:"read",
    describe:'Reading a new notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log("Reading notes");
        greetings.readNotes(argv.title);
    }
})



//console.log(yargs.argv)

yargs.parse();