const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require("./routes")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const url = 'mongodb+srv://test:test@cluster0.m26zz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
	.connect(url, { useNewUrlParser: true })
	.then(() => {
		console.log('mongo db is connected!')
		app.use("/api", routes) // new

		app.listen(port, () => {
			console.log("Server has started!")
		})
	})
