module.exports = function(sequelize, dataTypes) {
    let alias = "Region";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(250),
            allowNull: false
        }
    }
    let config = {
        tableName: "regions",
        timestamps: false,
        underscored: true
    }
    
    let Region = sequelize.define(alias, cols, config);

    Region.associate = function(models) {
        Region.hasMany(models.Product, {
            as: "products",
            foreignKey: "region_id"
        })
    }

    return Region;
}