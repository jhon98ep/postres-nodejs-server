'use strict';
const Postre = require('../models/postreModel')

exports.findAll = function(req, res) {
	Postre.findAll(function(err, postre) {
		if (err)
			res.send(err);
		res.send(postre);
	});
};

exports.create = function(req, res) {
	const new_postre = new Postre(req.body);
	//handles null error
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Postre.create(new_postre, function(err, postre) {
			if (err)
				res.send(err);
			res.json({error:false,message:"postre added successfully!",data:postre});
		});
	}
};

exports.findById = function(req, res) {
	Postre.findById(req.params.id, function(err, postre) {
		if (err)
			res.send(err);
		res.json(postre);
	});
};

exports.update = function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		Postre.update(req.params.id, new Postre(req.body), function(err, postre) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'postre successfully updated' });
		});
	}
};

exports.delete = function(req, res) {
	Postre.delete( req.params.id, function(err, postre) {
		if (err)
			res.send(err);
		res.json({ error:false, message: 'postre successfully deleted' });
	});
};
