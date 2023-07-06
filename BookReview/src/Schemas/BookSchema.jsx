import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
	title: String,
	author: String,
	cover: String,
	rating: Number,
})
const Book = mongoose.model("Book", bookSchema);

export default Book;