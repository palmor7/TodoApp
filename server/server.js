var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./model/user');
var {Todo} = require('./model/todo');

var app = express();


app.use(bodyParser.json());


app.post('/todos', (req, res)=>{
	console.log(req.body);
	var todo =new Todo( {
		text: req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	}, (e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res)=>{
	Todo.find().then((todos)=>{
		res.send({todos});
	}, (e)=>{
		res.status(400).send(e);
	});
});

app.listen( 3000, (err, res)=>{
	if(err){
		console.log('Unable to connent to Server', err);
	}else{
		console.log('Listen to port 3000..');
	}
});