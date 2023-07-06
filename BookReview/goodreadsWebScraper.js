import * as cheerio from "cheerio";
import axios from "axios";
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

async function startScraping() {
	// First download goodreads webpage via HTTP Get request from Axios
	const axiosResponse = await axios.request({
		method: "GET",
		url: "https://www.goodreads.com/giveaway/genre/Fiction?sort=featured",
		headers: {
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"}
	}).catch((e) => {console.log(e)})

	
	const $ = cheerio.load(axiosResponse.data);
	console.log($('body.prototip a.authorName').text())
	$(".BookListItem").each((index, element) => {
		const bookCover = $(element).find(".ResponsiveImage").attr("src");
		const author = $(element).find(".ContributorLink__name").text();
		const title = $(element).find(".BookListItem__title").find("a").text()

		const bookPrototype = {
			title: title,
			author: author,
			cover: bookCover,
			rating: Math.floor(Math.random() * 10)
		}
		console.log(bookPrototype);

		const readyBook = new Book(bookPrototype);
		readyBook.save();

	})
	console.log("it is working");

}

startScraping();
