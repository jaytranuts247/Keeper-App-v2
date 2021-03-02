const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwtSecret = config.get("jwtSecret");
const auth = require("../middlewares/auth");

const Note = require("../db_models/Note");

// @router    Get api/note
// @desc      get user note
// @access    private
router.get("/", auth, async (req, res) => {
	try {
		console.log(req.user);
		const notes = await Note.find({ user: req.user.id }).sort({ date: -1 });
		res.json(notes);
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server error");
	}
});

// @router    POST api/note
// @desc      Add note to user
// @access    private
router.post(
	"/",
	auth,
	[check("title", "title is required").not().isEmpty()],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, content } = req.body;
		console.log(req.user);

		try {
			const newNote = new Note({
				title,
				content,
				user: req.user.id,
			});

			const note = await newNote.save();
			res.json(note);
		} catch (err) {
			console.log(err.message);
			res.status(500).send("Server Error");
		}
	}
);

// @router    PUT api/note
// @desc      update note
// @access    private
router.put("/:id", auth, async (req, res) => {
	const { title, content } = req.body;

	// make note object
	const noteField = {};
	if (title) noteField.title = title;
	if (content) noteField.content = content;

	try {
		// find the note with givne ID
		let note = await Note.findById(req.params.id);
		// it no note found return error msg
		if (!note) return res.status(400).json({ msg: "Note not found" });

		// Make sure note is user owned
		if (note.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "Not Authorized" });
		}

		note = await Note.findByIdAndUpdate(
			req.params.id,
			{ $set: noteField },
			{ new: true }
		);

		console.log("Note is updated");
		res.json(note);
	} catch (err) {
		console.log(err.massage);
		res.status(500).send("Server Error");
	}
});

// @router    DELETE api/note
// @desc      delete note
// @access    private
router.delete("/:id", auth, async (req, res) => {
	try {
		let note = await Note.findById(req.params.id);

		if (!note) return res.status(400).json({ msg: "Note not Found" });

		console.log("req.user ", req.user);
		// Make sure note is from this user
		if (note.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "Not Authorized" });
		}

		await Note.findByIdAndDelete(req.params.id);
		res.json({ msg: "Note removed" });
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
