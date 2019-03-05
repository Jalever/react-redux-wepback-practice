const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());




var router = express.Router();
router.get("/", function(req, res) {
	res.json({message: "You just send a GET request!"});
});

router.get("/cart", function(req, res) {
	res.json({message: "You just send a GET request for cart!"});
});

router.post("/", function(req, res) {
	res.json({message: "a POST request? nice"});
});

router.put("/", function(req, res) {
	res.json({message: "I don't see a lot of PUT requests anymore"});
});

router.delete("/", function(req, res) {
	res.json({message: "oh my, a DELETE??"});
});


app.use("/api", router);



app.listen(port, () => {
	console.log(`Example app is listening on port ${port}!`);
});

