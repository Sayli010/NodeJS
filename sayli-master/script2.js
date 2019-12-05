
// import fs from 'fs';
const fs = require('fs');
// function getNotes(){
//     return "Good Night";
// }



const addNotes = function(title , body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(notes){
        return notes.title === title;
    })
    if(duplicateNotes.length === 0){
        notes.push({
            title:title,
            body:body
        });
        saveNotes(notes);
        console.log("Notes Add")
    }else{
        console.log("Notes already Exist ");
    }
}

const removeNotes = function(title){
    const notes = loadNotes();
    const updateNotes = notes.filter(function(note){
        if(note.title !== title){
            return note;
        }
    })
    saveNotes(updateNotes);
}

const listNotes = function(){
    const notes = loadNotes();
    console.log(notes);
}

const readNotes = function(title1){
    const notes = loadNotes();
    const noteBody = notes.filter(function(note){
        if(note.title === title1){
            return note;
        }
    })

   // const { title , body } = noteBody;
    console.log(noteBody[0].body);
}
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)
    
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }catch(e){
        return [];
    }
}


module.exports = {addNotes ,removeNotes ,listNotes ,readNotes};
