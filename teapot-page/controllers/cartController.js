const db = require("../database/models");

//const auth = require("../middlewares/authMiddleware");
const cartController = {
    add: (req, res) => {
        if (req.session.cart) {
            if(req.session.cart.find(p =>p.id === req.body.id)){
                req.session.cart.forEach(p=> {
                    if(p.id === req.body.id){
                        p.cantidad = p.cantidad + parseInt(req.body.count);
                    }
                    
                });
            }else{
                req.session.cart = [
                    ...req.session.cart,
                    { id: req.body.id, cantidad: parseInt(req.body.count) },
                ];    
            }
            
        } else {
            req.session.cart = [{ id: req.body.id, cantidad: req.body.count }];
        }
        res.status(200).json({ msg: "Producto agregado al carrito" });
    },
    remove: (req, res) => {
        console.log("Body id: " + req.body.id);
        req.session.cart = req.session.cart.filter(
            (p) => p.id != req.body.id
        );
        res.status(200).json({ msg: "Producto borrado del carrito" });
    },
    list: (req, res) => {
        res.json(req.session.cart);
    },
    empty: (req, res) => {
        req.session.cart = [];
        res.status(200).send("OK");
    },
    count: (req, res) => {
        
        req.session.cart = req.session.cart.map((p) => {

            if (p.id == req.params.productId) {
              
                return { id: p.id, cantidad: p.cantidad + req.params.change };
            }
        });
    },
    cart: async (req, res) => {
        if (!req.session.cart) return;
        let list = [];

        for (const p of req.session.cart) {
            let product = await db.Product.findByPk(p.id);
            let images = await JSON.parse(product.images);
            list.push({
                id: product.id,
                name: product.product_name,
                precio: product.price,
                img: images[0],
                cantidad: p.cantidad,
            });
        }

        res.render("products/productCart.ejs", {
            style: "productCart.css",
            list,
        });
    },
};

module.exports = cartController;
