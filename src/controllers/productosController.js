const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const productosController = {
	productoAdmin: (req, res) => {
		res.render('producto_admin', {
			productos: productos
		})
	},
	productoCarga: (req, res) => {
		res.render('producto_carga', {
			productos: productos
		})
	}
	
}

module.exports = productosController;