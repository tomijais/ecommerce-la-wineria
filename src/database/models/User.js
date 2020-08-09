module.exports = function(sequelize, dataTypes) {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        category: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(500)
        },
        status: {
            type: dataTypes.TINYINT(10).UNSIGNED
        }
    }
    let config = {
        tableName: "users",
        timestamps: false,
        underscored: true
    }
    
    let User = sequelize.define(alias, cols, config);

    

    return User;
}