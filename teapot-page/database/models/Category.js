module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: DataTypes.TINYINT(3).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        category: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
    };

    const Category = sequelize.define(alias, cols, { timestamps: false });

    return Category;
};