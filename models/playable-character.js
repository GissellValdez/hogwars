// model to use for playable characters

// models/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playableCharacterSchema = new Schema({
	name: { type: String, required: true },
	house: { type: String, required: true },
	playerImg: { type: String, required: true },
	opponentImg: { type: String, required: true },
})