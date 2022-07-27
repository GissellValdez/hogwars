// model to use for playable characters

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playableCharacterSchema = new Schema({
	name: { type: String, required: true },
	house: { type: String, required: true },
	playerImg: { type: String, required: true },
	opponentImg: { type: String, required: true },
	hp: Number,
    spells: [{ type: Schema.Types.ObjectId, ref: 'Spell' }]
})

module.exports = mongoose.model('PlayableCharacter', playableCharacterSchema);