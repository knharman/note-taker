const express = require('express')
const app = express()

const db = require('./db')
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.json())

// api routes 
app.get('/api/notes', (req,res) => {
    const notes = db.getNotes()
    res.json(notes)
})

app.post('/api/notes', (req,res) => {
    const newNote = db.addNote(req.body)
    res.json(newNote)
})

app.delete('/api/notes/:id', (req,res) => {
    db.deleteNote(req.params.id)
    res.end()
})

app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/notes.html')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
})

app.listen(port, () => {
  console.log(`Note Taker listening on port ${port}`)
})