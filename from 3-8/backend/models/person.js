const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
	name: String,
	number: String,
	id: Number,
})

const Person = mongoose.model('Person', {
	name: String,
	number: String,
	id: Number
}, 'persons' )

module.exports = Person