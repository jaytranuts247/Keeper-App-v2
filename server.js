const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const path = require("path");

const app = express();

// connect DB
connectDB();

// middlewares
app.use(cors());
app.use(express.json({ extended: false }));

// define routes
app.get("/", (req, res) => {
	res.send("server is working ...");
});
app.post("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
