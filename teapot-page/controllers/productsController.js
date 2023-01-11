const { validationResult } = require("express-validator");
const db = require("../database/models");

const productsController = {
    products: (req, res) => {
        res.render("index");
    },
    categories: async (req, res) => {
        try {
            let categoryName = req.params.category;
            let products = await db.Product.findAll({
                include: [
                    {
                        association: "category",
                        where: {
                            category: categoryName,
                        },
                    },
                ],
            });

            let productCategory = products.map((product) => {
                return {
                    id: product.id,
                    name: product.product_name,
                    img1: JSON.parse(product.images)[0],
                    precio: product.price,
                };
            });

            res.status(200).render("products/products", {
                productCategory,
                style: "products.css",
            });
        } catch (err) {
            console.log(err);
        }
    },
    create: (req, res) => {
        res.render("products/productCreate", { style: "register.css" });
    },
    createPOST: async (req, res) => {
        try {
            let errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).render("products/productCreate", {
                    style: "register.css",
                    errors: errors.mapped(),
                    oldData: req.body,
                });
            }

            let { name, description, precio, entrega, consejos, category } = req.body;
            let images = JSON.stringify(
                req.files.map((e) => `/img/${e.filename}`)
            );

            let newProduct = await db.Product.create({
                product_name: name,
                product_description: description,
                price: precio,
                images,
                tip: consejos,
                shipping_id: entrega,
                category_id: category,
            });

            res.redirect("/products/" + newProduct.id);
        } catch (err) {
            console.log(err);
        }
    },
    productDetail: async (req, res) => {
        try {
            let productId = req.params.id;
            let product = await db.Product.findByPk(productId, {
                include: ["shipping"],
            });

            let images = JSON.parse(product.images);

            let producto = {
                id: productId,
                name: product.product_name,
                description: product.product_description,
                precio: product.price,
                img1: images[0],
                img2: images[1],
                img3: images[2],
                entrega: product.shipping.shipping,
                consejos: product.tip,
            };

            res.status(200).render("products/productDetail", {
                style: "productDetail.css",
                producto,
            });
        } catch (err) {
            console.log(err);
        }
    },
    edit: async (req, res) => {
        try {
            let productId = req.params.id;

            let product = await db.Product.findByPk(productId, {
                include: ["category", "shipping"],
            });

            let shipping = await db.Shipping.findAll();
            product.images = JSON.parse(product.images);

            res.status(200).render("products/productEdit.ejs", {
                style: "register.css",
                product,
                shipping,
            });
        } catch (err) {
            console.log(err);
            res.redirect("/");
        }
    },
    editPUT: async (req, res) => {
        try {
            let id = req.params.id;

            let firstImage = req.files.find((e) => e.fieldname == "img1");
            let secondImage = req.files.find((e) => e.fieldname == "img2");
            let thirdImage = req.files.find((e) => e.fieldname == "img3");

            let { name, description, precio, entrega, consejos, category } = req.body;

            let images = await db.Product.findByPk(id, {
                attributes: ["images"],
            });

            let parsedImages = JSON.parse(images.images);

            let newImages = JSON.stringify([
                firstImage ? `/img/${firstImage.filename}` : parsedImages[0],
                secondImage ? `/img/${secondImage.filename}` : parsedImages[1],
                thirdImage ? `/img/${thirdImage.filename}` : parsedImages[2],
            ]);

            let editedProduct = {
                product_name: name,
                product_description: description,
                price: precio,
                images: newImages,
                tip: consejos,
                shipping_id: entrega,
                category_id: category,
            };

            await db.Product.update(editedProduct, {
                where: {
                    id,
                },
            });

            res.redirect("/products/" + id);
        } catch (err) {
            console.log(err);
        }
    },
    delete: async (req, res) => {
        try {
            let id = req.params.id;

            await db.Product.destroy({
                where: {
                    id,
                }
            });

            res.redirect("/products");
        } catch (err) {
            console.log(err);
        }
    },
};

module.exports = productsController;
