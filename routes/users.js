const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../db_models/User");
const jwtSecret = config.get("jwtSecret");

// @router  POST api/user
// @desc    Register new User
// @access  Public
router.post(
	"/",
	[
		// check name isEmpty
		check("name", "Please add name").not().isEmpty(),
		//check email
		check("email", "Please include a valid email").isEmail(),
		// check password atleast 6 letters
		check(
			"password",
			"Please enter a password with 6 or more characters"
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		// check errors in any of above validation
		console.log("users");
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		console.log("users");

		const { name, email, password } = req.body;

		try {
			// check if user already registered ?
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ msg: "user already exists" });
			}

			// if not user, then create one
			user = new User({
				name,
				email,
				password,
			});
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				jwtSecret,
				{
					expiresIn: 360000,
				},
				(err, token) => {
					if (err) throw err;
					console.log(token);
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(500).send("Server error");
		}
	}
);

module.exports = router;
