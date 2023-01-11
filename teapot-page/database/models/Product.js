module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        product_description: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        images: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        tip: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        shipping_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        }
    };

    const Product = sequelize.define(alias, cols, { timestamps: false });

    Product.associate = function (models) {
        Product.belongsTo(models.Shipping, {
            as: "shipping",
            foreignKey: "shipping_id",
        });

        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id",
        });
    };

    return Product;
};