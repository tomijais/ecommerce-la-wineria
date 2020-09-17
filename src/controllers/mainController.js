const fs = require("fs");
const path = require("path");
const multer = require("multer");
let db = require("../database/models");
const { Op } = require("sequelize");


//const productosFilePath = path.join(__dirname, '../data/productsDataBase.json');
//const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const controller = {
  index: (req, res) => {
    db.Product.findAll({
      include: [{ association: "regions" }, { association: "types" }],
      where: {
        status: 1,
      },
      order: [["id", "ASC"]],
    }).then(function (result) {
      res.render("index", {
        productos: result,
        user: req.session.user ? req.session.user : "",
      });
    });
  },
  filtro: (req, res) => {
    db.Product.findAll({
      include: [{ association: "regions" }, { association: "types" }],
      where: {
        status: 1,
        type_id: req.params.id,
      },
      order: [["id", "ASC"]],
    }).then(function (result) {
      res.render("index", {
        productos: result,
        user: req.session.user ? req.session.user : "",
      });
    });
  },
  productoDetalle: (req, res) => {
    db.Product.findAll({
      include: [{ association: "regions" }, { association: "types" }],
      where: {
        status: 1,
      },
      order: [["id", "ASC"]],
    }).then(function (productos) {
      let productoSeleccionado = req.params.id;
      /*let productoRender = productos.filter(function(elemento){
			return elemento.id == productoSeleccionado;
		})*/

      res.render("producto_detalle", {
        productoRender: productoSeleccionado,
        productos: productos,
      });
    });
  },
  /*carrito: (req, res) => {
    db.Product.findAll({
      include: [{ association: "regions" }, { association: "types" }],
      where: {
        status: 1,
      },
      order: [["id", "ASC"]],
    }).then(function (result) {
      res.render("carrito", {
        productos: result,
      });
    });
  },*/
  exit: (req, res) => {
    req.session.destroy();
    res.cookie("remember", "", { maxAge: -1 });
    res.redirect("/");
  },
};

module.exports = controller;
