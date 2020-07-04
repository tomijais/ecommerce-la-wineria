const fs = require('fs');
const path = require('path');

const controller = {
	index: (req, res) => {
		res.send('Estos son todos los productos!')
	},
};

module.exports = controller;