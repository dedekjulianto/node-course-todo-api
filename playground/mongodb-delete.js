const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// deleteMany
	// db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((result) => {
	// 	console.log(result);	
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({ name: 'Dedek Julianto'});

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("5b9b3c7ef285d9bb78946868")
	}).then((results) => {
		console.log(JSON.stringify(results, undefined, 2));
	})

	// db.close();
});