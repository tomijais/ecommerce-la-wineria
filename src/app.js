// ************ Require's ************
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");

// ************ Rutas ************
const mainRouter = require("./routes/main");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");

const rememberCookie = require("./middlewares/rememberCookie.js");

// ************ Middlewares - (No tocar) ************
app.use(express.static(path.join(__dirname, "../public"))); // Necesario para los archivos estáticos en el folder /public

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Necesario para leer los JSON

app.use(cookieParser());
app.use(session({ secret: "May the force be with you!" }));
app.use(rememberCookie);

app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE


app.use(function(req, res, next) {
  if (req.session.user) {
    res.locals.localUser = req.session.user;
    if (req.session.user.category === 1) {
      res.locals.localAdmin = req.session.user;
    }
  }








  next();
});

// ************ Template Engine - (No tocar) ************
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Define la ubicación de la carpeta de las Vistas

// ************ Sistema de Rutas ************
app.use("/", mainRouter);
app.use("/users", usersRouter);
app.use("/admin", productsRouter);
app.use("/cart", cartRouter);

// ************ Arrancando el servidor - (No tocar) ************
app.listen(3000, () => {
  console.log("El servidor está corriendo en el puerto 3000");
});

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => {
  res.status(404).render("error404");
});

// ************ exports app - dont'touch ************
module.exports = app;
