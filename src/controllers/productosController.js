const fs = require("fs");
const path = require("path");
const multer = require("multer");
let db = require("../database/models");
const { Op } = require("sequelize");


const productosController = {
  productoAdmin: (req, res, next) => {
    db.Product.findAll({
      include: [{ association: "regions" }, { association: "types" }],
      where: {
        status: 1,
        stock: { [Op.gt]: 0 },
      },
      order: [["id", "ASC"]],
    }).then(function (result) {
      res.render("producto_admin", {
        productos: result,
      });
    });
  },
  productoCrear: (req, res, next) => {
    db.Product.findAll({
      include: [{ association: "regions" }, { association: "types" }],
      where: {
        status: 1,
      },
      order: [["id", "ASC"]],
    }).then(function (result) {
      res.render("producto_carga", {
        productos: result,
      });
    });
  },
  productoGuardar: (req, res, next) => {
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
      status: 1,
    }).then(function (response) {
      db.Product.findAll({
        include: [{ association: "regions" }, { association: "types" }],
        where: {
          status: 1,
        },
        order: [["id", "ASC"]],
      }).then(function (result) {
      res.render("index", {
        productos: result,
      });
    });
  })
  },
  productoAdminList: (req, res, next) => {
    db.Product.findAll({
      include: [{ association: "regions" }, { association: "types" }],
      where: {
        status: 1,
      },
      order: [["id", "ASC"]],
    }).then(function (result) {
      res.render("admin_index", {
        productos: result,
      });
    });
  },
  editProduct: function (req, res, next) {
    db.Product.findByPk(req.params.id, {
      include: [{ association: "types" }, { association: "regions" }],
    }).then(function (product) {
      res.render("producto_edit", {
        elProducto: product,
      });
    });
  },
  saveEditProduct: function (req, res, next) {
    if (req.files != undefined) {
      db.Product.update(
        {
          name: req.body.name,
          year: req.body.year,
          bodega: req.body.bodega,
          type_id: req.body.type,
          region_id: req.body.region,
          alcohol: req.body.alcohol,
          description: req.body.description,
          price: req.body.price,
          discount: req.body.discount,
          image:
            req.files[0] != undefined
              ? req.files[0].filename
              : req.body.image,
          stock: req.body.stock,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      ).then(function (response) {
        db.Product.findAll({
          include: [{ association: "regions" }, { association: "types" }],
          where: {
            status: 1,
          },
          order: [["id", "ASC"]],
        }).then(function (result) {
          res.render("index", {
            productos: result,
          });
        });
      });
    } else {
      db.Product.update(
        {
          name: req.body.name,
          year: req.body.year,
          bodega: req.body.bodega,
          type_id: req.body.type,
          region_id: req.body.region,
          alcohol: req.body.alcohol,
          description: req.body.description,
          price: req.body.price,
          discount: req.body.discount,
          stock: req.body.stock,
        },
        {
          where: {
            id: req.params.id
          },
        }
      )
      .then(function (response) {
        db.Product.findAll({
          include: [{ association: "regions" }, { association: "types" }],
          where: {
            status: 1,
          },
          order: [["id", "ASC"]],
        }).then(function (result) {
        res.render("index", {
          productos: result,
        })
      })
    })
    }
  },
  deleteProduct: function (req, res, next) {
    db.Product.findByPk(req.params.id).then(function (product) {
      res.render("producto_delete", {
        elProducto: product,
      });
    });
  },

  saveDeleteProduct: function (req, res, next) {
    db.Product.update(
      {
        status: 0,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/admin/productos");
  },
  verEliminados: (req, res, next) => {
    db.Product.findAll({
      include: [{ association: "regions" }, { association: "types" }],
      where: {
        status: 0,
      },
      order: [["id", "ASC"]],
    }).then(function (result) {
      res.render("producto_recuperar", {
        productos: result,
      });
    });
  },
  recuperarEliminados: (req, res, next) => {
  db.Product.update(
    {
      status: 1,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.redirect("/admin/productos");
  },
  api: (req,res) => {
    db.Product.findAll({
      include: [{ association: "regions" }, { association: "types" }],
      where: {
        status: 1,
      },
      order: [["id", "ASC"]],
    }).then(function (result) {
      res.json(result);
    });
  }
};

module.exports = productosController;
