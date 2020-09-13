const db = require('../database/models');

module.exports = {
    get: function(req, res) {
        res.render('cart', {
            productosCart: req.session.cart
        });
    },
    add: async function(req, res) {
        let check = false;

        if(typeof req.session.cart == 'undefined') {
            req.session.cart = []
        }

        for(let i = 0; i < req.session.cart.length; i++) {
            if(req.session.cart[i].id == req.body.id_producto) {
                check = true;
                req.session.cart[i].cantidad += (req.body.cantidad) ? Number(req.body.cantidad) : 1;
            }
        }

        if(!check) {
            
            let producto = await db.Product.findByPk(req.body.id_producto);
            req.session.cart.push({
                ...producto.dataValues,
                cantidad: (req.body.cantidad) ? Number(req.body.cantidad) : 1
            })
        }

        return res.json(req.session.cart);
    },
    delete: function(req, res) {
        let idProducto = req.body.id_producto
        console.log(idProducto)
        let cart = req.session.cart
        let nuevoCart = cart.filter(function(elemento){
            return elemento.id != idProducto;
        })
        
        req.session.cart = nuevoCart
        
        res.render('cart', {
            productosCart: req.session.cart
        });
        
    }
}   
