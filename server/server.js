var express = require("express"),
	app = express(),
	bodyParser  = require("body-parser"),
	router = express.Router(),
	mongodb = require('mongodb');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('/', function(req, res) {
	res.send("Server Ok!");
});

router.get('/hotels', function(req, res) {
	console.log(req.query);
	var filter = {};
	if (req.query['name']) 
		filter['name'] = new RegExp(req.query['name'], 'i');
	if (req.query['stars']) 
		filter['stars'] = parseInt(req.query['stars']);
	if (req.query['priceMin'] || req.query['priceMax']) 
	{
		filter['price'] = {};
		if (req.query['priceMin'])
			filter['price'].$gte = parseInt(req.query['priceMin']);
		if (req.query['priceMax'])
			filter['price']['$lte'] = parseInt(req.query['priceMax']);
	}
	console.log(filter);

	var mongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017';
	mongoClient.connect(url, function(err, client) {
		if (err)
			console.log('Unable connect to server');
		else
			console.log('Connection Established');

		var db = client.db('almundo');
		var collection = db.collection('hotels');
		collection.find(filter).toArray(function(err, documents) {
			if (err)
				res.send(err);
			else if (documents.length)
				res.send(documents);
			else
				res.send('No hay hoteles');
			client.close();
		});
	});
});

app.use(router);

app.listen(3000, function() {
	console.log("Node server running on http://localhost:3000");
});