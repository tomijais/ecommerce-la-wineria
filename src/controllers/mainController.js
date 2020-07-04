const fs = require('fs');
const path = require('path');

const controller = {
	index: (req, res) => {
		res.send("Esta es la pagina principal!")
	},
};

module.exports = controller;
