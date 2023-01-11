// Requires:
const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const userLoggedMidleware = require('./middlewares/userLoggedMidleware');
// Middlewares:
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
    session({
        secret: "Es un secreto",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(cookieParser());

app.use(userLoggedMidleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// Rutas:
const rutaMain = require("./routes/main");
const rutaApi = require('./routes/api/apiRoutes')
// CONTROLLER RUTAS
app.use("/", rutaMain);
app.use("/api/", rutaApi)
// LOCAL HOST
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

