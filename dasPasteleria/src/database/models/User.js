module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        user_password: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        repeat_password: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        user_name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        avatar: dataTypes.TEXT,
        
    };
    let config = {
        tableName: "users",
        timestamps: false,        
    }
    const User = sequelize.define(alias, cols, config);

        User.associate = function (models) {
        User.belongsTo (models.UserCategory, {
        as: "user_category",
        foreignKey: "category_id"
        })
    }

    return User
};