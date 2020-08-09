const fs = require('fs');
const path = require('path');
const productosFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const controller = {
	index: (req, res) => {
		res.render('index', {
			productos: productos
		});
	},
	productoDetalle: (req, res) => {
		let productoSeleccionado = req.params.id
		let productoRender = productos.filter(function(elemento){
			return elemento.id == productoSeleccionado;
		})
		res.render('producto_detalle', {
			productoRender: productoSeleccionado,
			productos: productos
		})
	},	
	carrito: (req, res) => {
		res.render('carrito', {
			productos: productos
		});
	},
	exit: (req, res) => {
		req.session.destroy();
		res.redirect('/')
	}
};

module.exports = controller;
