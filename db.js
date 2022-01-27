const fs = require('fs');

const getNotes = () => {
    const rawData = fs.readFileSync('./db/db.json')
    return JSON.parse(rawdata)
}



module.exports = {
    getNotes
}