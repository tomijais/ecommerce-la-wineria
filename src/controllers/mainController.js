const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	index: (req, res) => {
		//res.send("Esta es la pagina principal!")
		res.render('index', {
			products: products
		});
	},
};

module.exports = controller;
