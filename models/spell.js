// model to use for playable characters

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spellSchema = new Schema({
	name: String,
	damage: Number,
})
