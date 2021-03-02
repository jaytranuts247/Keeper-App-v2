const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtSecret = config.get("jwtSecret");
const auth = require("../middlewares/auth");
const User = require("../db_models/User");

// @router    GET api/auth
// @desc      get logged in user
// @access	  Pivate
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @router    POST api/auth
// @desc      Auth user and get token
// @access	  public
router.post(
	"/",
	[
		check("email", "please include a valid email").isEmail(),
		check("password", "Password is required").exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });

			if (!user) {
				return res.status(400).json({ msg: "Invalid Credentials" });
			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.status(400).json({ msg: "Invalid Credentials" });
			}

			const payload = {
				user: {
					id: user.id,
				},
			};
			console.log(user.id);
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
			console.error(err.message);
			res.status(500).send("Server Error");
		}
	}
);

module.exports = router;
