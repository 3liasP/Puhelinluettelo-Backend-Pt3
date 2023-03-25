const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const mongoose = require('mongoose')
const Person = require('./models/person')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan('tiny'))

let persons = [

]



app.get('/', (req, res) => {
    res.send('<h1>Welcome to Phonebook (with nodemon)!</h1>')
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        // id:tä vastaavaa puhelinnumerotietoa ei ole
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

const randomId = () => {
    // satunnainen kokonaisluku henkilön id-arvoksi
    const randId = Math.floor(Math.random() * 1001)
    return randId
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    }
    if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    }
    const person = new Person({
        name: body.name,
        number: body.number,
        id: randomId()
    })
    // jos lisättävä nimi on jo luettelossa, palauttaa true
    const nameExists = persons.find(person => person.name === body.name)
    if (!nameExists) {
        person
            .save()
            .then(person => {
                response.json(person)
        })
    } else {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
})

app.get('/info', (req, res) => {
    const handlingTime = new Date()
    res.send(`<p> Phonebook has info for ${persons.length} people <br/> ${handlingTime} </p>`)
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})