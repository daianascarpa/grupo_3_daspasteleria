module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        product_name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        product_description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        image: dataTypes.TEXT,
        small_price: dataTypes.FLOAT,
        big_price: dataTypes.FLOAT,
    };
    let config = {
        tableName: "products",
        timestamps: false,        
    }
    const Product = sequelize.define(alias, cols, config);

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (product_categories)
    Product.associate = function (models) {
        Product.belongsTo (models.ProductCategory, {
        as: "product_category",
        foreignKey: "category_id"
        })
    }

    return Product
};