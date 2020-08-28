module.exports = function(sequelize, dataTypes) {
    let alias = "UserCategory";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    }
    let config = {
        tableName: "user_category",
        timestamps: false,
        underscored: true
    }
    
    let UserCategory = sequelize.define(alias, cols, config);
    
    

    return UserCategory;
}