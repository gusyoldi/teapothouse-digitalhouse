module.exports = (sequelize, DataTypes) => {
    let alias = "Shipping";
    let cols = {
        id: {
            type: DataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        shipping: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    };
    const Shipping = sequelize.define(alias, cols, { timestamps: false });

    return Shipping;
};