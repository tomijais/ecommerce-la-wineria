module.exports = function(sequelize, dataTypes) {
    let alias = "Venta";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: dataTypes.DECIMAL(10, 2).UNSIGNED,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        tableName: "ventas",
        timestamps: false,
        underscored: true
    }
    
    let Venta = sequelize.define(alias, cols, config);

    Venta.associate = function(models) {
        Venta.belongsTo(models.User, {
            as: "usuarios",
            foreignKey: "user_id"
        })
    }

    return Venta;
}