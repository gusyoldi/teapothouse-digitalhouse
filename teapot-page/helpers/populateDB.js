const db = require("../database/models");
const path = require("path");
const fs = require("fs");

function populateDB() {
    const products = JSON.parse(
        fs.readFileSync(
            path.resolve(__dirname, "../data/products.json"),
            "utf8"
        )
    );
    const users = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "../data/users.json"), "utf8")
    );

    let categories = {
        pasteleria: 1,
        panaderia: 2,
        chocolateria: 3,
    };

    let shippings1 = {
        "Es un producto delicado, la entrega únicamente será en auto o para retirar desde el local": 1,
        "Se puede realizar cualquier método de entrega": 2,
    };

    db.Category.bulkCreate([
        {
            category: "pasteleria",
        },
        {
            category: "panaderia",
        },
        {
            category: "chocolateria",
        },
    ]);

    db.Shipping.bulkCreate([
        {
            shipping:
                "Es un producto delicado, la entrega únicamente será en auto o para retirar desde el local",
        },
        {
            shipping: "Se puede realizar cualquier método de entrega",
        },
    ]);

    products.forEach((product) => {
        db.Product.create({
            id: product.id,
            product_name: product.name,
            product_description: product.description,
            price: product.precio,
            images: JSON.stringify([product.img1, product.img2, product.img3]),
            tip: product.consejos,
            shipping_id: shippings1[product.entrega],
            category_id: categories[product.category],
        });
    });

    users.forEach((user) => {
        const [firstName, lastName] = user.nombreApellido.split(" ");

        db.User.create({
            id: user.id,
            username: user.usuario,
            first_name: firstName,
            last_name: lastName,
            user_password: user.password,
            birthday: user.nacimiento,
            email: user.email,
            address: user.domicilio,
            phone: user.telefono,
            avatar: user.profile_pic,
        });
    });
}

populateDB();
