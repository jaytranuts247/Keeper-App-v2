const express = require("express");
const connectDB = require("./config/db");
// const cors = require("cors");

const path = require("path");

const app = express();

// connect DB
connectDB();

// middlewares
// app.use(cors());
app.use(express.json({ extended: false }));

// define routes
app.get("/", (req, res) => {
	res.send("server is working ...");
});
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Serve Static assest in production
if (process.env.NODE_ENV === "production") {
	// Set Static folder
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
