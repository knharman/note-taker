const fs = require('fs');

const getNotes = () => {
    const jsonString = fs.readFileSync("./db/db.json");
    return JSON.parse(jsonString);
}



module.exports = {
    getNotes
}