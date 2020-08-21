module.exports = function(sequelize, dataTypes) {
    let alias = "Type";
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
        tableName: "types",
        timestamps: false,
        underscored: true
    }
    
    let Type = sequelize.define(alias, cols, config);
    
    Type.associate = function(models) {
        Type.hasMany(models.Product, {
            as: "products",
            foreignKey: "type_id"
        })
    }
    

    return Type;
}