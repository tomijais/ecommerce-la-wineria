module.exports = function(sequelize, dataTypes) {
    let alias = "ProductVenta";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        venta_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        cantidad: {
            type: dataTypes.INTEGER(11)
        }
    }
    let config = {
        tableName: "products_ventas",
        timestamps: false,
        underscored: true
    }
    
    let ProductVenta = sequelize.define(alias, cols, config);

    ProductVenta.associate = function(models) {
        ProductVenta.belongsTo(models.Product, {
            as: "productos",
            foreignKey: "product_id"
        });
        ProductVenta.belongsTo(models.Venta, {
            as: "ventas",
            foreignKey: "ventas_id",
            
        });
        ProductVenta.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "user_id",
            
        })
    }

    return ProductVenta;
}