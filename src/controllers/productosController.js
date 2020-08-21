const fs = require('fs');
const path = require('path');
const multer = require('multer');
let db = require("../database/models");
const { Op } = require("sequelize");
const Product = require("../database/models/Product");


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
		db.Product.findAll({
			include: [
			  {association: "regions"},
			  {association: "types"}
			  ],
			where: {
			  status: 1
			},
			order: [
			  ['id', 'ASC'],
			  ]
		  })
		.then(function (result) {
			
		res.render('producto_admin', {
			productos: result
		})
	})
	},
	productoCrear: (req, res) => {
		db.Product.findAll({
			include: [
			  {association: "regions"},
			  {association: "types"}
			  ],
			where: {
			  status: 1
			},
			order: [
			  ['id', 'ASC'],
			  ]
		  })
		.then(function (result) {
			
		res.render('producto_carga', {
			productos: result
		})
	})
	},
	productoGuardar: (req,res, next) => {
		
		db.Product.create({
			name: req.body.name,
			year: req.body.year,
			bodega: req.body.bodega,
			type_id: req.body.type,
			region_id: req.body.region,
			alcohol: req.body.alcohol,
			description: req.body.description,
			price: req.body.price,
			discount: req.body.discount,
			image: req.files[0].filename,
			stock: req.body.stock,
			status: 1
		  })
		  .then(function(result){
		/*let nuevoProducto = {
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
		*/
		//res.redirect('/admin/producto');
		res.render('index', {
			productos: result
		})
	})
	},
	productoAdminList: (req,res, next) => {
		db.Product.findAll({
			include: [
			  {association: "regions"},
			  {association: "types"}
			  ],
			where: {
			  status: 1
			},
			order: [
			  ['id', 'ASC'],
			  ]
		  })
		.then(function (result) {
		res.render('admin_index', {
			productos: result
		})
	})
	},
	editProduct: function (req, res, next) {
		for(let i = 0; i < productos.length; i++){
			if(productos[i].id == req.params.id) {
				res.render('producto_edit', {	
					elProducto: productos[i]})
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
	},
	deleteProduct: function (req, res, next) {
		for(let i = 0; i < productos.length; i++){
			if(productos[i].id == req.params.id) {
				res.render('producto_delete', {	elProducto: productos[i]})
			}
		}
	},
	saveDeleteProduct: function (req, res) {
		
		let idProductoEliminar = req.params.id;
		let productosNuevos = productos.filter(function(elemento){
			return elemento.id != idProductoEliminar;
		})
		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(productosNuevos));
		res.render('admin_index', {
			productos: productosNuevos
		})

		
		
	}
}

module.exports = productosController;