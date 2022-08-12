module.exports = (sequelize, dataTypes) => {
    let alias = 'UserCategory';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        category_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },        
    };
    let config = {
        tableName: "user_categories",
        timestamps: false,        
    }
    const UserCategory = sequelize.define(alias, cols, config);

        UserCategory.associate = function (models) {
        UserCategory.hasMany (models.User, {
        as: "users",
        foreignKey: "category_id"
        })
    }

    return UserCategory
};