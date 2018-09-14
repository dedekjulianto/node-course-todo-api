const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected successfully to MongoDB server');

	db.collection('Users').insertOne({
		name: 'Dedek Julianto',
		age: 25, 
		location: 'Jakarta Selatan' 
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert user', err)
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	db.close();
});

// MongoClient.connect(url, (err, db) => {
// 	// assert.equal(err, null);
// 	if (err) {
// 		return console.log('Unable to connect to MongoDB server');
// 	}
// 	console.log('Connected successfully to server');

// 	// const db = client.db(dbName);

// 	db.collection('Todos').insertOne({
// 		text: 'Something to do',
// 		completed: true
// 	}, (err, result) => {
// 		// assert.equal(err, null);
// 		// assert.equal(1, result.result.n);
// 		console.log(result.ops.length);
// 		console.log(JSON.stringify(result.ops, undefined, 2));
// 	});

// 	db.close();
// })




// Connect using MongoClient
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
// 	if (err) {
// 		return console.log('Unable to connect to MongoDB server');
// 	}
// 	console.log('Connected to MongoDB server');

// 	db.collection('Todos').insertOne({
// 		text: 'Something to do',
// 		completed: false 
// 	}, (err, result) => {
// 		if (err) {
// 			return console.log('Unable to insert todo', err);
// 		}

// 		console.log(JSON.stringify(result.ops, undefined, 2));

// 	});

// 	db.close();
// });