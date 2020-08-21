module.exports = function(sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        year: {
            type: dataTypes.STRING(4),
            allowNull: false
        },
        bodega: {
            type: dataTypes.STRING(250),
            allowNull: false,
            
        },
        type_id: {
            type: dataTypes.INTEGER(10)
        },
        region_id: {
            type: dataTypes.INTEGER(10)
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(11)
        },
        alcohol: {
            type: dataTypes.INTEGER(11)
        },
        description: {
            type: dataTypes.STRING(1000),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(250)
        },
        stock: {
            type: dataTypes.INTEGER(11)
        },
        status: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        tableName: "products",
        timestamps: false,
        underscored: true
    }
    
    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Type, {
            as: "types",
            foreignKey: "type_id"
        });
        Product.belongsTo(models.Region, {
            as: "regions",
            foreignKey: "region_id",
            
        })
    }

    return Product;
}