const fs = require('fs');

const { v4: uuidv4 } = require('uuid');

const getNotes = () => {
    const jsonString = fs.readFileSync("./db/db.json");
    return JSON.parse(jsonString);
}

// adds a note to the db
const addNote = (note) => {
    // add a unique id to the note
    note.id = uuidv4();

    // get notes from db.json as array
    const notes = getNotes();

    // add new note to end of array
    notes.push(note);

    // turns array into json string
    const jsonString = JSON.stringify(notes);

    // putting array of objects back into the json db
    fs.writeFileSync("./db/db.json", jsonString);

    return note;
}

const deleteNote = (id) => {
    const notes = getNotes(); 
    notes.forEach((note, index) => {
        if(note.id === id) {
            // delete the note
            notes.splice(index, 1);
            return
        }
    });
     // turns array into json string
     const jsonString = JSON.stringify(notes);

     // putting array of objects back into the json db
     fs.writeFileSync("./db/db.json", jsonString);
}

module.exports = {
    getNotes,
    addNote,
    deleteNote
}