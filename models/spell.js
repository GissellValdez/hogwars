// model to use for spells

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spellSchema = new Schema({
	name: String,
	damage: Number,
})

module.exports = mongoose.model('Spell', spellSchema)