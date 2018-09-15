var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	})
})

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	if (!ObjectID.isValid(id)) { // Valid id using isValid
		return res.status(404).send(); // 404 - send back empty send
	}
	Todo.findById(id).then((todo) => { // findById
		if (!todo) { // if no todo -
			return res.status(404).send(); // - send back 404 with empty body
		}
		res.send({todo});
	}).catch((e) => {
		res.status(400).send(); // 400 - and send empty body back
	});
});

app.delete('/todos/:id', (req, res) => {
	// get the id
	var id = req.params.id;

	// validate the id -> not valid? return 404
	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	Todo.findByIdAndRemove(id).then((doc) => {
		if(!doc) {
			return res.status(404).send();
		}
		res.send(doc);
	}).catch((error) => {
		res.status(400).send(); // 400 - with empty body
	});
});

app.listen(port, () => {
	console.log(`Started up at port ${port}`);
});


module.exports = {app};



// var newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
// 	text: '  Edit this video  '
// });

// otherTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
// 	console.log('Unable to save', e);
// });



// var user = new User({
// 	email: 'dedekproject@gmail.com    '
// });

// user.save().then((doc) => {
// 	console.log('User saved', doc);
// }, (e) => {
// 	console.log('Unable to save user', e);
// });