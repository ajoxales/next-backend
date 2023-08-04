const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

// const { MongoClient } = require("mongodb");
// const uri = require("./altas_uri");

// const client = new MongoClient(uri);
// const dbname = "bank";

// const connectToDatabase = async () => {
// 	try {
// 		await client.connect();
// 		console.log(`Connected to the ${dbname} database`);
// 	} catch (err) {
// 		console.log(`Error connecting to the database: ${err}`);
// 	}
// };

// const main = async () => {
// 	try {
// 		await connectToDatabase();
// 		const databasesList = await client.db().admin().listDatabases();
// 		databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// 	} catch (err) {
// 		console.error(`Error connecting to the database: ${err}`);
// 	} finally {
// 		await client.close();
// 	}
// };
// main();

app.use(cors());

//routes
app.get("/users", (request, response) => {
	response.send([
		{ name: "Alex", location: "Seoul, South Korea" },
		{ name: "Joseph", location: "Dasmarinas, Cavite" },
		{ name: "Juan", location: "Tokyo, Japan" },
		{ name: "Dela", location: "New York, Cubao" },
		{ name: "Cruz", location: "Pasay, Metro Manila" },
		{ name: "Bernard", location: "Baguio" },
		{ name: "Albert", location: "Tagaytay" },
	]);
});

app.get("/comments", (request, response) => {
	response.send([
		{
			name: "Alex",
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum",
		},
		{
			name: "Joseph",
			comment:
				"Vestibulum bibendum, risus id molestie pretium, urna nulla luctus risus, id venenatis velit ex non dolor. Proin vulputate nunc at enim fringilla, vitae tincidunt felis bibendum.",
		},
		{
			name: "Juan",
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, risus id molestie pretium, urna nulla luctus risus, id venenatis velit ex non dolor. Proin vulputate nunc at enim fringilla, vitae tincidunt felis bibendum. Sed massa ipsum, condimentum vitae hendrerit quis, laoreet et nulla.",
		},
		{
			name: "Dela",
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
		},
		{
			name: "Cruz",
			comment:
				"Proin vulputate nunc at enim fringilla, vitae tincidunt felis bibendum. Sed massa ipsum, condimentum vitae hendrerit quis, laoreet et nulla.",
		},
	]);
});

app.get("/movies", (request, response) => {
	response.send([
		{
			name: "Barbie",
			imgUrl: "https://posters.movieposterdb.com/23_06/2023/1517268/l_barbie-movie-poster_3cde3986.jpg",
		},
		{
			name: "Oppenheimer",
			imgUrl: "https://posters.movieposterdb.com/23_06/2023/15398776/l_oppenheimer-movie-poster_a83f1cbb.jpg",
		},
		{
			name: "Spider-Man: Across the Spider-Verse",
			imgUrl: "https://posters.movieposterdb.com/23_06/2022/11290914/l_spider-man-across-the-spider-verse-part-one-movie-poster_37d41ec0.jpg",
		},
		{
			name: "Transformers: Rise of the Beasts",
			imgUrl: "https://posters.movieposterdb.com/23_04/2022/5090568/l_transformers-rise-of-the-beasts-movie-poster_c216a1be.jpg",
		},
		{
			name: "Avengers: Endgame",
			imgUrl: "https://posters.movieposterdb.com/20_05/2019/4154796/l_4154796_2542f70b.jpg",
		},
	]);
});

app.get("/todos", (request, response) => {
	response.send([
		{
			id: 1,
			todo: "Buy groceries for the week.",
		},
		{
			id: 2,
			todo: "Finish writing the report for work.",
		},
		{
			id: 3,
			todo: "Call the plumber to fix the leaking faucet.",
		},
		{
			id: 4,
			todo: "Schedule a dentist appointment.",
		},
		{
			id: 5,
			todo: "Study for the upcoming exam.",
		},
		{
			id: 6,
			todo: "Water the plants in the garden.",
		},
		{
			id: 7,
			todo: "Pay the utility bills before the due date.",
		},
		{
			id: 8,
			todo: "Organize the closet and donate unused clothes.",
		},
		{
			id: 9,
			todo: "search and book a vacation for the summer.",
		},
		{
			id: 10,
			todo: "Attend the yoga class in the evening.",
		},
	]);
});

app.get("/messages", (request, response) => {
	response.send([
		{
			id: 1,
			name: "Alice",
			message: "Hey Michael, how are you doing?",
		},
		{
			id: 2,
			name: "Bob",
			message:
				"Hi Michael, just wanted to remind you about our meeting at 3 PM.",
		},
		{
			id: 3,
			name: "John",
			message:
				"Michael, can you please pick up some groceries on your way home?",
		},
		{
			id: 4,
			name: "Mary",
			message: "Yes, the report is ready. I'll share it with you.",
		},
		{
			id: 5,
			name: "Sarah",
			message: "Me too! Let's plan another movie night soon.",
		},
	]);
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
