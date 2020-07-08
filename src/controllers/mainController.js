const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	index: (req, res) => {
		res.render('index', {
			products: products
		});
	},
	productoDetalle: (req, res) => {
		res.render('producto_detalle', {
			products: products
		});
	},
	productoCarga: (req, res) => {
		res.render('producto_carga', {
			products: products
		});
	},
	registro: (req, res) => {
		res.render('registro', {
			products: products
		});
	},
	carrito: (req, res) => {
		res.render('carrito', {
			products: products
		});
	}
};

module.exports = controller;
