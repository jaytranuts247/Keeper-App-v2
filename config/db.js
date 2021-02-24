const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
	try {
		mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log("MongoDB connected...");
	} catch (err) {
		console.err(err.message);
		process.exit();
	}
};

module.exports = connectDB;
