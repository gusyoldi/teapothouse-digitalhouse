const db = require("../../database/models");

const productsApiController = {
    list: async (req, res) => {
        const products = await db.Product.findAndCountAll({
            include: ["category"],
        });

        const categroryArr = products["rows"].map(
            (e) => (e.category = e.category.category)
        );
        let categories = categroryArr.reduce((prev, curr) => {
            prev[curr] = (prev[curr] || 0) + 1;
            return prev;
        }, {});

        newProducts = {
            count: products["count"],
            countByCategory: categories,
            products: products["rows"],
        };

        res.json(newProducts);
    },
    detail: async (req, res) => {
        const relationships = ["category", "shipping"]

        const product = await db.Product.findByPk(req.params.id, {
            include: relationships
        })

        const helperFn = (pro) => {
            const relations = relationships.map(e => {
                return pro[e].dataValues
            })
            return relations
        }
        
        const firstImage = JSON.parse(product.images)[0]
        const imageUrl = `http://localhost:3030/api${JSON.parse(product.images)[0]}`
        
        // Habria que preguntar si la estructura armada es la que pide el PDF

        const newProduct = {
            ...product.dataValues,
            relations: helperFn(product),
            imageUrl,
            firstImage
        }

        delete newProduct.category
        delete newProduct.shipping

        res.json(newProduct)
    }
};

module.exports = productsApiController;
