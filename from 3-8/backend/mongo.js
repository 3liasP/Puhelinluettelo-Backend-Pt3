const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://ecpelt:${password}@cluster0.ikqecbs.mongodb.net/test`

mongoose.connect(url)

const Person = mongoose.model('Person', {
    name: String,
    number: String,
    id: Number
}, 'persons')

if (process.argv[3] !== undefined && process.argv[4] !== undefined) { // Jos ohjelmalle on annettu parametrit
    // Oletetaan, että nimiparametri on indeksissä 2, numeroparametri indeksissä 3 ja molemmat ovat Stringejä!
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
        id: Math.floor(Math.random() * 100000)
    })
    person
        .save()
        .then(response => {
            console.log('added ' + process.argv[3] + ' number ' + process.argv[4] + ' to phonebook')
            mongoose.connection.close()
        })
} else {
    Person
        .find({})
        .then(persons => {
            console.log("phonebook:")
            persons.forEach(person => {
                console.log(person.name + " " + person.number)
            })
            mongoose.connection.close()
        })
}