const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const app = express()

const Person = require('./models/person')


const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({
            error: 'malformatted id'
        })
    }
    next(error)
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({
        error: 'unknown endpoint'
    })
}


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

app.get(/^\/api\/persons\//i, (request, response, next) => {
	let idMatchList = []

	if(request.url.length > 13 && !/\D/.test(request.url.substring(13))){
		Person
			.find({ id: parseInt(request.url.substring(13)) })
			.then(result => {
				result.forEach(sResult => {
					idMatchList.push(sResult)
				})
                if (idMatchList.length !== 0) {
                    response.json(idMatchList)
                } else {
                    response.status(400).end()
                }
				
			})
            .catch(error => next(error))
	}
})

// CastErrorin nappaaminen toimisi, mikäli id:nä käytettäisiin "_id":tä
// erillisen parametrin "id" sijaan. Nyt jokaisella henkilötiedolla on
// kaksi id:tä, mikä hankaloittaa niiden hakemista ja poistamista.
// Kun kokeillaan virheellisen "id":n (ei siis erillisen "_id":n perusteella poistaa
// delete_person.rest tiedoston avulla, jää pyyntö "Waiting"-tilaan ja odottaa,
// että se löytäisi olemattoman id:n omaavan henkilön, jota ei kuitenkaan löydy.

// EDIT: Nyt korjattu jonkin verran! Virheet käsitellään virheidenkäsittelijän avulla
// "next(error)", mutta CastErrorin sijasta saamme TypeErrorin, kun yritämme etsiä indeksiä,
// jota ei löyty. IndexError johtuu siitä, että "foundPerson._id" saa parametrikseen Null,
// kun haluttua indeksiä ei löydy. Tämän virheen voisi käsitellä monella tavalla, mutta nyt
// se tapahtuu pyydetyllä tavalla, vaikka itse virhe on eri.

// juuren README.md:ssä lisää tästä! (tekstin lopussa)

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findOne({ id: request.params.id })
    .then(foundPerson => {
        try {
            Person
            .findByIdAndRemove(foundPerson._id.toString())
            .then(result => {
                response.status(204).end()
            })
            //.catch(error => next(error))
        } catch (error) {
            next(error)
        }
        })
    .catch(error => next(error))
})


app.get('/info', (req, res) => {
    const handlingTime = new Date()
    res.send(`<p> Phonebook has info for ${persons.length} people <br/> ${handlingTime} </p>`)
})

app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})