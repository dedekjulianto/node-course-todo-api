const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos')
	// 	.find()
	// 	.toArray()
	// 	.then((docs) => {
	// 		console.log('Todos');
	// 		console.log(JSON.stringify(docs, undefined, 2));
	// 	}, (err) => {
	// 		console.log('Unable to fetch todos', err);
	// 	})

	// db.collection('Todos')
	// 	.find()
	// 	.count()
	// 	.then((count) => {
	// 		console.log(`Todos count : ${count}`);
	// 	}, (err) => {
	// 		console.log('Unable to fetch todos', err);
	// 	})

	db.collection('Users')
		.find({
			name: "Dedek Julianto"
		})
		.toArray()
		.then((docs) => {
			console.log('Users');
			console.log(JSON.stringify(docs, undefined, 2));
		}, (err) => {
			console.log('Unable to fetch todos', err);
		})
	// db.close();
});