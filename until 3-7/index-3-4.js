const express = require('express')
const app = express()

let persons = [
    {
      name: "Arto Hellas",
      number: "040-123456",
      id: 1
    },
    {
      name: "Ada Lovelace",
      number: "39-44-5323523",
      id: 2
    },
    {
      name: "Dan Abramov",
      number: "12-43-234345",
      id: 3
    },
    {
      name: "Mary Poppendieck",
      number: "39-23-6423122",
      id: 4
    }
  ]



app.get('/', (req, res) => {
res.send('<h1>Welcome to Phonebook (with nodemon)!</h1>')
})

app.get('/api/persons', (req, res) => {
res.json(persons)
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

app.get('/info', (req, res) => {
  const handlingTime = new Date()
  res.send(`<p> Phonebook has info for ${persons.length} people <br/> ${handlingTime} </p>`)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)