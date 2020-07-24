const fs = require('fs');
const path = require('path');
const multer = require('multer');
const productosFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));


let ultimoId = function(array) {
	let contador = array[0].id;
	for(let i = 0; i < array.length; i++) {
		if(array[i].id > contador) {
			contador = array[i].id;
		}
	}
	return contador
}

const productosController = {
	productoAdmin: (req, res) => {
		res.render('producto_admin', {
			productos: productos
		})
	},
	productoCrear: (req, res) => {
		res.render('producto_carga', {
			productos: productos
		})
	},
	productoGuardar: (req,res, next) => {
		let nuevoProducto = {
			id: ultimoId(productos) + 1,
			name: req.body.nombreProducto,
			year: req.body.anioProducto,
			bodega: req.body.bodegaProducto,
			type: req.body.tipoProducto,
			region: req.body.regionProducto,
			alcohol: req.body.graduacionProducto,
			description: req.body.descripcionProducto,
			price: req.body.precioProducto,
			discount: req.body.descuentoProducto,
			image: req.files[0].filename,
			stock: req.body.stockProducto,		
		};
		productos.push(nuevoProducto);
		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(productos));
		res.redirect('/admin/producto');
	},
	productoIndex: (req,res, next) => {
		res.render('admin_index', {
			productos: productos
		})
	},
	editProduct: function (req, res, next) {
		for(let i = 0; i < productos.length; i++){
			if(productos[i].id == req.params.id) {
				res.render('producto_edit', {	elProducto: productos[i]})
			}
		}
	},
	saveEditProduct: function (req, res) {
		
		let productoEditado = {
			id: req.params.id,
      ...req.body
		}
		for(let i = 0; i < productos.length; i++){
			if (productos[i].id == productoEditado.id) {
				productos[i] = productoEditado
				fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(productos));
        res.redirect(`/producto/detalle/${productoEditado.id}`)
			}
		}
	}
}

module.exports = productosController;