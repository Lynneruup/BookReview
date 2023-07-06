// Server imports - Vite+express
import express from "express";
import ViteExpress from "vite-express";
import { fileURLToPath } from "url";
import path from "path";

// Database setup - Mongoose
import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/bookBase', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
	setTimeout(() => {console.log("Database Connection Established!")}, 1000);
})
.catch((err) => {
	console.log("Error: ");
	console.log(err);
})

const bookSchema = new mongoose.Schema({
	title: String,
	author: String,
	cover: String,
	rating: Number,
})
const Book = mongoose.model("Book", bookSchema);
const JP = new Book({title: "12 rules for life", author: "Jordan Peterson", cover: "some thing", rating: 8.9})
JP.save();

// Static file serving setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
ViteExpress.config({ mode: "production" });

app.use(express.static(path.resolve(__dirname, "./backend/dist")));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
