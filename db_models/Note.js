const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("../db_models/User");

const NoteSchema = new Schema({
	user: {
		type: mongoose.ObjectId,
		ref: User,
	},
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("note", NoteSchema);
