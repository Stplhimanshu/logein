const express = require("express")
const Post = require("./models/Post") // new
const router = express.Router()


// Get all posts

router.get('/users', function (req, res) {
	console.log(req.title)
	Post.find({}, function (err, users) {
		if (err) return res.status(500).send("There was a problem finding the users."); 
		res.status(200).send(users);
	});
});

router.post("/postdata", async (req, res) => {
	var postData = Post.create({
		title: req.query.title,
		content: req.query.content
	},
		console.log(postData),
		function (err, postData) {
			if (err)
				return res.status(500).send('Opps! an error occurs in post api');
			res.status(200).send(postData)
		})
})

module.exports = router